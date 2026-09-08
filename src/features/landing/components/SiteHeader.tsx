import { useEffect, useState } from 'react';
import { Menu, Plane, X } from 'lucide-react';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

import { brandName, landingAnchors, navItems } from '../data/landingData';

/**
 * Header fijo con efecto "transparente → glass" al hacer scroll.
 * Sobre el hero queda totalmente transparente; al scrollear adquiere
 * fondo esmerilado y borde para mantener la lectura.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href={landingAnchors.inicio} className="flex items-center gap-2.5" onClick={close}>
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
            <Plane className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight">
              {brandName}
            </span>
            <span className="block text-[11px] text-muted-foreground">Fumigación con drones</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href={landingAnchors.contactanos} className={buttonVariants()}>
            Cotiza ahora
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="rounded-md p-2 text-foreground transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href={landingAnchors.contactanos}
              onClick={close}
              className={cn(buttonVariants(), 'mt-2')}
            >
              Cotiza ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
