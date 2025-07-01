import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes here
import { Home } from './pages/Home'; // Import your actual Home page component
import { NotFound } from './pages/NotFound';
import { Toaster } from "@/component/ui/toaster"; // Import Toaster for notifications


function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App