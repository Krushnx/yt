
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import View from './components/Home/View';
import Loader from './components/Genral/Loading';
import UserInfo from './components/Home/UserInfo';

function App() {
  return (

//Routing here
<Router>
  <Navbar />
    <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/load' element={<Loader />}></Route>
          <Route exact path='/user' element={<UserInfo />}></Route>

   </Routes>   
</Router>
   
  );
}

export default App;
