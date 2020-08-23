window.onload = () => {
  let seconds = 00;
  let tens = 00;
  let minutes = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let appendMinutes = document.getElementById("minutes");
  let buttonStart = document.getElementById("btn-start");
  let buttonStop = document.getElementById("btn-stop");
  let buttonReset = document.getElementById("btn-reset");
  let Interval;

  //! START THE CLOCK
  buttonStart.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  //! STOP THE CLOCK
  buttonStop.onclick = () => {
    clearInterval(Interval);
  };

  //! RESET THE CLOCK
  buttonReset.onclick = () => {
    clearInterval(Interval);
    tens = "00";
    appendTens.innerHTML = tens;
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    minutes = "00";
    appendMinutes.innerHTML = minutes;
  };

  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      //   console.log(seconds + "seconds");

      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) appendSeconds.innerHTML = seconds;

    if (seconds > 59) {
      minutes++;
      console.log(minutes + " minutes");

      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  }
};
