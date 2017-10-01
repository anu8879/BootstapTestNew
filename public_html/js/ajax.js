function loadDoc(requst_to, set_to) {

var requst_to_variable=requst_to;
var set_to_variable=set_to;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(set_to_variable).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", requst_to_variable, true);
            xhttp.send();
}