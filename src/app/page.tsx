'use client';

import { CardList } from '@/components/card-list';
import { SearchInput } from '@/components/search-input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cardSets } from '@/lib/data';
import { promos } from '@/lib/data/promos';
import { UserCard } from '@prisma/client';
import { useState } from 'react';

export default function HomePage() {
  const userCards: UserCard[] = [];
  const [search, setSearch] = useState('');

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
            <CardList
              cards={cardSet.cards}
              userCards={userCards}
              search={search}
            />
          </TabsContent>
        ))}
        <TabsContent value="Promos">
          <CardList cards={promos} userCards={userCards} search={search} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
