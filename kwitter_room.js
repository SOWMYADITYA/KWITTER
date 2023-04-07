var firebaseConfig = {
      apiKey: "AIzaSyAB9ZoudLCSt-uBYR8jT2JtWaPDjh441xE",
      authDomain: "kwitter-4e48b.firebaseapp.com",
      databaseURL: "https://kwitter-4e48b-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e48b",
      storageBucket: "kwitter-4e48b.appspot.com",
      messagingSenderId: "701917345224",
      appId: "1:701917345224:web:ef080412aa7baf5e03fcfd"
    };
    
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroomnames"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}