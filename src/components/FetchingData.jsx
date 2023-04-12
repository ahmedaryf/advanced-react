
import { useState, useEffect } from "react"; 
 
// export default function FetchingData() { 
//   const [btcData, setBtcData] = useState({}); 
//   useEffect(() => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }, []); 
  
//   return ( 
//     <> 
//       <h1>Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </> 
//   ); 
// } 

 //Another way of writing the same function as above

 export default function FetchingData() { 
    const [btcData, setBtcData] = useState(""); 
    const [btcData1, setBtcData1] = useState(""); 
   
    const fetchData = () => { 
      fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
        .then((response) => response.json()) 
        .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
        .catch((error) => console.log(error)); 
    }; 

    const fetchData1 = () => { 
        fetch(`https://jsonplaceholder.typicode.com/posts`) 
          .then((response) => response.json()) 
          .then((data) => {
            data.map((item) => {
                return setBtcData1(item)
                
            })
            
          }) 
          .catch((error) => {
            console.log(error);
            // handle the error appropriately
          });
      };
  
    useEffect(() => { 
      fetchData(); 
      fetchData1(); 
      
    }, []); 
   
    return ( 
      <> 
        <h1>Current BTC/USD data</h1> 
        <p>Code: {btcData.code}</p> 
        <p>Symbol: {btcData.symbol}</p> 
        <p>Rate: {btcData.rate}</p> 
        <p>Description: {btcData.description}</p> 
        <p>Rate Float: {btcData.rate_float}</p> 
        <br/>
        <p>Title: {btcData1.title}</p>
        <br/>
        <br />
        <button>Click Me</button>
      </> 
    ); 
  } 