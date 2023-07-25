import React, { useEffect, useState } from "react";
import Content from "./Content";
import Unorder from "./Unorder";
function App() {
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error("Data not receiving");
        const list = await response.json();
        setItems(list);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div>
      <Content
        reqType={reqType}
        setReqType={setReqType}
        setItem={setItems}
        items={items}
      />
      <Unorder items={items} setItems={setItems} />
    </div>
  );
}

export default App;
