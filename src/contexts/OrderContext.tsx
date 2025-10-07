// src/context/OrderContext.tsx
import { createContext } from "react";

type orderInfo = { product_id: number | undefined; quantity: number };

// Context의 타입 정의
type OrderContextType = {
  orders: orderInfo[];
  addOrder: (item: orderInfo) => void;
};

// 기본값 (초기화)
export const OrderContext = createContext<OrderContextType>({
  orders: [],
  addOrder: () => {},
});
