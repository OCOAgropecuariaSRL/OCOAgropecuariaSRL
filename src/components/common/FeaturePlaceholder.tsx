import { Construction } from 'lucide-react';

import { Card } from '@/components/ui/Card';

interface FeaturePlaceholderProps {
  title: string;
  description: string;
  upcoming?: string[];
}

/**
 * Pantalla estándar para módulos planificados.
 * Se reemplaza por la implementación real cuando el requerimiento se desarrolla.
 */
export function FeaturePlaceholder({ title, description, upcoming = [] }: FeaturePlaceholderProps) {
  return (
    <Card>
      <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-amber-100">
          <Construction className="size-7 text-amber-600" />
        </div>
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="max-w-xl text-sm text-muted-foreground">{description}</p>

        {upcoming.length > 0 && (
          <ul className="mt-2 w-full max-w-md space-y-2 text-left text-sm">
            {upcoming.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 p-2"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}