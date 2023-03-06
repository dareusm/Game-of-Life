var account = [
	{ 
		username: "admin",
		password: "user"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < account.length; i++) {
		if(username == account[i].username && password == account[i].password) {
            window.location.assign('redirect.html');
			return true;
        }if(username != account[i].username && password == account[i].password) {
            document.getElementById("wrong").innerHTML = "Wrong username!";
			return false;
        }if(username == account[i].username && password != account[i].password) {
            document.getElementById("wrong").innerHTML = "Wrong password!";
			return false;
        }if(username != account[i].username && password != account[i].password) {
            document.getElementById("wrong").innerHTML = "Wrong username and password!";
			return false;
        }else {
            return false;
        }
	}
}