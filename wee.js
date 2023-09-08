let input=document.querySelector("input");
let APkey="cdd038c0f3fae357db7dda2eaf242460";
let btn=document.querySelector("#btn");
let city=document.querySelector("#city");
let temp=document.querySelector("#temp");
let wind=document.querySelector("#wind");
let humid=document.querySelector("#humid");
let img=document.querySelector("img");
let wthr=document.querySelector("#weather")
btn.addEventListener("click", check);
async function check(){
  
  let cityname=input.value;
  try{
  city.innerText=cityname;
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APkey}&units=metric`;
  const resposne=await fetch(url);
  const data=await resposne.json();
  temp.innerText=data.main.temp
  wind.innerText=`${data.wind.speed}km/hr`
  humid.innerText=`${data.main.humidity}%`
  wthr.innerText=data.weather[0].main
  if(data.weather[0].main=="Clear"){
    img.src="clear.txt"
  }
  if(data.weather[0].main=="Clouds"){
    img.src="clou.txt"
  }
  if(data.weather[0].main=="Haze"){
    img.src="haze.txt"}
  if(data.weather[0].main=="Drizzle"){
    img.src="llrain.txt"
  
  }
if(data.weather[0].main=="Mist"){
    img.src="llrain.txt"
  
}
  }
  catch(e){
    alert(`${cityname}, No such city exist`)
  }
  
}
 
