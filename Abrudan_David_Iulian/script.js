var monitorizare = document.getElementById("monitorizare");
var imagini = document.getElementById("imagini");

var imag = [
    "images/cpu.png",
    "images/ram.png",
    "images/disk.png"
];

var index = 0;
var pornit = false;

monitorizare.addEventListener("dblclick", slideshow);

function slideshow() {

    if (pornit == true)
        return;

    pornit = true;

    setInterval(function () {

        imagini.innerHTML = "";

        var img = document.createElement("img");
        img.src = imag[index];

        imagini.appendChild(img);

        index++;

        if (index == imag.length)
            index = 0;

    }, 3000);
}