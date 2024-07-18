
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()

  const cash = useSelector(state => state.cash.cash)
  console.log(cash);

  const addCach = (num) => {
    dispatch({type: 'ADD_CASH', payload: num})
  }
  const getCach = (num) => {
    dispatch({type: 'GET_CASH', payload: num})
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button onClick={() => addCach(Number(prompt()))}>+</button>
        <button onClick={() => getCach(Number(prompt()))}>-</button>
      </div>
    </div>
  );
}

export default App;
