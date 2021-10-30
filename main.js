 //Ejercicio número 1 Alerta de saludo a un usuario ingresando su nombre

//  let nombre = prompt("Por favor, ingrese su nombre: ");

//  function saludar(nom1) {
//      alert("Hola, Bienvenid@: " + nom1 );
//  }
//  saludar(nombre);

//Ejercicio número 2 Solicitar la edad para que conduzca o nombre

//  let ano = prompt("Ingrese el año de nacimiento para verificar su legalidad:");

//  function mayorEdad(annio){
//      result= 2021 - annio;
//      if(result <18){
//         alert("Eres menor, por lo tanto no tienes permisos legales");
//      }else{
//          alert("Eres mayor, ya eres legal ");
//      }
//  }
//  mayorEdad(ano);

//  //Ejercicio número 3 Promedio de Calificaciones

//  let cali1 = prompt("Digite la Calificacion #1:");
//  let cali2 = prompt("Digite la Calificacion #2:");
//  let cali3 = prompt("Digite la Calificacion #3:");
//  let cali4 = prompt("Digite la Calificacion #4:");
//  let cali5 = prompt("Digite la Calificacion #5:");

//  cali1 =parseFloat(cali1);
//  cali2 =parseFloat(cali2);
//  cali3 =parseFloat(cali3);
//  cali4 =parseFloat(cali4);
//  cali5 =parseFloat(cali5);
//  let r;

//  r = (cali1+cali2+cali3+cali4+cali5)/5;
//  if(r<3){
//      alert("Estatus del Promedio: Reprobado");
//  }else if(r>=3 && r<5){
//      alert("Estatus del Promedio: Insuficiente");
//  }else if(r>=5 && r<6){
//      alert("Estatus del Promedio: Deficiente")
//  }else if(r>=6 && r<7){
//      alert("Estatus del Promedio: aprobatorio")
//  }else if(r>=7 && r<9){
//      alert("Estatus del Promedio: Regular")
//  }
//  else if(r>=9 && r<10){
//      alert("Estatus del Promedio: Buena Calificación, sigue así")
//  }else if(r>=10){
//      alert("Estado del Promedio: Excelente, ¡Felicidades!");
//  }

// //Ejercicio número 4 Solicitar n materias promedio
//  n=parseInt(prompt("Digite el número de materias:"))
//  a=0; b=0
//  while (a<n){
//      i=parseFloat(prompt("Digite la Calificación:"))
//      b=b+i;
//      a++;
//  }
//  p=b/n;
//  alert("El promedio es:" +p)

//Ejercicio número 5 Fibonacci
//  var limit = prompt("Ingrese el número que será el limite para formar la figura fibonaci");
//  	var fibo = [0,1];
//  	for(i=2; i <= limit; i++){
//  		fibo.push(fibo[i-1] + fibo[i-2]);
//  		document.write(fibo[i]+"<br/>");	
//  	}