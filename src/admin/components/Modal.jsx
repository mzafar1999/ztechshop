import React from "react";
import styles from "./modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Info</h5>
          </div>
        
          <div className={styles.modalContent}>
            {'Image uploaded successfully'}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
