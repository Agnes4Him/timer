        const second = document.getElementById("second");
        const minute = document.getElementById("minute");
        const hour = document.getElementById("hour");
        const controlButton = document.getElementById("control");
        const resetButton = document.getElementById("reset");

        var secTime = null;
        var minTime = null;
        var hourTime = null;
        controlButton.addEventListener('click', ()=> {
    
           if (controlButton.innerHTML == "Start") {

            controlButton.innerHTML = "Stop";

            secTime = setInterval(runSecTime, 1000)
            function runSecTime() {
                if (second.innerHTML == 59) {
                    second.innerHTML = 0;
                }else {
                    second.innerHTML = parseInt(second.innerHTML) + 1
                }
            }

            minTime = setInterval(runMinTime, 60000)
            function runMinTime() {
                if (minute.innerHTML == 59) {
                    minute.innerHTML = 0;
                }else {
                    minute.innerHTML = parseInt(minute.innerHTML) + 1
                }
            }

            hourTime = setInterval(runHourTime, 3600000)
            function runHourTime() {
                if (hour.innerHTML == 23) {
                    hour.innerHTML = 0;
                }else {
                    hour.innerHTML = parseInt(hour.innerHTML) + 1
                }
            }

           }else {

               controlButton.innerHTML = "Start";
               
               clearInterval(secTime);
               clearInterval(minTime);
               clearInterval(hourTime);
           }
        })

        resetButton.addEventListener('click', () => {
            if (second.innerHTML != 0 || minute.innerHTML != 0 || hour.innerHTML != 0) {
                second.innerHTML = 0;
                minute.innerHTML = 0;
                hour.innerHTML = 0;
            }
        })

