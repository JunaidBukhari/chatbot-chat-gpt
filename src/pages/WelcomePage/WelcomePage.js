import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="p-3 pb-5 bg-light m-5 shadow-lg text-center">
      <h3 className="p-5">Welcome</h3>
      <p>This is a basic react application which uses API from chatGpt</p>
      <p>Click the button below to proceed</p>
      <div>
        <Link to="/categories" className="btn btn-lg">
          <i className="bi bi-arrow-right-circle-fill fs-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
