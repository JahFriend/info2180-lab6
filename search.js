window.onload = function() {

  var button = document.getElementById("searchButton");
  button.addEventListener("click", search);

  var httpRequest = new XMLHttpRequest();
  var sourceUrl = "https://info2180-lab6-jahprogrammer.c9users.io/request.php?q=definition";
var answer = document.getElementById('result');

  function search() {
	  httpRequest.onreadystatechange=function{
		  
		  
		  if(httpRequest.readyState==XMLHttpRequest.DONE){
			  if(httpRequest.status==200){
				  var response== httpRequest.responseText';
			  alert(response);}
			  else{
				  alert("Error");
			  }
				  
  

  }
}

httpRequest.open("GET",url,true);
httpRequest.send();
  }
}