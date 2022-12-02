import Benefit from "../components/Benefit";
import BestPlaces from "../components/BestPlaces";
import Header from "../components/Header";
import Main from "../components/Main";

const Home = ({ active, setActive }: any) => {
  // simple file with components
  return (
    <div>
      <Header active={active} setactive={setActive} />
      <Main />
      <BestPlaces />
      <Benefit />
    </div>
  );
};
export default Home;
