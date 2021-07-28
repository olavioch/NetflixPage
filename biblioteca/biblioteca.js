function divImage(id, url){
	document.getElementById(id).style.backgroundImage = `linear-gradient(#00000096,#00000096), url(${url})`;
}
function print(a){
	console.log(a);
}
//adiciona texto html no parametro id
function printId(id, texto){
	document.getElementById(id).innerHTML = texto;	
}
function printClass(classe, texto){
		classe = classe.replace("[","");
		classe = classe.replace("]","");				
		classe = classe.split(" ");
		document.getElementsByClassName(classe[0])[parseInt(classe[1])].innerHTML=texto;
}
//mostra valor de input pela id
function inputValor(inputId){
	 return document.getElementById(inputId).value;
}

//troca css de elemento pela id ou classe
//id: trocarEstilo("id", "estilocss")
//class: trocarEstilo("[class key], estilocss")
function trocarEstilo(id, estilo)
{
	if((id.indexOf('[') > -1) && (id.indexOf(']') > -1)){
		id = id.replace("[","");
		id = id.replace("]","");				
		id = id.split(" ");
		document.getElementsByClassName(id[0])[parseInt(id[1])].setAttribute("style", estilo);
	}else{
	document.querySelector("#"+id).setAttribute("style", estilo);
}}

//gerador de cubo
function cubeGenerator(id){
	face = `position: absolute; width: ${cubeConfig[6].largura}vw; height: ${cubeConfig[6].altura}px;`;
	console.log(face);
	//html
	printId(id,
	`<div id="cube">
			<div id="${cubeConfig[0].nome}">${cubeConfig[0].conteudo}</div>
			<div id="${cubeConfig[1].nome}">${cubeConfig[1].conteudo}</div>
			<div id="${cubeConfig[2].nome}">${cubeConfig[2].conteudo}</div>
			<div id="${cubeConfig[3].nome}">${cubeConfig[3].conteudo}</div>
			<div id="${cubeConfig[4].nome}">${cubeConfig[4].conteudo}</div>
			<div id="${cubeConfig[5].nome}">${cubeConfig[5].conteudo}</div>
	</div>`
	);
	//css
	trocarEstilo(id, 
	 `width: ${cubeConfig[6].largura}vw; height: ${cubeConfig[6].altura}px; border: 1px solid black;`
	);
	trocarEstilo("cube",
	  `display:inline-block;
	  width: inherit;
	  height: inherit;
	  position: relative;
	  transform-style: preserve-3d;
	  transition: all ease 1s;`
	);
	trocarEstilo("face-front",
	`transform: rotateY( 0deg) translateZ(${(cubeConfig[6].largura/2)}vw); background: #90ee90; background-image: url(./images/capa/item7.jpg);
    background-image:  linear-gradient(#00000096,#00000096), url(./images/capa/item7.jpg);
	background-size: cover;` + face
	);
	trocarEstilo("face-back",
	`transform: rotateY(180deg) translateZ(${(cubeConfig[6].largura/2)}vw);background: #90ee90; background-image: url(./images/capa/item6.jpg);
    background-image:  linear-gradient(#00000096,#00000096), url(./images/capa/item6.jpg);
	background-size: cover;` + face
	);
	trocarEstilo("face-right",
	`transform: rotateY(90deg) translateZ(${(cubeConfig[6].largura/2)}vw);background: #90ee90; background-image: url(./images/capa/item5.jpg);
    background-image:  linear-gradient(#00000096,#00000096), url(./images/capa/item5.jpg);
	background-size: cover;` + face
	);
	trocarEstilo("face-left",
	`transform: rotateY(-90deg) translateZ(${(cubeConfig[6].largura/2)}vw);background: #90ee90; background-image: url(./images/capa/item4.jpg);
    background-image:  linear-gradient(#00000096,#00000096), url(./images/capa/item4.jpg);
	background-size: cover;` + face
	);
	trocarEstilo("face-top",
	" transform: rotateX(90deg) translateZ(50vw);" + face
	);
	trocarEstilo("face-bottom",
	" transform: rotateX(-90deg) translateZ(50vw);" + face
	);
	}
	
	function cubeAnimation(rotacao){
		document.getElementById('cube').style.transform = `rotateY(${rotacao}deg)`;
	}