function initMap() {
    // The location of car nicobar
    var car = {lat: 9.171207, lng: 92.758884};
    // The location of katchal
    var katchal={lat:7.976243, lng:93.358663}; 
    // The location of great nicobar
    var great={lat:7.053524, lng:93.783987};  
    // The map, centered at car nicobar
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 7, center: katchal});
    // The marker, positioned at car
    var marker = new google.maps.Marker({position: car, map: map});
   // The marker, positioned at katchal
    var mark=new google.maps.Marker({position: katchal, map: map});
  // The marker, positioned at great nicobar
    var mark1=new google.maps.Marker({position: great, map: map});
  }