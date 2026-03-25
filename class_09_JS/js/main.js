
let x="1", y=1. , z="uno", m=["dsds",3,[3,4,5,7,98]], n=true;
let persona={nombre: "wilmer", edad: 18, sexo: true}

let cadena="esto es una 'cadena'";
let cadena2= 'esto es otra "cadena"';
console.log(cadena);
console.log(cadena2);
console.log(`este es el contennido: ${cadena} y oytro texto`);

function suma (a,b){
    return a+b;
}

let suma2=(a,b)=>a+b;

let suma3=(a,b)=>{return a+b};

let resta= function (a,b){
    return a-b;
}

const sumarCuadrados=(a,b)=>{
    let a2=a*a;
    let b2=b*b;
    return a2+b2;
}

const sumarCuadrados2=(a,b)=>{ return a*a + b*b };
const sumarCuadrados3=(a,b)=>  a*a + b*b ;

const sumar5=(n)=>n+5;
const sumar5_2= n => n+5;

console.log(suma(4,5));
console.log("suma 2-> "+suma2(4,5));
console.log("suma 3-> "+suma3(4,5));
console.log(resta(4,5));
console.log(typeof(resta));
console.log(sumarCuadrados(2,3));
console.log(sumarCuadrados2(2,3));
console.log(sumarCuadrados3(2,3));
console.log(sumar5(5));
console.log(sumar5_2(5));


// console.log(x+" es "+typeof(x));
// console.log(y+" es "+typeof(y));
// console.log(z+" es "+typeof(z));
// console.log(m+" es "+typeof(m));
// console.log(n+" es "+typeof(n));
// console.log(n && !n);

// let a= "4", b=4;

// if(a == b ){
//     console.log("Son iguales");    
// }else{
//     console.log("Son diferentes");
    
// }

// switch(op){
//     case
// }





// // let name=prompt("Nombre?");  //JOoptionPane.showInputDialog()
// // alert("Hola "+ name);       //JOoptionPane.showMessageDialog()
// // console.log("esto es para el equipo de dev");

let potencias=(op, n)=>{
    switch(op) {
        case "x2": return n*n;
        case "x3": return Math.pow(n,3);
    }
}

let cuadrado=(n)=>potencias("x2",n);
let cubo=(n)=>potencias("x3",n);

console.log(cuadrado(3));
console.log(cubo(3));



// let sumar=(cuadrado(m))=>;