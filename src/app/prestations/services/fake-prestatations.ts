import { Prestation } from 'src/app/shared/models/prestation.model';

export const fakePrestations: Prestation[] = [
  new Prestation({
    id: 'lkjsdf',
    client: 'RS2i',
    typePresta: 'Dev',
    nbJours: 50,
    tjmHt: 1500,
    comment: 'Merci RS2i pour les 1.5k/j'
  }),
  new Prestation({
    id: 'sdfs',
    client: 'Modis',
    typePresta: 'Coaching',
    nbJours: 20,
    tjmHt: 1800,
    comment: 'Merci Modis pour les 1.8k/j'
  })
];
