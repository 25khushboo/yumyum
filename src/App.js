import Meal from "./components/Meal";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Featured></Featured>
      <Delivery></Delivery>
      <TopPicks></TopPicks>
      <Meal></Meal>
      <Categories></Categories>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>

  );
}

export default App;
