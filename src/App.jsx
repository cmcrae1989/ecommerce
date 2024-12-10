import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 }
    ];

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) return; // Prevent negative or zero quantity
        setCart(cart.map(item =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
        ));
    };

    return (
        <div>
            <h1>React Shopping Cart</h1>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>
    );
}

export default App
