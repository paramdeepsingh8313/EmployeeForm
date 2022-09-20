import React from "react";
import Form from "react-bootstrap/Form";
import { useStateValue } from "../../redux/StateProvider";

function TextArea({ obj }) {
  const [{ address }, dispatch] = useStateValue();

  function getDetail(e) {
    dispatch({
      type: "ADDRESS",
      item: { address: e },
    });
  }

  return (
    <Form.Group
      className="mb-3 .col-12"
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label htmlFor={obj?.id}>{obj?.label}</Form.Label>
      <Form.Control
        as={obj?.type}
        placeholder={obj?.label}
        id={obj?.id}
        row={4}
        onChange={(e) => getDetail(e.target.value)}
      />
    </Form.Group>
  );
}

export default TextArea;
