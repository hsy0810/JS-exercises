// DOM Elements
const timeElement = document.getElementById('time');
const dailyGoalInput = document.getElementById('daily-goal');
const setGoalButton = document.getElementById('set-goal');
const consumedElement = document.getElementById('consumed');
const goalElement = document.getElementById('goal');
const waterIntakeInput = document.getElementById('water-intake');
const logIntakeButton = document.getElementById('log-intake');
const reminderMessage = document.getElementById('reminder-message');

// State
let dailyGoal = 0;
let consumed = 0;
let reminderInterval;

// Functions
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function setGoal() {
  dailyGoal = parseInt(dailyGoalInput.value, 10) || 0;
  goalElement.textContent = dailyGoal;
  consumed = 0;
  consumedElement.textContent = consumed;
  if (reminderInterval) clearInterval(reminderInterval);
  startReminder();
}

function logIntake() {
  const intake = parseInt(waterIntakeInput.value, 10) || 0;
  consumed += intake;
  consumedElement.textContent = consumed;
  waterIntakeInput.value = '';
  checkGoal();
}

function startReminder() {
  reminderInterval = setInterval(() => {
    reminderMessage.textContent = 'Time to drink water!';
    setTimeout(() => {
      reminderMessage.textContent = '';
    }, 5000); // Clear reminder after 5 seconds
  }, 3600000); // 1 hour
}

function checkGoal() {
  if (consumed >= dailyGoal && dailyGoal > 0) {
    alert('Congratulations! You have met your daily water goal!');
    clearInterval(reminderInterval);
  }
}

// Initialize clock
setInterval(updateTime, 1000);

// Event Listeners
setGoalButton.addEventListener('click', setGoal);
logIntakeButton.addEventListener('click', logIntake);
