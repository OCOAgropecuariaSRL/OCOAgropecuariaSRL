import { Link } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';

import { appRoutes as R } from '@/app/routes';
import { buttonVariants } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function NotFoundPage() {
  return (
    <Card>
      <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-muted">
          <FileQuestion className="size-7 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight">Página no encontrada</h2>
        <p className="max-w-md text-sm text-muted-foreground">
          La dirección que buscás no existe en este sitio.
        </p>
        <Link to={R.home} className={buttonVariants()}>
          Volver al inicio
        </Link>
      </div>
    </Card>
  );
}