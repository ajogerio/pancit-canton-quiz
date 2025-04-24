import { Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";

  function App() {

    return (
      <Router>
        <Routes>
          <Route path='/' element={<Start />}/>
          <Route path='/quiz' element={<Quiz />}/>
          <Route path='/result' element={<Results />}/>
        </Routes>
      </Router>
    )
  }

  export default App
