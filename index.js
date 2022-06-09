var selectedcontainer = ""
 var selectedelement = null
 var colorkeys = {"Estruturasocial": "es", "Curiosidades": "c", "Religião": "r", "Política": "p", "Origem": "o", "Economia": "e", "Fontesbibliográficas": "f"}
function rendercontent(contentid) {
  console.log(selectedcontainer)
 var container = document.getElementById(contentid)
 if(typeof container !== "undefined") {
   console.log(container)
   if(selectedcontainer !== "") {
     selectedelement.className = "content"
   }   
   selectedcontainer = contentid
   selectedelement = container
   container.className = `content show ${colorkeys[contentid]}` 
 }
}
