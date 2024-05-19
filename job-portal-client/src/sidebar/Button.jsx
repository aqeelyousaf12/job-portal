import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  // let a= {onClickHandler}
  // console.log(a)
  return (
    <div
      onClick={onClickHandler}
      value={value}
      className={`px-4 py-1 border text-base hover:bg-blue hover:text-white hover:cursor-pointer`}
    >
      {title}
    </div>
  );
};

export default Button;
