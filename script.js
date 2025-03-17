document.write('Hello world!');

function sayHello(){
  var response = prompt('What is your name?');
  alert("Hello " + response + ", welcome to the game!");
};

function add(a,b){
  return a + b;
}
console.log(add(20,30));
console.log(add(158,20078));

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = 'red';
}
