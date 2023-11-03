function startTime() {
  const today = new Date();
  let hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const miliSecond = today.getMilliseconds();
  const whichTime = hours < 12 ? "AM" : "PM";
  const convertedHours = hours === 12 ? 12 : hours > 12 ? hours - 12 : hours;
  const formattedHours = checkTime(convertedHours);
  const formattedMinutes = checkTime(minutes);
  const formattedSeconds = checkTime(seconds);

  const clockDisplayer = document.getElementById("clock");
  clockDisplayer.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${whichTime}`;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentWeek = days[today.getDay()];
  const currentMonth = months[today.getMonth()];
  const currentYear = today.getFullYear();

  const dateDisplayer = document.getElementById("date");
  dateDisplayer.innerHTML = `${currentWeek}, ${today.getDate()} ${currentMonth} ${currentYear}`;
}

const time = setInterval(function () {
  startTime();
}, 500);

function checkTime(i) {
  return i < 10 ? "0" + i : i;
}

startTime();

const inputActivy = document.getElementById("task");
const submitActivy = document.getElementById("submit");
const listActivity = document.getElementById("list-wrapper");
const getError = document.getElementById("erorr");

function saveActivities(activity) {
  let activities = [];
  const savedActivities = localStorage.getItem("activities");
  if (savedActivities) {
    activities = JSON.parse(savedActivities);
  }
  activities.push(activity);
  localStorage.setItem("activities", JSON.stringify(activities));
}

submitActivy.addEventListener("click", function () {
  const inputValue = inputActivy.value;
  if (inputValue) {
    const list = document.createElement("li");
    list.textContent = inputValue;
    listActivity.appendChild(list);
    saveActivities(inputValue);
    inputActivy.value = "";
  } else {
    getError.textContent = "Please input your activities!";
    setTimeout(function () {
      getError.textContent = "";
    }, 1000);
  }
});
