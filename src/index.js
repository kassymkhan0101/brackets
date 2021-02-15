module.exports = function check(str, bracketsConfig) {

  const mybreacketsIndexMap = getBracketsIndexMap(bracketsConfig)
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if(arr.length == 0 && mybreacketsIndexMap.get(str[i]) < 0)
      return false;
      
    if(mybreacketsIndexMap.get(str[i]) > 0){
      arr[arr.length] = mybreacketsIndexMap.get(str[i]);
    }else if((arr[arr.length -1] + mybreacketsIndexMap.get(str[i])) != 0){
      return false;
    }else{
      arr.splice(arr.length - 1 , 1);
    }
    
    if(Math.abs(((mybreacketsIndexMap.get(str[i]) / 0.5))%2) == 1){
      mybreacketsIndexMap.set(str[i], -(mybreacketsIndexMap.get(str[i])));
    }
  }
  return arr.length ? false : true;
}

function getBracketsIndexMap(brc){
    let mybreacketsIndexMap = new Map();
    for(let i = 0; i < brc.length; i++){
    if(brc[i][0] != brc[i][1]){
      mybreacketsIndexMap.set(brc[i][0], (i + 1));
      mybreacketsIndexMap.set(brc[i][1], -(i + 1));
    }else{
      mybreacketsIndexMap.set(brc[i][0], (i + 0.5));
    }
    }
  return mybreacketsIndexMap;
}
