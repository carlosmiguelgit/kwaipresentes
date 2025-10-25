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
    diamonds: 700,
    oldPrice: 45.00,
    newPrice: 35.00,
    imageUrl: "https://i.ibb.co/gQRQ0BY/arara-removebg-preview.png",
    className: "arara",
    message: "Você receberá R$500 no pix",
  },
  {
    id: 2,
    name: "Festa na praia",
    diamonds: 2100,
    oldPrice: 135.00,
    newPrice: 105.00,
    imageUrl: "https://i.ibb.co/5g7XfXgC/Screenshot-2-removebg-preview.png",
    className: "second",
    message: "Você receberá R$1000 no pix",
  },
  {
    id: 3,
    name: "Alce",
    diamonds: 3500,
    oldPrice: 225.00,
    newPrice: 175.00,
    imageUrl: "https://i.ibb.co/wN2cSww7/alce.png",
    className: "alce",
    message: "Você receberá R$2500 no pix",
  },
  {
    id: 4,
    name: "Baleia",
    diamonds: 7000,
    oldPrice: 450.00,
    newPrice: 350.00,
    imageUrl: "https://i.ibb.co/hxWRGbKw/baleia.png",
    className: "baleia",
    message: "Você receberá R$5000 no pix",
  },
];