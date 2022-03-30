function S(n1, n2){
    var n1 = parseFloat(document.getElementById('n1').value)    
    var n2 = parseFloat(document.getElementById('n2').value)    
    var r = n1 + n2;
    document.getElementById('r').value = r;
}        
function R(n1, n2){
    var n1 = parseFloat(document.getElementById('n1').value)    
    var n2 = parseFloat(document.getElementById('n2').value)
    var r = n1 - n2;
    document.getElementById('r').value = r;
}
function D(n1, n2){
    var n1 = parseFloat(document.getElementById('n1').value)    
    var n2 = parseFloat(document.getElementById('n2').value)   
    var r = n1 / n2;
    document.getElementById('r').value = r;    
}
function P(n1, n2){
    var n1 = parseFloat(document.getElementById('n1').value)    
    var n2 = parseFloat(document.getElementById('n2').value)   
    var r = n1 ** n2;
    document.getElementById('r').value = r;
}
function digitos(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;   
    if(code==8) {
      return true;
    } else if(code>=48 && code<=57) {
      return true;
    } else{
      return false;
    }
}
