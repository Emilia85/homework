function sent(){
    var ok = true;
    if(document.getElementById("cognome").value==""){
         ok = false;
    }
    if(document.getElementById("nome").value==""){
         ok = false;
    }
    if(document.getElementById("data").value==""){
         ok = false;
    }
    if(document.getElementById("maschio").value==""){
         ok = false;
    }
    if(document.getElementById("femmina").value==""){
         ok = false;
    }
    if(document.getElementById("altro").value==""){
         ok = false;
    }
    if(document.getElementById("mare").value==""){
         ok = false;
    }
    if(document.getElementById("montagna").value==""){
         ok = false;
    }
    if(document.getElementById("giungla").value==""){
         ok = false;
    }
    if(document.getElementById("deserto").value==""){
         ok = false;
    }
    if(document.getElementById("altrov").value==""){
         ok = false;
    }
    if(document.getElementById("color").value==""){
         ok = false;
    }
    if(document.getElementById("password").value==""){
         ok = false;
    }
    if(document.getElementById("email").value==""){
         ok = false;
    }
    if(document.getElementById("messaggio").value==""){
         ok = false;
    }
    if(document.getElementById("voto").value==""){
        ok = false;
   }
    if(!ok){
     alert("Devi completare tutte le caselle");
    }
    else{
        success();
        //alert("Grazie per aver completato tutte le caselle! I tuoi dati sono in buone mani!");
    }
    
}

function success(){
    var sex="";
 if(document.getElementById("maschio").checked){
       sex= document.getElementById("maschio").value;
     }
    else if(document.getElementById("femmina").checked){
       sex= document.getElementById("femmina").value;
     }
     else if(document.getElementById("altro").checked){
        sex =  document.getElementById("altro").value;
     }
     var vacanza="";
     if(document.getElementById("mare").checked){
         vacanza = document.getElementById("mare").value;
     }
     else if(document.getElementById("montagna").checked){
         vacanza = document.getElementById("montagna").value;
     }
     else if(document.getElementById("giungla").checked){
         vacanza = document.getElementById("giungla").value;
     }
     else if(document.getElementById("deserto").checked){
         vacanza = document.getElementById("deserto").value;
     }
     else if(document.getElementById("altrov").checked){
         vacanza = document.getElementById("altrov").value;
     }
  var querystring="?email="+document.getElementById("email").value+
 "&nome="+document.getElementById("nome").value+
 "&cognome="+document.getElementById("cognome").value+
  "&data="+document.getElementById("data").value+
 "&sex="+sex+
 "&vacanza="+vacanza+
 "&password="+document.getElementById("password").value+
  "&color="+document.getElementById("color").value+
  "&voto="+document.getElementById("voto").value+
  "&messaggio="+document.getElementById("messaggio").value;
 var finestra = window.open( "file:///Users/emiliag./Documents/React/Practice/grugru.html"+querystring,"width=200px,height=300px");
}

    /* const WS_BASE_URL_1= 'https://maps.googleapis.com/maps/api/js?key=';
     const WS_BASE_URL_2= 'https://goo.gl/maps/TG7cCcTtoSGKaH9N7';
     const API_KEY="AIzaSyCjIOmZezxZwiRb0YBBELwvIqsxP2GUz0w";

    async function callWSFetch(url){
         fetch(url).then(response =>{
              return response.json();
         }).then(data =>{
              console.log(data);
         })
    }
    callWSFetch(WS_BASE_URL_1 + API_KEY);
    console.log("Chiamata Asincrona GET a servizio Rest metodo Fetch");
    

     function callWSXMLHttpRequest(url){
     var request = new XMLHttpRequest();
     request.open('GET', url);
     request.send();
     request.onload = ()=>{
          console.log(JSON.parse(request.response));
     }
     }
     callWSXMLHttpRequest(WS_BASE_URL_1 + API_KEY);
     //document.write("Chiamata Asincrona GET a servizio REST XMLHttpRequest");
     */
    /* window.open("https://maps.googleapis.com/maps/api/js?key=AIzaSyCjIOmZezxZwiRb0YBBELwvIqsxP2GUz0w&callback=initMap");
    var map;
    function initMap(){
         var mapPoint = {lat: 45.434610, lng: 12.338910};
         map = new google.maps.Map(document.getElementById("map"),{
               center: mapPoint,
               zoom: 15
          });
          var marker = new google.maps.Marker({position: mapPoint, map: map});
    }
    document.write(initMap());*/

    const center = { lat: 45.434610, lng: 12.338910 };
// Create a bounding box with sides ~10km away from the center point
const defaultBounds = {
  north: center.lat + 0.1,
  south: center.lat - 0.1,
  east: center.lng + 0.1,
  west: center.lng - 0.1,
};
const input = document.getElementById("pac-input");
const options = {
  bounds: defaultBounds,
  componentRestrictions: { country: "us" },
  fields: ["address_components", "geometry", "icon", "name"],
  strictBounds: false,
  types: ["establishment"],
};
const autocomplete = new google.maps.places.Autocomplete(input, options);

