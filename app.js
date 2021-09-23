const board = document.querySelector('#board');
const colors = [
   '#FFE4C4','#5F9EA0','#E9967A','#FF8C00','#8FBC8F','#F0E68C'
];
const el_type = ['square','circle'];
const EL_NUMBER = 500;

for (let i = 0; i < EL_NUMBER; i++) {

   const el = document.createElement('div');
   el.classList.add(el_type[0]);
   el.addEventListener('mouseover', () => setColor(el,colors));
   el.addEventListener('mouseleave', () => removeColor(el));
   el.addEventListener('touchmove', function(event) {
      event.preventDefault();
      event.stopPropagation();
      setColor(el,colors);
      }, false); 
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