import PokeTable from "./components/PokeTable";
import PokeTeam from "./components/PokeTeam";
import { Header } from "./components/Common";

function App() {
  return (
    <div>
      <Header/>
      <PokeTeam/>
      <PokeTable/>
    </div>
  );
}

export default App;
