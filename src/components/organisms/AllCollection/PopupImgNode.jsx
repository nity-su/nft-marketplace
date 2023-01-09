import ReactDOM from "react-dom";

export default function PopupImgNode({ children }) {
  return ReactDOM.createPortal(children, document.body);
}
