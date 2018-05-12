// Select color input
let colorPicker = document.getElementById('colorPicker')

// Select size input
let tableColumn = document.getElementById('inputWidth')
let tableRow = document.getElementById('inputHeight')

// When size is submitted by the user, call makeGrid()

let submit = document.querySelector('input[type="submit"]')
let table = document.getElementById('pixelCanvas')
let tbody = document.createElement('tbody')

submit.addEventListener('click', function (e) {
  e.preventDefault()
  makeGrid()
})

function makeGrid () {
  // Your code goes here!

  // todo 创建表格时应检查是否存在旧表格，若存在应删除旧表格，再创建新的表格

  table.appendChild(tbody)
  for (let i = 0; i < tableRow.value; i++) {
    tbody.insertRow(i)
    for (let j = 0; j < tableColumn.value; j++) {
      tbody.rows[i].insertCell(j)
    }
  }

  let columns = document.querySelectorAll('td')
  for (const column of columns) {
    column.addEventListener('click', function () {
      column.style.backgroundColor = colorPicker.value
    })
  }
}

// makeGrid()
