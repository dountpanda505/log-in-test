window.onload = function() {
    if (window.location.href.includes("index.html")) {
        localStorage.setItem('logged_In', 'false');
    }
}




console.log("Initial logged_In status:", localStorage.getItem('logged_In'));
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var nope = document.getElementById('nope');

    if (username === '1' && password === '2') {
        window.location.replace("website.html");
        localStorage.setItem('logged_In', 'true');
    }
    else if (username === '2' && password === '3') {
        window.location.replace("website2.html");
        localStorage.setItem('logged_In', 'true');
    }
    else {
      nope.style.display = "block";
      localStorage.setItem('logged_In', 'false');
    }
  }
  
  
window.onload = function() {
    console.log("Current path:", window.location.pathname);
    console.log("Logged in status:", localStorage.getItem('loggedIn'));

    if (window.location.href.includes("website.html" || "website2.html")) {
        console.log("Checking login status...");
        
        if (localStorage.getItem('logged_In') !== 'true') {
            console.log("User not logged in. Redirecting to index.html...");
            window.location.replace("index.html");
        } 
        else {
            console.log("User is logged in. Access granted to website.html.");
        }
    }
};




















function logout() {
    localStorage.setItem('logged_In', 'false');
    window.location.replace("index.html");
    console.log("User logged out. Redirecting to index.html...");
}