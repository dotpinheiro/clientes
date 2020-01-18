export const Types = {
  GET_CUSTOMERS_REQUEST: "@customer/GET_CUSTOMERS_REQUEST",
  GET_CUSTOMERS_SUCCESS: "@customer/GET_CUSTOMERS_SUCCESS",
  GET_CUSTOMERS_FAILURE: "@customer/GET_CUSTOMERS_FAILURE",
  ADD_CUSTOMER_REQUEST: "@customer/ADD_CUSTOMER_REQUEST",
  ADD_CUSTOMER_SUCCESS: "@customer/ADD_CUSTOMER_SUCCESS",
  ADD_CUSTOMER_FAILURE: "@customer/ADD_CUSTOMER_FAILURE",
  DELETE_CUSTOMER_REQUEST: "@customer/DELETE_CUSTOMER_REQUEST",
  DELETE_CUSTOMER_SUCCESS: "@customer/DELETE_CUSTOMER_SUCCESS",
  DELETE_CUSTOMER_FAILURE: "@customer/DELETE_CUSTOMER_FAILURE",
  UPDATE_CUSTOMER_REQUEST: "@customer/UPDATE_CUSTOMER_REQUEST",
  UPDATE_CUSTOMER_SUCCESS: "@customer/UPDATE_CUSTOMER_SUCCESS",
  UPDATE_CUSTOMER_FAILURE: "@customer/UPDATE_CUSTOMER_FAILURE",
  EDIT_CUSTOMER_MODAL: "@customer/EDIT_CUSTOMER_MODAL",
  HANDLE_CUSTOMER_MODAL: "@customer/HANDLE_CUSTOMER_MODAL"
};

export function getCustomersRequest() {
  return {
    type: Types.GET_CUSTOMERS_REQUEST
  };
}

export function getCustomersSuccess(data) {
  return {
    type: Types.GET_CUSTOMERS_SUCCESS,
    payload: data
  };
}

export function getCustomersFailure() {
  return {
    type: Types.GET_CUSTOMERS_FAILURE
  };
}

export function addCustomerRequest(data) {
  return {
    type: Types.ADD_CUSTOMER_REQUEST,
    payload: data
  };
}

export function addCustomerSuccess(data) {
  return {
    type: Types.ADD_CUSTOMER_SUCCESS,
    payload: data
  };
}

export function addCustomerFailure(data) {
  return {
    type: Types.ADD_CUSTOMER_FAILURE,
    payload: data
  };
}

export function updateCustomerRequest(data) {
  return {
    type: Types.UPDATE_CUSTOMER_REQUEST,
    payload: data
  };
}

export function updateCustomerSuccess(data) {
  return {
    type: Types.UPDATE_CUSTOMER_SUCCESS,
    payload: data
  };
}

export function updateCustomerFailure(data) {
  return {
    type: Types.UPDATE_CUSTOMER_FAILURE,
    payload: data
  };
}

export function deleteCustomerRequest(data) {
  return {
    type: Types.DELETE_CUSTOMER_REQUEST,
    payload: data
  };
}

export function deleteCustomerSuccess(data) {
  return {
    type: Types.DELETE_CUSTOMER_SUCCESS,
    payload: data
  };
}

export function deleteCustomerFailure(data) {
  return {
    type: Types.DELETE_CUSTOMER_FAILURE,
    payload: data
  };
}

export function handleCustomerModal() {
  return {
    type: Types.HANDLE_CUSTOMER_MODAL
  };
}

export function editCustomerModal(data) {
  return {
    type: Types.EDIT_CUSTOMER_MODAL,
    payload: data
  };
}
