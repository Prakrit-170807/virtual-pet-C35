var Dog
var D1
var food_count=100
var database
var countraf
var readfrom

function preload(){
  D1 = loadImage('dog3.png')  
}

function setup() {
  database=firebase.database()
  countraf=database.ref('food')
  countraf.on("value",Readcount)
  createCanvas(880, 620);
  Dog1=createSprite(440,400,20,20)
  Dog1.addImage(D1)

}


function draw() {  
  background('#323233')
  if(keyWentDown("space")){
    food_count=food_count-1
    //Rightcount(food_count)
  }
  if(food_count<=90){
    text("I AM NOT A FEEDING MACHINE PLS STOP I AM NOT HUNGRY ANY MORE",260,500)
  }
  fill("white")
  textSize(14)
  text("HEY I AM DOG",400,100)
  text("YOU LIKE DOGS? .... II'L TAKE THAT AS YES",320,120)
  text("GHRRRRR.... WELL THAT WAS MY STOMACH, I AM HUNGRY CAN CAN YOU FEED ME",200,140) 
  text("YOU CAN FEED ME MY PRESSING SPACE, BUT I ONLY HAVE LIMITED FOOD CHECK IT ➜"+  food_count,180,200)
  drawSprites();
}

function Rightcount(food_count){
  database.ref("food").update({
    "food":food_count
  })
}

function Readcount(data){
  readfrom=data.val()
  food_count=readfrom
}



