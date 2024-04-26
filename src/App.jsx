import { useState } from "react";
import Person from "./Person";
import data from './data';
import List from "./List";


const App = () => {
  const [people,setPeople] = useState(data);
  console.log(people);
  const clearAll = ()=>{
    setPeople([]);
  };

  return (
      <main>
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
        <button 
        type="button" 
        onClick={clearAll} 
        className="btn btn-block"
        >
          Clear All
        </button>
           </section>
      </main>
   
  )};
export default App;
