function initMap() {
    // The location of neil island
    var neil = {lat: 11.834810, lng: 93.052134};
    // The location of long island
    var long={lat:12.401855, lng:92.933912}; 
    // The location of rangat
    var rangat={lat:12.514785, lng: 92.913997};  
    // The location of havelock
    var havelock={lat:11.981130, lng: 92.986796};  
    // The location of diglipur
    var diglipur={lat:13.266729, lng: 92.982367};  
    // The location of little andaman
    var la={lat:10.763641, lng:92.500416};  
    // The location of cellular jail
    var cj={lat:11.674166, lng:92.747981};  
    // The map, centered at neil island
    var map = new google.maps.Map(
        document.getElementById('map1'), {zoom: 7, center: long});
    // The marker, positioned at neil island
    var marker = new google.maps.Marker({position: neil, map: map});
   // The marker, positioned at long island
    var mark=new google.maps.Marker({position: long, map: map});
  // The marker, positioned at rangat
    var mark1=new google.maps.Marker({position: rangat, map: map});
    // The marker, positioned at havelock
    var mark2=new google.maps.Marker({position: havelock, map: map});
    // The marker, positioned at diglipur
    var mark3=new google.maps.Marker({position: diglipur, map: map});
    // The marker, positioned at little andaman
    var mark4=new google.maps.Marker({position: la, map: map});
    // The marker, positioned at cellular jail
    var mark5=new google.maps.Marker({position: cj, map: map});
  }