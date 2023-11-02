function array (string){ 
  if (string == '' || -1) {
    console.log("null"); 
  }
    return string.slice(1, -1);   
}
console.log(array(''));
console.log(array('1 2'));
console.log(array('1  2  3'));
console.log(array('a  b  d  e  f'));