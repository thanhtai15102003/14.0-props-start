import { useState } from "react";


import Header from "./components/Header/Header.jsx";
import { myData } from "../data.js";
import MainContent from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  const [selectedTopic, setSelectedTopic] = useState("Vui lòng click vào nút");
  function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]}/>
            <MainContent {...myData[1]}/>
            <MainContent {...myData[2]}/>
            <MainContent {...myData[3]}/>
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() =>{handleClick('Components')} }>Components</TabButton>
            <TabButton onSelect={() =>{handleClick('JSX')} }>JSX</TabButton>
            <TabButton onSelect={() =>{handleClick('Props')} }>Props</TabButton>
            <TabButton onSelect={() =>{handleClick('State')} }>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </>
  );
}

export default App;
