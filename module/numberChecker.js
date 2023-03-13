module.exports = function(data){
  if(typeof(data) === "number"){
    return true;
  }else{
    console.log("type err")
    return false;
    
  }
}