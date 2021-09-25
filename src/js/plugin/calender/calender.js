$(document).ready(function () {
  InitCalendar($("#cal1"));
});

var _year;
var _month;
var _day = 1;
var _currDay;
var _jlcal = new JalaliCal();
var _hjcal = new HijriCal();

/* sets table and calendar defaults */
function InitCalendar(table) {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var dayofweek;

  var jalaliDate = _jlcal.toJalaali(year, month, day);
  _year = jalaliDate.jy;
  _month = jalaliDate.jm - 1;
  $(".calender-select-year").val(_year);
  $(".calender-select-month").val(_month);
  UpdateCal(table, _year, _month, _day);
}

/* updates table values */
function UpdateCal(table, year, month, day) {
  var today,
    dayOfWeek,
    daysInMonth,
    count = 1;
  var tb = $(table),
    td;
  var j2g, g2h;
  var now = new Date();

  j2g = _jlcal.toGregorian(year, month + 1, 1);
  today = new Date(j2g.gy, j2g.gm - 1, j2g.gd);
  dayOfWeek = today.getDay();
  dayOfWeek = dayOfWeek == 6 ? 0 : dayOfWeek + 1;
  daysInMonth = _jlcal.jalaaliMonthLength(year, month);

  if (
    (dayOfWeek == 5 && daysInMonth > 30) ||
    (dayOfWeek == 6 && daysInMonth >= 30)
  ) {
    $(tb).find("tr:last").removeClass("hidden");
  } else {
    $(tb).find("tr:last").addClass("hidden");
  }

  $(tb).find("td span").popover("destroy");
  $(tb)
    .find("td")
    .text("")
    .removeAttr("data-jl")
    .removeAttr("data-gr")
    .removeAttr("data-hj")
    .removeClass("dayoff");
  td = $(tb).find("td");

  for (var index = dayOfWeek; index < daysInMonth + dayOfWeek; index++) {
    var element = td[index];
    j2g = _jlcal.toGregorian(year, month + 1, count);
    g2h = _hjcal.toHijri(j2g.gy, j2g.gm - 1, j2g.gd);
    today = new Date(j2g.gy, j2g.gm - 1, j2g.gd);

    if (
      gd2Txt(today.getDay()) == "Fir" ||
      isoff("jl", month, count) ||
      isoff("hj", g2h.hm, g2h.hd)
    ) {
      $(element).addClass("dayoff");
    }
    $(element).attr("data-jl", year + "-" + (month + 1) + "-" + count);
    $(element).attr(
      "data-gr",
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    );
    $(element).attr("data-hj", g2h.hy + "-" + (g2h.hm + 1) + "-" + g2h.hd);
    $(element).html(
      "<b>" + count + "</b>" + "\n"
      // "<span>" +
      // "<div class='font-fa tdinfo'>" +
      // g2h.hy + " " + hm2Txt(g2h.hm) + " " + g2h.hd +
      // "</div>" +
      // "<div class='font-eng tdinfo'>" +
      // gd2Txt(today.getDay()) + " " +
      // gm2Txt(today.getMonth()) + " " +
      // today.getDate() + " " +
      // today.getFullYear() +
      // "</div></span>"
    );
    count++;
  }
}

/* handle events */
$(".calender-select-year").change(function () {
  _year = parseInt($(this).find(":selected").val());
  UpdateCal($(this).closest("table"), _year, _month, _day);
});
$(".calender-select-month").change(function () {
  _month = parseInt($(this).find(":selected").val());
  UpdateCal($(this).closest("table"), _year, _month, _day);
});
$(".calender td").on("click", function (e) {
  $tb = $(this).closest("table");
  $(".calender td span").popover("destroy");
  if ($(this).attr("data-jl") && $(this).attr("data-gr")) {
    var title = "",
      content = "";
    _currDay = $(this);
    var jl = $(this).attr("data-jl").split("-");
    var wc = $(this).attr("data-gr").split("-");
    var hj = $(this).attr("data-hj").split("-");
    $.ajax({
      url:
        "https://farsicalendar.com/api/sh,wc,ic/" +
        jl[2] +
        "," +
        wc[2] +
        "," +
        hj[2] +
        "/" +
        jl[1] +
        "," +
        wc[1] +
        "," +
        hj[1],
      type: "GET",
      dataType: "json",
      date: { limit: 3 },
      success: function (data) {
        console.log(data);
        title = "رویدادهای امروز:";
        content += "<ul>";
        if (data.values.length == 0) {
          content += "<li>" + "موردی یافت نشد" + "</li>";
        } else {
          $.each(data.values, function (index, item) {
            if (item.dayoff == true) {
              content += "<li class='dayoff'>" + item.occasion + "</li>";
            } else {
              content += "<li>" + item.occasion + "</li>";
            }
          });
        }
        content += "</ul>";
        $(_currDay).children("span").popover({
          title: title,
          content: content,
          container: "body",
          placement: "bottom auto",
          html: true,
        });
        $(_currDay).children("span").popover("show");
      },
      error: function () {
        console.log("error!!!");
      },
    });
    e.preventDefault();
  }
});

/* helpers */
function gd2Txt(day) {
  switch (day) {
    case 0:
      return "Sun";
      break;
    case 1:
      return "Mon";
      break;
    case 2:
      return "Tue";
      break;
    case 3:
      return "Wed";
      break;
    case 4:
      return "Thu";
      break;
    case 5:
      return "Fir";
      break;
    case 6:
      return "Sat";
      break;
    default:
      return "خطا";
      break;
  }
}
function gm2Txt(mon) {
  switch (mon) {
    case 0:
      return "Jan";
      break;
    case 1:
      return "Feb";
      break;
    case 2:
      return "Mar";
      break;
    case 3:
      return "Apr";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "Jun";
      break;
    case 6:
      return "Jul";
      break;
    case 7:
      return "Aug";
      break;
    case 8:
      return "Sep";
      break;
    case 9:
      return "Oct";
      break;
    case 10:
      return "Nov";
      break;
    case 11:
      return "Dec";
      break;
    default:
      return "خطا";
      break;
  }
}
function hm2Txt(mon) {
  switch (mon) {
    case 0:
      return "محرم";
      break;
    case 1:
      return "صفر";
      break;
    case 2:
      return "ربیع الاول";
      break;
    case 3:
      return "ربیع الثانی";
      break;
    case 4:
      return "جمادی الاول";
      break;
    case 5:
      return "جمادی الثانی";
      break;
    case 6:
      return "رجب";
      break;
    case 7:
      return "شعبان";
      break;
    case 8:
      return "رمضان";
      break;
    case 9:
      return "شوال";
      break;
    case 10:
      return "ذی القعده";
      break;
    case 11:
      return "ذی الحجه";
      break;
    default:
      return "خطا";
      break;
  }
}
function isoff(calType, mon, day) {
  var jlDayoff = [
    "1/1",
    "1/2",
    "1/3",
    "1/4",
    "1/12",
    "1/13",
    "3/14",
    "3/15",
    "11/22",
    "12/29",
  ];
  var hjDayoff = [
    "1/9",
    "1/10",
    "2/20",
    "2/28",
    "2/30",
    "3/17",
    "6/3",
    "7/13",
    "7/27",
    "8/15",
    "9/21",
    "10/1",
    "10/2",
    "10/25",
    "12/10",
    "12/18",
  ];

  mon += 1;
  if (calType == "jl") {
    if (jlDayoff.indexOf(mon + "/" + day) != -1) return true;
    else return false;
  }
  if (calType == "hj") {
    if (hjDayoff.indexOf(mon + "/" + day) != -1) return true;
    else return false;
  }
}
