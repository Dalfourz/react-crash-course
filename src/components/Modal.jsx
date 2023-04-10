import "./Modal.css";

function Modal({ title }) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={(event) => console.log(event.target.value)}
          >
            Cancel
          </button>

          <button
            className="btn"
            onClick={(event) => console.log(event.target.value)}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;