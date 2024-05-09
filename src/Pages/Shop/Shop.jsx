import { useEffect, useState } from "react";
import { fetchProductsAsync } from "../../Redux/Reducer/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import ListView from "./listView";
import AddtoCart from "../Homepage/CatgoeyBased/AddTocart";
import ViewCart from "../Homepage/CartDetailpage/ViewCart";
import HeartIcon from "../Homepage/CatgoeyBased/HeartIcon";

function Shop() {
  const dispatch = useDispatch();
  const { ProductsItems } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid"); // State to track view mode (grid or list)
  const products = ProductsItems;

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProductsAsync());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="container mt-5">
      {/* View mode toggle buttons */}
      <div className="d-flex justify-content-end mb-3 gap-2">
        <button
          className={`btn ${
            viewMode === "grid" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => toggleViewMode("grid")}
        >
          <i className="fas fa-th-large px-2"></i>
          Grid View
        </button>
        <button
          className={`btn mx-3  ${
            viewMode === "list" ? "btn-primary" : "btn-secondary"
          }`}
          onClick={() => toggleViewMode("list")}
        >
          <i className="fa fa-solid fa-list px-2"></i>
          List View
        </button>
      </div>

      {/* Render products based on view mode */}
      {loading ? (
        <div className="row mb-5">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 mt-3">
              <div className="card px-4">
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={200}
                  animation="wave"
                />
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
      ) : (
        <>
          {viewMode === "grid" ? (
            <div className="row row-cols-lg-4 row-cols-1 row-cols-md-3 g-4">
              {products.map((product, index) => (
                <div key={index} className="col">
                  <div className="card">
                    {product.images && product.images.length > 0 && (
                      <img
                        src={product.images[0].src}
                        alt={product.name}
                        className="card-img-top small-image"
                      />
                    )}
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <AddtoCart product={product} />
                      <ViewCart product={product} />
                      <HeartIcon product={product} />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ListView products={products} loading={loading} />
          )}
        </>
      )}
    </div>
  );
}

export default Shop;
