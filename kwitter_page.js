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
username = localStorage.getItem("usernam3");
room_name = localStorage.getItem("roomnam3");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: username,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        name = message_data['name'];
                        message = message_data["message"];
                        like = message_data["like"];
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;

                        //End code
                  }
            });
      });
}
getData();

function updateLike(firebase_message_id) {
      button_id = firebase_message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(firebase_message_id).update({
            like:updated_likes
      });
}

function logout() {
      localStorage.removeItem("roomnam3");
      localStorage.removeItem("usernam3");
      window.location = "index.html";
}