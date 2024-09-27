var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector('.card.location p:last-child');
var eWhich= document.querySelector('.card.which p:last-child');
var eCode = document.querySelector('.card.code p:last-child');
var alert = document.querySelector('.alert');
var box = document.querySelector('.box');
var result = document.querySelector('.result');

document.addEventListener('keydown', function(event) {
    
    eKey.innerText = event.key;
    eLocation.innerText = event.location;
    eWhich.innerText = event.which;
    eCode.innerText = event.code;
    result.innerHTML = event.which;

    alert.classList.add('hide');
    Box.classList.remove('hide');
});