module.exports = {

  //
  exceptTheLast : function(string) {
    var remaining = "";
    for (var x = 0; x < string.length - 1; x++) {
      remaining += string.charAt(x);
    }
    return remaining;
  },

  // This method gives back the time in a much clearer format
  getDate : function() {



  },

  // this function checks whether an array already holds a value and stores it in case
  // the value isn´t stored
  uniqueValue : function (value, arr) {
    if (arr.indexOf(value) >= 0) {
      return;
    } else arr.push(value);
  }

}
