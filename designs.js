let form = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');
let table = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight');
let width = document.getElementById ('inputWidth');

form.addEventListener('submit', function (event) { 
    makeGrid(height,width);
    //without preventing default submit will refresh the whole page
    event.preventDefault();   
});

function makeGrid(height, width) {
    //without remove submit will keep adding cells, $ sign is searching for elements ( 'tr')
    $('tr').remove();
    for (let n = 0; n < height.value; n++) {
        let row = table.insertRow(n);
        for (let m = 0; m < width.value; m++) {
            let cell = row.insertCell(m);
        cell.addEventListener('click', function (event) {
            cell.style.backgroundColor = color.value;               
        });
    }
    }    
}
