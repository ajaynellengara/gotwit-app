import React from "react";
import BannerForm from "../Form/BannerForm";
const InnerBanner = ({ pageName }) => {
  return (
    <section className="banner sec-wrap">
      <div className="container">
        <div className="row">
          <h1>{pageName}</h1>
          <BannerForm />
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;
