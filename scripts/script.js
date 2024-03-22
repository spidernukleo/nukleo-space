var testo="Denis ~ @spidernukleo"
var i=0
var titolo=document.getElementById("titolo")



titolo.addEventListener("load", scrittatitolo())


function scrittatitolo(){
	if(i<testo.length){
		titolo.innerHTML+=testo.charAt(i)
		i++
		setTimeout(scrittatitolo, 100);
	}
}