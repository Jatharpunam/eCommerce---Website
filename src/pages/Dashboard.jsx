import React, { useState } from 'react';
import Navbar from '../../components/Navbar.jsx';
import Card from '../../components/Card.jsx';

const Dashboard = ({ products }) => {
  const [productsState, setProductsState] = useState(products);

  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap">
        {products.map((product, index) => (
          <div key={index}>
            <div className="badge bg-secondary">{product.category}</div>
          </div>
        ))}
      </div>

      <div className="container">
        <div className="row">
          {productsState.map((product, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
