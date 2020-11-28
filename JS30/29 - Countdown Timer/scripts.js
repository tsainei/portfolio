let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countDown = setInterval(()=> {
        const secondLeft = Math.round((then - Date.now())/1000);
        //check if we should stop the clock
        if(secondLeft < 0) {
            clearInterval(countDown);
            timerDisplay.textContent = '🐶finished';
            return;
        }
        displayTimeLeft(secondLeft)
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainderSeconds = seconds % 60;
    const minutesLeft = minutes % 60;
    const display = `${hours}:${minutesLeft}:${remainderSeconds  < 10 ? '0':''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minute = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${minute}`;
}

function startTimer() {
    const seconds = Number(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    // 1440 minutess = 1 day
    if ((0 / mins) !== 0 || mins > 1440) {  
        clearInterval(countDown);
        timerDisplay.textContent = (0 / mins) !== 0 ? 'You gotta type a number' : 'It is longer than a day!';
        endTime.textContent = '';
        return;
    }
    console.log(mins);
    timer(mins * 60);
    this.reset();
})