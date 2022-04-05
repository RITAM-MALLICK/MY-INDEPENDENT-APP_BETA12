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

function uploadAssignments() {
    clear("texBox");

    function clear() {
        Submitted = "Submitted";
        document.getElementById("textBox").innerHTML = Submitted;
        Submitted = "<textarea name=':)' id='textBox' cols='30' rows='10'>Submitted</textarea>"
    }
    assignment_hw = document.getElementById("assignment_hw").innerHTML = "assignment_hw"
    assignment_hw = document.getElementById("assignment_hw").value;
    localStorage.setItem("assignment_hw = " , assignment_hw);
}

const image_input = 
document.querySelector("#image_input");
var uploaded_image;

image_input.addEventListener('change', function() {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});