$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

cubeGenerator("filme-principal");

let rotacao = 0;
function clicou(e){
    let lista = [];
    lista = filmesApi.filter( item=> item.id == e.target.id);
    switch(rotacao){
        case 0:
        divImage("face-left", lista[0].image);
        printClass("[titulo 3]", lista[0].filme);
        printClass("[descricao 3]", lista[0].descricao);
        rotacao =90;
        cubeAnimation(rotacao);
        break;
        
        case 90:
        divImage("face-back", lista[0].image);
        printClass("[titulo 1]", lista[0].filme);
        printClass("[descricao 1]", lista[0].descricao);
        rotacao =180;
        cubeAnimation(rotacao);
        break;
        
        case 180:
        divImage("face-right", lista[0].image);
        printClass("[titulo 2]", lista[0].filme);
        printClass("[descricao 2]", lista[0].descricao);
        rotacao = 270;
        cubeAnimation(rotacao);
        break;
        
        case 270:
        divImage("face-front", lista[0].image);
        printClass("[titulo 0]", lista[0].filme);
        printClass("[descricao 0]", lista[0].descricao);
        rotacao =0;
        cubeAnimation(rotacao);
        break;
    }
}