        const second = document.getElementById("second");
        const minute = document.getElementById("minute");
        const hour = document.getElementById("hour");
        const button = document.getElementById("control");

        var secTime = null;
        var minTime = null;
        var hourTime = null;
        button.addEventListener('click', ()=> {
    
           if (button.innerHTML == "Start") {

            button.innerHTML = "Stop";

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

               button.innerHTML = "Start";
               
               clearInterval(secTime);
               clearInterval(minTime);
               clearInterval(hourTime);
           }
        })