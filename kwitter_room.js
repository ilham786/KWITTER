
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDmga4nNnUo7_UGpET9uo6GxE5Se4c6j3c",
      authDomain: "practice-project-f7de9.firebaseapp.com",
      databaseURL: "https://practice-project-f7de9.firebaseio.com",
      projectId: "practice-project-f7de9",
      storageBucket: "practice-project-f7de9.appspot.com",
      messagingSenderId: "860209529675",
      appId: "1:860209529675:web:babe9a9ba28bd03f0adece"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function addRoom()
 { room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
 }




function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() 
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location.replace("kwitter.html");
}


