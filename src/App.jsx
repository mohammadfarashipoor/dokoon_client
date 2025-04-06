import { Outlet, Route, Routes } from "react-router";
import Main from "@/layouts/Main";
import "@/styles/style.css";
import "@/styles/icon.css";
import "@/styles/main.css";
import "@/styles/main_ui.css";
import "@/styles/nouislider.min.css";
import "@/styles/bootstrap.min.css";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />}>
          <Route index element={<>Home</>} />
          <Route path="users" element={<>Users</>} />
        </Route>
        <Route path="*" element={<>not found</>} />
      </Routes>
    </>
  );
}

export default App;
