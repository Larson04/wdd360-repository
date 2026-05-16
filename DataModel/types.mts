interface Alert {
  _id: string;
  title: string;
  type: "warning" | "info" | "promotion";
  status: "active" | "inactive";
  createdAt: Date;
  modifiedAt: Date;
}

interface Card {
  cardNumber: string;
  expirationDate: string; // MM/YY
  cvv: string;
}

interface User {
  _id: string;
  name: string;
  address: string[];
  card: Card;
  orders: object[];
}

interface Review {
  _id: number;
  itemName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
}

interface OrderItem {
  _id: number;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  _id: number;
  items: OrderItem[];
  total: number;
  address: object;
  card: object;
}
