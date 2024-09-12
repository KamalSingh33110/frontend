import { Box } from "@chakra-ui/react"
import { Route,Routes } from "react-router-dom"
import HomePage from"./Pages/HomePage"
import CreatePage from "./Pages/CreatePage"
import Navbar from "./components/Navbar"

function App() {
  return (
  
      <Box minH={"100vh"}>

        {/* navbar */}
        <Navbar/>
        
        {/* routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>

      </Box>
   
  )
}

export default App
