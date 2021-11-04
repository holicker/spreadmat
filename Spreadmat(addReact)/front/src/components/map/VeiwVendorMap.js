import OpenColor from "open-color";
import React from "react";
import { Redirect, Route } from "react-router";
import styled from "styled-components";
import MakeQnaMapContainer from "../../containers/map/qna/MakeQnaMapContainer";
import MakeReviewMapContainer from "../../containers/map/review/MakeReviewMapContainer";
import { BasicDiv } from "../common/BasicDiv";
import { BasicItem } from "../common/BasicItem";
import Responsive from "../common/Responsive";
import VendorMenuBar from "../menubar/VendorMenuBar";
import DetailMerchandiseMap from "./merchandise/DetailMerchandiseMap";
import ListMerchandiseMap from "./merchandise/ListMerchandiseMap";
import ListQnaMap from "./qna/ListQnaMap";
import MakeQnaMap from "./qna/MakeQnaMap";
import ListReviewMap from "./review/ListReviewMap";
import VendorMainMap from "./VendorMainMap";

const columsNumber = 6;

const ViewVendorMapBlock = styled(BasicDiv)`
  position: relative;
  margin: 0px 0px;
  background-color: ${OpenColor.gray[5]};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ViewVendorMapWrapper = styled(Responsive)`
  width: 90%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(${columsNumber}, 1fr);
  grid-template-rows: 3rem 6rem 2rem auto;
  grid-auto-rows: 50px;
`;

const ViewVendorMapItem = styled(BasicItem)`
  grid: 1;

  &.title {
    grid-column-start: 1;
    grid-column-end: ${columsNumber + 1};
  }

  &.desc {
    grid-column-start: 1;
    grid-column-end: ${columsNumber + 1};
    grid-row-start: 2;
    grid-row-end: 3;
  }
  &.menu {
    grid-column-start: 1;
    grid-column-end: ${columsNumber + 1};
    grid-row-start: 3;
    grid-row-end: 4;
    align-items: center;
  }
  &.content {
    grid-column-start: 1;
    grid-column-end: ${columsNumber + 1};
  }
`;

const ViewVendorMap = ({ match }) => {
  console.log({ match });

  const { vendorid } = match.params;
  return (
    <ViewVendorMapBlock>
      <ViewVendorMapWrapper>
        <ViewVendorMapItem className="title">
          아이디는 {vendorid}입니다.
          <br />
          {vendorid}의 상점입니다.
        </ViewVendorMapItem>
        <ViewVendorMapItem className="menu">
          <VendorMenuBar vendorid={vendorid} match={match} />
        </ViewVendorMapItem>
        <ViewVendorMapItem className="desc">
          <VendorMainMap vendorid={vendorid} match={match} />
        </ViewVendorMapItem>

        <ViewVendorMapItem className="content">
          <Redirect path={match.url} to={match.url + "/merchandise"} exact />
          <Route
            path={match.path + "/merchandise"}
            exact
            component={ListMerchandiseMap}
          />
          <Route path={match.path + "/qna"} exact component={ListQnaMap} />
          <Route
            path={match.path + "/review"}
            exact
            component={ListReviewMap}
          />

          <Route
            path={match.path + "/merchandise/:merchandiseid"}
            component={DetailMerchandiseMap}
          />
          <Route
            path={match.path + "/qna/write"}
            component={MakeQnaMapContainer}
          />
          <Route
            path={match.path + "/review/write"}
            component={MakeReviewMapContainer}
          />
        </ViewVendorMapItem>
      </ViewVendorMapWrapper>
    </ViewVendorMapBlock>
  );
};

export default ViewVendorMap;
