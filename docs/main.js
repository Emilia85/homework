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
      "&color="+document.getElementById("color").value.substring(1)+
      "&voto="+document.getElementById("voto").value+
      "&messaggio="+document.getElementById("messaggio").value;
      var finestra = window.open( "https://emilia85.github.io/homework/?sex=maschio&vacanza=giungla&favcolor=%2361177c&password=jhbfjhbjh&user-email=titi%40gmail.com&voto=9&messaggio=Taste+the+rainbow&invia=Sent"+querystring,"width=200px,height=300px");
      
      }
 
      function getURLParameter(sParam) {
         
           var sPageURL = window.location.search.substring(1);
           var sURLVariables = sPageURL.split('&');
           for (var i = 0; i < sURLVariables.length; i++) {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) {
                     return sParameterName[1];
                }
           }
      }
      
 
     /* 
      const WS_BASE_URL_1 = 'https://api.nasa.gov/planetary/apod?api_key=';
     const WS_BASE_URL_2 = 'https://api.nasa.gov/DONKI/FLR?startDate=2022-01-01&endDate=2022-01-30&api_key=';
     const API_KEY = "SCjtDCGzuwEAUJyChKMvfN6hi3KGRolrHDQ8U4Ax";

     async function callWSFetch(url){
         fetch(url).then(response =>{
              return response.json();
         }).then(data =>{
              console.log(data);
         })
    }
      
 */
     
    
 
 