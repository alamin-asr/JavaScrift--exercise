function solution(A){
    let unfair = 0;
   for(let i=0;i<A.length;i++){
       unfair^=A[i];
      
   } 

  return unfair;
} 

console.log(solution([9, 3, 9, 3, 9, 7, 9]))
