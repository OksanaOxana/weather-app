gsap.from("#input", {opacity:0, duration:2, y: -100, delay:1})


const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "1e608e2508adb1bec3ee2ea2919fef22"
}

 const input = document.querySelector("#input");
 input.addEventListener("keypress", enter);

 function enter(e) {
    if(e.key === "Enter") {
        getInfo(input.value);
    }
 }


async function getInfo (data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appiD=${api.key}`);
    const result = await res.json()
    displayResult(result)
  }  

    function displayResult(result) {
        let city = document.querySelector("#city");
        city.textContent = `${result.name}, ${result.sys.country}`;

        getOurDate();

        let temperature = document.querySelector("#temperature");
        temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

        let feelsLike = document.querySelector("#feelsLike");
        feelsLike.innerHTML = `${Math.round(result.main.feels_like)}<span>°</span>`;

        let conditions = document.querySelector("#conditions");
        conditions.textContent = `${result.weather[0].main}`;

        let variation = document.querySelector("#variation");
        variation.innerHTML = `Min:  ${Math.round(result.main.temp_min)}<span>°</span>  Max:  ${Math.round(result.main.temp_max)}<span>°</span>`
   }

   function getOurDate() {
    const myDate = new Date();
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "December"];

    let day = days[myDate.getDay()];
 
    let todayDate = myDate.getDate();
 
    let month = months[myDate.getMonth()];
  
    let year = myDate.getFullYear();
    
    let showDate = document.querySelector("#date");

    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`

   }
 