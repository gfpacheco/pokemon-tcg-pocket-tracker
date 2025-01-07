'use client';

import { CardList } from '@/components/card-list';
import { CardSummary } from '@/components/card-summary';
import { SearchInput } from '@/components/search-input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cardSets } from '@/lib/data';
import { promos } from '@/lib/data/promos';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'cardsOwned';

export default function HomePage() {
  const [cardsOwned, setCardsOwned] = useState<string[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const cardsOwned = localStorage.getItem(STORAGE_KEY);
    if (cardsOwned) {
      setCardsOwned(JSON.parse(cardsOwned));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cardsOwned));
  }, [cardsOwned]);

  function handleCardOwnedChange(cardId: string, isOwned: boolean) {
    setCardsOwned((prev) => {
      if (isOwned) {
        return [...prev, cardId];
      }
      return prev.filter((id) => id !== cardId);
    });
  }

  return (
    <div className="container px-4 py-8 flex flex-col gap-8">
      <Tabs defaultValue={cardSets[0].name}>
        <div className="flex items-center justify-between py-4">
          <TabsList>
            {cardSets.map((cardSet) => (
              <TabsTrigger key={cardSet.name} value={cardSet.name}>
                {cardSet.name}
              </TabsTrigger>
            ))}
            <TabsTrigger value="Promos">Promos</TabsTrigger>
          </TabsList>
          <SearchInput value={search} onChange={setSearch} />
        </div>
        {cardSets.map((cardSet) => (
          <TabsContent key={cardSet.name} value={cardSet.name}>
            <div className="flex flex-col gap-4">
              <CardSummary
                set={cardSet}
                cards={cardSet.cards}
                cardsOwned={cardsOwned}
              />
              <CardList
                search={search}
                cards={cardSet.cards}
                cardsOwned={cardsOwned}
                onCardOwnedChange={handleCardOwnedChange}
              />
            </div>
          </TabsContent>
        ))}
        <TabsContent value="Promos">
          <div className="flex flex-col gap-4">
            <CardSummary cards={promos} cardsOwned={cardsOwned} />
            <CardList
              search={search}
              cards={promos}
              cardsOwned={cardsOwned}
              onCardOwnedChange={handleCardOwnedChange}
              isPromos
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
