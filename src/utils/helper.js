export const calculateDiscountPrice = (price, discountPercentage) => {
  const discountedPrice = price - price * (discountPercentage / 100);
  return Math.round(discountedPrice * 100) / 100;
};
