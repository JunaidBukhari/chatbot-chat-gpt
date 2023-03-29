import React from 'react';
import Category from '../../components/category/category';

const Categories = () => {
  return (
    <div className="p-5">
      <div className="row">
        <Category
          link={'company'}
          name={'Company'}
          message={'Find name for your comapny'}
          iconClass={'bi bi-buildings-fill fs-2'}
        />
        <Category
          link={'email'}
          name={'Email'}
          message={'Enter your name to suggest some email'}
          iconClass={'bi bi-envelope-at-fill fs-2'}
        />
        <Category
          link={'pet'}
          name={'Pets'}
          message={'Find names for your pet'}
          iconClass={'bi bi-heart-fill fs-2'}
        />
      </div>
      <div className="row d-flex mt-5 justify-content-center">
        <Category
          link={'question'}
          name={'Have a question'}
          message={'Ask any question'}
          iconClass={'bi bi-patch-question-fill fs-2'}
        />
      </div>
    </div>
  );
};

export default Categories;
