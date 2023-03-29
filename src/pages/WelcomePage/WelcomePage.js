import React from 'react';

const WelcomePage = () => {
  return (
    <div className="p-3 pb-5 bg-light m-5 shadow-lg text-center">
      <h3 className="p-5">Welcome</h3>
      <p>This is a basic react application which uses API from chatGpt</p>
      <p>Click the button below to proceed</p>
      <div>
        <button className='btn btn-lg'><i className="bi bi-arrow-right-circle-fill"></i></button>
      </div>
    </div>
  );
};

export default WelcomePage;
