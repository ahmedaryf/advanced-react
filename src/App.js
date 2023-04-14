import "./App.css";
import AdvancedUseState from "./components/advancedUseState";
import CustomHook from "./components/CustomHook";
import DarkTheme from "./components/DarkTheme";
import DessertsList from "./components/DessertsList";
import FetchingData from "./components/FetchingData";
import Form from "./components/Form";
import ListTest from "./components/ListTest";
import MyApp from "./components/MyApp";
import PracticeReducer from "./components/PracticeReducer";
import Radio from "./components/Radio";
import { Reducer } from "./components/Reducer";
import SignUp from "./components/SignUp";
import SignUpFixed from "./components/SignUpFixed";
import { Parent } from "./components/TestContext";
import Timer from "./components/Timer";
import ToDos from "./components/ToDos";
import UncontrolledInput from "./components/UncontrolledInput";
import UseEffect from "./components/UseEffect";
import { UseReducerPr } from "./components/UseReducer_pr";
import UseRefHook from "./components/useRefHook";
import UserForm from "./components/UserForm";
import UserInfo from "./components/UserInfo";
import UseState from "./components/useState";


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
        {/* <Form /> */}
        <br />
        {/* <Timer /> */}
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
        <br />
        <hr />
        <UseState />
        <br />
        <hr />
        <AdvancedUseState />
        <br />
        <hr />
        <UseEffect />
        <hr /> <br />
        <FetchingData />
        <hr />
        <br />
        <UserInfo />
        <br />
        <Reducer />
        <br />
        <PracticeReducer />
        <br />
        <UseRefHook />
        <br />
        <CustomHook />
        <br />
        <ListTest />
        <br />
        <hr />
        <Radio />
        <hr/>
        <br />
        <UseReducerPr />


    </div>
   
  );
}

export default App;
