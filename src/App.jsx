import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import React, { useState } from "react";

function App() {
   const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Title></Title>

      <div>
        <input type="text" />
        <button onClick={() => null}>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
          paragraph="Code along with Frontend Simplified step by step"
        ></Todo>
        <Todo
          title="Finish Interview Section"
          paragraph="Finish every interview question in the next 6 weeks."
        ></Todo>
        <Todo title="Land a $100k Job" paragraph="Apply to 100 jobs" />
      </div>
      {showModal && <Modal title="Are you sure?" />}
    </div>
  );
}

export default App;
