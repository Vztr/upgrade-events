/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click */

document.querySelector('#btnToClick').addEventListener('click',() => {
    console.log("Clicking!!");
});

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

document.querySelector('.focus').addEventListener('keyup',() => {
    console.log("Como te llamas?");
});

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

let value = document.querySelector('.value');
valor.addEventListener('input',() => {
    console.log(valor.value);
})
