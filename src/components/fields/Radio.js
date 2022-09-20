import React from "react";
import Form from "react-bootstrap/Form";
import { useStateValue } from "../../redux/StateProvider";

function Radio({ obj }) {
  const [{ gender }, dispatch] = useStateValue();
  const radioChange = (e) => {
    dispatch({
      type: "GENDER",
      item: { gender: e.target.value },
    });
  };
  //   console.log("gender", gender);
  return (
    <Form.Group className="mb-3 .col-12" controlId="formBasicCheckbox">
      <Form.Label htmlFor={obj?.id}>{obj?.label}</Form.Label>
      {obj?.type === "radio" &&
        obj?.options &&
        obj?.options.map((elem) => (
          <div class="form-check">
            <input
              type={obj?.type}
              class="form-check-input"
              id={elem?.value}
              name={obj?.label}
              value={elem?.label}
              onClick={radioChange}
            />
            <label class="form-check-label" htmlFor={elem?.value}>
              {" "}
              {elem?.label}{" "}
            </label>
          </div>
          //   <div key={`default`} className="mb-3">
          //     <Form type="radio" id={`default-`} label={elem?.label} />
          //   </div>
        ))}
    </Form.Group>
  );
}

export default Radio;
