import { Loader2 } from 'lucide-react';

export default function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Cargando aplicación"
      className="flex h-[60vh] w-full items-center justify-center"
    >
      <Loader2 className="size-8 animate-spin text-primary" />
    </div>
  );
}