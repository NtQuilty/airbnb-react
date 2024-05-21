import nusaCeningan from '../public/images/main/one.png';
import lovinaSeririt from '../public/images/main/two.png';
import kutuh from '../public/images/main/three.png';
import karangasem from '../public/images/main/four.png';
import seminyak from '../public/images/main/five.png';
import badung from '../public/images/main/six.png';
import canggu from '../public/images/main/seven.png';
import cangguTwo from '../public/images/main/eight.png';
import nusaCeninganTwo from '../public/images/main/nine.png';
import karangasemTwo from '../public/images/main/ten.png';
import seminyakTwo from '../public/images/main/eleven.png';
import cangguFree from '../public/images/main/twelve.png';
import nkCity from '../public/images/main/nk.png';
import BeachIcon from './assets/carousel/beach-icon.svg?react';
import BoatIcon from './assets/carousel/boat-icon.svg?react';
import CalqueIcon from './assets/carousel/calque-icon.svg?react';
import ContainerIcon from './assets/carousel/container-icon.svg?react';
import GroupIcon from './assets/carousel/group-icon.svg?react';
import IslandIcon from './assets/carousel/island-icon.svg?react';
import LayerIcon from './assets/carousel/layer-icon.svg?react';
import MensionIcon from './assets/carousel/mension-icon.svg?react';
import NewIcon from './assets/carousel/new-icon.svg?react';
import PoolIcon from './assets/carousel/pool-icon.svg?react';
import VectorIcon from './assets/carousel/vector-icon.svg?react';

export type IconType = (typeof ICON_SET)[number];

export const ICON_SET = [
  { label: 'Beach', component: BeachIcon },
  { label: 'Boat', component: BoatIcon },
  { label: 'Calque', component: CalqueIcon },
  { label: 'Container', component: ContainerIcon },
  { label: 'Group', component: GroupIcon },
  { label: 'Island', component: IslandIcon },
  { label: 'Layer', component: LayerIcon },
  { label: 'Mension', component: MensionIcon },
  { label: 'New', component: NewIcon },
  { label: 'Pool', component: PoolIcon },
  { label: 'Vector', component: VectorIcon },
];

export type MainContentType = (typeof MAIN_CONTENT_DATA)[number];

export const MAIN_CONTENT_DATA = [
  {
    id: 0,
    img: [nusaCeningan, nkCity, nusaCeningan, nkCity],
    title: 'Nusa Ceningan, Indonesia',
    rating: 4.83,
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 'Rp2,250,000 ',
    filter: [],
  },
  {
    id: 1,
    img: [lovinaSeririt, nkCity, lovinaSeririt, nkCity],
    title: 'Lovina Seririt, Indonesia',
    rating: 4.89,
    distance: '53 kilometers away',
    date: 'May 6 - 11',
    price: 'Rp2,932,910 ',
    filter: [],
  },
  {
    id: 2,
    img: [kutuh, nkCity, kutuh, nkCity],
    title: 'Kutuh, Indonesia',
    rating: 4.8,
    distance: 'On pandawa beach',
    date: 'Jun 20 - 25',
    price: 'Rp33,687,226 ',
    filter: [],
  },
  {
    id: 3,
    img: [karangasem, nkCity, karangasem, nkCity],
    title: 'Karangasem, Indonesia',
    rating: 4.83,
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 'Rp4,398,219 ',
    filter: [],
  },
  {
    id: 4,
    img: [seminyak, nkCity, seminyak, nkCity],
    title: 'Seminyak, Indonesia',
    rating: 4.81,
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 'Rp2,563,061 ',
    filter: [],
  },
  {
    id: 5,
    img: [badung, nkCity, badung, nkCity],
    title: 'Badung, Indonesia',
    rating: 4.89,
    distance: '1 min to Seminyak Beach',
    date: 'May 2 - 7',
    price: 'Rp16,161,062 ',
    filter: [],
  },
  {
    id: 6,
    img: [canggu, nkCity, canggu, nkCity],
    title: 'Canggu, Indonesia',
    rating: 5.0,
    distance: '11 kilometers away',
    date: 'May 3 - 8',
    price: 'Rp24,644,818 ',
    filter: [],
  },
  {
    id: 7,
    img: [cangguTwo, nkCity, cangguTwo, nkCity],
    title: 'Canggu, Indonesia',
    rating: 4.88,
    distance: '4 min to Seminyak Beach',
    date: 'Apr 8 - 15',
    price: 'Rp7,329,305 ',
    filter: [],
  },
  {
    id: 8,
    img: [nusaCeninganTwo, nkCity, nusaCeninganTwo, nkCity],
    title: 'Nusa Ceningan, Indonesia',
    rating: 4.83,
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 'Rp2,250,000 ',
    filter: [],
  },
  {
    id: 9,
    img: [karangasemTwo, nkCity, karangasemTwo, nkCity],
    title: 'Karangasem, Indonesia',
    rating: 4.83,
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 'Rp4,398,219 ',
    filter: [],
  },
  {
    id: 10,
    img: [seminyakTwo, nkCity, seminyakTwo, nkCity],
    title: 'Seminyak, Indonesia',
    rating: 4.81,
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 'Rp2,563,061 ',
    filter: [],
  },
  {
    id: 11,
    img: [cangguFree, nkCity, cangguFree, nkCity],
    title: 'Canggu, Indonesia',
    rating: 5.0,
    distance: '11 kilometers away',
    date: 'May 3- 8',
    price: 'Rp24,644,818 ',
    filter: [],
  },
];
