import React from "react";
import Form from "react-bootstrap/Form";
import { useStateValue } from "../../redux/StateProvider";

function Text({ obj }) {
  const [{}, dispatch] = useStateValue();

  function getDetail(e) {
    if (e[0] === "firstname") {
      dispatch({
        type: "FIRST_NAME",
        item: { first_name: e[1] },
      });
    }
    if (e[0] === "lastname") {
      dispatch({
        type: "LAST_NAME",
        item: { last_name: e[1] },
      });
    }
    if (e[0] === "email") {
      dispatch({
        type: "EMAIL",
        item: { email: e[1] },
      });
    }
  }

  return (
    <div>
      <Form.Group className="mb-3 .col-12" controlId="formBasicEmail">
        <Form.Label htmlFor={obj?.id}>{obj?.label}</Form.Label>
        <Form.Control
          type={obj?.type}
          placeholder={obj?.label}
          id={obj?.id}
          onChange={(e) => getDetail([obj?.id, e.target.value])}
        />
      </Form.Group>
    </div>
  );
}

export default Text;
