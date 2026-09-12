import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
}

/**
 * Logo oficial de OCO Agropecuaria SRL.
 * Sirve la imagen `/logo-oco.png` desde la carpeta `public/`
 * (en producción queda en la raíz del build). Se usa `object-contain`
 * para respetar la proporción original de la imagen (891×1024).
 */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <img
      src="/logo-oco.png"
      alt="OCO Agro SRL"
      draggable={false}
      className={cn('object-contain', className)}
    />
  );
}

