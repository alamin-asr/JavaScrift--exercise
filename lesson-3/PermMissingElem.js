function solution(A){
    const n = A.length+1;
    const totalSum = (n*(n+1))/2;
    let sum = 0;
    for(let i=0; i<n-1; i++){
        sum += A[i];
    }
    const missvalu = totalSum-sum;
    return missvalu;
}