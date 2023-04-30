import "./App.css";
import Header from "./header/Header";
import News from "./news/News";
import Stats from './stats/Stats';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <div className="app__container">
          <News />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;