import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <article className="w-full pt-10 pr-15 pl-15">
        <Card />
      </article>
    </>
  );
}

export default App;
