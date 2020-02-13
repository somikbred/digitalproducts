let myLatLng = {lat: -7.931635, lng: 112.6358848},
    marker   = null;
    
function initMap() {
    
    let map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 13
    });
  
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: '../img/pin.svg'
    });
  }

//   $('.slick-slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   });