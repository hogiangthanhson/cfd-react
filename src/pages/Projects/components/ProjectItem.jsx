import React from "react";

export default function ProjectItem(props) {
  return (
    <a href="#" className="item col-md-6">
      <div className="wrap">
        <div className="cover">
          <img src={props.img} alt="" />
        </div>
        <div className="info">
          <div className="name">{props.name}</div>
          <div className="makeby">Hoàn thành với {props.makeBy} </div>
        </div>
      </div>
    </a>
  );
}
