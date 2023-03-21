
function DessertsList(props) {
    // Implement the component here.
    
    const dessertList = props.data.filter(item => item.calories < 500).sort((a,b) => a.calories - b.calories).map((dessert) => (
        <li key={dessert.name}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))
    
    return (
        <div>
          <ul>
            {dessertList}
          </ul>
        </div>
      );
  }
  
  export default DessertsList;
  