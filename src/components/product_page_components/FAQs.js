import React from 'react';

const FAQs = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs</h2>
            <ul className="text-gray-600">
                <li className="mb-2">
                    <strong>Q: What is the return policy?</strong>
                    <br />A: You can return the product within 30 days of purchase.
                </li>
                <li className="mb-2">
                    <strong>Q: Is there a warranty on the product?</strong>
                    <br />A: Yes, this product comes with a 1-year warranty.
                </li>
                <li className="mb-2">
                    <strong>Q: How long does shipping take?</strong>
                    <br />A: Shipping usually takes 3-5 business days.
                </li>
            </ul>
        </div>
    );
};

export default FAQs;
