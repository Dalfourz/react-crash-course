import "./App.css";
// import Todo from "./components/Todo";
// import Title from "./components/Title";
// import Modal from "./components/Modal";
// import Counter from "./components/Counter";
// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  // const [showModal, setShowModal] = useState(false);

  // function clicked() {
  //   if (showModal === false) {
  //     setShowModal(true);
  //   }

  // }

  // function cancelModal() {
  //   setShowModal(false);
  // }

  // function confirmModal() {
  //   setShowModal(false);
  // }

  // useEffect(()=> {
  //   console.log('useEffect ran')
  // },[])

  return (

    <div>
      <p>asd 1223233</p>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>

    // <div>
    //   <Title></Title>

    //   <div>
    //     <input type="text" />
    //     <button onClick={() => null}>Add Todo</button>
    //   </div>
    //   <div className="todo__wrapper">
    //     <Todo
    //       onDelete={clicked}
    //       title="Finish Frontend Simplified"
    //       paragraph="Code along with Frontend Simplified step by step"
    //     ></Todo>
    //     <Todo
    //       onDelete={clicked}
    //       title="Finish Interview Section"
    //       paragraph="Finish every interview question in the next 6 weeks."
    //     ></Todo>
    //     <Todo
    //       onDelete={clicked}
    //       title="Land a $100k Job"
    //       paragraph="Apply to 100 jobs"
    //     />
    //   </div>
    //   {showModal && (
    //     <Modal
    //       cancelModal={cancelModal}
    //       confirmModal={confirmModal}
    //       title="Are you sure?"
    //     />
    //   )}
    // </div>
  );
}

export default App;
