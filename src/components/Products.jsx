import data from "../utils/data.json"

const Products = () => {
    console.log(data)
    return (
        <div className="product__container">
        <div className="product__cards">
        <div className="row">
        {
            data.map(product => (
                <div className="col-3 " key={product.id}>
                <div className="card" >
                <img src={product.image} className="card-img-top" alt="..."
                style={
                    {
                        width:300,
                            height:300
                    }

                }/>
                <div className="card-body">
                <h5 className="card-title">{product.name} title</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-success">Add to cart</button>
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
