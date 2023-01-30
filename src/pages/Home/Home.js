import LinkButton from "../../components/Button/LinkButton";
import Textinput from "../../components/Textinput/Textinput";
import DataCard from "../../components/Card/DataCard";
import defaultImage from "../../assets/images/default-image.jpg";
import TripCardCarousel from "../../components/Carousel/TripCardCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerForm from "../../components/Form/BannerForm";

const Home = () => {
  const adImgResponsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <h1>Banner</h1>
            <BannerForm />
            {/* <form className="col-6 mx-auto banner-form">
              <div className="row">
                <div className="col-sm-5 form-group gx-2">
                  <Textinput
                    type="text"
                    className="form-control"
                    name="text"
                    placeholder="From"
                    required={true}
                    inputIcon="fa fa-map-marker"
                  />
                </div>
                <div className="col-sm-5 form-group gx-2">
                  <Textinput
                    type="text"
                    className="form-control"
                    name="text"
                    placeholder="To"
                    required={true}
                    inputIcon="fa fa-dot-circle-o"
                  />
                </div>
                <div className="col-sm-2 form-group gx-2">
                  <LinkButton
                    to="/find-trip"
                    className="btn-custom btn-custom-one"
                    btnIcon="fa fa-search"
                  />
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </section>

      <section className="about sec-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <DataCard
                cardName="card-wrapper"
                cardIcon="fa fa-cube"
                cardTitle="Smart"
                cardContent="Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa."
              />
            </div>
            <div className="col-lg-4">
              <DataCard
                cardName="card-wrapper"
                cardIcon="fa fa-dot-circle-o"
                cardTitle="Simple"
                cardContent="Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa."
              />
            </div>
            <div className="col-lg-4">
              <DataCard
                cardName="card-wrapper"
                cardIcon="fa fa-magic"
                cardTitle="Seamless"
                cardContent="Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lgt-blue sec-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-title-lft">
                <div className="title-div d-inline-block">
                  <h3>Destinations</h3>
                </div>
                <div className="more-div d-inline-block">
                  <LinkButton to="/view-more" className="more-btn" btnName="View All" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <TripCardCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="ad-sec sec-wrap">
        <div className="container">
          <div className="row">
            <Carousel
              responsive={adImgResponsive}
              swipeable={false}
              draggable={false}
              showDots={true}
              arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all .9"
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              itemClass="mx-1"
              centerMode={true}
            >
              <div className="ad-img-canvas">
                <img src={defaultImage} alt="ad pic" />
              </div>
              <div className="ad-img-canvas">
                <img src={defaultImage} alt="ad pic" />
              </div>
              <div className="ad-img-canvas">
                <img src={defaultImage} alt="ad pic" />
              </div>
              <div className="ad-img-canvas">
                <img src={defaultImage} alt="ad pic" />
              </div>
            </Carousel>
            {/* <div className="ad-img-canvas">
              <img src={defaultImage} alt="ad pic" />
            </div> */}
          </div>
        </div>
      </section>

      <section className="nav-footer-sec sec-wrap">
        <div className="container">
          <div className="row">
            <div className="col-2 footer-links">
              <h6>links</h6>
              <ul className="list-group">
                <li>
                  <LinkButton to="/" btnName="About" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Help" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Terms of Use" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Privacy Policy" />
                </li>
              </ul>
            </div>
            <div className="col-2 footer-links">
              <h6>links</h6>
              <ul className="list-group">
                <li>
                  <LinkButton to="/" btnName="About" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Help" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Terms of Use" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Privacy Policy" />
                </li>
              </ul>
            </div>
            <div className="col-2 footer-links">
              <h6>links</h6>
              <ul className="list-group">
                <li>
                  <LinkButton to="/" btnName="About" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Help" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Terms of Use" />
                </li>
                <li>
                  <LinkButton to="/" btnName="Privacy Policy" />
                </li>
              </ul>
            </div>
            <div className="col-6">
              <h6>Mobile App</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
