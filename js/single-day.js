"use strict";const days=document.querySelectorAll(".day"),daysWrapper=document.querySelector(".content__days");function openClose(e){e=(e="DIV"===e.target.tagName?e.target:e.target.parentElement).parentElement,days.forEach((t=>{if(e===t){if(e.classList.contains("active"))return void e.classList.remove("active");e.classList.add("active")}t!==e&&t.classList.contains("active")&&t.classList.remove("active")}))}days.forEach((e=>{e.addEventListener("click",openClose)})),window.screen.width>1024&&new ScrollBooster({viewport:document.querySelector(".section-see"),content:document.querySelector(".section-see"),scrollMode:"native",direction:"horizontal"});let rightMoverArr=document.querySelectorAll(".calendar-move-right"),calendarBody=document.querySelector(".section-see");function scrollRight(){calendarBody.scrollLeft+=150,rightMoverArr.forEach((e=>{let t=parseInt(e.style.right);e.style.right=t-150+"px"}))}function scrollBody(){rightMoverArr.forEach((e=>{let t=parseInt(e.style.right);e.style.right+=t-parseInt(calendarBody.scrollLeft,10)+"px"}))}rightMoverArr.forEach((e=>{e.addEventListener("click",scrollRight)})),calendarBody.addEventListener("scroll",scrollBody);const knowItems=document.querySelectorAll(".know-item"),knowWrapper=document.querySelector(".know-left");function openCloseKnowItem(e){e=(e="DIV"===e.target.tagName?e.target:e.target.parentElement).parentElement,knowItems.forEach((t=>{if(e===t){if(e.classList.contains("active"))return void e.classList.remove("active");e.classList.add("active")}}))}knowItems.forEach((e=>{e.addEventListener("click",openCloseKnowItem)}));