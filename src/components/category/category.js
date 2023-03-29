import React from 'react';
import styles from './category.module.css';
import { Link } from 'react-router-dom';

const Category = ({ name, iconClass, message, link }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
      <Link
        to={`/chat/${link}`}
        className={`${styles.cardStyle} card  p-4 text-center shadow-lg`}
      >
        <h2>{name}</h2>
        <i className={iconClass}></i>
        <p className="pt-5">{message}</p>
      </Link>
    </div>
  );
};

export default Category;
