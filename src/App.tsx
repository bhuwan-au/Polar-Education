import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage1 from "./pages/1"

function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route index element={<Homepage1 />} />
    <Route path="1" element={<Homepage1 />} />
  </Routes>
  </BrowserRouter>
 )
}

export default App
