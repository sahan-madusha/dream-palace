import React, { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setWishlistCount(wishlist?.length);
    console.log(wishlist?.length);
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
    const dropZone = document.querySelector(".wishlist-drop-zone");

    if (dropZone && dropZone.contains(event.target)) {
      addToWishlist(itemId);
    } else {
      removeFromWishlist(itemId);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const clearWishlist = () => {
    setWishlist([]);
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
        wishlistCount,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
