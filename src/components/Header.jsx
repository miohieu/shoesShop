import { useSelector } from "react-redux"

const Header = () => {

    const cartItems = useSelector(state => state.cart.items)

    console.log(cartItems)

    return (
        <div>
            <h2>Shyber Shop</h2>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Cart</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
        <div className="row">
        <div className="col">San pham </div>
        <div className="col"> So luong</div>
        <div className="col"> Tong tien</div>
        </div>
        {cartItems.map( item => (
            <div className="row" key={item.id}>
            <div className="col">{item.name} 
            <img
            src={item.image} alt="shoe"
            style={{
                width: 100
            }}/>

            </div>
            <div className="col">{item.itemQuantity}</div>
            <div className="col">{item.price}</div>
            </div>

        )
        )}
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Cart
            </button>

        </div>
    )
}

export default Header
