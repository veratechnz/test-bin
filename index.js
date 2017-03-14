
function Ninja(){

  var feints = 0;

  this.getFeints = function(){
    return feints;
  };

  this.feint = function(){
    feints++;
  };

} //Ninja End

var ninja = new Ninja();

ninja.feint();


//Exporting the constructor, different than exporting an object
module.exports = ninja;







