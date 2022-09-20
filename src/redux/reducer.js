export const initialState = {
  form_Header: "",
  json_data: [],
  first_name: "",
  last_name: "",
  age: null,
  email: "",
  address: "",
  gender: "",
  marital_status: "",
};

export const actionTypes = {
  FORM_HEADER: "FORM_HEADER",
  JSON_DATA: "JSON_DATA",
  FIRST_NAME: "FIRST_NAME",
  LAST_NAME: "LAST_NAME",
  AGE: "AGE",
  EMAIL: "EMAIL",
  ADDRESS: "ADDRESS",
  GENDER: "GENDER",
  MARITAL_STATUS: "MARITAL_STATUS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FORM_HEADER":
      return { ...state, form_Header: action.item.form_Header };

    case "JSON_DATA":
      return { ...state, json_data: action.item.json_data };

    case "FIRST_NAME":
      return { ...state, first_name: action.item.first_name };

    case "LAST_NAME":
      return { ...state, last_name: action.item.last_name };

    case "AGE":
      return { ...state, age: action.item.age };

    case "EMAIL":
      return { ...state, email: action.item.email };

    case "ADDRESS":
      return { ...state, address: action.item.address };

    case "GENDER":
      return { ...state, gender: action.item.gender };

    case "MARITAL_STATUS":
      return { ...state, marital_status: action.item.marital_status };

    default:
      return state;
  }
};

export default reducer;
