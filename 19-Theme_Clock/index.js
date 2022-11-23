// 切换背景颜色 ---start
const bkg = document.querySelector(".switch");
let isChange = true;
bkg.addEventListener("click", (e) => {
  let divNodeWeek = document.querySelector(".week");
  let divNodeMonth = document.querySelector(".month");
  let divNodeDay = document.querySelector(".day");

  let divNodeHour = document.querySelector(".hour");
  let divNodeMinute = document.querySelector(".minute");

  if (isChange) {
    // night
    bkg.style.backgroundColor = "#fff";
    document.body.style.backgroundColor = "#000";
    bkg.style.color = "#000";
    timeNode.style.color = "#fff";
    bkg.innerHTML = "Light mode";
    isChange = false;

    // 星期
    divNodeWeek.style.color = "#fff";

    // 月份
    divNodeMonth.style.color = "#fff";

    // 日
    divNodeDay.style.backgroundColor = "#fff";
    divNodeDay.style.color = "#000";

    // 时针
    divNodeHour.style.backgroundColor = "#fff";

    // 分针
    divNodeMinute.style.backgroundColor = "#fff";
  } else {
    // light
    bkg.style.backgroundColor = "#000";
    bkg.style.color = "#fff";
    timeNode.style.color = "#000";
    document.body.style.backgroundColor = "#fff";
    bkg.innerHTML = "Dark mode";
    isChange = true;

    // 星期
    divNodeWeek.style.color = "#000";

    // 月份
    divNodeMonth.style.color = "#000";

    // 日
    divNodeDay.style.backgroundColor = "#000";
    divNodeDay.style.color = "#fff";

    // 时针
    divNodeHour.style.backgroundColor = "#000";

    // 分针
    divNodeMinute.style.backgroundColor = "#000";
  }
});
// 切换背景颜色 ---end

// 时钟 ---start

const clockNode = document.querySelector(".clock");
function setNode() {
  // 时针
  var divNodeHour = document.createElement("div");
  divNodeHour.setAttribute("class", "hour");
  clockNode.appendChild(divNodeHour);

  // 分针
  var divNodeMinute = document.createElement("div");
  divNodeMinute.setAttribute("class", "minute");
  clockNode.appendChild(divNodeMinute);

  // 秒针
  var divNodeSecond = document.createElement("div");
  divNodeSecond.setAttribute("class", "second");
  clockNode.appendChild(divNodeSecond);
}
setNode();

// 初始化旋转
function initRotate() {
  // 时针
  let divNodeHour = document.querySelector(".hour");

  // 计算
  let hourDegree;
  if (new Date().getHours() > 12) {
    hourDegree = 360 * ((new Date().getHours() - 12) / 12);
  } else {
    hourDegree = 360 * (new Date().getHours() / 12);
  }
  divNodeHour.style.transform = `rotate(${hourDegree}deg)`;

  // 分针
  let divNodeMinute = document.querySelector(".minute");
  let minuteDegree = 360 * (new Date().getMinutes() / 60);
  divNodeMinute.style.transform = `rotate(${minuteDegree}deg)`;
}
initRotate();

// 设置动态旋转
// 时针
let oldHour = new Date().getHours();

// 分针
let oldMinute = new Date().getMinutes();

function setRotate() {
  const date = new Date();

  // 秒针动态
  let second = date.getSeconds(); //得到秒数
  divNodeSecond = document.querySelector(".second");
  let degree = 360 * (second / 60);
  divNodeSecond.style.transform = `rotate(${degree}deg)`;

  // 分针动态
  let newMinute = date.getMinutes(); //得到分钟数
  if (newMinute !== oldMinute) {
    let divNodeMinute = document.querySelector(".minute");
    let degree = 360 * (newMinute / 60);
    divNodeMinute.style.transform = `rotate(${degree}deg)`;
    oldMinute = newMinute;
  }

  // 时针动态

  let newHour = date.getHours(); //得到时针
  if (newHour !== oldHour) {
    let hourDegree;

    let divNodeHour = document.querySelector(".hour");
    if (new Date().getHours() > 12) {
      hourDegree = 360 * ((new Date().getHours() - 12) / 12);
    } else {
      hourDegree = 360 * (new Date().getHours() / 12);
    }
    divNodeHour.style.transform = `rotate(${hourDegree}deg)`;
  }
}
// 时钟 ---end

// 设置时间 time ---start
const timeNode = document.querySelector(".time");
function getTimeFn() {
  const date = new Date();
  let hour = date.getHours(); //得到小时数
  let minute = date.getMinutes(); //得到分钟数
  let second = date.getSeconds(); //得到秒数

  timeNode.innerHTML = `${hour}:${minute > 9 ? `${minute}` : `0${minute}`}:${
    second > 9 ? `${second}` : `0${second}`
  }`;
}
setInterval(() => {
  getTimeFn();
  setDateFn()
  setRotate();
}, 1000);

// 设置时间 time ---end

// 设置日期 date ---start

const dateNode = document.querySelector(".date");
// 星期
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function initDateFn() {
  const date = new Date();

  
  // 创建元素
  // 星期
  let week = days[date.getDay() - 1];
  var divNodeWeek = document.createElement("div");
  divNodeWeek.setAttribute("class", "week");
  divNodeWeek.innerHTML = week;
  dateNode.appendChild(divNodeWeek);

  // 月份
  let month = date.toDateString().split(" ")[1];
  var divNodeMonth = document.createElement("div");
  divNodeMonth.setAttribute("class", "month");
  divNodeMonth.innerHTML = month;
  divNodeMonth.style.marginLeft = "10px";
  dateNode.appendChild(divNodeMonth);

  // 日
  let day = date.getDate();
  var divNodeDay = document.createElement("div");
  divNodeDay.setAttribute("class", "day");
  divNodeDay.innerHTML = day;
  dateNode.appendChild(divNodeDay);
 
}
initDateFn();

const oldDivNodeWeek = document.querySelector(".week"); //星期
const oldDivNodeMonth = document.querySelector(".month"); //月份
const oldDivNodeDay = document.querySelector(".day"); //日

function setDateFn(){
    const date = new Date();
    // 星期
    let newWeek = days[date.getDay() - 1]
    if(oldDivNodeWeek.innerHTML !==newWeek){
        oldDivNodeWeek.innerHTML=newWeek
    }
    // 月份
    let newMonth= date.toDateString().split(" ")[1]
    if(oldDivNodeMonth.innerHTML !== newMonth){
        oldDivNodeMonth.innerHTML=newMonth
    }

    // 日
    let newDay = date.getDate();
    console.log(newDay,oldDivNodeDay.innerHTML)
    if(oldDivNodeDay.innerHTML !== newDay.toString()){
        oldDivNodeDay.innerHTML=newDay
    }
}

// 设置日期 date ---end
