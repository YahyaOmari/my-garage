'use strict';

var myForm = document.getElementById('formID');
var parentTable = document.getElementById('table');

//Global arrays
var arrayOfCars = ['BMW', 'Lexus', 'Toyota', 'Tesla', 'Chevrolet', 'Hyundai', 'KIA'];
var arrayOfAll = [];


function Car (name, model, year) {
    this.name = "Car Name " + name ;
    this.model = model;
    this.year = "Model Year " + year;

    arrayOfAll.push(this);
}

Car.prototype.renderCar = function(){
    var th = document.createElement('tr');

    var tdName = document.createElement('td');
    tdName.textContent = this.name;

    var tdModel = document.createElement('td');
    tdModel.textContent = this.model;

    var tdYear = document.createElement('td');
    tdYear.textContent = this.year;

    th.appendChild(tdName);
    th.appendChild(tdModel);
    th.appendChild(tdYear);

    parentTable.appendChild(th);
}

function renderUserInput(){
    for (var index = 0; index < arrayOfAll.length; index++) {
        
        var th = document.createElement('tr');

        var tdName = document.createElement('td');
        tdName.textContent = arrayOfAll[index];
        console.log(tdName);
        var tdModel = document.createElement('td');
        tdModel.textContent = arrayOfAll[index];

        var tdYear = document.createElement('td');
        tdYear.textContent = arrayOfAll[index];

        th.appendChild(tdName);
        th.appendChild(tdModel);
        th.appendChild(tdYear);

        parentTable.appendChild(th);
    }
}
function submitFunction(event) {
    event.preventDefault();

    var carName = event.target.carName.value;
    var cars = event.target.cars.value;
    var year = event.target.year.value;

    var newCar = new Car (carName, cars, year);
    newCar.renderCar();

    localStorage.setItem('carWish',JSON.stringify(arrayOfAll))

}

function checkLS(){
    if(localStorage.getItem('carWish')){
        arrayOfAll = JSON.parse(localStorage.getItem('carWish'))
        renderUserInput();
    }
}
function reset(){
    localStorage.clear();
    window.location.reload();
}

myForm.addEventListener('submit', submitFunction);
renderUserInput();
checkLS();