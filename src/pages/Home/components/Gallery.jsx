import React, { useEffect } from "react";

let $ = window.$;
export default function Gallery(props) {
  
  useEffect(() => {
    let $carouselGallery = $(".homepage .section-gallery .list"),
      $progressBar = $(".homepage .section-gallery .timeline .process");

    $carouselGallery.flickity({
      contain: true,
      wrapAround: false,
      freeScroll: true,
      cellAlign: "left",
      lazyLoad: 3,
      imagesLoaded: true,
      prevNextButtons: false,
    });

    $carouselGallery.on("scroll.flickity", function (event, progress) {
      progress = Math.max(0.05, Math.min(1, progress));
      $progressBar.width(progress * 100 + "%");
    });

    let ctrPrevGallery = $(".homepage .section-gallery .btn_ctr.prev"),
      ctrNextGallery = $(".homepage .section-gallery .btn_ctr.next");

    ctrPrevGallery.on("click", function () {
      $carouselGallery.flickity("previous");
    });
    ctrNextGallery.on("click", function () {
      $carouselGallery.flickity("next");
    });
  }, []);
  return (
    <section className="section-gallery">
      <div className="textbox">
        <h2 className="main-title">Chúng ta là một team</h2>
      </div>
      <div className="list">
        {props.gallery.map((e, i) => <img data-flickity-lazyload={e} key={i} alt="" />)}
      </div>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
}
