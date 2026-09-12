import { BrandLogo } from '@/components/common/BrandLogo';

import { brandFullName, brandName, navItems } from '../data/landingData';

export default function LandingFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row md:px-6">
        <div className="flex items-center gap-2.5">
          <BrandLogo className="size-10 shrink-0 drop-shadow-md" />
          <div className="leading-tight">
            <p className="text-sm font-bold">{brandName}</p>
            <p className="text-xs text-muted-foreground">Fumigación y pulverización con drones</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {brandFullName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
