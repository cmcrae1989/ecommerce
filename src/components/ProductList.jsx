const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            {products.map(product => (
                <div key={product.id} style={{ marginBottom: '10px' }}>
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;