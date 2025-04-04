import { Outlet, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              hi <Outlet />
            </>
          }
        >
          <Route index element={<>Home</>} />
          <Route path="users" element={<>Users</>} />
        </Route>
        <Route path="*" element={<>not found</>} />
      </Routes>
    </>
  );
}

export default App;
