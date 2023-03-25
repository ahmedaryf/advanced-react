import React, { useState } from 'react'

function UserForm() {
    const [name, setName] = useState("");
    const [score, setScore] = useState(10);

    const onScoreCahnge = (e) => {
        setScore(() => e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`${name} / Score - ${score}`);
        setName("");
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <fieldset>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Type Name here' name='name'/> <br />
                <label>Score - {score}</label> <br />
                <input type='range' value={score} onChange={onScoreCahnge} min='0' max='10'/> <br />
                <button disabled={!name} type='submit'>Submit</button>
            </fieldset>
        </form>
        <h4>{name}</h4>
    
    </div>
  )
}

export default UserForm