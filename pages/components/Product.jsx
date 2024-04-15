import React, { useState } from "react";

const Product = (props) => {
  const [numberLogic, setnumberLogic] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const HandlerChange = () => {
    setnumberLogic((p) => numberLogic + 1);
    setisLoading(true);
  };
  const DecreaseChange = () => {
    if (numberLogic === 0) {
      return setisLoading(false);
    } else {
      setisLoading(true);
      return setnumberLogic((p) => numberLogic - 1);
    }
  };
  return (
    <div className="col-md-4 col-sm-6">
      <div key={props.date.id} className="card">
        <img
          src={props.date.indexImageUrl}
          className="card-img-top img-fluid"
        />
        <div className="cardbody">
          <h5 className="">{props.date.price}</h5>
          <div className="divBtn">
            <button onClick={HandlerChange} className="btn btn-primary mx-1">
              Add
            </button>

            {isLoading ? (
              <label className="mx-3 labelProduct">{numberLogic}</label>
            ) : (
              false
            )}
            <button onClick={DecreaseChange} className="btn btn-primary mx-1">
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
