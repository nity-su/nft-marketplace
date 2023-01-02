import ReactDOM from "react-dom";

export default function PopupSwapNode({ children }) {
  // const el = document.getElementById("Navibox");
  return ReactDOM.createPortal(children, document.body);
}
