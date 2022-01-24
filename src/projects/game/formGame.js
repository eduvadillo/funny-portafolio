import { useState, useEffect, useRef } from "react";
import axios from "axios";

function FormGame({ puntuacion }) {
  const [name, setName] = useState("");
  const [completeForm, setCompleteForm] = useState(false);
  const [allUsers, setAllUsers] = useState("");

  const API_URL = process.env.REACT_APP_API_URL;

  const handleName = (e) => {
    const nameUser = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setName(nameUser);
  };

  console.log(`soy el allusers`, allUsers);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, puntuacion };

    axios
      .post(`http://localhost:5005/api/score`, requestBody)
      .then((response) => {
        setAllUsers(response.data);
        setCompleteForm(true);
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
      });
  };

  if (!completeForm) {
    return (
      <>
        <div className='formGame-div'>
          <form onSubmit={handleLoginSubmit}>
            <input
              className='inputLogin'
              type='text'
              name='name'
              value={name}
              placeholder='Type your name'
              onChange={handleName}
            />
            <button type='submit' className='buttonLogin'>
              Submit
            </button>
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1 className='formGame-div'>hola {name}</h1>
      </>
    );
  }
}

export default FormGame;
