import { SignOutButton } from '@clerk/nextjs';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignOutButton />
    </div>
  );
}
