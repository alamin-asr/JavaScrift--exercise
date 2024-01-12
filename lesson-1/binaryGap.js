function solution(N){
    let bit=N.toString(2);

    let maxGap=0;
    let CureentGap=0;
    let countZero=false;

    for(let i=0;i<=bit.length;i++){
        if(bit[i]==="1"){
            if(countZero){
            maxGap=Math.max(maxGap,CureentGap);
            CureentGap=0;
            }
            countZero=true;
        }else if(countZero){
            CureentGap++;
        }
    }

   return maxGap; 
}
