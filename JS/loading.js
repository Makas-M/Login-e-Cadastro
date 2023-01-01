//função para mostrar a tela do loading...
function showLoading (){
	const div = document.createElement("div");
		div.classList.add("loading", "centralize");
	document.body.appendChild(div);

//criando uma label com o texto "carregando..." 
	const label = document.createElement('label');
		label.innerText = "Carregando...";
		div.appendChild(label);
	

}

//essa funcao serve para carregar uma classe a partir do nome
function hideLoading(){
	const loadings = document.getElementsByClassName("loading");
	
	if (loadings.length) {
		loadings[0].remove();
	}

}