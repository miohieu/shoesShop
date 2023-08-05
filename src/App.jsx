import { useSelector, useDispatch } from 'react-redux'
import { add } from './features/cart/cartSlice'
import Header from './components/Header'
import Products from './components/Products'

import './index.css'

function App() {
    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();

    return (
        <div>
        <Header></Header>
        <Products/>
        </div>
    )
}

export default App
