
var letterCombinations = function(ms) {
  const H = '时';
  const M = '分';
  const S = '秒';
  let hour = parseInt((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let standardHour = hour + 8;
  if (standardHour > 24) hour = hour % 24;
  let minutes = parseInt((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = parseInt((ms % (1000 * 60)) / 1000);

  let min = minutes < 10 ? `0${minutes}` : minutes;
  let h = hour < 10 ? `0${hour}` : hour;
  let s = seconds < 10 ? `0${seconds}` : seconds;

  return {
    time: `${standardHour}:${min}`,
    desc: hour > 0 ? `${hour}${H}${minutes}${M}${seconds}${S}` : `${minutes}${M}${seconds}${S}`,
    desc2: hour > 0 ? `${h}:${min}:${s}` : `${min}:${s}`,
    hour: hour,
    minutes: minutes,
    seconds: seconds,
  };
  
};

console.log(letterCombinations(2399792))