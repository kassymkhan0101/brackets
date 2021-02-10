module.exports = function check(str, bracketsConfig) {
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
    let newstr = str.split("");
    if(newstr % 2 == 1){
        return false;
    }else{
        let a = 2;
        let b = 2;
        let c = 2;
        let d = 2;
        let e = 2;
        let f = 2;
        let g = 2;
    for(i=0; i<newstr.length; i++){
        if (newstr[i] == '('){
            a++
        }else if (newstr[i] == ')'){
            b++
        }else if (newstr[i] == '['){
            c++
        }else if (newstr[i] == ']'){
            d++
        }else if (newstr[i] == '{'){
            e++
        }else if (newstr[i] == '}'){
            f++
        }else if (newstr[i] == '|'){
            g++
        }
    }
        if(a!=b || c!=d || e!=f || g%2==1){
            return false;
        }
    }
    
    
           
         
        
    
    

  
  
}
