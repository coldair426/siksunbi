// 지도 생성 옵션
const container = document.getElementById('map'); // 지도를 표시할 div.
const options = {
  center: new kakao.maps.LatLng(37.849522, 127.739204), //지도의 중심좌표.
  level: 2, //지도의 레벨(확대, 축소 정도)
};
// 지도 생성 및 객체 리턴
const map = new kakao.maps.Map(container, options);

// 마커가 표시될 위치
const markerPosition = new kakao.maps.LatLng(37.849522, 127.739204);

// 마커 생성
const marker = new kakao.maps.Marker({
  position: markerPosition,
});
marker.setMap(map); // 마커를 지도위에 표시하도록 설정

// 길찾기 바로가기
