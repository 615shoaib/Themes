import React from "react";
import AddtoCart from "../Homepage/CatgoeyBased/AddTocart";
import ViewCart from "../Homepage/CartDetailpage/ViewCart";
import HeartIcon from "../Homepage/CatgoeyBased/HeartIcon";

const ListView = ({ products,loading }) => {
  return (
    <>
    {
        loading ? (
            <>
               <div className="row mb-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="col-lg-6 col-md-6 col-sm-12 mt-3">
              <div className="card px-4">
                <Skeleton variant="rectangular" width={300} height={200} animation="wave" />
                <div className="card-body">
                  <h5 className="card-title">
                    <Skeleton variant="text" width={200} animation="wave" />
                  </h5>
                  <p className="card-text">
                    <Skeleton variant="text" width={150} animation="wave" />
                  </p>
                  <p className="card-text">
                    <Skeleton variant="text" width={180} animation="wave" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
            </>
        ):(
            <>
            <div className="container">
            <div className="row">
      {products.map((product, index) => (
        <div key={index} className="col-lg-6 col d-flex">
          <div className="card">
            {product.images && product.images.length > 0 && (
              <img src={product.images[0].src} alt={product.name} className="card-img-top small-image" />
            )}
            <div className="mt-auto d-flex justify-content-between align-items-center">
              <AddtoCart product={product} />
              <ViewCart product={product} />
              <HeartIcon product={product} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
            </>
        )
    }
    </>
    
  );
};

export default ListView;
