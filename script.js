const elDay = document.getElementById('day');
const elDate = document.getElementById('date');
const elTime = document.getElementById('time');
const textOutput = document.getElementById('text-output');
let fulldate = new Date();

elDay.addEventListener('click', displayDay);
elDate.addEventListener('click', displayDate);
elTime.addEventListener('click', displayTime);


// Function for display Day in string
function displayDay() {
    let day = fulldate.getDay();
    let dayText;

    clearText();

    switch (day) {
        case 0:
            dayText = 'Sunday';
            break;
        case 1:
            dayText = 'Monday';
            break;
        case 2:
            dayText = 'Tuesday';
            break;
        case 3:
            dayText = 'Wednesday';
            break;
        case 4: 
            dayText = 'Thursday';
            break;
        case 5: 
            dayText = 'Friday';
            break;
        case 6: 
            dayText = 'Saturday';
    }

    const dayPara = document.createElement('p');
    let dayTextt = document.createTextNode(dayText);
        dayPara.appendChild(dayTextt);
        textOutput.appendChild(dayPara);
}

// Function for display Date
function displayDate() {
    let dateDay = fulldate.getDate();
    let dateMonth = fulldate.getMonth() + 1;
    let dateYear = fulldate.getFullYear();

    clearText();


    if (dateDay < 10) {
        dateDay = '0' + dateDay;
    }
    if (dateMonth < 10) {
        dateMonth = '0' + dateMonth;
    }

    let dateFull = dateDay + '.' + dateMonth + '.' + dateYear;
    let dateText = document.createTextNode(dateFull);
    const datePara = document.createElement('p');
        datePara.appendChild(dateText);
        textOutput.appendChild(datePara);
}

// Function for display time
function displayTime() {
        let timeHours = fulldate.getHours();
        let timeMinutes = fulldate.getMinutes();

        clearText();


        if (timeHours < 10) {
            timeHours = '0' + timeHours;
        }
        if (timeMinutes < 10) {
            timeMinutes = '0' + timeMinutes;
        }

        let timeFull = timeHours + ':' + timeMinutes;
        let timeText = document.createTextNode(timeFull);
        const timePara = document.createElement('p');
            timePara.appendChild(timeText);
            textOutput.appendChild(timePara);
}

function clearText() {
    while (textOutput.firstChild) {
        textOutput.removeChild(textOutput.firstChild);
    }
}
