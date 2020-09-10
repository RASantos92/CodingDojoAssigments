import React, { useState } from 'react';
import TabHeader from './components/TabHeader'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tabs, setTabs] = useState([
    {
      index: 0,
      text: "Info in tab 1",
      selected: true,
    }, {
      index: 1,
      text: "Info in tab 2",
      selected: false,
    },
    {
      index: 2,
      text: "Info in tab 3",
      selected: false,
    },
  ])

  const clickHandler = (clickedIndex) => {
    console.log("You clicked tab index ${clickedIndex}.");
    tabs.map((tab, i) => {
      let t = tab;
      if (clickedIndex === i) {
        t.selected = true;
        setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
      } else {
        t.selected = false;
        setTabs([...tabs.slice(0, i), t].concat(tabs.slice(i + 1)));
      }
    });
  };


  return (
    <div className="App" >
      {
        tabs.map((tab, i) => {
          return <TabHeader index={i} key={i} selected={tab.selected} clickHandler={clickHandler} />
        })
      }
      {
        tabs.map((tab, i) => {
          return tab.selected ? <h2 key={i}> {tab.text}</h2> : "";
        })
      }
    </div>
  );
}

export default App;
