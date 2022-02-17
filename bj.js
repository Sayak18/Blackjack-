var card = []
var message=" "
var sum = 0
var isalive = false
var sumEl = document.getElementById("sum-el")
var cardsEl = document.getElementById("cards-el")
var messageEl = document.getElementById("message-el")
// console.log(messageEl)
function startgame(){
if(!isalive){
isalive=true	
let firstCard=Math.floor(Math.random()*13)
let secondCard=Math.floor(Math.random()*13)
card = [firstCard,secondCard]
cardsEl.textContent=cardsEl.textContent+" "+card[0]
game()
}
}
function game(){
	sum=0
cardsEl.textContent=cardsEl.textContent +" "+card[card.length-1]
for(let i=0;i<card.length;i++){
  sum=sum+card[i]
}  
sumEl.textContent="Sum: "+sum
if(sum < 21){
   message="Do you want to draw a new card?"
	console.log(message)
}else if(sum === 21){
	isalive=false
	message="You have got blackjak"
	console.log(message)
}else{
	isalive=false
	message="You are out of the game"
	for(let j=0;j<card.length;j++)
	{
		card.pop()
	}
	cardsEl.textContent=" "
	sumEl.textContent=" "
	console.log(message)
}
messageEl.textContent=message
}
function newcard(){
	if(sum<=21){
	let p=Math.floor(Math.random()*13)
	if(p>10){
		card.push(10)
	}else{
		card.push(p)
	}
	game()
  }
}