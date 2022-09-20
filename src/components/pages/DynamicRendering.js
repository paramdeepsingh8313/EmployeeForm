import React, { useState, useEffect } from "react";
import "./DynamicRendering.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Text from "../fields/Text";
import TextArea from "../fields/TextArea";
import Number from "../fields/Number";
import Radio from "../fields/Radio";
import Dropdown from "../fields/Dropdown";
import { useStateValue } from "../../redux/StateProvider";

function DynamicRendering() {
  const [
    {
      form_Header,
      json_data,
      first_name,
      last_name,
      age,
      email,
      address,
      gender,
      marital_status,
    },
    dispatch,
  ] = useStateValue();

  const [userDetail, setUserDetail] = useState({
    first_name: "",
    last_name: "",
    age: null,
    email: "",
    address: "",
    gender: "",
    marital_status: "",
  });

  const [showData, setShowData] = useState(false);

  function Submitted(e) {
    e.preventDefault();

    if (
      first_name !== "" &&
      last_name !== "" &&
      age !== null &&
      email !== "" &&
      address !== "" &&
      gender !== "" &&
      marital_status !== ""
    ) {
      setUserDetail({
        ...userDetail,
        first_name: first_name,
        last_name: last_name,
        age: age,
        email: email,
        address: address,
        gender: gender,
        marital_status: marital_status,
      });
      setShowData(true);
    } else {
      alert("fields are empty");
    }

    // console.log(
    //   "form_Header",
    //   first_name,
    //   last_name,
    //   age,
    //   email,
    //   address,
    //   gender,
    //   marital_status
    // );
  }
  useEffect(() => {
    let displatData = `
    First Name: ${userDetail["first_name"]}
    Last Name: ${userDetail["last_name"]}
    Age: ${userDetail["age"]}
    Gender: ${userDetail["gender"]}
    Email: ${userDetail["email"]}
    Marital Status: ${userDetail["marital_status"]}
    Address: ${userDetail["address"]} 
                `;
    if (showData) {
      alert(displatData);
      setShowData(false);
    }
  }, [showData]);

  const [arrayData, setArrayData] = useState();
  useEffect(() => {
    let url = "http://localhost:3001/data";
    let result = fetch(url);
    result
      .then((resp) => resp.json())
      .then((data) => setArrayData(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="DynamicRendering">
      <div className="DynamicRenderingMain .col-12">
        <Form>
          <h2 style={{ color: "#0d6efd" }}>{form_Header}</h2>
          {json_data &&
            json_data.map((ele, index) => {
              switch (ele?.type) {
                case "text":
                  return <Text obj={ele} />;

                case "number":
                  return <Number obj={ele} />;

                case "textArea":
                  return <TextArea obj={ele} />;

                case "radio":
                  return <Radio obj={ele} />;

                case "select":
                  return <Dropdown obj={ele} />;

                default:
                  return null;
              }
            })}
          <div className="submitBtn">
            <Button variant="primary" type="submit" onClick={Submitted}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default DynamicRendering;
