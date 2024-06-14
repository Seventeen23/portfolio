
// Adds The Navbar to navbar div
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    })
    .catch()  




// Download CV
function downloadCV() {
    var link = document.createElement('a');
    link.href = "../assets/pdf/Matthew_Tanutan_Resume.pdf";
    link.download = "Matthew_Tanutan_Resume.pdf";
    link.dispatchEvent(new MouseEvent('click'));
}
