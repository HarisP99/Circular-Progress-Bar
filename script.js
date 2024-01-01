let circularProgress = document.querySelector(".circular-progress");
progressValue = document.querySelector(".progress-value");

// Početne vrijednosti progres bar-a
let progressStartValue = 0,
    progressEndValue = 100,
    speed = 100; // Brzina animacije u milisekundama

// Postavljanje intervala za animaciju progres bar-a
let progress = setInterval(() => {
    progressStartValue++; // Inkrementiranje trenutne vrijednosti progres bar-a

    // Ažuriranje teksta procenta i vizualnog prikaza progres bar-a
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

    // Provjera da li je dostignuta krajnja vrijednost progres bar-a
    if(progressStartValue == progressEndValue){
        clearInterval(progress); // Zaustavljanje intervala ako je dostignuta krajnja vrijednost
    }
}, speed);
