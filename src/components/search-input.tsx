import { Search } from 'lucide-react';
import { Input } from './ui/input';

export type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="relative w-full md:max-w-xs">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        type="search"
        placeholder="Search..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="pl-9"
      />
    </div>
  );
}
