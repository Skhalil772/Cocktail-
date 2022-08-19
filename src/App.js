import Detail from "./components/detail";
import Search from "./components/search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/context";

function App() {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
