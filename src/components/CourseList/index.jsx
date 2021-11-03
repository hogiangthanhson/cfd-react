import React from "react";
import CourseItem from "../CourseItem";

export function CourseList(props) {
  return (
    <section className="section-courseoffline">
      <div className="container">
        {props.title && <h2 className="main-title">{props.title}</h2>}
        {props.description && <p className="top-des">{props.description}</p>}
        <div className="textbox">
          {props.smallTitle && <h3 className="sub-title">{props.smallTitle}</h3>}
          {props.name && <h2 className="main-title">{props.name}</h2>}
        </div>
        <div className="list row">
          {props.list.map(function (o, i) {
            if (o.course_type === "offline") return <CourseItem key={i} {...o} />;
          })}
          {props.list.map(function (o, i) {
            if (o.course_type === "online") return <CourseItem key={i} {...o} />;
          })}
          ;
        </div>
      </div>
    </section>
  );
}
