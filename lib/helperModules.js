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
  simplerStrategy : function(passport) {

    passport.authenticate('localTwo', {
      successRedirect : '/registoEscola',
      failureRedirect : '/registoEscola',
      failureFlash : true
    });

  }


}
