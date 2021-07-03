var Jugadores = []
var estas_seguro = false

do{
  var nombre_participante = prompt("nombre","")
  console.log(nombre_participante)

  var edad_participante= prompt("edad","")
  console.log(edad_participante)

  var sexo_participante =prompt("sexo, F (femenino) o M (masculino) ","").toUpperCase()
  console.log(sexo_participante)

  var puntaje_participante = prompt("puntaje","")
  console.log(puntaje_participante)


  estas_seguro = confirm ("¿quiere agregar mas participantes?")

        var Participante = {
      nombre: nombre_participante,
      edad: parseInt(edad_participante),
      sexo:sexo_participante,
      puntaje: parseInt(puntaje_participante)
  }
  Jugadores.push(Participante)
}while(estas_seguro)

console.log(Jugadores)



var max_puntaje = 0 


for(var i = 0; i< Jugadores.length; i++ ){
  if(max_puntaje< Jugadores[i].puntaje){
     max_puntaje= Jugadores[i].puntaje
  }
}
var mejores_puntajes = []

for(var i = 0; i< Jugadores.length; i++ ){
  if(max_puntaje==Jugadores[i].puntaje){
    mejores_puntajes.push(Jugadores[i])
  }
}

for(var i = 0; i< mejores_puntajes.length; i++){
  console.log("Los/as mejores jugadores/as fueron " + mejores_puntajes[i].nombre)
}


var menor_puntaje = 10 


for(var i = 0; i< Jugadores.length; i++ ){
  if(menor_puntaje> Jugadores[i].puntaje){
     menor_puntaje= Jugadores[i].puntaje
  }
}
var peores_puntajes = []

for(var i = 0; i< Jugadores.length; i++ ){
  if(menor_puntaje==Jugadores[i].puntaje){
    peores_puntajes.push(Jugadores[i])
  }
}

for(var i = 0; i< peores_puntajes.length; i++ ){
  console.log(" Los/as peores jugadores/as fueron " + peores_puntajes[i].nombre)
}


var hombres= []
var mujeres=[]

var M = "M"

for(var i = 0; i< Jugadores.length; i++ ){
  if( M ==Jugadores[i].sexo){
    hombres.push(Jugadores[i])
  }else{
    mujeres.push(Jugadores[i])
  }
}
  console.log("hay " + hombres.length + "  hombre/s")
  console.log("hay " + mujeres.length + "  mujer/es")

 
  var menores=17
  var personas_menores = []
  
  for(var i = 0; i< Jugadores.length; i++ ){
      if(menores >= Jugadores[i].edad){
      personas_menores.push(Jugadores[i])
      }
    }
   
  if(personas_menores.length==1){
    console.log("Hay " + personas_menores.length + " menor jugando")
  }else{console.log("Hay " + personas_menores.length + " menores jugando")}
  
  

var persona_mayor=0

for(var i = 0; i< Jugadores.length; i++ ){
    if(persona_mayor< Jugadores[i].edad){
       persona_mayor= Jugadores[i].edad
    }
  }
  var personas_mayores = []
  
  for(var i = 0; i< Jugadores.length; i++ ){
    if(persona_mayor==Jugadores[i].edad){
      personas_mayores.push(Jugadores[i])
    }
  }
  
  for(var i = 0; i< personas_mayores.length; i++ ){
    console.log(" La persona de mayor edad es " + personas_mayores[i].nombre)
  }


  