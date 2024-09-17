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
import Login from "./components/Login";
import AuthProvider from "./components/context/AuthProvider";
import ProtectRoute from "./components/ProtectRoute";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Toaster />
        <AuthProvider>
          <ListFilterProvider>
            <ListBookmarkProvider>
              <Routes>
                <Route path="/Hotel" element={<Header />}>
                  <Route index element={<ListItem />} />
                  <Route path="login" element={<Login />} />
                  <Route path="filter" element={<AppLayout />}>
                    <Route index element={<ListFilter />} />
                    <Route path=":id" element={<Item />} />
                  </Route>
                  <Route
                    path="bookmark"
                    element={
                      <ProtectRoute>
                        <BookmarkLayout />
                      </ProtectRoute>
                    }
                  >
                    <Route index element={<ItemsBookmark />} />
                    <Route path=":id" element={<SingelBookmark />} />
                  </Route>
                </Route>
              </Routes>
            </ListBookmarkProvider>
          </ListFilterProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
