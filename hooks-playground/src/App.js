import React , {useState} from 'react';

function useInput() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState(0);

  return {
    name, 
    surname, 
    age, 
    setName, 
    setSurname, 
    setAge
  }
}

function App () {
  
const {name, surname, age, setName, setSurname, setAge} = useInput();

  return (
    <div>

    
      <form>
        <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        >
        </input>
        <input
        type='text'
        placeholder='Surname'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        >
        </input>
        <input
        type='number'
        placeholder='Age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
        >
        </input>
      </form>
    
      <div>
        {`Name: ${name}  Surname: ${surname}  Age: ${age}`}
      </div>


    </div>


  );
  
}

export default App;
