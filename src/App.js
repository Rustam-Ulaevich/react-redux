import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { addCustomerAction, delCustomerAction } from './store/customerReducer'
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch()

  const cash = useSelector(state => state.cash.cash)
  const customer = useSelector(state => state.customer.customer)

  console.log(cash);

  const addCach = (num) => {
    dispatch({type: 'ADD_CASH', payload: num})
  }
  const getCach = (num) => {
    dispatch({type: 'GET_CASH', payload: num})
  }

  const addCustomer = (name) => {
    const newCuctomer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(newCuctomer))
  }
  const delCustomer = (id) => {
    dispatch(delCustomerAction(id))
  }

  return (
    <div className="App">
      <div>Баланс: {cash}</div>
      <div>
        <button onClick={() => addCach(Number(prompt()))}>+</button>
        <button onClick={() => getCach(Number(prompt()))}>-</button>
        <button onClick={() => addCustomer((prompt()))}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Получить базу клиентов</button>
      </div>
      {customer.length > 0 ?
        <div>
          {customer.map( c  => 
          <div >{c.name}
            <button onClick={()=>delCustomer(c.id)}>X</button>
          </div>
          
          )}
        </div>
        :
        <div>Клиентов нет!!!</div>

      }
    </div>
  );
}

export default App;
