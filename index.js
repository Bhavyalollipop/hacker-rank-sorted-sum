function sortedSum(a, ends = 1, fn = [], sorta = []) {
    var dummy = ends - 1,isLess = false,ai = 0,dynends = ends - 1;
    var n = a.length,i = 1,sum = 0;
  var isifsort = true;
  if(sorta[0] > a[ends - 1]) {
    sorta.splice(0, 0, a[ends - 1])
  }else if(sorta.length == 0 || sorta[sorta.length - 1] <= a[ends - 1]) {
    sorta.push(a[ends - 1]) 
    
  }else if(ends <= n) {
      var x=0;
      while(x < dynends) {
          var d = Math.round(dummy/2);
          ai = isLess ? ai - d : ai + d;
          isLess = sorta[ai] > a[ends - 1]
          if(!isLess) {
              dummy = dummy - d
            isifsort = true;
          } else { 
             dummy = d 
              isifsort = false;
          }
          dynends = d;
          x = 0;
      }
    
     ai = isifsort ? ai + 1 : ai;
     sorta.splice((ai), 0, a[ends - 1])
     
   }
    while(i <= n) {
      sum = sum + (sorta[i-1] * i);
      if(i === ends) {
        fn.push(sum);
        ends++;
        return sortedSum(a,ends, fn, sorta);
      }
      i++;
    }
    var M = 1000000007;
    return (fn.reduce( (p,c) => c+p,0)) % M
}
