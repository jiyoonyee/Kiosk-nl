// src/context/OrderContext.tsx
import { createContext } from "react";

type orderInfo = {
  product_id: number | undefined;
  quantity: number;
  menuName: string | null;
  price: number;
};

// Context의 타입 정의
type OrderContextType = {
  total: number;
  orders: orderInfo[];
  addOrder: (item: orderInfo) => void;
  updateOrder: (id: number, quan: number) => void;
};

// 기본값 (초기화)
export const OrderContext = createContext<OrderContextType>({
  total: 0,
  orders: [],
  addOrder: () => {},
  updateOrder: () => {},
});
