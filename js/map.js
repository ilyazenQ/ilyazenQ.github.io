"use strict";

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
    'items': [],
    'array_el': []
  },
  'onList': {
    "el": document.querySelector("#BaikalOnList"),
    'listItems': [document.querySelector("#BaikalOnListItem1"), document.querySelector("#BaikalOnListItem2"), document.querySelector("#BaikalOnListItem3")],
    'links': ['https://siberiaexplorer.ru/lyod-i-zvyozdy/', 'https://siberiaexplorer.ru/ice-kingdom/', '#']
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
    'items': [],
    'array_el': []
  },
  'onList': {
    "el": document.querySelector("#BurOnList"),
    'listItems': [document.querySelector("#BurOnListItem1"), document.querySelector("#BurOnListItem2"), document.querySelector("#BurOnListItem3"), document.querySelector("#BurOnListItem4")],
    'links': ['https://siberiaexplorer.ru/mantry-doliny/', 'https://siberiaexplorer.ru/nerpy-na-solncze/', 'https://siberiaexplorer.ru/za-kulisami-tajgi/', 'https://www.google.com/2']
  },
  "addMap": {
    'el': document.querySelector("#bur-map"),
    'tours': [document.querySelector(".BurTour1"), document.querySelector(".BurTour2"), document.querySelector(".BurTour3"), document.querySelector(".BurTour4")],
    'ways': [[document.querySelector(".BurTourWay1")], [document.querySelector(".BurTourWay2")], [document.querySelector(".BurTourWay3")], [document.querySelector(".BurTourWay4")]]
  }
};
const Sakhalin = {
  'onMainMap': {
    'el': document.querySelector("#RU-SAK"),
    'items': [],
    'array_el': []
  },
  'onList': {
    "el": document.querySelector("#SakOnList"),
    'listItems': [document.querySelector("#SakOnListItem1"), document.querySelector("#SakOnListItem2")],
    'links': ['https://siberiaexplorer.ru/mantry-doliny/', 'https://siberiaexplorer.ru/nerpy-na-solncze/']
  },
  "addMap": {
    'el': document.querySelector("#sah-map"),
    'tours': [document.querySelector(".SakTour1"), document.querySelector(".SakTour2")],
    'ways': [[document.querySelector(".SakTourWay1")], [document.querySelector(".SakTourWay2")]]
  }
};
const Kuril = {
  'onMainMap': {
    'el': document.querySelector("#_1929002925664"),
    'array_el': [document.querySelector("#RU-SAK_0"), document.querySelector("#RU-SAK_1"), document.querySelector("#RU-SAK_2"), document.querySelector("#RU-SAK_3"), document.querySelector("#RU-SAK_4"), document.querySelector("#RU-SAK_5"), document.querySelector("#RU-SAK_6"), document.querySelector("#RU-SAK_7"), document.querySelector("#RU-SAK_8"), document.querySelector("#RU-SAK_9"), document.querySelector("#RU-SAK_10"), document.querySelector("#RU-SAK_11"), document.querySelector("#RU-SAK_12"), document.querySelector("#RU-SAK_13")],
    'items': []
  },
  'onList': {
    "el": document.querySelector("#KurOnList"),
    'listItems': [document.querySelector("#KurOnListItem1"), document.querySelector("#KurOnListItem2")],
    'links': ['https://siberiaexplorer.ru/mantry-doliny/', 'https://siberiaexplorer.ru/nerpy-na-solncze/']
  },
  "addMap": {
    'el': document.querySelector("#kur-map"),
    'tours': [document.querySelector(".KurTour1"), document.querySelector(".KurTour2")],
    'ways': [[document.querySelector(".KurTourWay1")], [document.querySelector(".KurTourWay2")]]
  }
};

const Kamch = {
  'onMainMap': {
    'el': document.querySelector("#RU-KAM"),
    'items': [],
    'array_el': []
  },
  'onList': {
    "el": document.querySelector("#KamOnList"),
    'listItems': [document.querySelector("#KamOnListItem1"), document.querySelector("#KamOnListItem2"),document.querySelector("#KamOnListItem3"),document.querySelector("#KamOnListItem4")],
    'links': ['https://siberiaexplorer.ru/lyod-i-zvyozdy/', 'https://siberiaexplorer.ru/ice-kingdom/', '#',"#"]
  },
  "addMap": {
    'el': document.querySelector("#kam-map"),
    'tours': [document.querySelector(".KamTour1"), document.querySelector(".KamTour2"), document.querySelector(".KamTour3"), document.querySelector(".KamTour4")],
    'ways': [[document.querySelector(".KamTourWay1"), 
    document.querySelector(".KamAddWay")], 
    [document.querySelector(".KamTourWay2")], 
    [document.querySelector(".KamTourWay3")], 
    [document.querySelector(".KamTourWay4")]]
  }
};

const KamchTest = {
  'onMainMap': {
    'el': "" ,
    'items': [],
    'array_el': []
  },
  'onList': {
    "el": document.querySelector("#KamOnList-test"),
    'listItems': [],
    'links': []
  },
  "addMap": {
    'el': document.querySelector("#kam-map-test"),
    'tours': [],
    'ways': []
  }
};

const locations = [Baikal, Buratia, Sakhalin, Kuril, Kamch, KamchTest];

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
  let arrayElOnMainMap = el.onMainMap.array_el;

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

    for (let i = 0; i < arrayElOnMainMap.length; i++) {
      arrayElOnMainMap[i].classList.add('stroke-active');
    }
  }); // mouseout  c заголовок списка

  LocationTitleOnList.addEventListener('mouseout', function (e) {
    LocationOnMainList.classList.remove('stroke-active');

    for (let i = 0; i < itemsOnMainMap.length; i++) {
      itemsOnMainMap[i].classList.add('hidden');
    }

    for (let i = 0; i < arrayElOnMainMap.length; i++) {
      arrayElOnMainMap[i].classList.remove('stroke-active');
    }
  }); // mouseover on location main map

  LocationOnMainList.addEventListener('mouseover', function () {
    LocationTitleOnList.classList.add("active");
    LocationOnMainList.classList.add('stroke-active');

    for (let i = 0; i < itemsOnMainMap.length; i++) {
      itemsOnMainMap[i].classList.remove('hidden');
    }

    for (let i = 0; i < arrayElOnMainMap.length; i++) {
      arrayElOnMainMap[i].classList.add('stroke-active');
    }
  }); // mouseout  on location main map

  LocationOnMainList.addEventListener('mouseout', function () {
    LocationTitleOnList.classList.remove("active");
    LocationOnMainList.classList.remove('stroke-active');

    for (let i = 0; i < itemsOnMainMap.length; i++) {
      itemsOnMainMap[i].classList.add('hidden');
    }

    for (let i = 0; i < arrayElOnMainMap.length; i++) {
      arrayElOnMainMap[i].classList.remove('stroke-active');
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
});
const compas = document.querySelector('.compas-svg'); //compasKamchatka = document.querySelector('.kamchatka'),
//compasMongolia = document.querySelector('.mongolia'),

const compasEl = {
  "kisl": [document.querySelector('#kisl-word'), document.querySelector('.kisl-link'), "https//test.ru", 0],
  "lepr": [document.querySelector('#lepr-word'), document.querySelector('.lepr-link'), "#", 60],
  "itur": [document.querySelector('#itur-word'), document.querySelector('.itur-link'), "#", 100],
  "mong": [document.querySelector('#mong-word'), document.querySelector('.mong-link'), "#", 140],
  "tofa": [document.querySelector('#tofa-word'), document.querySelector('.tofa-link'), "#", 190],
  "tuva": [document.querySelector('#tuva-word'), document.querySelector('.tuva-link'), "#", 240],
  "puto": [document.querySelector('#puto-word'), document.querySelector('.puto-link'), "#", 280],
  "lena": [document.querySelector('#lena-word'), document.querySelector('.lena-link'), "#", 330]
};

function removeFill(compasEl) {
  for (let key in compasEl) {
    compasEl[key][0].classList.remove("on-hover");
  }
}

function compasElLogic(compasEl) {
  for (let key in compasEl) {
    compasEl[key][1].addEventListener('click', function (e) {
      window.location.href = compasEl[key][2];
    });
    compasEl[key][1].addEventListener('mouseover', function (e) {
      removeFill(compasEl);
      compasEl[key][0].classList.remove("fill6");
      compasEl[key][0].classList.add("on-hover");
      moveTheArrow(compasEl[key][3]);
      clearInterval(interval);
    });
    compasEl[key][1].addEventListener('mouseout', function (e) {
      compasEl[key][0].classList.remove("on-hover");
      compasEl[key][0].classList.add("fill6");
    });
  }
}

compasElLogic(compasEl);
const compasArrow = document.querySelector('.compas-arrow');

function moveTheArrow(deg) {
  compasArrow.style.transform = `rotate(${deg}deg)`;
}

function fillWhenArrow(deg) {
  if (deg > 350 && deg < 360 || deg > 0 && deg < 10) {
    compasEl.lena[0].classList.remove("on-hover");
    compasEl.lena[0].classList.add("fill6");
    compasEl.kisl[0].classList.remove("fill6");
    compasEl.kisl[0].classList.add("on-hover");
  }

  if (deg > 40 && deg < 70) {
    compasEl.kisl[0].classList.remove("on-hover");
    compasEl.kisl[0].classList.add("fill6");
    compasEl.lepr[0].classList.remove("fill6");
    compasEl.lepr[0].classList.add("on-hover");
  }

  if (deg > 80 && deg < 110) {
    compasEl.lepr[0].classList.remove("on-hover");
    compasEl.lepr[0].classList.add("fill6");
    compasEl.itur[0].classList.remove("fill6");
    compasEl.itur[0].classList.add("on-hover");
  }

  if (deg > 120 && deg < 140) {
    compasEl.itur[0].classList.remove("on-hover");
    compasEl.itur[0].classList.add("fill6");
    compasEl.mong[0].classList.remove("fill6");
    compasEl.mong[0].classList.add("on-hover");
  }

  if (deg > 160 && deg < 180) {
    compasEl.mong[0].classList.remove("on-hover");
    compasEl.mong[0].classList.add("fill6");
    compasEl.tofa[0].classList.remove("fill6");
    compasEl.tofa[0].classList.add("on-hover");
  }

  if (deg > 220 && deg < 240) {
    compasEl.tofa[0].classList.remove("on-hover");
    compasEl.tofa[0].classList.add("fill6");
    compasEl.tuva[0].classList.remove("fill6");
    compasEl.tuva[0].classList.add("on-hover");
  }

  if (deg > 260 && deg < 310) {
    compasEl.tuva[0].classList.remove("on-hover");
    compasEl.tuva[0].classList.add("fill6");
    compasEl.puto[0].classList.remove("fill6");
    compasEl.puto[0].classList.add("on-hover");
  }

  if (deg > 320 && deg < 340) {
    compasEl.puto[0].classList.remove("on-hover");
    compasEl.puto[0].classList.add("fill6");
    compasEl.lena[0].classList.remove("fill6");
    compasEl.lena[0].classList.add("on-hover");
  }
}

var deg = 0;
var interval = setInterval(function () {
  deg++;

  if (deg % 360 === 0) {
    deg = 0;
  }

  moveTheArrow(deg);
  fillWhenArrow(deg);
}, 40);