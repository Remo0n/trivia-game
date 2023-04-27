import ReactPortal from "./ReactPortal";
import classes from "./modal.module.css";
// Define the props of Modal.
type ModalProps = {
  isOpen: boolean;
  title?: Array<any>;
  bgColor: string;
};
// Modal component.
const Modal = ({ isOpen, title, bgColor }: ModalProps) => {
  // Return null if isOpen props from parent is false.
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={classes.modal} style={{ background: bgColor }}>
        {/* Modal Heading */}
        <div>
          <h3> {title}</h3>
        </div>
      </div>
    </ReactPortal>
  );
};
export default Modal;
