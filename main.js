let imagenes=[{
    url :"https://st3.depositphotos.com/9880800/16939/i/600/depositphotos_169391312-stock-photo-businessman.jpg",
    titulo:"La mejor persona con la que podrias trabajar",
    descripcion:"Tony Cunsolo es una de las mejores personas en las cuales puedas contar para un buen trabajo, son habilidades, acciones e ideas lo refuerzan"
},
{
    url :"https://margapuigservercoach.files.wordpress.com/2013/05/escalar-montac3b1as-1.jpg",
    titulo:"No hay cima en la que no pueda llegar",
    descripcion:"Tony Cunsolo es una persona tenaz y persistente, él llegara donde tenga que llegar para culminar o finalizar su objetivo"
},
{
    url :"https://t1.pb.ltmcdn.com/es/posts/1/9/2/test_de_sociabilidad_3291_600.jpg",
    titulo:"Social con cualquier compañero",
    descripcion:"Tony Cunsolo siempre sabra cual es la mejor broma que se tiene que hacer en el momento, aunque el mundo se este derrumbando, siempre es una buena compañia"
}];

let contador =0;
let atras = document.getElementById('boton_atras');
let adelante = document.getElementById('boton_adelante');
let imagen_hero = document.getElementById('imagen_hero');
let titulo_hero = document.getElementById('titulo_hero');
let descripcion_hero = document.getElementById('descripcion_hero');


adelante.addEventListener('click',()=>{

    contador +=1;

    if(contador > 2){

        contador = 0;
    }   


    imagen_hero.src = imagenes[contador].url;
    titulo_hero.innerHTML = imagenes[contador].titulo;
    descripcion_hero.innerHTML = imagenes[contador].descripcion;
})

atras.addEventListener('click',()=>{

    contador -=1;
    if(contador < 0){

        contador = 2;
    }

    imagen_hero.src = imagenes[contador].url;
    titulo_hero.innerHTML = imagenes[contador].titulo;
    descripcion_hero.innerHTML = imagenes[contador].descripcion;
})
