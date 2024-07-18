const defaultState = {
    customer: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const DEL_CUSTOMER = 'DEL_CUSTOMER'


export const customerReducer = (state = defaultState, action) => {
    switch(action.type){
      case ADD_CUSTOMER:        
        return {...state, customer: [...state.customer, action.payload] }
  
      case DEL_CUSTOMER:
        const filteredCustomer = state.customer.filter( 
            c => c.id !== action.payload)
        return {...state, customer: [...filteredCustomer] }
      
      default: return state
    }
}

export const addCustomerAction = (payload) => ({
    type: ADD_CUSTOMER, payload
})
export const delCustomerAction = (payload) => ({
    type: DEL_CUSTOMER, payload
})