// DOM Elements
const timeElement = document.getElementById('time');
const dailyGoalInput = document.getElementById('daily-goal');
const setGoalButton = document.getElementById('set-goal');
const clearGoalButton = document.getElementById('clear-goal'); // ゴールをリセットするボタン
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
  saveToCookie();
  if (reminderInterval) clearInterval(reminderInterval);
  startReminder();
}

function clearGoal() {
  dailyGoal = 0;
  consumed = 0;
  goalElement.textContent = dailyGoal;
  consumedElement.textContent = consumed;
  saveToCookie();
  if (reminderInterval) clearInterval(reminderInterval);
  reminderMessage.textContent = ''; // リマインダーをリセット
}

function logIntake() {
  const intake = parseInt(waterIntakeInput.value, 10) || 0;
  consumed += intake;
  consumedElement.textContent = consumed;
  waterIntakeInput.value = '';
  saveToCookie();
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

// Cookie Utilities
function saveToCookie() {
  document.cookie = `dailyGoal=${encodeURIComponent(dailyGoal)};path=/;max-age=86400`; // 1日後に期限切れ
  document.cookie = `consumed=${encodeURIComponent(consumed)};path=/;max-age=86400`; // 1日後に期限切れ
}

function loadFromCookie() {
  const cookies = document.cookie.split('; ').reduce((acc, curr) => {
    const [key, value] = curr.split('=');
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});

  dailyGoal = parseInt(cookies.dailyGoal, 10) || 0;
  consumed = parseInt(cookies.consumed, 10) || 0;

  goalElement.textContent = dailyGoal;
  consumedElement.textContent = consumed;
}

// Initialize clock and load state
setInterval(updateTime, 1000);
loadFromCookie();
if (dailyGoal > 0) startReminder(); // 目標が設定されている場合、リマインダーを開始

// Event Listeners
setGoalButton.addEventListener('click', setGoal);
clearGoalButton.addEventListener('click', clearGoal); // ゴールクリアボタンのクリック処理
logIntakeButton.addEventListener('click', logIntake);
