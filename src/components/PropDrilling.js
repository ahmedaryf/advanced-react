import React, { useState } from "react";

// const AppContext = createContext(null);

export const Parent = () => {
  const [userName, setUserName] = useState("PedroTech");

  return (
    
      <div>
        {userName}
        <Child setUserName={setUserName}/>
      </div>
   
  );
};

export const Child = ({setUserName}) => {
  return <Grandchild setUserName={setUserName}/>;
};

export const Grandchild = ({setUserName}) => {
  
  return (
    <div>
      <button
        onClick={() => {setUserName("John")}}
      >
        Change Username
      </button>
    </div>
  );
};