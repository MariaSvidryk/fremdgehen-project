(function(){
   const days = document.getElementById("days");
   const hours = document.getElementById("hours");
   const minutes = document.getElementById("minutes");
   const seconds = document.getElementById("seconds");
   const countdown = document.getElementById("countdown");
   const year = document.getElementById("year");

   const currentDate = new Date().getFullYear();

  const concertDate = new Date(`June 19 ${currentDate} 09:00:00`);

  function updateCountdown() {
     const currentTime = new Date();
    const diff = concertDate - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Run every second
setInterval(updateCountdown, 1000);

})();



