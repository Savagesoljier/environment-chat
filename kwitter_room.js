var firebaseConfig = {
      apiKey: "AIzaSyBTO0Qdk3Z46q2QlNfPXjLUfPfcYFIZhas",
      authDomain: "kwitterwastaken.firebaseapp.com",
      databaseURL: "https://kwitterwastaken-default-rtdb.firebaseio.com",
      projectId: "kwitterwastaken",
      storageBucket: "kwitterwastaken.appspot.com",
      messagingSenderId: "305436925308",
      appId: "1:305436925308:web:254d4a2d265b11c956d8f9",
      measurementId: "G-4JTJ1KY1MF"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    userName = localStorage.getItem("usernam3");
    document.getElementById("user_name").innerHTML = "Welcome " + userName + "!";
    
    function addRoom() {
          roomName = document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomName).update({
                purpose: "adding room name"
          });
    
          localStorage.setItem("roomnam3", roomName);
          window.location = "kwitter_page.html";
    }
    
    function getData() {
          firebase.database().ref("/").on('value', function (snapshot) {
                document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                      childKey = childSnapshot.key;
                      Room_names = childKey;
                      //Start code
                      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                      document.getElementById("output").innerHTML += row;
                      //End code
                });
          });
    }
    getData();
    
    
    function redirectToRoomName(name) {
          localStorage.setItem("roomnam3", name);
          window.location = "kwitter_page.html";
    
    }
    
    function logout() {
          localStorage.removeItem("roomnam3");
          localStorage.removeItem("usernam3");
          window.location = "index.html";
    }
