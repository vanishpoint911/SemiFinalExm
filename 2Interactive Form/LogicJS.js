// LogicJS.js

document.addEventListener('DOMContentLoaded', function () {
    let formz = document.getElementById("formz");

    formz.addEventListener('submit', function (e) {
        e.preventDefault();

        let firstn = document.getElementById('firstn').value;
        console.log(firstn);

        let lastn = document.getElementById('lastn').value;
        console.log(lastn);

        let Emai = document.getElementById('Emai').value;
        console.log(Emai);

        alert('Form submitted successfully');
    });
});
