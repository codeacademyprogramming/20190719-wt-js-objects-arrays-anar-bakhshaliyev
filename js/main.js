"use strict";

let students = [];
let liItems = "";
let inputs = document.getElementsByClassName("student-input");

function Student(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.age = age;
}

/* Get input values */

function getInputValues() {

    let student = new Student(inputs[0].value, inputs[1].value, inputs[2].value);
    
    students.push(student);

    students.forEach(generateLiItems);

    document.getElementsByClassName("student-list")[0].innerHTML = liItems;
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
}

function generateLiItems(val, ind, arr) {
   liItems += `<li class="list-group-item">${val.name} ${val.surname} - ${val.age}</li>`;   
}

function reset(){
    liItems = "";
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
    inputs[3].value = "";
    inputs[4].value = "";
}