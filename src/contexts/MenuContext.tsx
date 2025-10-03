import { createContext } from "react";

interface MenuContextType {
  $onChange?: (value: number) => void;
}

const MenuContext = createContext<MenuContextType>({});

export default MenuContext;
