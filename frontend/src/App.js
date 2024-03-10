
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import View from './components/Home/View';
import Loader from './components/Genral/Loading';
import UserInfo from './components/Home/UserInfo';
import Download from './components/Download/Download';
import AboutUs from './components/AboutUs/About';
import Contact from './components/Contact/Contact';
import Comments from './components/Comments/Comments';
import CommentView from './components/Comments/Comment_visual';
import CsvDown from './components/Comments/DownloadCSV';
import Keyword from './components/Comments/Keyword';

function App() {
  return (

//Routing here
<Router>
  <Navbar />
    <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/load' element={<Loader />}></Route>
          <Route exact path='/user' element={<UserInfo />}></Route>
          <Route exact path='/comment' element={<Comments />}></Route>
          <Route exact path='/download' element={<Download />}></Route>
          <Route exact path='/about' element={<AboutUs />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/test' element={<Keyword />}></Route>


   </Routes>   
</Router>
   
  );
}

export default App;
