const numberChecker = require("./numberChecker")

module.exports = {
  add : function(first, second){
    if(numberChecker(first)){
      return first + second;
    }
  },
  minus : "not yet"

}

