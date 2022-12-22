import './App.css';
import HeaderHome from './Header/HeaderHome';
import HomeWrap from './home/home';
import FooterHome from './Footer/Footer';
function App() {
  return (
    <div className="App">
        <HeaderHome></HeaderHome>
        <HomeWrap></HomeWrap>
        <FooterHome></FooterHome>
    </div>
  );
}

export default App;
