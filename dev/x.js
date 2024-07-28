function x(){
  const arr = [1,2,3,4,5,6,7,8];
  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      for(let k=j+1; k<arr.length; k++){
        for(let l=k+1; l<arr.length; l++){
          console.log(arr[i],arr[j], arr[k], arr[l]);
        }
      }
    }
  }
}
x();
