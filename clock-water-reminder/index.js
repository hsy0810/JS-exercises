const timeElement = document.getElementById('time');
const dailyGoalInput = document.getElementById('daily-goal');
const setGoalButton = document.getElementById('set-goal');
const clearGoalButton = document.getElementById('clear-goal');
const consumedElement = document.getElementById('consumed');
const goalElement = document.getElementById('goal');
const waterIntakeInput = document.getElementById('water-intake');
const logIntakeButton = document.getElementById('log-intake');
const startReminder = document.getElementById('start-reminder');
const reminderMessage = document.getElementById('reminder-message');

// State
let dailyGoal = 0;
let consumed = 0;
let reminderInterval;

// Audio
const drinkWaterAudio = new Audio('audio/drinkwater.wav');
const setGoalAudio = new Audio('audio/setgoal.wav');
const logIntakeAudio = new Audio('audio/logintake.wav');
const successAudio = new Audio('audio/success.wav');

function playAudio(audio) {
  audio.play().catch((error) => {
    console.error('音声の再生に失敗しました:', error);
  });
}

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
  playAudio(setGoalAudio);
  saveToCookie();
}

function clearGoal() {
  dailyGoal = 0;
  consumed = 0;
  goalElement.textContent = dailyGoal;
  consumedElement.textContent = consumed;
  saveToCookie();
}

function logIntake() {
  const intake = parseInt(waterIntakeInput.value, 10) || 0;
  consumed += intake;
  consumedElement.textContent = consumed;
  waterIntakeInput.value = '';
  playAudio(logIntakeAudio);
  saveToCookie();
  checkGoal();
}

function createReminder() {
  if (!dailyGoal) return;
  reminderInterval = setInterval(function () {
    playAudio(drinkWaterAudio);
  }, 30000);

  elements.startReminderButton.disabled = true;
}

function checkGoal() {
  if (consumed >= dailyGoal && dailyGoal > 0) {
    alert('今日の目標、達成しちゃったね！おめでとう！明日も一緒に頑張ろうね！');
    playAudio(successAudio);
    clearInterval(reminderInterval);
  }
}

// Cookie
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

// データ初期化
setInterval(updateTime, 1000);
loadFromCookie();

setGoalButton.addEventListener('click', setGoal);
clearGoalButton.addEventListener('click', clearGoal);
logIntakeButton.addEventListener('click', logIntake);
startReminder.addEventListener('click', createReminder);
