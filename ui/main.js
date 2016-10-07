var button=document.getElementById('counter');

button.onclick = function () {

   /*/ var request= new XMLHttpRequest();
    requst.onreadystatechange=function() {
        if(requset.readyState === XMLHttpRequest.DONE){
        if(request.status === 200) {
            var counter = requset.responseText;
            var span = document.getElementById('count');
            span.innerHTML=counter.toString();
          }
        }
    };
    request.open('GET','http://asashukla.imad.hasura-app.io/counter', true);
    request.send(null);/*/
    counter =counter+1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};