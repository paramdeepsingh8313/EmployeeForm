// import React, { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";

// function Input({ element }) {
//   const [detail, setDetail] = useState({
//     first: "",
//     last: "",
//     age: "",
//     email: "",
//   });
//   //   const [firstName, setFirstName] = useState("");
//   //   const [lastName, setLastName] = useState("");
//   const [radioBtn, setRadioBtn] = useState("");
//   //   const [age, setAge] = useState("");
//   //   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   const getDetail = (e) => {
//     let id = e[0];
//     let value = e[1];

//     switch (id) {
//       case "firstname":
//         setDetail({ ...detail, first: value });
//         break;
//       case "lastname":
//         setDetail({ ...detail, last: value });
//         break;
//       case "age":
//         setDetail({ ...detail, age: value });
//         break;
//       case "email":
//         setDetail({ ...detail, email: value });
//         break;
//       default:
//         setDetail(...detail);
//     }
//   };

//   useEffect(() => {
//     console.log("detail", detail);
//   }, [detail]);

//   const handleChange = (e) => {
//     alert(e.target.value);
//   };
//   const radioChange = (e) => {
//     alert(e.target.value);
//   };

//   return (
//     <>
//       {(element?.type === "text" || element?.type === "number") && (
//         <Form.Group className="mb-3 .col-12" controlId="formBasicEmail">
//           <Form.Label htmlFor={element?.id}>{element?.label}</Form.Label>
//           <Form.Control
//             type={element?.type}
//             placeholder={element?.label}
//             id={element?.id}
//             onChange={(e) => getDetail([element?.id, e.target.value])}
//           />
//         </Form.Group>
//       )}

//       {element?.type === "radio" && (
//         <Form.Group className="mb-3 .col-12" controlId="formBasicCheckbox">
//           <Form.Label htmlFor={element?.id}>{element?.label}</Form.Label>
//           {element?.type === "radio" &&
//             element?.options &&
//             element?.options.map((elem) => (
//               <div class="form-check">
//                 <input
//                   type={element?.type}
//                   class="form-check-input"
//                   id={elem?.value}
//                   name={element?.label}
//                   value={elem?.label}
//                   onClick={radioChange}
//                 />
//                 <label class="form-check-label" htmlFor={elem?.value}>
//                   {" "}
//                   {elem?.label}{" "}
//                 </label>
//               </div>
//               //   <div key={`default`} className="mb-3">
//               //     <Form type="radio" id={`default-`} label={elem?.label} />
//               //   </div>
//             ))}
//         </Form.Group>
//       )}

//       {element?.type === "select" && (
//         <Form.Select
//           aria-label="Default select example"
//           onChange={handleChange}
//         >
//           <option>{element?.label}</option>
//           {element?.options.map((ele) => {
//             return <option value={ele?.value}>{ele?.label}</option>;
//           })}
//         </Form.Select>
//       )}
//       {element?.type === "textArea" && (
//         <Form.Group
//           className="mb-3 .col-12"
//           controlId="exampleForm.ControlTextarea1"
//         >
//           <Form.Label htmlFor={element?.id}>{element?.label}</Form.Label>
//           <Form.Control
//             as={element?.type}
//             placeholder={element?.label}
//             id={element?.id}
//             row={4}
//           />
//         </Form.Group>
//       )}
//     </>
//   );
// }

// export default Input;
