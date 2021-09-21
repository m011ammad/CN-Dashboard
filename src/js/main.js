let desktopMenuIcon = document.querySelector(".desktop-menu-icon");
let sideBar = document.querySelector(".right-side");
let leftSide = document.querySelector(".left-side");
desktopMenuIcon.addEventListener('click', e => {
    console.log('c');
    sideBar.classList.toggle("sidebar-none-active");
    leftSide.classList.toggle("left-side-active");
})

// ! ---------------
var ctx1 = document.querySelector(".top-chart");
new Chart(ctx1, {
  type: "line",
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "کاربران جدید",
        backgroundColor: "#FF8552",
        borderColor: "#FF8552",
        borderWidth: 3,
        data: [165, 189, 320, 181, 156, 355, 277],
      },
    ]
  }
});

// ! devices-chart
var ctx2 = document.querySelector(".devices-chart");
new Chart(ctx2, {
  type: "doughnut",
  options: {
    maintainAspectRatio: false,
  },
  data: {
    labels: ['Android', 'ios', 'windows', 'linux'],
    datasets: [
      {
        backgroundColor: ['green', '#333', 'blue', 'orange'],
        borderColor: '#fff',
        borderWidth: 3,
        data: [51, 20, 19, 10],
      },
    ],
  },
});