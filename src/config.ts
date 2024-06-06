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
    img: [
      '/images/main/one.png',
      '/images/main/nk.jpg',
      '/images/main/one.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Beautiful villa on the edge of BLUE LAGOON',
    location: 'Nusa Ceningan, Indonesia',
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 2250000,
    reviews: 1800,
    owner: { name: 'Mr Ifran', avatarSrc: '/images/userAvatars/mrIfran.png' },
    houseDetails: { guest: 1, bedroom: 1, bed: 1, bathroom: 1 },
    ratings: [
      { name: 'Cleanliness', rating: 4.8 },
      { name: 'Communication', rating: 4.9 },
      { name: 'Check-in', rating: 4.9 },
      { name: 'Accuracy', rating: 4.8 },
      { name: 'Location', rating: 4.9 },
      { name: 'Value', rating: 4.7 },
    ],
    coordinates: [55.6333, 51.8167],
  },
  {
    id: 1,
    img: [
      '/images/main/two.png',
      '/images/main/nk.jpg',
      '/images/main/two.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    location: 'Lovina Seririt, Indonesia',
    title: 'Luxurious Retreat in LOVINA SERIRIT',
    distance: '53 kilometers away',
    date: 'May 6 - 11',
    price: 2932910,
    reviews: 98,
    owner: { name: 'Low Tha Khong', avatarSrc: '/images/userAvatars/lowThaKhong.png' },
    houseDetails: { guest: 6, bedroom: 3, bed: 3, bathroom: 2 },
    ratings: [
      { name: 'Cleanliness', rating: 4.2 },
      { name: 'Communication', rating: 4.3 },
      { name: 'Check-in', rating: 4.1 },
      { name: 'Accuracy', rating: 4.2 },
      { name: 'Location', rating: 4.3 },
      { name: 'Value', rating: 4.2 },
    ],
    coordinates: [55.741272, 52.403662],
  },
  {
    id: 2,
    img: [
      '/images/main/three.png',
      '/images/main/nk.jpg',
      '/images/main/three.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    location: 'Kutuh, Indonesia',
    title: 'Serene Beachfront Villa in KUTUH',
    distance: 'On pandawa beach',
    date: 'Jun 20 - 25',
    price: 33687226,
    reviews: 1345,
    owner: { name: 'Samuel', avatarSrc: '/images/userAvatars/samuel.png' },
    houseDetails: { guest: 2, bedroom: 2, bed: 2, bathroom: 1 },
    ratings: [
      { name: 'Cleanliness', rating: 4.7 },
      { name: 'Communication', rating: 4.8 },
      { name: 'Check-in', rating: 4.6 },
      { name: 'Accuracy', rating: 4.7 },
      { name: 'Location', rating: 4.8 },
      { name: 'Value', rating: 4.6 },
    ],
    coordinates: [55.7887, 49.1221],
  },
  {
    id: 3,
    img: [
      '/images/main/four.png',
      '/images/main/nk.jpg',
      '/images/main/four.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    location: 'Karangasem, Indonesia',
    title: 'Charming Villa Near PANTAI UJUNG',
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 4398219,
    reviews: 789,
    owner: { name: 'Mikasa', avatarSrc: '/images/userAvatars/mikasa.png' },
    houseDetails: { guest: 7, bedroom: 2, bed: 2, bathroom: 1 },
    ratings: [
      { name: 'Cleanliness', rating: 3.8 },
      { name: 'Communication', rating: 4.1 },
      { name: 'Check-in', rating: 4.0 },
      { name: 'Accuracy', rating: 4.0 },
      { name: 'Location', rating: 4.1 },
      { name: 'Value', rating: 3.9 },
    ],
    coordinates: [55.6403, 50.0568],
  },
  {
    id: 4,
    img: [
      '/images/main/five.png',
      '/images/main/nk.jpg',
      '/images/main/five.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Modern Villa 2 MIN TO SEMINYAK BEACH',
    location: 'Seminyak, Indonesia',
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 2563061,
    reviews: 456,
    owner: { name: 'Geby', avatarSrc: '/images/userAvatars/geby.png' },
    houseDetails: { guest: 3, bedroom: 2, bed: 2, bathroom: 2 },
    ratings: [
      { name: 'Cleanliness', rating: 2.3 },
      { name: 'Communication', rating: 2.4 },
      { name: 'Check-in', rating: 2.2 },
      { name: 'Accuracy', rating: 2.3 },
      { name: 'Location', rating: 2.2 },
      { name: 'Value', rating: 2.0 },
    ],
    coordinates: [55.3075, 49.6283],
  },
  {
    id: 5,
    img: [
      '/images/main/six.png',
      '/images/main/nk.jpg',
      '/images/main/six.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Spacious Villa 1 MIN TO SEMINYAK BEACH',
    location: 'Badung, Indonesia',
    distance: '1 min to Seminyak Beach',
    date: 'May 2 - 7',
    price: 16161062,
    reviews: 567,
    owner: { name: 'Eren', avatarSrc: '/images/userAvatars/eren.png' },
    houseDetails: { guest: 8, bedroom: 3, bed: 3, bathroom: 2 },
    ratings: [
      { name: 'Cleanliness', rating: 3.4 },
      { name: 'Communication', rating: 3.5 },
      { name: 'Check-in', rating: 3.3 },
      { name: 'Accuracy', rating: 3.4 },
      { name: 'Location', rating: 3.3 },
      { name: 'Value', rating: 3.2 },
    ],
    coordinates: [55.3353, 50.6439],
  },
  {
    id: 6,
    img: [
      '/images/main/seven.png',
      '/images/main/nk.jpg',
      '/images/main/seven.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Exclusive Villa 11 KM AWAY IN CANGGU',
    location: 'Canggu, Indonesia',
    distance: '11 kilometers away',
    date: 'May 3 - 8',
    price: 24644818,
    reviews: 234,
    owner: { name: 'Heng', avatarSrc: '/images/userAvatars/heng.png' },
    houseDetails: { guest: 5, bedroom: 1, bed: 1, bathroom: 1 },
    ratings: [
      { name: 'Cleanliness', rating: 2.8 },
      { name: 'Communication', rating: 2.9 },
      { name: 'Check-in', rating: 2.7 },
      { name: 'Accuracy', rating: 2.8 },
      { name: 'Location', rating: 2.7 },
      { name: 'Value', rating: 2.6 },
    ],
    coordinates: [55.3967, 49.55],
  },
  {
    id: 7,
    img: [
      '/images/main/eight.png',
      '/images/main/nk.jpg',
      '/images/main/eight.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Family Villa 4 MIN TO SEMINYAK BEACH',
    location: 'Canggu, Indonesia',
    distance: '4 min to Seminyak Beach',
    date: 'Apr 8 - 15',
    price: 7329305,
    reviews: 678,
    owner: { name: 'Ica', avatarSrc: '/images/userAvatars/ica.png' },
    houseDetails: { guest: 9, bedroom: 2, bed: 2, bathroom: 1 },
    ratings: [
      { name: 'Cleanliness', rating: 3.2 },
      { name: 'Communication', rating: 3.3 },
      { name: 'Check-in', rating: 3.1 },
      { name: 'Accuracy', rating: 3.2 },
      { name: 'Location', rating: 3.1 },
      { name: 'Value', rating: 3.0 },
    ],
    coordinates: [55.7522, 49.2211],
  },
  {
    id: 8,
    img: [
      '/images/main/nine.png',
      '/images/main/nk.jpg',
      '/images/main/nine.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Beachfront Villa in Nusa Ceningan',
    location: 'Nusa Ceningan, Indonesia',
    distance: 'On the beach',
    date: 'Apr 7 - 12',
    price: 2250000,
    reviews: 345,
    owner: { name: 'Mr Ifran', avatarSrc: '/images/userAvatars/mrIfran.png' },
    houseDetails: { guest: 10, bedroom: 3, bed: 3, bathroom: 2 },
    ratings: [
      { name: 'Cleanliness', rating: 4.0 },
      { name: 'Communication', rating: 4.1 },
      { name: 'Check-in', rating: 3.9 },
      { name: 'Accuracy', rating: 4.0 },
      { name: 'Location', rating: 3.9 },
      { name: 'Value', rating: 3.8 },
    ],
    coordinates: [55.7272, 52.4112],
  },
  {
    id: 9,
    img: [
      '/images/main/ten.png',
      '/images/main/nk.jpg',
      '/images/main/ten.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Cozy Villa Near Pantai Ujung',
    location: 'Karangasem, Indonesia',
    distance: 'Near Pantai Ujung',
    date: 'Apr 12 - 17',
    price: 4398219,
    reviews: 890,
    owner: { name: 'Mikasa', avatarSrc: '/images/userAvatars/mikasa.png' },
    houseDetails: { guest: 1, bedroom: 1, bed: 1, bathroom: 1 },
    ratings: [
      { name: 'Cleanliness', rating: 3.6 },
      { name: 'Communication', rating: 3.7 },
      { name: 'Check-in', rating: 3.5 },
      { name: 'Accuracy', rating: 3.6 },
      { name: 'Location', rating: 3.5 },
      { name: 'Value', rating: 3.4 },
    ],
    coordinates: [55.7645, 52.4312],
  },
  {
    id: 10,
    img: [
      '/images/main/eleven.png',
      '/images/main/nk.jpg',
      '/images/main/eleven.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Elegant Villa 2 Min to Seminyak Beach',
    location: 'Seminyak, Indonesia',
    distance: '2 min to Seminyak Beach',
    date: 'Oct 4 - 9',
    price: 2563061,
    reviews: 322,
    owner: { name: 'Geby', avatarSrc: '/images/userAvatars/geby.png' },
    houseDetails: { guest: 7, bedroom: 2, bed: 2, bathroom: 1 },
    ratings: [
      { name: 'Cleanliness', rating: 4.3 },
      { name: 'Communication', rating: 4.4 },
      { name: 'Check-in', rating: 4.2 },
      { name: 'Accuracy', rating: 4.3 },
      { name: 'Location', rating: 4.2 },
      { name: 'Value', rating: 4.1 },
    ],
    coordinates: [55.3075, 49.6283],
  },
  {
    id: 11,
    img: [
      '/images/main/twelve.png',
      '/images/main/nk.jpg',
      '/images/main/twelve.png',
      '/images/main/embankment.jpg',
      '/images/main/nk.jpg',
    ],
    title: 'Luxury Villa 11 km Away in Canggu',
    location: 'Canggu, Indonesia',
    distance: '11 kilometers away',
    date: 'May 3- 8',
    price: 24644818,
    reviews: 567,
    owner: { name: 'Low Tha Khong', avatarSrc: '/images/userAvatars/lowThaKhong.png' },
    houseDetails: { guest: 4, bedroom: 3, bed: 3, bathroom: 2 },
    ratings: [
      { name: 'Cleanliness', rating: 1.7 },
      { name: 'Communication', rating: 1.8 },
      { name: 'Check-in', rating: 1.6 },
      { name: 'Accuracy', rating: 1.7 },
      { name: 'Location', rating: 1.6 },
      { name: 'Value', rating: 1.5 },
    ],
    coordinates: [55.7522, 49.2211],
  },
];
