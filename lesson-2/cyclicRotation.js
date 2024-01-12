function solution(A, K) {
    let length = A.length;
   
    let shiftTimes = K % length;
    if (shiftTimes === 0 || length===1) {
        return A;
    } else {
        return console.log( A.slice(length - shiftTimes, length).concat(A.slice(0, length - shiftTimes)));
    }
}
solution([-1,-2,-3],1);