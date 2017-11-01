window.onload = function() {

  var button = document.getElementById("searchButton");
  button.addEventListener("click", search);

  var httpRequest = new XMLHttpRequest();
  var sourceUrl = "https://info2180-lab6-jahprogrammer.c9users.io/request.php?q=";
var answer = document.getElementById('result');

  function search() {
  var answer = document.getElementById('result');
    var searchBy = document.getElementById("check").value.toLowerCase();
    if (searchBy.length === 0) {
      answer.innerHTML = "Text Field is empty";
    } else {
      var url = sourceUrl + searchBy;
      /*alert(url);*/
      httpRequest.open("GET", url, true);
      httpRequest.send();

      httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            alert(response);
            answer.innerHTML = response;
          } else {
            answer.innerHTML = "An error occured";
          }

        }
      }

    }

  }
}
