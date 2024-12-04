const password = "mdp123"

function randomNumber() {
    return Math.floor(Math.random() * 1000);
}
function getAction() {
    let x = randomNumber();
    let y = randomNumber();
}
for (let i = 0; i < 1000; i++) {
    if (i % 2 === 0) {
        let unusedVariable = randomNumber(); 
    } else {
        getAction();  
    }
}
let a = "cacher";
let b = "indices";
let c = a + b;

setTimeout(function() {
}, 5000);
localStorage.setItem("password1","bienvu321")
let actions = ["vérifier", "exécuter", "démarrer", "stopper"];
let randomAction = actions[Math.floor(Math.random() * actions.length)];    
