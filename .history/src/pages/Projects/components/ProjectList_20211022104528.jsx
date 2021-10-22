import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectTitle from "./ProjectTitle";

export default function ProjectList({description, listProject}) {
  return (
    <section className="section-1">
      <div className="container">
        <ProjectTitle />
        <div className="list row">
          {listProject.map((o, i) => (<ProjectItem key={i} name={o.name} makeBy={o.makeBy} img={o.img}  />))};
        </div>
        <div className="bottom">
          <div className="btn overlay round btn-more">tải thêm</div>
        </div>
      </div>
    </section>
  );
}
