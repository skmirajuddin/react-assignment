import logo from './logo.svg';
import './App.css';
/* 1. Create a component named "Person" that takes two props - "name" and "age". The component should display the person's name and age in a paragraph element. */
export function Person(props) {
  return (
    <p>
      {props.name} is {props.age} years old.
    </p>
  );
}

// 2. Create a component named "Button" that takes two props - "text" and "onClick". The component should display a button element with the given text and call the onClick function when clicked.
export function Button(props){
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );
}

// 3. Create a component named "Header" that takes one prop - "title". The component should display a header element with the given title.
export function Header(props){
  return(
    <h2>{props.title}</h2>
  );
}

// 4. Create a component named "List" that takes one prop - "items". The component should display an unordered list element with the given list items.
export function List(props) { 

  return <ul>{props.items.map((item) => <li>{item}</li>)}</ul>;
 }


// export default Person;
