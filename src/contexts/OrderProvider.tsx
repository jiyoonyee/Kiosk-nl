import { useState, type ReactNode } from "react";
import { OrderContext } from "./OrderContext";

type orderInfo = {
  menuName: string | null;
  price: number;
  product_id: number | undefined;
  quantity: number;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<orderInfo[]>([]);
  const [total, setTotal] = useState(0);

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
        setTotal((prev) => prev + item.price * item.quantity);
        console.log(orders);
        return [...prev, item];
      }
    });
  };

  const updateOrder = (id: number, quan: number) => {
    const targetOrder = orders.find((order) => order.product_id === id);
    if (!targetOrder) return;

    // 2️⃣ 기존 총합에서 이 아이템의 총액 빼기
    setTotal((prev) => prev - targetOrder.quantity * targetOrder.price);

    // 3️⃣ orders 배열 업데이트 (불변성 유지)
    const updatedOrders = orders.map((order) =>
      order.product_id === id ? { ...order, quantity: quan } : order
    );

    console.log(quan);
    // 4️⃣ 새 총합 더하기
    setTotal((prev) => prev + quan * targetOrder.price);
    setOrders(updatedOrders);
  };

  return (
    <OrderContext.Provider value={{ total, orders, addOrder, updateOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
