console.log('Loaded!');
var element= document.getElementbyId('main-text');
element.innerHTML='New value';
var img= document.getElementbyId('img');
img.onclick = function(){
    img.style.marginLeft='100px';
};