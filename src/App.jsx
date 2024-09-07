import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import { Theme } from "./components/ui/Theme";
import { Toaster } from "react-hot-toast";
import ListItem from "./components/ListItem";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ListFilter from "./components/ListFilter";
import ListFilterProvider from "./components/context/ListFilterProvider";
import Item from "./components/Item";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Toaster />
        <ListFilterProvider>
          <Routes>
            <Route path="/Hotel" element={<Header />}>
              <Route index element={<ListItem />} />
              <Route path="filter" element={<AppLayout />}>
                <Route index element={<ListFilter />} />
                <Route
                  path=":id"
                  element={<Item />}
                />
              </Route>
            </Route>
          </Routes>
        </ListFilterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
