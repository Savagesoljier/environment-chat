function addUser() {
    username = document.getElementById("user_name").value;
    localStorage.setItem("usernam3", username);
    window.location = "kwitter_room.html";
}