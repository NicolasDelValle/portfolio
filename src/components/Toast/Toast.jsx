import { useEffect, useRef } from "react";
import "./ToastStyle.css";
import correctIcon from "../../assets/correct-icon.svg";

function Toast({ show = false, onClose, delay = 3000, text = "" }) {
  const toast = useRef(null);
  useEffect(() => {
    if (show) {
      toast.current.classList.add("active");
      setTimeout(() => {
        toast.current.classList.remove("active");
        onClose(false);
      }, delay);
    }
  }, [show, onClose, delay]);

  return (
    <div ref={toast} className="toast-container">
      <div className="toast default-shadow font-main-white bg-main-color-complementary">
        <img className="toast-image default-shadow" src={correctIcon} alt="" />
        <span className="default-shadow">{text}</span>
      </div>
    </div>
  );
}

export default Toast;
