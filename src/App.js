
import './App.css';

import { db } from "./firebase";
import Timelist from './components/timelist/Timelist';
import AddTimeEntry from './components/addtimeentry/AddTimeEntry';
// Add a new document in collection "cities"
db.collection("cities").doc("LA").set({
  name: "Los Angeles",
  state: "CA",
  country: "USA"
})
.then(() => {
  console.log("Document successfully written!");
})
.catch((error) => {
  console.error("Error writing document: ", error);
});



function App() {
  return (
    <div className="App">
       <h1>Just Clock</h1>
       <Timelist/>
       <AddTimeEntry/>
    </div>
  );
}

export default App;
 