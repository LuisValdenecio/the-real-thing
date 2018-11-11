module.exports = {

  //
  exceptTheLast : function(string) {
    var remaining = "";
    for (var x = 0; x < string.length - 1; x++) {
      remaining += string.charAt(x);
    }
    return remaining;
  }


}
