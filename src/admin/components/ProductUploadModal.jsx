import React from "react";
import styles from "./modal.module.css";

const ProductUploadModal = ({ setIsProductModalOpen }) => {
  return (
    <>
      
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Info</h5>
          </div>
        
          <div className={styles.modalContent}>
            {'Product uploaded successfully'}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => setIsProductModalOpen(false)}
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

export default ProductUploadModal;
