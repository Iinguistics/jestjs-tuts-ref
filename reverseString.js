const reverseString = (str)=>{
    let output = str.split("");
    let right = str.length - 1;
    let left = 0;
    let temp;
    while(left < right){
      temp = output[right];
      output[right] = output[left];
      output[left] = temp;
      left ++;
      right --;
    }
    return output.join("");
}


module.exports = reverseString;