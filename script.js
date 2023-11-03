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
  const formatterdMiliSeconds = checkTime(miliSecond);

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

submitActivy.addEventListener("click", function () {
  const inputValue = inputActivy.value;
  console.log("nilai input:", inputValue);
});
