import "./App.css";
import DarkTheme from "./components/DarkTheme";
import DessertsList from "./components/DessertsList";
import Form from "./components/Form";
import MyApp from "./components/MyApp";
import SignUp from "./components/SignUp";
import SignUpFixed from "./components/SignUpFixed";
import { Parent } from "./components/TestContext";
import Timer from "./components/Timer";
import ToDos from "./components/ToDos";
import UncontrolledInput from "./components/UncontrolledInput";
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
        <br />
        <SignUp />
        <br />
        <br />
        <SignUpFixed />
        <br />
        <UncontrolledInput />
        <br />
        <MyApp />
        <br />
        <hr />
        <DarkTheme />
        <br />
        <hr />
        <Parent />




    </div>
   
  );
}

export default App;
