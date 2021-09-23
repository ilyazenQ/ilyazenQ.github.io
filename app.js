const board = document.querySelector('#board');
const colors = [
   '#FFE4C4','#5F9EA0','#E9967A','#FF8C00','#8FBC8F','#F0E68C'
];
const el_type = ['square','circle'];
const EL_NUMBER = 500;

//Чувствительность — количество пикселей, после которого жест будет считаться свайпом
const sensitivity = 20;

let touchStart = null; //Точка начала касания
let touchEnd = null; //Точка начала касания
let touchPosition = null; //Текущая позиция
let elem = null;

for (let i = 0; i < EL_NUMBER; i++) {

   const el = document.createElement('div');
   el.classList.add(el_type[0]);
   el.addEventListener('mouseover', () => setColor(el,colors));
   el.addEventListener('mouseleave', () => removeColor(el));
 
   el.addEventListener("touchstart", (e) =>  TouchStart(e,colors,board)); //TouchStart(e)
   el.addEventListener("touchmove", (e) =>  TouchMove(e,colors,board) ); //TouchMove(e)
   el.addEventListener("touchend", (e) =>  TouchEnd(e) ); //TouchEnd(e)
   el.addEventListener("touchcancel", (e) =>  TouchEnd(e));

   board.append(el);
}


function setColor(el,colors) {
   const color = getRandomColor(colors);
   el.style.backgroundColor = `${color}`;
   el.style.boxShadow = `0 0 2px ${color}, 0 0 5px ${color}`
}

function removeColor(el) {
   el.style.backgroundColor = "#1d1d1d";
   el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(colors) {
   const index = Math.floor(Math.random() * colors.length);
   return colors[index]
}


function TouchStart(e,colors,board)
{
    //Получаем текущую позицию касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    touchPosition = { x: touchStart.x, y: touchStart.y };
    //console.log(touchPosition.x, touchPosition.y);
    //let rectBoardCollection = e.target.getClientRects();
    elem = document.elementFromPoint(touchPosition.x, touchPosition.y);
    if (elem.classList.contains(el_type[0])) {
      setColor(elem,colors);
      if(elem.classList.contains('active')) {
         removeColor(elem);
         elem.classList.remove('active');
      } else { 
         elem.classList.add('active');
      }
     
    }
    
  //  setColor(elem,colors)
}

function TouchMove(e,colors,board)
{
    //Получаем новую позицию
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    console.log(touchPosition.x, touchPosition.y);
    elem = document.elementFromPoint(touchPosition.x, touchPosition.y);
    if (elem.classList.contains(el_type[0])) {
      setColor(elem,colors);
      if(elem.classList.contains('active')) {
         removeColor(elem);
         elem.classList.remove('active');
      } else { 
         elem.classList.add('active');
      }
     
    }
    //console.log(elem)
    //setColor(elem,colors)
}

function TouchEnd(e)
{
   //console.log(touchPosition.x, touchPosition.y);
   //elem = document.elementFromPoint(touchPosition.x, touchPosition.y);
   //setColor(elem,colors)
    touchStart = null;
    touchPosition = null;
}

