import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [userName, setUserName] = useState("PedroTech");

  return (
    <AppContext.Provider value={{userName, setUserName}}>
      <div>
        <h5>{userName}</h5>
        <Child/>
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  return <Grandchild/>;
};

export const Grandchild = () => {
    const {setUserName} = useContext(AppContext);
  return (
    <div>
      <button onClick={() => {setUserName("John")}}>Change Username</button>
      
    </div>
  );
};