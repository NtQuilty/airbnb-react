import { useEffect, useState } from 'react';

export const useFavorites = () => {
  const [likedAds, setLikedAds] = useState(() => {
    const storedLikedAds = localStorage.getItem('LikedAds');
    return storedLikedAds ? JSON.parse(storedLikedAds) : [];
  });

  const toggleFavorites = (hotelId: number) => {
    setLikedAds((likedAds: number[]) => {
      if (likedAds.includes(hotelId)) {
        return likedAds.filter((id) => id !== hotelId);
      } else {
        return [...likedAds, hotelId];
      }
    });
  };

  useEffect(() => {
    likedAds.sort((a: number, b: number) => a - b);
    localStorage.setItem('LikedAds', JSON.stringify(likedAds));
  }, [likedAds]);

  return { likedAds, toggleFavorites };
};
