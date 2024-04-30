export interface HotelCardProps {
  id: number;
  img: string[];
  title: string;
  rating: number;
  distance: string;
  date: string;
  price: string;
}

export interface HeartButtonProps {
  onClick: () => void;
  likedAds: number[];
  hotelId: number;
}
