import { Outlet, Route, Routes } from "react-router";
import Main from "@/layouts/Main";

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
