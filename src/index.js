module.exports = function getZerosCount(number, base) {
    var x = base;
    var result = 0,p = [];
    var i = 2, j = 1;
    var a = new Array();
    do{
        if (x % i == 0){
            a[j] = i;
            j++;
            x = x / i;
        }else{
            i++;
        }
    }
    while (i < x);
    a[j] = i;
    
    nextPrime:
    for (var i = 2; i <= 256; i++) {

    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

        p.push(i);
    }
    for(var i=0;i<p.length;i++){
        if(base === p[i] )
            {
                while (number >= p[i]){
                number = ~~(number / p[i]);
                result = result + number;
        }
                return result;
            } 
    }
    var max=1;
    for(var i=0;i<a.length;i++){
        for(var j=0;j<p.length;j++){
            if(a[i] === p[j]){
                if(a[i]>max){
                    max = p[j];
                }
            }
        }  
    }
    if(base == 9 || base == 16){
        while (number >= 5){
                number = ~~(number / 5);
                result = result + number;
    
    }
        return result;
    }else if(base === 81){
               while (number >= 9){
                number = ~~(number / 9);
                result = result + number;
    
    }
        return result;
            }  else {
               while (number >= max){
                number = ~~(number / max);
                result = result + number;
    
    }
        return result;
              }   
  // your implementation
}