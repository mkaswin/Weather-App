const apikey="438cf35d143b577d98629b7c6d90b62d";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".input");
const searchbtn=document.querySelector(".btn");

const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
  const response =await fetch(apiurl +city+`&appid=${apikey}`);
  if (response.status==404) {
    document.querySelector(".error").style.display="block";
    document.querySelector(".waether").style.display="none";

  }
  else{
    var data =await response.json()
  console.log(data);

  
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity;
  document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
  if (data.weather[0].main =="clouds"){
    weatherIcon.src="images/clouds.png";
  }
  else if (data.weather[0].main =="clear"){
    weatherIcon.src="images/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/Rain.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/Mist.png";
  }
    document.querySelector(".waether").style.display="block";
    document.querySelector(".error").style.display="none";
  }
  
}
searchbtn.addEventListener("click",()=>{
  checkweather(searchBox.value);
})


