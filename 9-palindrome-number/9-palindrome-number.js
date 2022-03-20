/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const stingValue = x.toString();
    console.log(stingValue);
     const arrayValues = stingValue.split('');
  const reverseArray = arrayValues.reverse();
    const reverseString = reverseArray.join('');
     console.log(reverseString);
    
    if(stingValue == reverseString){
        return true;
    }else return false;
    
    
    
  // let z = []
  // for(let i = y.length; i >= 0; i++){
  //     z.push = y[i];
  // }
};