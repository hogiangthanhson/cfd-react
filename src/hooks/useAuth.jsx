import { useSelector } from "react-redux";

// export function useAuth() {
//   const context = useContext(Context)
//   return context
// }

export const useAuth = () => useSelector(store => store.auth);
