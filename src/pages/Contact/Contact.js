import React from "react";
import DataCard from "../../components/Card/DataCard";
import InnerBanner from "../../components/InnerBanner/InnerBanner";
import Counter from "../../components/Study/Counter";
import Form from "../../components/Study/Form";
import MyCounter from "../../components/MyCounter";

const Contact = () => {
  return (
    <div className="body-wrapper">
      <section className="banner">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Conatct</h2>
          </div>
        </div>
      </section>

      <section className="sec-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <DataCard
                cardName="card-wrapper"
                cardIcon="fa fa-user-o"
                cardTitle="Smart"
                cardContent="Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa."
              />
            </div>
            <div className="col-lg-4">
              <DataCard
                cardName="card-wrapper"
                cardIcon="fa fa-user-o"
                cardTitle="Smart"
                cardContent="Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa."
              />
            </div>
            <div className="col-lg-4">
              <DataCard
                cardName="card-wrapper"
                cardIcon="fa fa-user-o"
                cardTitle="Smart"
                cardContent="Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa."
              />
            </div>
          </div>
        </div>
      </section>

      <Counter />
      <Form />
      <MyCounter />
    </div>
  );
};

export default Contact;
