import { Client } from 'src/app/shared/models/client.model';

export const fakeClients: Client[] = [
  new Client({
    id: 'lkjsdf',
    name: 'RS2i',
    email: 'contact@rs2i.fr',
  }),
  new Client({
    id: 'sdfs',
    name: 'Modis',
    email : 'contact@modis.fr',

  })
];
