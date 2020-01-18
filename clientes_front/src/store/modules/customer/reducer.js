import { Types } from "./actions";

const initialState = {
  customers: [],
  open: false,
  edit: false,
  editData: {
    address: {
      logradouro: "",
      uf: "",
      numero: "",
      bairro: "",
      municipio: ""
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CUSTOMERS_SUCCESS: {
      const customers = action.payload;
      return { ...state, customers };
    }
    case Types.ADD_CUSTOMER_SUCCESS: {
      const customer = action.payload;
      const customers = state.customers;
      customers.push(customer);
      return { ...state, customers };
    }
    case Types.UPDATE_CUSTOMER_SUCCESS: {
      const customer = action.payload;
      const customers = state.customers;
      return { ...state, customers };
    }
    case Types.DELETE_CUSTOMER_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        customers: state.customers.filter(customer => customer.id != id)
      };
    }
    case Types.HANDLE_CUSTOMER_MODAL: {
      return {
        ...state,
        open: !state.open
      };
    }
    case Types.EDIT_CUSTOMER_MODAL: {
      const data = action.payload;
      const address = {
        logradouro: data.logradouro,
        uf: data.uf,
        numero: data.numero,
        bairro: data.bairro,
        municipio: data.municipio
      };
      return {
        ...state,
        open: !state.open,
        edit: !state.edit,
        editData: { ...data, address }
      };
    }
    default: {
      return state;
    }
  }
};
