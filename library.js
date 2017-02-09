'use strict'

const lesson1 = {
 computeAverage: function(a,b,c) {
 	var averaage = (a+b+c)/3
 	 	return averaage;

    },
  
   computeFactorial: function(a) {
 	 if( a <= 1){
 	 	return 1;
 	 }
 	 else{
 	 	return a * lesson1.computeFactorial(a - 1);
 	 }

   
 },

 convertTempCtoF: function(C) {
 var F= ((9/5) * C) + 32;
return F;
   
 },

 convertTempFtoC: function(F) {
 	var C = (5/9) * (F - 32);
 	return C;
   
 }
}

module.exports = lesson1;