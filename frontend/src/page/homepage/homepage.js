import React, { useEffect, useState } from "react";
import "./homepage.scss";
import axios from "axios";

import { connect } from "react-redux";
import PreviewCollection from "../../components/preview-collection/preview-collection.js";
import { fetchData } from "../../redux/collection/colllection-action";
import { createStructuredSelector } from "reselect";
import { selectCollectionItems } from "../../redux/collection/collection-selector";

const HomePage = ({ fetchData, robotsData }) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="home-page">
      <div className="container">
        <h2 className="mb-4 text-center">ROBOTS</h2>
        <div className="row">
          {robotsData.map((collection, idx) => (
            <PreviewCollection key={idx} item={collection}></PreviewCollection>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

const mapStateToProps = createStructuredSelector({
  robotsData: selectCollectionItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
