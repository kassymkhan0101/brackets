module.exports = function check(str, bracketsConfig) {
    let obj = {};
    if(str.length % 2 == 1){
        return false;
    }
    for(i=0; i<bracketsConfig.length; i++){
        for(k=0; k<i.length; k++){
            if(bracket[i][k]%2==1){
                obj.bracketsConfig[i][k]=-(i+1)
            }else{
                obj.bracketsConfig[i][k]= (i+1)
            }
        }
    }
    for(j=0; j<str.length-1; j++){
        if((obj[str.charAt(j)] + obj[str.charAt(j+1)]) < 0){
            return false;
        }else{
            return true;
        }
    }
    
    

 
}
