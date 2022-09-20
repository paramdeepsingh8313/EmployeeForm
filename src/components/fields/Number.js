import React from "react";
import Form from "react-bootstrap/Form";
import { useStateValue } from "../../redux/StateProvider";

function Number({ obj }) {
  const [{ first_name, last_name, age }, dispatch] = useStateValue();
  function getDetail(e) {
    dispatch({
      type: "AGE",
      item: { age: e },
    });
  }

  return (
    <div>
      <Form.Group className="mb-3 .col-12" controlId="formBasicEmail">
        <Form.Label htmlFor={obj?.id}>{obj?.label}</Form.Label>
        <Form.Control
          type={obj?.type}
          placeholder={obj?.label}
          id={obj?.id}
          onChange={(e) => getDetail(e.target.value)}
        />
      </Form.Group>
    </div>
  );
}

export default Number;
