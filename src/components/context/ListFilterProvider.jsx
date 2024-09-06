import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const ListFilterContext = createContext();

export default function ListFilterProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const valueSearch = searchParams.get("value");
  const filterNumber = JSON.parse(searchParams.get("options"));

  const { data, isLoading } = useFetch(
    "http://localhost:5000/hotels",
    `host_location_like=${valueSearch || ""}&accommodates_gte=${
      filterNumber.room || 1
    }`
  );
  return (
    <ListFilterContext.Provider value={{ data, isLoading }}>
      {children}
    </ListFilterContext.Provider>
  );
}

export function useFilterHotel() {
  return useContext(ListFilterContext);
}
