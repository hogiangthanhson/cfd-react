import React from "react";
import Course  from "../Course";

export function CourseList({title, description, smallTitle, name, list}) {
  return (
    <section className="section-courseoffline">
      <div className="container">
        {title && <h2 class="main-title">{title}</h2>}
        {description && <p className="top-des">{description}</p>}
        <div className="textbox">
          {smallTitle && <h3 class="sub-title">{smallTitle}</h3>}
          <h2 className="main-title">{name}</h2>
        </div>
        <div className="list row">
          {list.map((o, i) => (
            <Course
              key={i}
              status={o.status}
              person={o.person}
              liked={o.liked}
              name={o.name}
              description={o.description}
              teacher={o.teacher}
              img = {o.img}
              share = {o.share}
            />
          ))}
          ;
        </div>
      </div>
    </section>
  );
}
