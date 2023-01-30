import React, { useState, useContext } from "react";
import Textinput from "../Textinput/Textinput";
import LinkButton from "../Button/LinkButton";

// import { AllTripContext } from "../../store/AllTripContext";
// import { TripContext } from "../../store/TripContext";
// import { useNavigate } from "react-router";

function BannerForm() {
  // const { allPost, setAllPost } = useContext(AllTripContext);
  // const { setPostContent } = useContext(TripContext);
  // const navigate = useNavigate();

  // const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);
  //   const newFilter = allPost.filter((value) => {
  //     return (
  //       value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
  //       value.category.toLowerCase().includes(searchWord.toLowerCase())
  //     );
  //   });

  //   if (searchWord === "") {
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  // };

  // const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };
  // const handleSelectedSearch = (item) => {
  //   setPostContent(item);
  //   navigate("/view");
  // };
  // const handleSearchClick = () => {
  //   if (filteredData.length === 0) {
  //     alert(
  //       "No items found.., please search by product category or product name"
  //     );
  //   } else {
  //     setAllPost(filteredData);
  //     navigate("/viewmore");
  //   }
  // };

  return (
    <form className="col-12 banner-form">
      <div className="row">
        <div className="col-sm-3 form-group gx-2">
                  <Textinput
                    type="text"
                    className="form-control"
                    placeholder="From"
                    required={true}
                    inputIcon="fa fa-map-marker"
                  />
                </div>
                <div className="col-sm-3 form-group gx-2">
                  <Textinput
                    type="text"
                    className="form-control"
                    placeholder="To"
                    required={true}
                    inputIcon="fa fa-dot-circle-o"
                  />
                </div>
                <div className="col-sm-3 form-group gx-2">
                  <Textinput
                    type="text"
                    className="form-control"
                    placeholder="Date"
                    required={true}
                    inputIcon="fa fa-calendar"
                  />
                </div>
                <div className="col-sm-2 form-group gx-2">
                  <Textinput
                    type="text"
                    className="form-control"
                    placeholder="# seats"
                    required={true}
                    inputIcon="fa fa-user-circle-o"
                  />
                </div>
                <div className="col-sm-1 form-group gx-2">
                  <LinkButton
                    to="/find-trip"
                    className="btn-custom btn-custom-one"
                    btnIcon="fa fa-search"
                  />
                </div>

        {/* <input
          type="text"
          placeholder="Find Cars"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          <div onClick={handleSearchClick}> search </div>
        </div> */}
      </div>
    </form>
  );
}

export default BannerForm;
