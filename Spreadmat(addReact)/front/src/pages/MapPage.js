import OpenColor from "open-color";
import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import { BasicDiv } from "../components/common/BasicDiv";
import { BasicItem } from "../components/common/BasicItem";
import Responsive from "../components/common/Responsive";
import ListVendorMap from "../components/map/ListVendorMap";
import ViewVendorMap from "../components/map/VeiwVendorMap";
import NaverMapAPI from "../lib/map/NaverMapAPI";

const MapPageBlock = styled(BasicDiv)`
  margin: 0px 0px;
  background-color: ${OpenColor.gray[2]};
  display: flex;
  justify-content: center;
  height: 100%;
`;

const MapPageWrapper = styled(Responsive)`
  display: flex;
  background-color: white;
`;

const MapPageItem = styled(BasicItem)`
  width: 100%;
  border: 1px solid ${OpenColor.black};
  flex: 1;

  &.left {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &.map {
    display: block;
    flex: 0 0 60vh;
  }

  &.blank {
    flex: 1;
  }
  &.right {
    flex: 1;
  }
`;

const MapPage = ({ match, history }) => {
  console.log({ match });
  return (
    <MapPageBlock>
      <MapPageWrapper>
        <MapPageItem className="left">
          <MapPageItem className="map">
            <NaverMapAPI match={match} history={history} />
          </MapPageItem>
          <MapPageItem className="blank"></MapPageItem>
        </MapPageItem>
        <MapPageItem className="right">
          <Route component={ListVendorMap} path={match.path} exact />
          <Route
            component={ViewVendorMap}
            path={match.path + "/vendor/:vendorid"}
          />
        </MapPageItem>
      </MapPageWrapper>
    </MapPageBlock>
  );
};

export default MapPage;
