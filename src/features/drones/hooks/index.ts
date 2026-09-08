import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { dronesService } from '../api/dronesService';
import type { Drone, DroneInput } from '../types';

/** Claves de caché centralizadas de la feature drones. */
export const droneKeys = {
  all: ['drones'] as const,
  detail: (id: string) => ['drones', id] as const,
};

export function useDrones() {
  return useQuery({
    queryKey: droneKeys.all,
    queryFn: () => dronesService.getAll(),
  });
}

export function useDrone(id: string | undefined) {
  return useQuery({
    queryKey: droneKeys.detail(id ?? ''),
    queryFn: () => dronesService.getById(id as string),
    enabled: Boolean(id),
  });
}

export function useCreateDrone() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: DroneInput) => dronesService.create(input),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: droneKeys.all });
    },
  });
}

export function useUpdateDrone() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: Partial<DroneInput> }) =>
      dronesService.update(id, input),
    onSuccess: (_drone, { id }) => {
      void queryClient.invalidateQueries({ queryKey: droneKeys.all });
      void queryClient.invalidateQueries({ queryKey: droneKeys.detail(id) });
    },
  });
}

export function useDeleteDrone() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => dronesService.remove(id),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: droneKeys.all });
    },
  });
}

export type { Drone, DroneInput };