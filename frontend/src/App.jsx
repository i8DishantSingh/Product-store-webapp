
import { Box } from "@chakra-ui/react"
import { Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import Navbar from "./components/Navbar.jsx"


function App() {
  return (
    <Box minH={"100vh"}>

      <Navbar/>
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        {/* <Route path="/" element={<Homepage/>}/>
        <Route path="/" element={<Homepage/>}/>
         */}
        
      </Routes>
    </Box>
  )
}

export default App
