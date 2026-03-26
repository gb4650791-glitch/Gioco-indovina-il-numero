let p=document.getElementById("giustoosbagliato");
const p2 = document.querySelectorAll("p")[1];
function getRandomInt(){
    return Math.floor(Math.random()*10);
}
let n=0;
function set_number(number_in_input){
    n+=number_in_input;
    p2.innerHTML+=number_in_input;
}
let random_number=getRandomInt();
function controllo(){
    if(n==random_number){
        p.innerHTML = "Bravo,hai indovinato!";
    }
    else{
        p.innerHTML = "Sbagliato";
        p2.innerHTML = "";
        n=0;
    }
    
}
function restart(){
    p.innerHTML = "";
    p2.innerHTML = "";
    n=0;
    random_number = getRandomInt();
}