import React from "react";

function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.name}</h3>
      <a href={item.link} className="work__button">
        Click Here <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItems;
