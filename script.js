
// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const title = document.getElementById("letter-style");

const finalText = document.getElementById("final-text");



// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});



addEventListener("click", () => {
    

   

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});