// general variables
let font = {
  size: 14,
  family: "Vazir",
};

// ! income chart
let incomeChart = document.querySelector(".income-chart-canvas");
let month = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
]
new Chart(incomeChart, {
  type: "bar",
  options: {
    maintainAspectRatio: false,
    stacked: false,

    plugins: {
      legend: {
        rtl: true,
        labels: {
          font: font,
          padding: 30,
        },
      },

      tooltip: {
        // background
        backgroundColor: colorDark,
        // title
        titleFont: font,
        titleAlign: "right",
        // body
        bodyFont: font,
        bodyAlign: "right",
        // padding
        padding: 15,
        cornerRadius: 5,
        // rtl: true,
        // color
        displayColors: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: font,
        },
      },

      y: {
        grid: {
          display: true,
          color: "#EEE",
        },
        ticks: {
          font: font,
        },
      },

      y1: {
        // type: "line",
        display: true,
        position: "right",

        // grid line settings
        grid: {
          display: false,
        },
      },
    },
  },

  data: {
    labels: month,
    datasets: [
      {
        label: "درآمد",
        backgroundColor: colorPrimary,
        borderColor: colorPrimary,
        borderWidth: 3,
        borderRadius: 5,
        ponitRadius: 5,
        pointBorderColor: colorPrimary,
        data: [20, 150, 300, 900, 800, 850, 400, 450, 600, 700, 300, 1200],
        cubicInterpolationMode: "monotone",
        order: 1,
      },
      {
        label: "هزینه",
        backgroundColor: colorSecondary,
        borderColor: colorSecondary,
        borderWidth: 3,
        borderRadius: 5,
        ponitRadius: 5,
        pointBorderColor: colorSecondary,
        data: [70, 50, 55, 50, 75, 85, 85, 85, 85, 89, 95, 130],
        // cubicInterpolationMode: "monotone",
        order: 2,
      },
      {
        label: "قردادها",
        backgroundColor: colorDark,
        borderColor: colorDark,
        borderWidth: 3,
        borderRadius: 5,
        ponitRadius: 5,
        pointBorderColor: colorDark,
        cubicInterpolationMode: "monotone",
        data: [1, 5, 10, 30, 22, 29, 12, 9, 15, 10, 13, 37],
        yAxisID: "y1",
        type: "line",
        order: 0,
      },
    ],
  },
});

// ! tech chart
let techChart = document.querySelector(".tech-chart");
new Chart(techChart, {
  type: "doughnut",

  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        rtl: true,
        labels: {
          font: font,
          padding: 30,
        },
      },

      tooltip: {
        // background
        backgroundColor: colorDark,
        // title
        titleFont: font,
        titleAlign: "right",
        // body
        bodyFont: font,
        bodyAlign: "right",
        // padding
        padding: 15,
        cornerRadius: 5,
        // rtl: true,
        // color
        displayColors: false,
      },
    },
  },

  data: {
    labels: ["فروشگاهی", "شرکتی", "ری‌اکت نیتیو", "PWA"],
    datasets: [
      {
        backgroundColor: [colorSecondary, colorPrimary],
        borderColor: "#fff",
        borderWidth: 3,
        data: [51, 20, 19, 10]
      }
    ]
  }

});

// ! project cahrt
let projectChart = document.querySelector('.project-chart');
new Chart(projectChart, {
  type: "bar",

  options: {
    indexAxis: "y",
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        rtl: true,
        labels: {
          font: font,
          padding: 30,
        },
      },

      tooltip: {
        // background
        backgroundColor: colorDark,
        // title
        titleFont: font,
        titleAlign: "right",
        // body
        bodyFont: font,
        bodyAlign: "right",
        // padding
        padding: 15,
        cornerRadius: 5,
        // rtl: true,
        // color
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#EEE",
        },
        ticks: {
          font: font,
        },
        suggestedMax: 100,
      },
      
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: font,
        },
      },
    },
  },

  data: {
    labels: ["شماره 1", "شماره 2", "شماره 3"],
    datasets: [
      {
        label: "میزان پیشرفت پروژه(به درصد)",
        backgroundColor: colorSecondary,
        borderRadius: 10,
        data: [20, 50, 90],
      },
    ],
  },
});