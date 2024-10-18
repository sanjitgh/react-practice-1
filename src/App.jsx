import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./ToDo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";
import Book from "./Book";

function App() {
  const actors = ["Sakib", "Jasim", "Rubel", "Manna"];
  const singers = [
    { id: 1, name: "Dr. Mahfujur", age: 55 },
    { id: 2, name: "Abul boul", age: 44 },
    { id: 3, name: "Kajol Dewan", age: 33 },
    { id: 4, name: "Pretom Hasan", age: 30 },
  ];
  
  const books = [
    { id: 1, name: "Math", price: 100 },
    { id: 2, name: "Physics", price: 200 },
    { id: 3, name: "Biology", price: 300 },
    { id: 4, name: "English", price: 400 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      {/* {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))} */}

      {/* <Actor name="Sanjit"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))} */}

      {/* <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Learn Native" isDone={false}></ToDo>
      <ToDo task="Learn Js" isDone={true}></ToDo>
      <ToDo task="Try JSX" isDone={false}></ToDo> */}

      {/* <Device name="Laptop" price="80"></Device>
      <Device name="Mobile" price="30"></Device>
      <Device name="Watch" price="10"></Device>

      <Person></Person>

      <Student grade="7" score="99"></Student>
      <Student grade="2" score="88"></Student>
      <Student></Student>

      <Developer></Developer> */}
    </>
  );
}

function Student({ grade = 0, score = 0 }) {
  return (
    <div className="student">
      <h3>This is student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Device(props) {
  return (
    <h3>
      This Device: {props.name} Price: {props.price}
    </h3>
  );
}

function Person() {
  const age = 24;
  return <h3>I am a person {age}</h3>;
}

function Developer() {
  const DeveloperStyle = {
    margin: "20px",
    padding: "30px",
    borderRadius: "12px",
    border: "1px solid royalblue",
  };
  return (
    <div style={DeveloperStyle}>
      <h1>Developer</h1>
      <p>Coding:</p>
    </div>
  );
}

export default App;
