import { generateId, sleep } from '@/lib/utils';

import { MOCK_DRONES } from '../data/mockDrones';
import type { Drone, DroneInput } from '../types';

/**
 * Servicio de drones.
 *
 * MODO ACTUAL: base de datos en memoria (mock).
 * El día que exista la API, solo hay que reemplazar el cuerpo de cada método
 * por una llamada a httpClient, p.ej:
 *   const rows = await httpClient.get<Drone[]>('/drones');
 */
const db: Drone[] = MOCK_DRONES.map((drone) => ({ ...drone }));

export const dronesService = {
  async getAll(): Promise<Drone[]> {
    await sleep(450);
    return db.map((drone) => ({ ...drone }));
  },

  async getById(id: string): Promise<Drone> {
    await sleep(250);
    const drone = db.find((item) => item.id === id);
    if (!drone) {
      throw new Error(`Drone ${id} no encontrado.`);
    }
    return { ...drone };
  },

  async create(input: DroneInput): Promise<Drone> {
    await sleep(400);
    const now = new Date().toISOString();
    const drone: Drone = {
      ...input,
      id: generateId('drn'),
      horasVuelo: 0,
      createdAt: now,
      updatedAt: now,
    };
    db.unshift(drone);
    return { ...drone };
  },

  async update(id: string, input: Partial<DroneInput>): Promise<Drone> {
    await sleep(400);
    const index = db.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error(`Drone ${id} no encontrado.`);
    }
    const updated: Drone = {
      ...db[index],
      ...input,
      updatedAt: new Date().toISOString(),
    };
    db[index] = updated;
    return { ...updated };
  },

  async remove(id: string): Promise<void> {
    await sleep(350);
    const index = db.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error(`Drone ${id} no encontrado.`);
    }
    db.splice(index, 1);
  },
};