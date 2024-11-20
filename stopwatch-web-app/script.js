let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;
let isRunning = false;

// DOM Elements
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const millisecondsEl = document.getElementById('milliseconds');
const lapTimesEl = document.getElementById('lapTimes');

// Start Button Functionality
document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(updateTime, 10);
  }
});

// Pause Button Functionality
document.getElementById('pause').addEventListener('click', () => {
  isRunning = false;
  clearInterval(timerInterval);
});

// Reset Button Functionality
document.getElementById('reset').addEventListener('click', () => {
  isRunning = false;
  clearInterval(timerInterval);
  minutes = seconds = milliseconds = 0;
  updateDisplay();
  lapTimesEl.innerHTML = '';
});

// Lap Button Functionality
document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapTimesEl.appendChild(lapItem);
  }
});

// Update Timer
function updateTime() {
  milliseconds += 1;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds += 1;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes += 1;
  }
  updateDisplay();
}

// Update Timer Display
function updateDisplay() {
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
  millisecondsEl.textContent = formatTime(milliseconds);
}

// Format Time Helper
function formatTime(unit) {
  return unit < 10 ? `0${unit}` : unit;
}
