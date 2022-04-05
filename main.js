function clickStartButton() {
    window.location = "school_name.html";
    school_name = document.getElementById("school_name").value;
    localStorage.setItem("school_name = " , school_name).value;
}