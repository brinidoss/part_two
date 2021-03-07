let name = prompt("Name your pet.")
var happiness = 0
var energy = 0

for (let i =0; i<6; i++){
    let action = prompt("feed, pet, or walk?")

    if(action === "feed"){
      energy += 2;
    } else if (action === "pet"){
      happiness += 1;
    } else if (action === "walk" && (energy>=1)){
      happiness += 2;
      energy -= 1;
    } else if (action === "walk" && (energy<1)){
      alert("Not enough energy to enjoy a walk.")
}
}
console.log(name + " has " + happiness + " happiness and " + energy + " energy.")
