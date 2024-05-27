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
import nkCity from '../public/images/main/nk.jpg';
import embankment from '../public/images/main/embankment.jpg';
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
    img: [nusaCeningan, nkCity, nusaCeningan, embankment, nkCity],
    title: 'Beautiful villa on the edge of BLUE LAGOON',
    location: 'Nusa Ceningan, Indonesia',
    rating: 4.83,
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 2250000,
    reviews: 1800,
    owner: 'Mr Ifran',
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
  },
  {
    id: 1,
    img: [lovinaSeririt, nkCity, lovinaSeririt, embankment, nkCity],
    location: 'Lovina Seririt, Indonesia',
    title: 'Luxurious Retreat in LOVINA SERIRIT',
    rating: 4.89,
    distance: '53 kilometers away',
    date: 'May 6 - 11',
    price: 2932910,
    reviews: 98,
    owner: 'Low Tha Khong',
    guest: 6,
    bedroom: 3,
    bed: 3,
    bathroom: 2,
  },
  {
    id: 2,
    img: [kutuh, nkCity, kutuh, embankment, nkCity],
    location: 'Kutuh, Indonesia',
    title: 'Serene Beachfront Villa in KUTUH',
    rating: 4.8,
    distance: 'On pandawa beach',
    date: 'Jun 20 - 25',
    price: 33687226,
    reviews: 1345,
    owner: 'Samuel',
    guest: 2,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
  },
  {
    id: 3,
    img: [karangasem, nkCity, karangasem, embankment, nkCity],
    location: 'Karangasem, Indonesia',
    title: 'Charming Villa Near PANTAI UJUNG',
    rating: 4.83,
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 4398219,
    reviews: 789,
    owner: 'Mikasa',
    guest: 7,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
  },
  {
    id: 4,
    img: [seminyak, nkCity, seminyak, embankment, nkCity],
    title: 'Modern Villa 2 MIN TO SEMINYAK BEACH',
    location: 'Seminyak, Indonesia',
    rating: 4.81,
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 2563061,
    reviews: 456,
    owner: 'Geby',
    guest: 3,
    bedroom: 2,
    bed: 2,
    bathroom: 2,
  },
  {
    id: 5,
    img: [badung, nkCity, badung, embankment, nkCity],
    title: 'Spacious Villa 1 MIN TO SEMINYAK BEACH',
    location: 'Badung, Indonesia',
    rating: 4.89,
    distance: '1 min to Seminyak Beach',
    date: 'May 2 - 7',
    price: 16161062,
    reviews: 567,
    owner: 'Eren',
    guest: 8,
    bedroom: 3,
    bed: 3,
    bathroom: 2,
  },
  {
    id: 6,
    img: [canggu, nkCity, canggu, embankment, nkCity],
    title: 'Exclusive Villa 11 KM AWAY IN CANGGU',
    location: 'Canggu, Indonesia',
    rating: 5.0,
    distance: '11 kilometers away',
    date: 'May 3 - 8',
    price: 24644818,
    reviews: 234,
    owner: 'Heng',
    guest: 5,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
  },
  {
    id: 7,
    img: [cangguTwo, nkCity, cangguTwo, embankment, nkCity],
    title: 'Family Villa 4 MIN TO SEMINYAK BEACH',
    location: 'Canggu, Indonesia',
    rating: 4.88,
    distance: '4 min to Seminyak Beach',
    date: 'Apr 8 - 15',
    price: 7329305,
    reviews: 678,
    owner: 'Ica',
    guest: 9,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
  },
  {
    id: 8,
    img: [nusaCeninganTwo, nkCity, nusaCeninganTwo, embankment, nkCity],
    title: 'Beachfront Villa in Nusa Ceningan',
    location: 'Nusa Ceningan, Indonesia',
    rating: 4.83,
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 2250000,
    reviews: 345,
    owner: 'Mr Ifran',
    guest: 10,
    bedroom: 3,
    bed: 3,
    bathroom: 2,
  },
  {
    id: 9,
    img: [karangasemTwo, nkCity, karangasemTwo, embankment, nkCity],
    title: 'Cozy Villa Near Pantai Ujung',
    location: 'Karangasem, Indonesia',
    rating: 4.83,
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 4398219,
    reviews: 890,
    owner: 'Mikasa',
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
  },
  {
    id: 10,
    img: [seminyakTwo, nkCity, seminyakTwo, embankment, nkCity],
    title: 'Elegant Villa 2 Min to Seminyak Beach',
    location: 'Seminyak, Indonesia',
    rating: 4.81,
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 2563061,
    reviews: 322,
    owner: 'Geby',
    guest: 7,
    bedroom: 2,
    bed: 2,
    bathroom: 1,
  },
  {
    id: 11,
    img: [cangguFree, nkCity, cangguFree, embankment, nkCity],
    title: 'Luxury Villa 11 km Away in Canggu',
    location: 'Canggu, Indonesia',
    rating: 5.0,
    distance: '11 kilometers away',
    date: 'May 3- 8',
    price: 24644818,
    reviews: 567,
    owner: 'Low Tha Khong',
    guest: 4,
    bedroom: 3,
    bed: 3,
    bathroom: 2,
  },
];
