import React from "react";

export const preloadImages = (imagesArray) => {
  const promises = imagesArray.map((src) => preloadImage(src));
  return Promise.all(promises);
};
