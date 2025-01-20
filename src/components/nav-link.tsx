'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export type NavLinkProps = React.ComponentPropsWithoutRef<typeof Link>;

export function NavLink({ className, href, ...rest }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      className={twMerge(
        'px-2 pt-0.5 flex items-center text-sm font-semibold border-b-2 border-transparent',
        pathname === href ? 'border-black' : 'text-muted-foreground',
        className,
      )}
      href={href}
      {...rest}
    />
  );
}
