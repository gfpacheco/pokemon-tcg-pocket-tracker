import { currentUser } from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// POST handler to add or remove multiple cards from user's collection
export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();

    // If user is not authenticated, return unauthorized
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = user.id;

    const cardUpdates = await request.json();

    // Validate input format
    if (!cardUpdates || typeof cardUpdates !== 'object') {
      return NextResponse.json(
        {
          error:
            'Request body must be an object with card IDs as keys and boolean values',
        },
        { status: 400 },
      );
    }

    // Prepare arrays for batch operations
    const cardsToAdd = [];
    const cardsToRemove = [];

    // Sort cards into add or remove arrays
    for (const [cardId, owned] of Object.entries(cardUpdates)) {
      if (owned === true) {
        cardsToAdd.push(cardId);
      } else if (owned === false) {
        cardsToRemove.push(cardId);
      }
    }

    // Batch operations for better performance
    const operations = [];

    // Add cards in a single transaction if there are any to add
    if (cardsToAdd.length > 0) {
      operations.push(
        prisma.userCard.createMany({
          data: cardsToAdd.map((cardId) => ({
            userId,
            cardId,
          })),
          skipDuplicates: true, // Skip if the combination already exists
        }),
      );
    }

    // Remove cards in a single transaction if there are any to remove
    if (cardsToRemove.length > 0) {
      operations.push(
        prisma.userCard.deleteMany({
          where: {
            userId,
            cardId: {
              in: cardsToRemove,
            },
          },
        }),
      );
    }

    // Execute all operations
    await Promise.all(operations);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error updating card collection:', error);
    return NextResponse.json(
      { error: 'Failed to update card collection' },
      { status: 500 },
    );
  }
}

// GET handler to fetch all cards owned by a user
export async function GET() {
  try {
    const user = await currentUser();

    // If user is not authenticated, return unauthorized
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = user.id;

    // Get all cards owned by the user
    const userCards = await prisma.userCard.findMany({
      where: {
        userId,
      },
    });

    const cardsOwned = userCards.reduce<Record<string, boolean>>(
      (acc, card) => {
        acc[card.cardId] = true;
        return acc;
      },
      {},
    );

    return NextResponse.json(cardsOwned, { status: 200 });
  } catch (error) {
    console.error('Error fetching user cards:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user cards' },
      { status: 500 },
    );
  }
}
