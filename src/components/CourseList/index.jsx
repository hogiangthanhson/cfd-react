import React from "react";
import CourseItem from "../CourseItem";

export function CourseList(props) {
  return (
    <section className="section-courseoffline">
      <div className="container">
        {props.title && <h2 class="main-title">{props.title}</h2>}
        {props.description && <p className="top-des">{props.description}</p>}
        <div className="textbox">
          {props.smallTitle && <h3 class="sub-title">{props.smallTitle}</h3>}
          {props.name && <h2 class="main-title">{props.name}</h2>}
          </div>
        <div className="list row">
          {props.type === "offline" &&
            props.list.map(function (o, i) {
              return <CourseItem key={i} {...o} />;
            })}
          {props.type === "online" &&
            props.list.map(function (o, i) {
              return <CourseItem key={i} {...o} />;
            })}
          ;
        </div>
      </div>
    </section>
  );
}
