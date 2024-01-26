
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import View from './components/Home/View';
import Loader from './components/Genral/Loading';

function App() {
  return (

//Routing here
<Router>
  <Navbar />
    <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/load' element={<Loader />}></Route>
   </Routes>   
</Router>
   
  );
}

export default App;
