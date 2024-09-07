import { ThemeProvider } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import BookmarkItem from "./components/BookmarkItem";
import ListFilterProvider from "./components/context/ListFilterProvider";
import Header from "./components/Header";
import Item from "./components/Item";
import ListFilter from "./components/ListFilter";
import ListItem from "./components/ListItem";
import { Theme } from "./components/ui/Theme";

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
                <Route path=":id" element={<Item />} />
              </Route>
              <Route path="bookmark" element={<BookmarkItem />}>
                <Route index element={<div>bookmark list</div>} />
                <Route path="add" element={<div>add bookmark</div>} />
              </Route>
            </Route>
          </Routes>
        </ListFilterProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
