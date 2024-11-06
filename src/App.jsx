// import List from "./List"
// import Button from "./Button";
// import Counter from "./Counter";
// import ColorPicker from "./ColorPicker";
// import CarList from "./CarList";
// import ToDoList from "./TodoList";
// import DigitalClock from "./DigitalClock";
import ComponentA from "./ComponentA";
import './index.css';
import UseRef from "./UseRef";
import StopWatch from "./StopWatch";

function App() {

  const fruits = [{id: 1, name: "avocado", calories: 120},
    {id: 2, name: "berry", calories: 20},
    {id: 3, name: "pomegranate", calories: 150},
    {id: 4, name: "papaya", calories: 80}];

  const vegetables = [{id: 5, name: "beetroot", calories: 35},
    {id: 6, name: "cucumber", calories: 26},
    {id: 7, name: "carrot", calories: 40},
    {id: 8, name: "spinach", calories: 70}];

  return (
    <>
      {/* <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" /> */}
      {/* <Counter />
      <ColorPicker />
      <CarList />
      <ToDoList /> */}
      <ComponentA />
      <UseRef />
      <StopWatch />
    </>
  )
}

export default App
