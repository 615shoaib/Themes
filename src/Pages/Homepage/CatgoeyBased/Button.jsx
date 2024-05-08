import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedCategory, fetchProducts } from './Category';
import { NavLink } from 'react-router-dom';

const Button = ({ filteredCategories, selectedCategory, loading, setLoading }) => {
  const dispatch = useDispatch();


 



  const handleCategorySelect = (categoryId) => {
    if (categoryId !== selectedCategory) {
      setLoading(true); 
      dispatch(setSelectedCategory(categoryId)); 
      dispatch(fetchProducts(categoryId)) 
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    }
    
  };

  return (
    
    <div className="d-flex flex-column flex-shrink-0 sidebar text-dark bg-dark mx-0 mb-2 bg-dark">      
    {filteredCategories.map((category) => (
         <ul className="nav flex-column mb-auto ">
         <li key={category.id} >
           <NavLink
             to="/"
             className={`nav-link text-white activeclass border-none  ${selectedCategory === category.id ? 'bg-secondary' : 'btn-dark'}`}             aria-current="page"
             style={{ borderBottom: "1px solid #ccc", minHeight: '80px' }}
             onClick={() => handleCategorySelect(category.id)}
          disabled={loading}
             >
             {category.name}
           </NavLink>
         </li>
          </ul>
      ))}
    </div>
  );
};

export default Button;
