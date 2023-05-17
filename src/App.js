import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Button varient='primary'>hello</Button>
      <form>
        Name:<input type='text' required autoFocus=" "></input>
        <br>
        </br>
        gender:<input type='radio' value='m' checked></input>Male
        <br></br>
        cb:<input type='checkbox' value='m' checked></input>Male
        <input type='submit'></input>
      </form>
      <fieldset>
        <legend>clander</legend>
        Date:<input type='date' name='date'/>
        <br></br>
        Date and Time:<input type='datetime-local' name='date'/>
        <br></br>
        Time:<input type='time' name='date'/>
        <br></br>
        Month :<input type='Month' name='date'/>
        <br></br>
        week:<input type='week' name='date'/>
        <br></br>
        number:<input type='number' name='date' min ='10'/>

        Range:<input type='Range' name='date' min ='10'/>
        <br></br>
      </fieldset>
    </div>
  );
}

export default App;
