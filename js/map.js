"use strict";

//let test = document.getElementById('test');
//test.addEventListener('click',(e) => {  
//  document.querySelector('.accordion-button').click();
//  document.querySelector('.accordion-button').focus();
//});
const accordionInMap = document.getElementById("accordionExample");
accordionInMap.addEventListener('click', function (e) {
  if (window.screen.width <= 511) {
    accordionInMap.style.paddingBottom = "80px";
  }
});
const mainMap = document.querySelector(".main-map");
const Baikal = {
  'onMainMap': {
    'el': document.querySelector("#RU-IRK"),
    'items': []
  },
  'onList': {
    "el": document.querySelector("#BaikalOnList"),
    'listItems': [document.querySelector("#BaikalOnListItem1"), document.querySelector("#BaikalOnListItem2"), document.querySelector("#BaikalOnListItem3")],
    'links': ['https://www.google.com/', 'https://www.google.com/i', 'https://www.google.com/2']
  },
  "addMap": {
    'el': document.querySelector("#baikal-map"),
    'tours': [document.querySelector(".BaikalTour1"), document.querySelector(".BaikalTour2"), document.querySelector(".BaikalTour3")],
    'ways': [[document.querySelector(".BaikalTourWay1")], [document.querySelector(".BaikalTourWay2"), document.querySelector(".BaikalAddWay")], [document.querySelector(".BaikalTourWay3"), document.querySelector(".BaikalAddWay")]]
  }
};
const Buratia = {
  'onMainMap': {
    'el': document.querySelector("#RU-BU"),
    'items': []
  },
  'onList': {
    "el": document.querySelector("#BurOnList"),
    'listItems': [document.querySelector("#BurOnListItem1"), document.querySelector("#BurOnListItem2"), document.querySelector("#BurOnListItem3"), document.querySelector("#BurOnListItem4")],
    'links': ['https://www.google.com/', 'https://www.google.com/i', 'https://www.google.com/2', 'https://www.google.com/2']
  },
  "addMap": {
    'el': document.querySelector("#bur-map"),
    'tours': [document.querySelector(".BurTour1"), document.querySelector(".BurTour2"), document.querySelector(".BurTour3"), document.querySelector(".BurTour4")],
    'ways': [[document.querySelector(".BurTourWay1")], [document.querySelector(".BurTourWay2")], [document.querySelector(".BurTourWay3")], [document.querySelector(".BurTourWay4")]]
  }
};
const locations = [Baikal, Buratia];

function hiddenNotActiveMap(activeMap) {
  locations.forEach(el => {
    let addMap = el.addMap.el;

    if (activeMap !== addMap && !addMap.classList.contains('hidden')) {
      addMap.classList.add('hidden');

      if (!mainMap.classList.contains('hidden')) {
        mainMap.classList.add('hidden');
      }
    }
  });
}

function hoverLocationOnMainMap() {
  LocationTitleOnList.classList.add("active");
  LocationOnMainList.classList.add('stroke-active');

  for (let i = 0; i < itemsOnMainMap.length; i++) {
    itemsOnMainMap[i].classList.remove('hidden');
  }
}

locations.forEach(el => {
  // Скрыть элементы на мейн карте и пркрасить в белый
  let itemsOnMainMap = el.onMainMap.items;

  for (let i = 0; i < itemsOnMainMap.length; i++) {
    itemsOnMainMap[i].classList.add('hidden'); // При наведении

    itemsOnMainMap[i].addEventListener('mouseover', function () {
      LocationTitleOnList.classList.add("active");
      LocationOnMainList.classList.add('stroke-active');

      for (let i = 0; i < itemsOnMainMap.length; i++) {
        itemsOnMainMap[i].classList.remove('hidden');
      }
    }); // Убрать наведение

    itemsOnMainMap[i].addEventListener('mouseout', function () {
      LocationTitleOnList.classList.remove("active");
      LocationOnMainList.classList.remove('stroke-active');

      for (let i = 0; i < itemsOnMainMap.length; i++) {
        itemsOnMainMap[i].classList.add('hidden');
      }
    }); // При клике

    itemsOnMainMap[i].addEventListener('click', function () {
      let click = new Event("click");
      LocationTitleOnList.dispatchEvent(click);
    }); // Покрасить в белый

    if (itemsOnMainMap[i].tagName == "circle") {
      itemsOnMainMap[i].classList.add('stroke-white');
    } else {
      itemsOnMainMap[i].classList.add('fill-white');
      itemsOnMainMap[i].classList.add('stroke-white');
    }
  } // Клик по заголовку списка


  let LocationTitleOnList = el.onList.el;
  LocationTitleOnList.addEventListener('click', function () {
    let activeMap = el.addMap.el;
    mainMap.classList.toggle('hidden');

    if (activeMap.classList.contains('hidden')) {
      activeMap.classList.toggle('hidden');
      hiddenNotActiveMap(activeMap);
    } else {
      activeMap.classList.toggle('hidden');
    }
  }); // Клик по мейн карте

  let LocationOnMainList = el.onMainMap.el;
  LocationOnMainList.addEventListener('click', function () {
    let click = new Event("click");
    LocationTitleOnList.dispatchEvent(click);
  }); // клик на заголовок списка

  LocationTitleOnList.addEventListener('click', function () {
    window.location.href = link;
  }); // Наведение на  заголовок списка

  LocationTitleOnList.addEventListener('mouseover', function (e) {
    LocationOnMainList.classList.add('stroke-active');

    for (let i = 0; i < itemsOnMainMap.length; i++) {
      itemsOnMainMap[i].classList.remove('hidden');
    }
  }); // mouseout  c заголовок списка

  LocationTitleOnList.addEventListener('mouseout', function (e) {
    LocationOnMainList.classList.remove('stroke-active');

    for (let i = 0; i < itemsOnMainMap.length; i++) {
      itemsOnMainMap[i].classList.add('hidden');
    }
  }); // mouseover on location main map

  LocationOnMainList.addEventListener('mouseover', function () {
    LocationTitleOnList.classList.add("active");
    LocationOnMainList.classList.add('stroke-active');

    for (let i = 0; i < itemsOnMainMap.length; i++) {
      itemsOnMainMap[i].classList.remove('hidden');
    }
  }); // mouseout  on location main map

  LocationOnMainList.addEventListener('mouseout', function () {
    LocationTitleOnList.classList.remove("active");
    LocationOnMainList.classList.remove('stroke-active');

    for (let i = 0; i < itemsOnMainMap.length; i++) {
      itemsOnMainMap[i].classList.add('hidden');
    }
  }); // Туры на картах локаций

  let toursLength = el.onList.listItems.length;

  for (let i = 0; i < toursLength; i++) {
    let listTour = el.onList.listItems[i];
    let mapTourTitle = el.addMap.tours[i];
    let mapTourWay = el.addMap.ways[i];
    let link = el.onList.links[i]; // Логика списка
    //клик на тур в списке

    listTour.addEventListener('click', function () {
      window.location.href = link;
    }); // наведение на тур в списке

    listTour.addEventListener('mouseover', function (e) {
      mapTourTitle.classList.add('fill');

      if (Array.isArray(mapTourWay)) {
        for (let j = 0; j < mapTourWay.length; j++) {
          mapTourWay[j].classList.remove('hidden');
        }
      } else {
        mapTourWay.classList.remove('hidden');
      }
    }); // mouseout курсора с тура в списке

    listTour.addEventListener('mouseout', function (e) {
      mapTourTitle.classList.remove('fill');

      if (Array.isArray(mapTourWay)) {
        for (let j = 0; j < mapTourWay.length; j++) {
          mapTourWay[j].classList.add('hidden');
        }
      } else {
        mapTourWay.classList.add('hidden');
      }
    }); //Логика тура на карте
    // клик на заголовок тура на карте 

    mapTourTitle.addEventListener('click', function () {
      window.location.href = link;
    }); //наведение на заголовок тура на карте

    mapTourTitle.addEventListener('mouseover', function (e) {
      mapTourTitle.classList.add('fill');

      if (Array.isArray(mapTourWay)) {
        for (let j = 0; j < mapTourWay.length; j++) {
          mapTourWay[j].classList.remove('hidden');
        }
      } else {
        mapTourWay.classList.remove('hidden');
      } // добавляем белый цвет ссылке


      listTour.children[0].classList.add('__el-active');
    }); // mouseout курсора с загoловка тура на карте

    mapTourTitle.addEventListener('mouseout', function (e) {
      mapTourTitle.classList.remove('fill');

      if (Array.isArray(mapTourWay)) {
        for (let j = 0; j < mapTourWay.length; j++) {
          mapTourWay[j].classList.add('hidden');
        }
      } else {
        mapTourWay.classList.add('hidden');
      } // убераем белый цвет у ссылки


      listTour.children[0].classList.remove('__el-active');
    });
  }
}); //const yakutiaLeft = document.querySelector(".yak-left");
//const yakutuaMap = document.querySelector(".yakutia-map");
//yakutiaLeft.addEventListener('click',function (e) {
// mainMap.classList.toggle('hidden');
//  yakutuaMap.classList.toggle('hidden');
//});
//inner location
//const tour = document.querySelector(".tour-test");
//const tourWay = document.querySelector(".tour-test__way");
//tour.addEventListener('mouseover',function (e) {
//  tour.classList.add('fill-test');
//  tourWay.classList.remove('hidden');
//});
//tour.addEventListener('mouseout',function (e) {
//  tour.classList.remove('fill-test');
//  tourWay.classList.add('hidden');
//});
//const compas = document.querySelector('.compas-svg'),
//compasKamchatka = document.querySelector('.kamchatka'),
//compasMongolia = document.querySelector('.mongolia'),
//compasArrow = document.querySelector('.compas-arrow');
//let deg = 0;
//function moveTheArrow(deg) {
//  compasArrow.style.transform = `rotate(${deg}deg)`;
//}
//setInterval(() => {
//  moveTheArrow(deg);
//  deg++;
//},40)
//compasMongolia.addEventListener('mouseenter', function(e){
// compasArrow.classList.add('change-mongolia');
//  compasArrow.classList.remove('change-kamchatka');
//});
//compasKamchatka.addEventListener('mouseenter', function(e){
//  compasArrow.classList.add('change-kamchatka');
//  compasArrow.classList.remove('change-mongolia');
//});
// transform-box: fill-box;
// transform-origin:15% 79%;
//transform:rotate(90deg);