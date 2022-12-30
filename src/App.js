import './App.css';
import HeaderHome from './Header/HeaderHome';
import FooterHome from './Footer/Footer';
import RouterURL from './RouterURL/RouterURL';
import HomeWrap from './home/home';
import Duan from './menu2/Duan';
import Tintuc from './Tintuc/Tintuc';
import Lienhe from './Lienhe/Lienhe';
import Details from './chitiet/details';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        {/* <HeaderHome></HeaderHome> */}
        <Routes>
          <Route exact path="/" element={<HomeWrap/>}/>
          <Route  path="/tin-tuc" element={<Tintuc/>}/>
          <Route  path="/lien-he" element={<Lienhe/>}/>
          <Route  path="/du-an" element={<Duan/>}/>
          <Route  path="/detail" element={<Details/>}/>
        </Routes>
        
        <FooterHome></FooterHome>
    </div>
    
  </BrowserRouter>
  );
}

export default App;
