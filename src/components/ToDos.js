import React, {useState} from 'react'

// const ToDo = props => {
//     <tr>
//         <td>
//             <label>{props.id}</label>
//         </td>
//         <td>
//             <input type='text'/>
//         </td>
//         <td>
//             <label>{props.createdAt}</label>
//         </td>
//     </tr>
// }

function ToDos() {

        const [todos, setTodos] = useState([{
            id: "todo1",
            createdAt: "18:00"
        },
        {   id: "todo2",
            createdAt: "11:00"
        }]);

        const reverseOrder = () => {
            setTodos([...todos].reverse());
        }
        const newData = todos.map((todo) => (
            <tr key={todo.id}>
                <td>
                    <label>{todo.id}</label>
                </td>
                <td>
                    <input />
                </td>
                <td>
                <label>{todo.createdAt}</label>
                </td>
                
            </tr>
            

        ))
    
  return (
    <div>
        <button onClick={reverseOrder}>Reverse</button>
        <table>
            <tbody>
                
                {newData}
                
            </tbody>
        </table>
    </div>
  )
  }

export default ToDos