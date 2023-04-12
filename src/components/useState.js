import { useState } from "react"; 
 
export default function UseState() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World", location: 'Maldives', type: 'seaplane' }); 
 
  function updateGreeting() { 
    //    setGreeting({greet: 'New Value latest'})
       setGreeting(prev => {
        return {...prev, greet: "Heloo, from Maldives", location: 'Keyodhoo'}
       })
    }; 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 