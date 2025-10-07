import { useState, type ReactNode } from "react";
import { OrderContext } from "./OrderContext";

type orderInfo = { product_id: number | undefined; quantity: number };

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<orderInfo[]>([]);

  const addOrder = (item: orderInfo) => {
    setOrders((prev) => {
      const existing = prev.find(
        (order) => order.product_id === item.product_id
      );

      if (existing) {
        console.log("이미 존재하는 상품:", existing);
        return prev.map((order) =>
          order.product_id === item.product_id
            ? { ...order, quantity: order.quantity + item.quantity }
            : order
        );
      } else {
        console.log("새로운 상품 추가:", item);
        console.log(orders);
        return [...prev, item];
      }
    });
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
