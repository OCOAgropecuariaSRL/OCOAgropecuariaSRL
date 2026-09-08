import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Topbar from './Topbar';

/**
 * Layout principal de la SPA: sidebar navegable + topbar + área de contenido.
 * Los feature pages se renderizan a través del Outlet.
 */
export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="mx-auto w-full max-w-6xl flex-1 p-4 md:p-6 xl:p-8">
          <Outlet />
        </main>

        <footer className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground md:px-6">
          © {new Date().getFullYear()} OCO Agropecuaria SRL · Agricultura de precisión
        </footer>
      </div>
    </div>
  );
}
