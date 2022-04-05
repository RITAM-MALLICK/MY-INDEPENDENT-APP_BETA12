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

function uploadAssignments() {
    alert("Submitted:)");
    clear("texBox");

    function clear() {
        Submitted = "Submitted";
        document.getElementById("textBox").innerHTML = Submitted;
        Submitted = "<textarea name=':)' id='textBox' cols='30' rows='10'>Submitted</textarea>"
    }
    assignment_hw = document.getElementById("assignment_hw").innerHTML = "assignment_hw"
    localStorage.setItem(assignment_hw);
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

function layoutSubmit() {
    alert("Layout Saved :D");
    left_color_changer = document.getElementById("left_color_changer").value;
    localStorage.setItem("left_color_changer = " , left_color_changer);
    right_color_changer = document.getElementById("right_color_changer").value;
    localStorage.setItem("right_color_changer = " , right_color_changer);
    colorLeft = localStorage.getItem("left_color_changer");
    colorRight = localStorage.getItem("right_color_changer");
}