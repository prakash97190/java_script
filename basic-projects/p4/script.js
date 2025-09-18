document.getElementById("myForm").addEventListener("submit", function (e) {
    let pass1 = document.getElementById("pass1").value;
    let pass2 = document.getElementById("pass2").value;

    if (pass1 !== pass2) {
        alert("Passwords do not match!");
        e.preventDefault(); // stop form submission
    }
});
