// Select color input
// // Select size input
let $color = document.getElementById('colorPicker');
let $table = document.getElementById('pixel_canvas');
let $submit = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
$submit.addEventListener('click', function(){
  event.preventDefualt();
  let height = ('#input_height').val();
  let width = ('#input_width').val();
  makeGrid(width, height);
})
function makeGrid(width, height) {
    $table.innerHTML = " ";
    for (let r = 0; r < height ; r++){
    let row = row + $table.insertRow();
    for (let c = 0; c < width; c++){
    let grid = grid + row.insertCell();
    grid.onclick = colorPicker;
    }
  }
}
function colorPicker(){
  this.attr('background', '$color');
}
