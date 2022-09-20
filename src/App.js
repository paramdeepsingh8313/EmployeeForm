import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicRendering from "./components/pages/DynamicRendering";
import { useStateValue } from "./redux/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  const [arrayData, setArrayData] = useState();

  useEffect(() => {
    let url = "http://localhost:3001/data";
    let result = fetch(url);
    result
      .then((resp) => resp.json())
      .then((data) => setArrayData(data))
      .catch((err) => console.log(err.message));
  }, []);

  useEffect(() => {
    dispatch({
      type: "FORM_HEADER",
      item: { form_Header: arrayData && arrayData?.formHeading },
    });

    dispatch({
      type: "JSON_DATA",
      item: { json_data: arrayData && arrayData?.fields },
    });
  }, [arrayData]);

  return (
    <div className="App">
      <DynamicRendering />
    </div>
  );
}

export default App;
