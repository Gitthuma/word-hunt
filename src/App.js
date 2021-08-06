import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

function App() {

  //Create a function called dictionaryApi
  //Create an arrow function
  //Make the arrow funtion async since we are fetchin an Api
  //Add try catch statement to catch any errors
  //Add a log for the error inside the catch function
  //Get the api url using axios
  //Call dictionary API inside useEffect
  const dictionaryApi = async() => {

    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
        );
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    dictionaryApi();
  }, [])

  return (
    <div className="App"></div>
  );
}

export default App;
