const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h3>Shopping Cart</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} style={{ marginBottom: '10px' }}>
                            <p>{item.name} - ${item.price} x {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
            <h4>Total: ${calculateTotal()}</h4>
        </div>
    );
};
export default Cart;