// src/context/OrderContext.tsx
import type { ItemProps } from "@/pages/MenuPage/components/CheckOrderItem";
import { createContext } from "react";

type orderInfo = {
  menuName: string;
  price: number;
  product_id: number;
  quantity: number;
  kcal: number;
  description: string;
  filePath: string;
};

// Context의 타입 정의
type OrderContextType = {
  total: number;
  orderNumber: number;
  orders: ItemProps[];
  addOrder: (item: orderInfo) => void;
  updateOrder: (id: number, quan: number) => void;
  ResetOrder: () => void;
  updateOrderNumber: (n: number) => void;
  DeleteOrderItem: (id: number) => void;
};

// 기본값 (초기화)
export const OrderContext = createContext<OrderContextType>({
  total: 0,
  orderNumber: 0,
  orders: [],
  addOrder: () => {},
  updateOrder: () => {},
  ResetOrder: () => {},
  updateOrderNumber: () => {},
  DeleteOrderItem: () => {},
});
