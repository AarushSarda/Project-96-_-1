  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA8Bxf2lW6RshoGe4HYKlUZLYArPDNj0jE",
    authDomain: "lets-chat-web-app-3d4d3.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-3d4d3-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-3d4d3",
    storageBucket: "lets-chat-web-app-3d4d3.appspot.com",
    messagingSenderId: "522230300274",
    appId: "1:522230300274:web:724490c1afe84bb7158ceb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name ,
            message : msg ,
            Like : 0
 });
 document.getElementById("msg").value = "" ;
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

