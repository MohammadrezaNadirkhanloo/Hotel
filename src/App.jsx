import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/Header";
import { Theme } from "./components/ui/Theme";
import { Toaster } from "react-hot-toast";
import ListItem from "./components/ListItem";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ListFilter from "./components/ListFilter";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Toaster />
        <Routes>
          <Route path="/Hotel" element={<Header />}>
            <Route index element={<ListItem />} />
            <Route path="filter" element={<AppLayout />}>
              <Route index element={<ListFilter />} />
              <Route
                path=":id"
                element={<div>singel hotelddddddddddddddddd</div>}
              />
            </Route>
          </Route>

          {/* <ListItem /> */}
          {/* <Route path="/filter" element={<AppLayout />}>
            
            <Route path=":id" element={<div>singel hotelddddddddddddddddd</div>} />
          </Route> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
