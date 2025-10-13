import { createContext } from "react";

interface MenuContextType {
  $onChange: (value: number) => void;
  MenuId?: number;
}

const MenuContext = createContext<MenuContextType>({
  $onChange: () => {},
  MenuId: 0,
});

export default MenuContext;
