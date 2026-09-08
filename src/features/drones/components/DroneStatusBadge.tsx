import { Badge } from '@/components/ui/Badge';

import { DRONE_STATUS_LABELS, type DroneStatus } from '../types';

const STATUS_VARIANT: Record<DroneStatus, 'default' | 'secondary' | 'warning' | 'destructive' | 'outline'> =
  {
    activo: 'default',
    en_mision: 'warning',
    mantenimiento: 'outline',
    inactivo: 'destructive',
  };

interface DroneStatusBadgeProps {
  status: DroneStatus;
}

export function DroneStatusBadge({ status }: DroneStatusBadgeProps) {
  return <Badge variant={STATUS_VARIANT[status]}>{DRONE_STATUS_LABELS[status]}</Badge>;
}