//função para mostrar a tela do loading...
function showLoading (){
	const div = document.createElement("div");
		div.classList.add("loading", "centralize");
	document.body.appendChild(div);

//criando uma label com o texto "carregando..." 
	const label = document.createElement('label');
		label.innerText = "Carregando...";

//fazer com que a tela de carregar dure 2 segundos.
	div.appendChild(label);
	setTimeout(() => hideLoading(), 2000);

}

//essa funcao serve para carregar uma classe a partir do nome
function hideLoading(){
	const loadings = document.getElementByClassName("loading");
	
	if (loadings.length) {
		loadings[0].remove();
	}

}