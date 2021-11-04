import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

const NaverMapBlock = ({ match, history }) => {
  const navermaps = window.naver.maps;

  const clickListener = (e) => {
    alert(`lat : ${e.coord.lat()} / lng : ${e.coord.lng()}`);
  };

  const MarkerClickEvent = (vendorid) => {
    alert(vendorid);
    history.push(`/map/vendor/${vendorid}`);
  };

  return (
    <NaverMap
      mapDivId={"my-naver-map"}
      style={{
        width: "100%",
        height: "100%",
      }}
      defaultCenter={{ lat: 37.551229, lng: 126.988205 }}
      defaultZoom={15}
      onClick={clickListener}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={0}
        onClick={() => MarkerClickEvent(1)}
      />
      <Marker
        key={2}
        position={new navermaps.LatLng(37.554155, 126.9934192)}
        animation={0}
        onClick={() => MarkerClickEvent(2)}
      />
    </NaverMap>
  );
};

const NaverMapAPI = ({ match, history }) => {
  console.log(`match : ${match.path}`);
  console.log(`history : ${JSON.stringify(history)}`);
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={"sadsrqdd3x"} // 자신의 네이버 계정에서 발급받은 Client ID
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapBlock match={match} history={history} />
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverMapAPI;
