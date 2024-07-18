import { addManyCustomerAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => dispatch(addManyCustomerAction(json)))
    }
}