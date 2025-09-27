import { createContext } from "react";

interface AsideContextType {
  onChange?: (value: string) => void;
}
const AsideContext = createContext<AsideContextType>({});

export default AsideContext;
