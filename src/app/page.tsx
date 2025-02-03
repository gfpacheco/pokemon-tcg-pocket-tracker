import { CollectionSummary } from '@/components/collection-summary';
import { PacksSummary } from '@/components/packs-summary';

export default function HomePage() {
  return (
    <div className="container px-4 py-8 flex flex-col gap-4">
      <CollectionSummary />
      <PacksSummary />
    </div>
  );
}
