import { useContext } from "react";
import { Context } from "../App";

// export function useAuth() {
//   const context = useContext(Context)
//   return context
// }

export const useAuth = () => useContext(Context);
