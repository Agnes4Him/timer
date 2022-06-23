        const second = document.getElementById("second");
        const minute = document.getElementById("minute");
        const hour = document.getElementById("hour");
        const secSupport = document.getElementById("secSupport");
        const minSupport = document.getElementById("minSupport");
        const hourSupport = document.getElementById("hourSupport");
        const controlButton = document.getElementById("control");
        const resetButton = document.getElementById("reset");

        let secTime = null;
        let minTime = null;
        let hourTime = null;
        let secSupportTime = null;
        let minSupportTime = null;
        let hourSupportTime = null;
        controlButton.addEventListener('click', ()=> {
    
           if (controlButton.innerHTML == "Start") {

            controlButton.innerHTML = "Stop";

            secTime = setInterval(runSecTime, 1000)
            function runSecTime() {
                if (second.innerHTML == 9) {
                    second.innerHTML = 0;
                }else {
                    second.innerHTML = parseInt(second.innerHTML) + 1
                }
            }
            //Second support codes
            secSupportTime = setInterval(runSecSupportTime, 10000)
            function runSecSupportTime() {
                if (secSupport.innerHTML == 5) {
                    secSupport.innerHTML = 0;
                }else {
                    secSupport.innerHTML = parseInt(secSupport.innerHTML) + 1
                }
            }

            minTime = setInterval(runMinTime, 60000)
            function runMinTime() {
                if (minute.innerHTML == 9) {
                    minute.innerHTML = 0;
                }else {
                    minute.innerHTML = parseInt(minute.innerHTML) + 1
                }
            }

            //Minute support codes

            minSupportTime = setInterval(runMinSupportTime, 600000)
            function runMinSupportTime() {
                if (minSupport.innerHTML == 5) {
                    minSupport.innerHTML = 0;
                }else {
                    minSupport.innerHTML = parseInt(minSupport.innerHTML) + 1
                }
            }

            hourTime = setInterval(runHourTime, 3600000)
            function runHourTime() {
                if (hour.innerHTML == 9) {
                    hour.innerHTML = 0;
                }else {
                    hour.innerHTML = parseInt(hour.innerHTML) + 1
                }
            }

            //Hour support codes

            hourSupportTime = setInterval(runHourSupportTime, 36000000)
            function runHourSupportTime() {
                if (hourSupport.innerHTML == 2) {
                    hourSupport.innerHTML = 0;
                }else {
                    hourSupport.innerHTML = parseInt(hourSupport.innerHTML) + 1
                }
            }

           }else {

               controlButton.innerHTML = "Start";
               
               clearInterval(secTime);
               clearInterval(secSupportTime);
               clearInterval(minTime);
               clearInterval(minSupportTime);
               clearInterval(hourTime);
               clearInterval(hourSupportTime);
           }
        })

        resetButton.addEventListener('click', () => {
            if (second.innerHTML != 0 || secSupport.innerHTML != 0 || minute.innerHTML != 0 || minSupport.innerHTML != 0 || hour.innerHTML != 0 || hourSupport.innerHTML != 0) {
                second.innerHTML = 0;
                minute.innerHTML = 0;
                hour.innerHTML = 0;
                secSupport.innerHTML = 0;
                minSupport.innerHTML = 0;
                hourSupport.innerHTML = 0;
            }
        })

        //Clear timer after 24hours

        if (hourSupport.innerHTML == 2 && hour.innerHTML == 3) {
            second.innerHTML = 0;
            minute.innerHTML = 0;
            hour.innerHTML = 0;
            secSupport.innerHTML = 0;
            minSupport.innerHTML = 0;
            hourSupport.innerHTML = 0;
        }

