import { BatteryMedium, Clock3, Droplets, Plane } from 'lucide-react';

import { fmtNumber } from './droneFormatters';
import type { Drone } from '../types';

interface DroneStatsProps {
  drone: Drone;
}

/** Mini-métricas técnicas de un drone (capacidad, autonomía, baterías). */
export function DroneStats({ drone }: DroneStatsProps) {
  const stats = [
    { icon: Droplets, label: 'Tanque', value: `${fmtNumber(drone.capacidadLitros)} L` },
    { icon: Clock3, label: 'Autonomía', value: `${drone.autonomiaMin} min` },
    { icon: BatteryMedium, label: 'Baterías', value: String(drone.baterias) },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center gap-1 rounded-lg border border-border bg-muted/30 p-3 text-center"
        >
          <Icon className="size-4 text-primary" />
          <span className="text-sm font-semibold">{value}</span>
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-1 rounded-lg border border-border bg-muted/30 p-3 text-center">
        <Plane className="size-4 text-primary" />
        <span className="text-sm font-semibold">{fmtNumber(drone.horasVuelo)} h</span>
        <span className="text-xs text-muted-foreground">Horas de vuelo</span>
      </div>
    </div>
  );
}