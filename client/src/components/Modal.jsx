
export default function Modal({message, handleClose, showModal, header}) {

    function closeModal(){
        handleClose(false)
    }
    return (
        <>
                <div
            className={`modal ${showModal ? "show" : ""}`}
            tabIndex="-1"
            style={{ display: showModal ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{header}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{message}</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}