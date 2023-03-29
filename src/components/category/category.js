import React from 'react';
import styles from './category.module.css';

const Category = ({ name, iconClass, message }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div className={`${styles.cardStyle} card  p-4 text-center shadow-lg`}>
        <h2>{name}</h2>
        <i class={iconClass}></i>
        <p className="pt-5">{message}</p>
      </div>
    </div>
  );
};

export default Category;
