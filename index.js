check=(a,b,c)=>{
if(a>c.x&&a < c.x+40&&b>c.y&&b < c.y+20){
return 1
}}
whatsthis=(a,b,arr)=>{
for(let i=0; i<arr.length; i++){  if(a>arr[i].x-8&&a<arr[i].x+28&&b>arr[i].y&&b<arr[i].y+28){
arr[i].hits++
if(arr[i].hits==1){
arr[i].sonar.attr("fill","yellow")
}
if(arr[i].hits==2){
arr[i].sonar.attr("fill","red")
}
if(arr[i].hits==3){
arr[i].fire=false
arr[i].ship.remove()
arr[i].sonar.remove()
arr.splice(i,1)   
}
return 1

}
} 


}
const svg=d3.select("svg")
const left= document.querySelector(".left")
const right= document.querySelector(".right")
const scanleft= document.querySelector(".scanleft")
const scanright = document.querySelector(".scanright")

log=(v)=>{console.log(v)}

simp=(m,n)=>{
return Math.floor(Math.random()*(m-n)+n)
}
imp=(m,n)=>{
return Math.random()*(m-n)+n
}
class kai{
constructor(){
this.y=simp(500,0)
this.x=simp(400,0)

this.spectrum=["white"]

this.mass=svg.append("circle").attr("fill","white").attr("r",imp(1,0)).attr("cx",this.x).attr("cy",this.y)
}
}
for(let i=0; i<350; i++){ 
let xhuo=new kai()
//log(159)
} 
pyt=(a,b)=>{
return Math.sqrt((a*a)+(b*b))
}
class enterprise{
constructor (){ 
this.left;
this.right;
this.shoot;
this.speed=0;
this.wars=0
this.vels=0.3
this.h=20
this.w=40
this.maxspeed=2;
this.maxwars=5
this.angle=0;
this.vel=0.2;
this.res=0.05;
this.res2=0.1
this.bratva=[]
this.y=450
this.x=200
this.gunx=this.x+this.w/2-2.5
this.guny=this.y-this.h/2
this.warx=this.gunx+2.5
this.wary=this.guny+1
this.bx=this.x+20
this.by=this.y+10
this.ship=svg.append ("rect").attr("x",this.x).attr ("width",this.w).attr("y",this.y).attr("height",this.h).attr("fill","teal").attr("opacity",0.6)
this.order66=()=>{
this.bx=this.x+20
this.by=this.y+10
var arnim=true 
let see=svg.append ("circle").attr("cx",this.bx)
.attr ("r",3).attr("cy",this.by)
.attr("fill","green").attr("opacity",1)      
let grt=()=>{
let bo=see.attr("cy")
bo-=2.8
if(whatsthis(see.attr("cx"),see.attr("cy"),enemy)==1){
arnim=false
see.remove()
}
see.attr("cy",bo)
if(bo<50){
arnim =false
see.remove()
}
if(arnim) {requestAnimationFrame(grt) }    
}
requestAnimationFrame (grt)     
}

}
move(){
window.addEventListener("keydown",(e)=>{
if (e.code=='KeyA') {
this.left=true  
}
})
window.addEventListener("keydown",(e)=>{
if (e.code=='KeyD') {
this.right=true  
}
})

document.addEventListener('keyup',(e)=>{  
if (e.code=="KeyL") { 
  this.order66()
}
})
window.addEventListener("keyup",(e)=>{
if (e.code=='KeyA') {
this.left=false;
}
})
window.addEventListener("keyup",(e)=>{
if (e.code=='KeyD') {
this.right=false;
}
})

}  

update(){
if(this.left){this.speed+=this.vel}
if(this.right){this.speed-=this.vel}
if(this.speed>this.maxspeed){
this.speed=this.maxspeed
}
if(this.speed<-this.maxspeed){
this.speed=-this.maxspeed
}

if(this.speed>0){this.speed-=this.res}
if(this.speed<0){this.speed+=this.res}

if(this.x<-38){this.x=400}
if(this.x>400){this.x=-38}

this.x-=this.speed 
this.ship.attr("x",this.x)

}
}  
ick=(arr)=>{
return arr[Math.floor(Math.random()*((arr.length)-0))]
}
class alien{
constructor (x,y){
this.x=x
this.y=y
this.fire=true
this.bx
this.by
this.turn=0
this.delay=60
this.hits=0
this.sonar=svg.append ("circle").attr("cx",this.x+10).attr ("r",15).attr("cy",this.y+10).attr("fill","blue").attr("opacity",1)

this.ship=svg.append ("rect").attr("x",this.x).attr ("width",20).attr("y",this.y).attr("height",20).attr("fill","white").attr("opacity",1)
}
shift(){
let das =0
let orci=[80,100,120,140,160,180,200][simp(7,0)]
let john=true
var kilmer=()=>{
das++
if(das==orci){
let which =[0.5,-0.5][simp(2,0)]
let khan=true
let mark=0
let  df=this.x
var drew=()=>{
mark++

df+=which 
this.x=df
if(this.x>390){which=-0.5}
if(this.x<-10){which=0.5}
this.ship.attr("x",this.x)
this.sonar.attr("cx",this.x+10)
if(mark==60){
khan=false
mark=0
}
if(khan) {requestAnimationFrame(drew)}
}
requestAnimationFrame(drew)

das=0
}

if(john){requestAnimationFrame (kilmer)}
}
requestAnimationFrame (kilmer)

//end of shift

}
seek(){

this.y+=0.1
this.ship.attr("x",this.x).attr("y",this.y)
this.sonar.attr("cx",this.x+10).attr("cy",this.y+10)  

}

order69(){
let ali=simp(300,100)
let cog=0
var final=()=>{
cog++
if(cog===ali) {
this.bx=this.x+10
this.by=this.y+10
var aim=true 
let see=svg.append ("circle").attr("cx",this.bx).attr ("r",3).attr("cy",this.by).attr("fill","red").attr("opacity",1)      

let bo=this.by
let grt=()=>{
bo+=2.8
see.attr("cy",bo)
if(check(see.attr("cx"),see.attr("cy"),alpha)==1) {

let cog=0
let oslo=true
var nal=()=>{
cog++
if(cog===45) {
alpha.ship.attr("fill","teal")
oslo=false 
}
if(oslo)requestAnimationFrame (nal)
}

requestAnimationFrame (nal)


alpha.ship.attr("fill","yellow")
see.remove ()
aim=false
}



if(bo>480){
aim =false
see.remove()   
}
if(aim) {requestAnimationFrame(grt) }    
}
requestAnimationFrame(grt)
ali=simp(300,100)
cog=0
}
if(this.fire){requestAnimationFrame (final)}
}
requestAnimationFrame (final)



//end of order 
}


//end of alien
}
var spacingx =0
var spacingy=0
var te=20
var hk=20
const enemy =  []
for(let i=0; i<6; i++){ 
let gio=new alien(simp(380,20),simp(100,-100))
enemy.push(gio)
}

let alpha=new enterprise()
alpha.move()

//  alpha.sweep()
let don=0
for(let i=0; i<enemy.length; i++){ 
enemy[i].order69()
enemy[i].shift()
}
//draw loop
gy=()=>{
don++
alpha.update()    
for(let i=0; i<enemy.length; i++){ 
enemy[i].seek()
}
requestAnimationFrame(gy)
}

requestAnimationFrame(gy)
