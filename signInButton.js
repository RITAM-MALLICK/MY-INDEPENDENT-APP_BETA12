function assignmentButton() {
    window.location = "assignmentButton.html"
}

function classButton() {
    window.location = "classButton.html"
}

function layoutButton() {
    window.location = "layoutButton.html"
}

function signInButton() {
    window.location = "signInButton.html"
}

function games() {
    window.location = "educationalGames.html"
}

your_name = save;
your_roll_no = save;
your_enrollment_no = save;

function SignIn() {
    if (your_roll_no == "04052009")innerHTML = "your_roll_no"; {
        alert("Awesome :D");
    }
    alert("Your sign in details are successfully saved :D");
    your_name = document.getElementById("your_name").value;
    localStorage.setItem("your_name = " , your_name);
    your_enrollment_no = document.getElementById("your_enrollment_no").value;
    localStorage.setItem("your_enrollment_no = " , your_enrollment_no);
    your_roll_no = document.getElementById("your_roll_no").value;
    localStorage.setItem("your_roll_no = " , your_roll_no);
}