import { ThemeProvider } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import BookmarkLayout from "./components/BookmarkLayout";
import ListBookmarkProvider from "./components/context/ListBookmarkProvider";
import ListFilterProvider from "./components/context/ListFilterProvider";
import Header from "./components/Header";
import Item from "./components/Item";
import ItemsBookmark from "./components/ItemsBookmark";
import ListFilter from "./components/ListFilter";
import ListItem from "./components/ListItem";
import { Theme } from "./components/ui/Theme";
import SingelBookmark from "./components/SingelBookmark";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Toaster />
        <ListFilterProvider>
          <ListBookmarkProvider>
            <Routes>
              <Route path="/Hotel" element={<Header />}>
                <Route index element={<ListItem />} />
                <Route path="filter" element={<AppLayout />}>
                  <Route index element={<ListFilter />} />
                  <Route path=":id" element={<Item />} />
                </Route>
                <Route path="bookmark" element={<BookmarkLayout />}>
                  <Route index element={<ItemsBookmark />} />
                  <Route path=":id" element={<SingelBookmark />} />
                  <Route path="add" element={<div>add bookmark</div>} />
                </Route>
              </Route>
            </Routes>
          </ListBookmarkProvider>
        </ListFilterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
