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
import BeachIcon from './assets/carousel/beachIcon.svg?react';
import BoatsIcon from './assets/carousel/boatsIcon.svg?react';
import CampingIcon from './assets/carousel/campingIcon.svg?react';
import SleepBoxIcon from './assets/carousel/sleepBoxIcon.svg?react';
import DesertIcon from './assets/carousel/desertIcon.svg?react';
import IslandsIcon from './assets/carousel/islandsIcon.svg?react';
import CabinsIcon from './assets/carousel/cabinsIcon.svg?react';
import MensionsIcon from './assets/carousel/mensionsIcon.svg?react';
import NewIcon from './assets/carousel/newIcon.svg?react';
import PoolIcon from './assets/carousel/poolIcon.svg?react';
import DomesIcon from './assets/carousel/domesIcon.svg?react';

export type IconType = (typeof ICON_SET)[number];

export const ICON_SET = [
  { label: 'Beach', component: BeachIcon },
  { label: 'Beauty Pools', component: PoolIcon },
  { label: 'New', component: NewIcon },
  { label: 'Sleep Box', component: SleepBoxIcon },
  { label: 'Boats', component: BoatsIcon },
  { label: 'Camping', component: CampingIcon },
  { label: 'Mensions', component: MensionsIcon },
  { label: 'Islands', component: IslandsIcon },
  { label: 'Desert', component: DesertIcon },
  { label: 'Domes', component: DomesIcon },
  { label: 'Cabins', component: CabinsIcon },
];

export type MainContentType = (typeof MAIN_CONTENT_DATA)[number];

export const MAIN_CONTENT_DATA = [
  {
    id: 0,
    img: [nusaCeningan, nkCity, nusaCeningan, nkCity],
    title: 'Beautiful villa on the edge of BLUE LAGOON',
    location: 'Nusa Ceningan, Indonesia',
    rating: 4.83,
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 'Rp2,250,000 ',
    filter: [],
    reviews: '1800 ',
    owner: 'Mr Ifran',
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
  },
  {
    id: 1,
    img: [lovinaSeririt, nkCity, lovinaSeririt, nkCity],
    location: 'Lovina Seririt, Indonesia',
    rating: 4.89,
    distance: '53 kilometers away',
    date: 'May 6 - 11',
    price: 'Rp2,932,910 ',
    filter: [],
  },
  {
    id: 2,
    img: [kutuh, nkCity, kutuh, nkCity],
    location: 'Kutuh, Indonesia',
    rating: 4.8,
    distance: 'On pandawa beach',
    date: 'Jun 20 - 25',
    price: 'Rp33,687,226 ',
    filter: [],
  },
  {
    id: 3,
    img: [karangasem, nkCity, karangasem, nkCity],
    location: 'Karangasem, Indonesia',
    rating: 4.83,
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 'Rp4,398,219 ',
    filter: [],
  },
  {
    id: 4,
    img: [seminyak, nkCity, seminyak, nkCity],
    location: 'Seminyak, Indonesia',
    rating: 4.81,
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 'Rp2,563,061 ',
    filter: [],
  },
  {
    id: 5,
    img: [badung, nkCity, badung, nkCity],
    location: 'Badung, Indonesia',
    rating: 4.89,
    distance: '1 min to Seminyak Beach',
    date: 'May 2 - 7',
    price: 'Rp16,161,062 ',
    filter: [],
  },
  {
    id: 6,
    img: [canggu, nkCity, canggu, nkCity],
    location: 'Canggu, Indonesia',
    rating: 5.0,
    distance: '11 kilometers away',
    date: 'May 3 - 8',
    price: 'Rp24,644,818 ',
    filter: [],
  },
  {
    id: 7,
    img: [cangguTwo, nkCity, cangguTwo, nkCity],
    location: 'Canggu, Indonesia',
    rating: 4.88,
    distance: '4 min to Seminyak Beach',
    date: 'Apr 8 - 15',
    price: 'Rp7,329,305 ',
    filter: [],
  },
  {
    id: 8,
    img: [nusaCeninganTwo, nkCity, nusaCeninganTwo, nkCity],
    location: 'Nusa Ceningan, Indonesia',
    rating: 4.83,
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 'Rp2,250,000 ',
    filter: [],
  },
  {
    id: 9,
    img: [karangasemTwo, nkCity, karangasemTwo, nkCity],
    location: 'Karangasem, Indonesia',
    rating: 4.83,
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 'Rp4,398,219 ',
    filter: [],
  },
  {
    id: 10,
    img: [seminyakTwo, nkCity, seminyakTwo, nkCity],
    location: 'Seminyak, Indonesia',
    rating: 4.81,
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 'Rp2,563,061 ',
    filter: [],
  },
  {
    id: 11,
    img: [cangguFree, nkCity, cangguFree, nkCity],
    location: 'Canggu, Indonesia',
    rating: 5.0,
    distance: '11 kilometers away',
    date: 'May 3- 8',
    price: 'Rp24,644,818 ',
    filter: [],
  },
];
