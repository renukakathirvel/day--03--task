//question2 : using the rest countries display all the country flags    

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

    for(var i=0;i<res.length;i++){
        console.log(res[i].flag);
       } 
    }

//question3 : using the rest countries print all the countries names,regions,sub region and populations       
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var j=0;j<res.length;j++){
        console.log(res[j].name.common);
        console.log(res[j].region);
        console.log(res[j].subregion);
        console.log(res[j].population);
    }   
}    