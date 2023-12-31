import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../features/product/productDetails"
import "./Modal.css"

const Modal = () => {

    const dispatch = useDispatch()
    const item = useSelector(state => state.product.item)

    return (
        <div className="text-dark product-modal modal-container" >
        <div className="modal-detail">

        <h1>{item.name}</h1>
        <img src={item.image} alt="addidas" className="modal-image"/>
                <span>
                    <button className="btn btn-danger close-button" 
        onClick={() => {
            dispatch(closeModal())
        }}> &times;

                    </button>
                </span>
        <span className="modal-price"> $ {item.price}</span>
        <div>
        {item.description}
        </div>
        </div>
        </div>

    )
}

export default Modal
