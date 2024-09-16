import { createContext, useContext } from "react";
import useFetch from "../../hook/useFetch";

const ListBookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function ListBookmarkProvider({ children }) {
  const { data: Bookmarks, isLoading } = useFetch(`${BASE_URL}/bookmarks`);

  return (
    <ListBookmarkContext.Provider value={{ Bookmarks, isLoading }}>
      {children}
    </ListBookmarkContext.Provider>
  );
}

export default ListBookmarkProvider;

export function useBookmarkList() {
  return useContext(ListBookmarkContext);
}
