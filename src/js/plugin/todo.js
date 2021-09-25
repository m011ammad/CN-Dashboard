"use strict";

// giving html elements
const clear = document.querySelector(".clear");
const date = document.querySelector(".date");
const today = document.querySelector(".today");
const list = document.querySelector(".list");
const input = document.querySelector(".input");
const add = document.querySelector(".add-task");
const itemsDone = document.querySelectorAll(".item-done");
const itemsText = document.querySelectorAll(".item-text");
const itemsDelete = document.querySelectorAll(".item-delete");
let idCounter;
let dataList = [];

// ! add function
function addToDo(text, id, trash) {
  // if item is in trash don't create it in DOM
  if (trash) {
    return;
  }

  const item = `    <li>
                        <span class="item-done fas fa-circle-notch" id="${id}"></span>
                        <span class="item-text"> ${text} </span>
                        <span class="item-delete fas fa-trash-alt" id="${id}"></span>
                    </li>`;
  list.insertAdjacentHTML("beforeend", item);
}

// ! get localStorage data and save to dataList
let parsedList = JSON.parse(localStorage.getItem("ToDo"));
if (parsedList != null) {
  parsedList.forEach((v) => {
    addToDo(v.todoText, v.id, v.trash);
    dataList.push({
      todoText: v.todoText,
      id: v.id,
      done: v.done,
      trash: v.trash,
    });
  });
}

// ! date
let todayDate = new Date();
date.innerHTML = todayDate.toISOString().split("T")[0];
// today
let todayNumber = todayDate.getDay();
switch (todayNumber) {
  case 0:
    today.innerHTML = "یکشنبه";
    break;
  case 1:
    today.innerHTML = "دوشنبه";
    break;
  case 2:
    today.innerHTML = "سشنبه";
    break;
  case 3:
    today.innerHTML = "چهارشنبه";
    break;
  case 4:
    today.innerHTML = "پنجشنبه";
    break;
  case 5:
    today.innerHTML = "جمعه";
    break;
  case 6:
    today.innerHTML = "شنبه";
    break;
  default:
    break;
}

// ! clear
clear.addEventListener("click", (e) => {
  // remove all items from DOM
  list.querySelectorAll("li").forEach((v) => {
    v.remove();
  });

  // remove localStorage item
  window.localStorage.removeItem("ToDo");
});

// ! after submit(by click and enter) function
let afterSubmit = (e) => {
  // remove emptyList
  if (document.querySelector(".list-empty") != null) {
    document.querySelector(".list-empty").remove();
  }

  // get input value
  let inputValue = input.value;

  // set idCounter
  // if we use other idCounter after refresh the idCounter will be 0 again
  if (dataList.length == 0) {
    // if list empty
    idCounter = 0;
  } else {
    // give last id and set idCounter value one higher
    idCounter = dataList[dataList.length - 1].id + 1;
  }

  // add new item
  addToDo(inputValue, idCounter);

  // clear input
  input.value = "";

  // update dataList array
  dataList.push({
    todoText: inputValue,
    id: idCounter,
    done: false,
    trash: false,
  });

  // update localStorage
  window.localStorage.setItem("ToDo", JSON.stringify(dataList));

  // update idCounter
  idCounter++;
};
// ! click on add item
add.addEventListener("click", afterSubmit);
// ! add by Enter key
input.addEventListener("keyup", (e) => {
  console.log(1);
  if (e.key == "Enter") {
    afterSubmit(e);
  }
});

// ! done , delete
list.addEventListener("click", (e) => {
  // ! done item
  // if click on circle(check) icon
  if (e.target.matches(".item-done")) {
    if (e.target.matches(".fa-circle-notch")) {
      // if task is done

      // update dataList
      dataList[e.target.id].done = false;
      // update localStorage
      window.localStorage.setItem("ToDo", JSON.stringify(dataList));

      e.target.classList.remove("fa-circle-notch");
      e.target.classList.add("fa-check-circle");
      e.target.nextElementSibling.style.textDecoration = "line-through";

      console.log(localStorage.getItem("ToDo"));
    } else {
      // if task is not done

      // update dataList
      dataList[e.target.id].done = true;
      // update localStorage
      window.localStorage.setItem("ToDo", JSON.stringify(dataList));

      e.target.classList.remove("fa-check-circle");
      e.target.classList.add("fa-circle-notch");
      e.target.nextElementSibling.style.textDecoration = "none";

      console.log(localStorage.getItem("ToDo"));
    }
    // ! delete items
    // if click of delete icon
  } else if (e.target.matches(".item-delete")) {
    dataList[e.target.id].trash = true;
    window.localStorage.setItem("ToDo", JSON.stringify(dataList));
    e.target.closest("li").remove();
  }
});

// ! add text and image if list is empty
if (dataList.length == 0) {
  const emptyList = ` <div class="list-empty">
                        <span class="empty-title">لیست کارهای شما خالی است!</س>
                        <!-- <img src="../img/to-do-list.svg" alt="empty list"> -->
                    </div>`;
  list.insertAdjacentHTML("beforeend", emptyList);
}
