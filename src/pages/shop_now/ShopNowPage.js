import React from 'react';

const ShopNowPage = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 'Rs. 200.00', discount: '10%', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 'Rs. 200.00', discount: '15%', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 'Rs. 200.00', discount: '20%', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', price: 'Rs. 200.00', discount: '25%', imageUrl: 'https://via.placeholder.com/150' },
    ];

    const handleDelete = (id) => {
        console.log(`Product with ID ${id} deleted`);
        // Add delete functionality here
    };

    const handleAddToCart = (id) => {
        console.log(`Product with ID ${id} added to cart`);
        // Add add-to-cart functionality here
    };

    const handleBuyNow = (id) => {
        console.log(`Product with ID ${id} purchased`);
        // Add buy now functionality here
    };

    return (
        <div className="min-h-screen py-10">
            <header className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Shop Now</h1>
                <p className="text-lg text-gray-600">Explore our range of products</p>
            </header>

            <div className="max-w-7xl mx-auto space-y-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-5 flex items-center space-x-6">
                        <img src={product.imageUrl} alt={product.name} className="w-32 h-32 object-cover rounded" />
                        <div className="flex-1 text-left">
                            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                            <p className="text-lg text-gray-600">Price: {product.price}</p>
                            <p className="text-sm text-green-500">Discount: {product.discount}</p>
                        </div>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => handleAddToCart(product.id)}
                                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                                Add to Cart
                            </button>
                            <button
                                onClick={() => handleBuyNow(product.id)}
                                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
                                Buy Now
                            </button>
                            <button
                                onClick={() => handleDelete(product.id)}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopNowPage;
