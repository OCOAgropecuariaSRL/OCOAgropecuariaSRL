import { Cpu, FlaskConical, HardHat, LayoutDashboard, ListTodo, Map, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { BrandLogo } from '@/components/common/BrandLogo';
import { appRoutes as R } from '@/app/routes';
import { cn } from '@/lib/utils';

const navItems = [
  { to: R.dashboard, label: 'Dashboard', icon: LayoutDashboard },
  { to: R.drones, label: 'Drones', icon: Cpu },
  { to: R.campos, label: 'Campos', icon: Map },
  { to: R.misiones, label: 'Misiones', icon: ListTodo },
  { to: R.productos, label: 'Productos', icon: FlaskConical },
  { to: R.operadores, label: 'Operadores', icon: HardHat },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay solo visible en mobile cuando el drawer está abierto */}
      {open && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-card transition-transform duration-200 lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2.5">
            <BrandLogo className="size-9 shrink-0" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">OCO Agropecuaria SRL</p>
              <p className="text-xs text-muted-foreground">Drones & Pulverización</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === R.dashboard}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )
              }
            >
              <Icon className="size-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 border-t border-border p-4">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
            OP
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-sm font-medium">Operador</p>
            <p className="truncate text-xs text-muted-foreground">Sin sesión · Mock</p>
          </div>
        </div>
      </aside>
    </>
  );
}
