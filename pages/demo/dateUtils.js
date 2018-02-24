export const MAX_GRIDE_ITEM = 42;

export function getDate(value) {
  console.log(value)
  var date = new Date();
  console.log(date.getFullYear())
}

export function howDaysThisMonth(month) {
    if(!Number.isInteger(month)) {
      return undefined
    }
    return getDaysCount(month)
}

export function getDaysArr(year,month) {
    var dateNow = new Date();
    var date = new Date(year, month - 1,1,0,0,0)
    var arr = []
    var days
    if(date.getDay() == 0) {
        days = 7
    } else {
        days = date.getDay()
    }

    for(var i = 0; i < MAX_GRIDE_ITEM; i++) {
        arr[i] = ""
    }

    for(var i = 1; i <= getDaysCount(month); i++) {
        arr[days - 1 + i - 1] = i;
    }

    return arr
}

export function getDateString(date) {
  var year = date.getFullYear()
  var month = date.getMonth()
  var day = date.getDate()
  return year + "-" + month + "-" + day
}

function getDaysCount(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      var date = new Date();
      var year = date.getFullYear();
      if ((year % 4 == 0 && year % 100 != 0) ||
        year % 100 == 0 && year % 400 == 0) {
        return 29;
      } else {
        return 28;
      }
    default:
      return 30;
  }
}