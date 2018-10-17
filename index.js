// Code your solution in this file
function findMatching(arr, str) {
  const result = arr.filter(name => name===str);
  
  for (const element of arr) {
      
        if (element.toUpperCase()===str.toUpperCase() && element!==str) {
          result.push(element);
        }
      }
      return result;
}

function fuzzyMatch(arr, str) {
      result=[];
      for (const element of arr) {
         if(element.startsWith(str)) {
           result.push(element);
         }
      }
  return result;
}

function matchName(arr, str) {
  
  myArr=[];
   let count=0;
  
  for (const key in arr) {

    if(arr[key].name===str){
    
       myArr[count]=arr[key];
      
      count+=1;
    }
      
  }
   
   return myArr;
}
  