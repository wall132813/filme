// function startTimer(duration, display){
//     var timer = duration, minutes, seconds;

//     setInterval(function(){
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if(--timer < 0){
//             timer = duration;
//         }
//     },1000);
// }

// window.onload = function(min){
//     var duration = 60*4; 
//     var display = document.querySelector("timer")

//     startTimer(duration, display);
// }








// var tempo = new Number();
//   // Tempo em segundos
//   tempo = 900;

//   function startCountdown(){

//     // Se o tempo não for zerado
//     if((tempo - 1) >= 0){

//       // Pega a parte inteira dos minutos
//       var min = parseInt(tempo/60);
//       // Calcula os segundos restantes
//       var seg = tempo%60;

//       // Formata o número menor que dez, ex: 08, 07, ...
//       if(min < 10){
//         min = "0"+min;
//         min = min.substr(0, 2);
//       }
//       if(seg <=9){
//         seg = "0"+seg;
//       }

//       // Cria a variável para formatar no estilo hora/cronômetro
//       horaImprimivel ='00:' + min + ':' + seg;
//       //JQuery pra setar o valor
//       $("#sessao").html(horaImprimivel);

//       // Define que a função será executada novamente em 1000ms = 1 segundo
//       setTimeout('startCountdown()',1000);

//       // diminui o tempo
//       tempo--;

//       // Quando o contador chegar a zero faz esta ação
//     } else {
//       window.open('../controllers/logout.php', '_self');
//     }
// }
  
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



