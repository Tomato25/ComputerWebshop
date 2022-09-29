function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     loadXML(this);
	}
  };
  xhttp.open("GET", "products.xml", true);
  xhttp.send();
}
function loadXML(xml) {
var i;
var xmlDocument=xml.responseXML;
var table="<tr><th>Name</th><th>Manufacturer</th><th>Memory</th><th>Price</th></tr>";
var x=xmlDocument.getElementsByTagName("GPU");

for(i=0; i<x.length; i++) {
	table+="<tr><td>" + 
	x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</td><td>" + 
	x[i].getElementsByTagName("MANUFACTURER")[0].childNodes[0].nodeValue + "</td><td>" + 
	x[i].getElementsByTagName("MEMORY")[0].childNodes[0].nodeValue + "</td><td>" + 
	x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + "</td></tr>"
	}
	document.getElementById("storage").innerHTML = table;
}