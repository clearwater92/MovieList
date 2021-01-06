import ReactDOM from 'react-dom';
import history from '../history';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest"
      onClick={props.onDismiss}
    >
      <div
        className="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll"
        onClick={(e) => e.stopPropagation()}
      >
				<div>{props.title}</div>
				<div>{props.content}</div>
				<div>{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Modal;
