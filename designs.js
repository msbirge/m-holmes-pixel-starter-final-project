// Select color input
// Select size input
var formSelection = document.getElementById('sizePicker');
var colorSelection = document.getElementById('colorPicker');

//add event listener to the form
formSelection.addEventListener('submit', function (event) {
  event.preventDefault();
  var width = document.getElementById('inputWidth').value;
  var hight = document.getElementById('inputHeight').value;
  makeGrid(width, hight);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(x, y) {
  var table = document.getElementById('pixelCanvas');

  // if tbody exist, remove tbody to restart the game
  for (let cell of table.getElementsByTagName('tbody')) {
    cell.remove();
  }

  //create table body
  var tbdy = document.createElement('tbody');
  for (var i = 1; i <= x; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute('id', 'row'+i);
    for (var j = 1; j <= y; j++) {
       var td = document.createElement('td');
       tr.appendChild(td)
    }
    tbdy.appendChild(tr);
  }
  table.appendChild(tbdy);

  //add event listener to every cell
  for (let cell of document.getElementsByTagName('td')) {
    cell.addEventListener('click', function (event) {
     event.preventDefault();
      //if style exist, remove before setting up new color
     if (this.hasAttribute('style')) {
         this.removeAttribute('style');
      } else {
         this.setAttribute('style', 'background-color:' + colorSelection.value);
     }
     });
  }
}
