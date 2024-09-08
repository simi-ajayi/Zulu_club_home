import React from 'react';
import { Link } from 'react-router-dom';
import Card6 from './Card6'; 

const ViewAllOutlets = ({ data = [], error, loader }) => {
  return (
    <div className="mt-20 mx-5">
      <div className="flex flex-row items-center justify-between mb-5">
        <h1 className="font-bold text-4xl">Outlets Near Me</h1>
        <div>
          <Link to="/sellerhome" className="text-blue-700">
            Back
          </Link>
        </div>
      </div>

     
      {error && <p className="text-red-500">An error occurred. Please try again later.</p>}
      {loader && <p>Loading...</p>}

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data.map((value) => (
          <div className="p-2" key={value.seller_id}>
            <Card6 data={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllOutlets;
