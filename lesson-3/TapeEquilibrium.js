function solution(A){
    let sum1=0;
    let sum2=0;
    let n=A.length;
    let dif=0;
    let mini=Infinity;
    for(let i=0;i<n-1;i++){
        sum1+=A[i];
        for(let j=i+1;j<n;j++){
            sum2+=A[j];
            
        }
        dif=Math.abs(sum1-sum2)
        mini=Math.min(mini,dif)
        sum2=0;
    }
    return mini;
}
console.log(solution([3,1,2,4,3]));