import React from "react";

export default function Member({name, description}) {
  return (
    <div className="wrap">
      <div className="cover">
        <img src="img/thumb-member.jpg" alt="" />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <p className="title">{description}</p>
      </div>
    </div>
  );
}
