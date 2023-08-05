import { toggleModal } from "../features/product/productDetails"
import { add } from "../features/cart/cartSlice"
import data from "../utils/data.json"
import Modal from "./Modal"
import { useDispatch, useSelector } from "react-redux"

const Products = () => {

    const isModal = useSelector(state => state.product.isModal)
    const dispatch = useDispatch()


    const handleAdd = (id) => {

        const shoe = data.find(shoe => shoe.id === id)
            dispatch(add(shoe)) 
    }

    return (
        <div className="product__container">
            <div className="product__cards">

        {isModal && <Modal />}
        <div className="row">
        {
            data.map(product => (
                <div className="col-3 " key={product.id}>
                <div className="card" >
                <img src={product.image} className="card-img-top" alt="..."
                style={
                    {
                        width: 300,
                            height: 300
                    }
                }
                />
                <div className="card-body">
                <h5 className="card-title">{product.name} title</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-success"
                onClick={() => {
                    handleAdd(product.id)
                }
                }>Add to cart</button>
                <button className="btn btn-primary"
                onClick={() => { dispatch(toggleModal()) }}>
                Product details</button>
                </div>
                </div>
                </div>
            ))
        }
        </div>
        </div>

        </div>
    )
}

export default Products
