import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Button, Header, List, Person} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Person name="miraj" age="21"/>
    <Button text="click" onClick={() => alert("clicked!!!")}/>
    <Header title="This is a title"/>
    <List items={["item1","item2","item3","item4"]}/>
  </React.StrictMode>
);

reportWebVitals();
