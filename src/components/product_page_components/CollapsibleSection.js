import React, { useState } from 'react';

const CollapsibleSection = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={onClick}
            >
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <span className="text-gray-600">
                    {isOpen ? '-' : '+'}
                </span>
            </div>
            {isOpen && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default CollapsibleSection;
