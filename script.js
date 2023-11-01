const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');


const formatTime = (time)=>{
    return time<10 ? `${time}` : time;
}

const updateCountDown = (deadline)=>{
    const currentTime = new Date();
    const timeDifference = deadline-currentTime;//milliseconds

    //calculate days mins hours and seconds from time difference
    let calSecs = Math.floor(timeDifference/1000)%60;
    let calmins = Math.floor(timeDifference/1000/60)%60;
    let calhours = Math.floor(timeDifference/1000/60/60)%24;
    let caldays = Math.floor(timeDifference/1000/60/60/24);

    days.textContent = formatTime(caldays);
    hours.textContent = formatTime(calhours);
    mins.textContent = formatTime(calmins);
    secs.textContent = formatTime(calSecs);
    // console.log(calSecs);

}

const countDown = (targetDate)=>{
    setInterval(()=>updateCountDown(targetDate), 1000);
}

const targetDate = new Date("March 20 2024 12:00 AM");
countDown(targetDate);



