import React from "react";
import Form from "react-bootstrap/Form";
import { useStateValue } from "../../redux/StateProvider";

function Dropdown({ obj }) {
  const [{}, dispatch] = useStateValue();

  function handleChange(e) {
    dispatch({
      type: "MARITAL_STATUS",
      item: { marital_status: e.target.value },
    });
  }

  return (
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      <option selected="true" disabled="disabled" value="">
        {obj?.label}
      </option>
      {obj?.options.map((ele) => {
        return <option value={ele?.value}>{ele?.label}</option>;
      })}
    </Form.Select>
  );
}

export default Dropdown;
