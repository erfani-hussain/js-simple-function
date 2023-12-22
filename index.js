function getMilk(bottles) {
	
  /* Ask user How much money will u give me to buy a milk */
  let money = prompt("How much money will u give me? \n(Just enter the amount of Money) ");  
    
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  /* Ask user How much does it cost each bottle of milk */
  let costEachBottle = prompt("How much does it cost each bottle of milk? \n(Enter the amount of cost)");
  let cost = bottles * costEachBottle;
    
  if (cost > money) {
	  
      console.log("I have less money and I can't afford " + bottles + " bottles");
      let moneyNeed = cost - money;
      console.log("I need $" + moneyNeed + " more");
      
  } else if (cost < money){
      
      console.log("I have enough money and I can buy " + bottles + " bottles");
      let moneyExtra = money - cost;
      console.log("Don't worry babe I got u, we have even more $" + moneyExtra );
      
  } else {
      console.log("All is well, we have enough money same as price $" + cost);
  }
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

/* Ask user how many bottles of milk do u need */
let bottles = prompt("How many bottles of milk do u need? ");
/* To call our function that we defined */
getMilk(bottles);