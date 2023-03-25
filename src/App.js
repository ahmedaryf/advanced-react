import "./App.css";
import DessertsList from "./components/DessertsList";
import Form from "./components/Form";
import Timer from "./components/Timer";
import ToDos from "./components/ToDos";
import UserForm from "./components/UserForm";

const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <h2>List of low calorie desserts:</h2>
        <DessertsList data={desserts}/>
      </div>
      <div>
        <ToDos />
      </div>
      <br />
      <Form />
      <br />
      <Timer />
      <br />
      <UserForm />
    </div>
   
  );
}

export default App;
