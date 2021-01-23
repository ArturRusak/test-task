import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Chart from "./core/components/Chart";
import { DATA } from "./core/constants";
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const data = DATA.find(({phrase}) => phrase === value);
    if (data) {
      setSelected(data.phrase);
    }
    if (!data && selected) {
      setSelected(null);
    }
  }, [value, selected]);

  const handleOnchange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App d-flex flex-column justify-content-between vh-100">
      <header className="p-3 custom-header"><h1 >Test task</h1></header>
      <div className="d-flex flex-column align-items-center justify-content-center py-3 flex-1">
        <div className="d-flex align-items-center mb-4">
          <Form.Label className="mr-2">Input:</Form.Label>
          <Form.Control type="text" placeholder="value" onChange={handleOnchange} value={value}/>
        </div>
        <Chart selectedName={selected}/>
      </div>
      <footer className="d-flex align-items-center justify-content-end px-5 py-4">
        <span>Developed by - <a href="https://www.facebook.com/artur.rusak.5" target="_blank">Artur Rusak</a></span>
      </footer>
    </div>
  );
}

export default App;
