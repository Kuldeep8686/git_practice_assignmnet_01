let num =17;
let counter = 0;
for(let i=1;i<=num;i++){
  if(num%i==0){
    counter++
  } 
   }
if(counter==2){
     console.log("Number is Prime");
   }
else{
  console.log("Number is not a Prime");
}