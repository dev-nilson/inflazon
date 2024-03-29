type Product = {
  id: number;
  title: string;
  newPrice: number;
  oldPrice: number;
  image: any;
  quantity: number;
};

type State = {
  cart: Cart;
};

type Cart = {
  items: Product[];
};
