module.exports = function check(str, bracketsConfig) {
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
    let newstr = str.split("");
    
    if(bracketsConfig == config1){
        for(i=0; i<newstr.length; i++){
            let c = 0;
            let k = 0;
            if(newstr[i]== config1[0][0]){
                c++;
                console.log(c);
            }else if(newstr[i]== config1[0][1]){
                k++;
                console.log(k)
                     }
        }
        
    }
    

  
  
}
