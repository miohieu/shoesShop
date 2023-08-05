
const Modal = () => {
  return (
      <div className="product-modal" style={
          {
              width: 200,
                  height: 200,
                  display: "flex",
                  position: "fixed",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 9999
          }
      }>
      Modal body
      </div>
  )
}

export default Modal
