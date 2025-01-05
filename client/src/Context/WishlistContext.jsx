import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (itemId) => {
    if (!wishlist.includes(itemId)) {
      setWishlist((prevWishlist) => [...prevWishlist, itemId]);
    }
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id !== itemId));
  };

  const isInWishlist = (itemId) => wishlist.includes(itemId);

  const toggleWishlist = (itemId) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(itemId)) {
        return prevWishlist.filter((id) => id !== itemId);
      } else {
        return [...prevWishlist, itemId];
      }
    });
  };

  const handleDragStart = (event, itemId) => {
    event.dataTransfer.setData("text/plain", itemId);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain");
    addToWishlist(itemId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
        handleDragStart,
        handleDrop,
        handleDragOver,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
