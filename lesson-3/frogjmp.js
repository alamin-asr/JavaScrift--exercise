function solution(X,Y,D){
    let difference=Y-X;
    let minjmp=Math.ceil(difference/D);
    
  return(minjmp);
    
}
solution(10,85,30)