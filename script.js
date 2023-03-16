//declaring variables
var array=new Array();
var arr1=new Array();
var arr2=new Array();
var temp=new Array();
var rsets=new Array();
var size,temp,s1,s2;

//function to set size
function setSize(){
    var len=document.getElementById("length");
    var sbtn=document.getElementById("set");
    size=2*(len.value);
    temp=size;
    len.value="";
    len.style.visibility="hidden";
    sbtn.style.display="none";
    visiblevalues();
}
//function to make visible after getting size
function visiblevalues(){
    document.getElementById("ele").innerHTML="Enter "+size+" elements";
    document.getElementById("values").style.visibility="visible";
    document.getElementById("add").style.visibility="visible";
}
//function to make invisible after getting elements values
function invisible(){
    document.getElementById("values").style.visibility="hidden";
    document.getElementById("add").style.visibility="hidden";
    document.getElementById("check").style.visibility="visible";
}
//function to set input values inside array and set in output display
function addvalue(){
        let num=document.getElementById("values");
        var label=document.getElementById("ele");
        array.push(num.value);
        num.value="";
        temp--;
        if(temp<=0){
            invisible();
            label.style.display="none";
            document.getElementById("array").innerHTML="input set : ["+array+"]";
        }    
}
//function to find factorial of a value
function fact(n){
    let answer=1;
    if (n==0 || n==1){
      return answer;
    }
    else if(n>1){
      for(var i=n;i>=1;i--){
        answer=answer*i;
      }
      return answer;
    }
} 
//function to find and return sum of a passing array
function sum(array) {
    let sum=0;
    for (let i=0;i<array.length;i++) {
      sum+=parseInt(array[i]);
    }
    return sum;
}
//function to find absolute difference between two passing value
function abs(val1,val2){
    return(Math.abs(val1-val2));
}
//function to find partition sets to calculate difference
function validate(){
    //part variable for finding partition size
    var part=size/2;
    if(part<=1){
        var val=abs(array[0],array[1]);
        document.getElementById("output").innerHTML="Minimum Difference : "+val;
        return;
    }
    //comb variabe for finding number of combinatitons possible
    var comb=fact(size)/(fact(part)*fact(size-part));
    var num1=0,num2=0,min=999;
    rsets=findAllSubsets(array,part); 
    console.log(rsets);
    //loop to check the two sets which makes possible minimum difference
    for(let i=0;i<rsets.length;i++){
        num1=sum(rsets[i]);
        for(let j=i+1;j<rsets.length;j++){
            num2=sum(rsets[j]);
            if(abs(num1,num2)<min){
                min=abs(num1,num2);
                s1=i;
                s2=j;
            }
        }
    }
    document.getElementById("output").innerHTML="Minimum Difference : "+min+"<br>set1:["+rsets[s1]+"]<br>set2:["+rsets[s2]+"]";
    
}


//function to find all subsets within the partition size parameter
const findAllSubsets = (array = [],partition) => {
   array.sort();
   const res = [[]];
   const endres=[];
   let count, subRes, preLength;
   for (let i = 0; i < array.length; i++) {
      count = 1;
      while (array[i + 1] && array[i + 1] == array[i]) {
         count += 1;
         i++;
      }
      preLength = res.length;
      for (let j = 0; j < preLength; j++) {
         subRes = res[j].slice();
         for (let x = 1; x <= count; x++) {
            if (x > 0) subRes.push(array[i]);
            res.push(subRes.slice());
         }
      }
   };
   for(let val of res){
    console.log("val: "+val+" len:"+(val.length));
    if(val.length===partition){
        endres.push(val);
    }
    };
   return endres;
};









