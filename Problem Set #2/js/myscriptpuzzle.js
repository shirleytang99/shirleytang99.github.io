
function myFunction(){
    var a=prompt("Please enter an array, split by ','");
    var f=a.split(",");
    var dataIntArr=[];
    var a=document.getElementById("demo");
    dataIntArr=f.map(function(data){
        return +data;
    });

    console.log(dataIntArr);

    function avg(dataIntArr) {
        var avg=0;
        for(var i=0;i<dataIntArr.length;i++){

            avg+=parseFloat(dataIntArr[i]);
        }
        return avg/dataIntArr.length;
    }
    document.getElementById("demo").innerHTML = "The mean of this array is " + +avg(dataIntArr);}
