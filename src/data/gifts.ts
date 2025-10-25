export interface Gift {
  id: number;
  name: string;
  diamonds: number;
  oldPrice: number;
  newPrice: number;
  imageUrl: string;
  className: string;
  message: string;
}

export const gifts: Gift[] = [
  {
    id: 1,
    name: "Arara",
    diamonds: 699,
    oldPrice: 44.09,
    newPrice: 35.48,
    imageUrl: "https://i.ibb.co/gQRQ0BY/arara-removebg-preview.png",
    className: "arara",
    message: "Você receberá R$500 no pix",
  },
  {
    id: 2,
    name: "Festa na praia",
    diamonds: 1610,
    oldPrice: 125.99,
    newPrice: 67.74,
    imageUrl: "https://i.ibb.co/5g7XfXgC/Screenshot-2-removebg-preview.png",
    className: "second",
    message: "Você receberá R$2000 no pix",
  },
  {
    id: 3,
    name: "Alce",
    diamonds: 4410,
    oldPrice: 377.99,
    newPrice: 164.52,
    imageUrl: "https://i.ibb.co/wN2cSww7/alce.png",
    className: "alce",
    message: "Você receberá R$5000 no pix",
  },
  {
    id: 4,
    name: "Baleia",
    diamonds: 7210,
    oldPrice: 629.99,
    newPrice: 324.73,
    imageUrl: "https://i.ibb.co/hxWRGbKw/baleia.png",
    className: "baleia",
    message: "Você receberá R$10000 no pix",
  },
];