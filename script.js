loc = document.querySelector('#search');
searchBtn = document.querySelector('#searchBtn')
searchBtn.addEventListener('click', ()=>{
    getData(loc.value)
})

result=document.getElementById('wData')

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
});

async function getData(city) {
    // console.log(city);
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b41ec3be35c7dac8aabbc21ba253137a`)
    const weatherdata=await data.json()
    console.log(weatherdata);
    display(weatherdata)


}

function display(weatherdata){
    temp=Math.floor(weatherdata.main.temp-273.15)
    result.innerHTML =`
    <div class="card-body">
        <h2 class="card-title">${loc.value}</h3>
        <h3 class="card-title"><i class="fa-solid fa-cloud"></i> ${weatherdata.weather[0].description}</h3>
        <h3 class="card-title"><i class="fa-solid fa-temperature-three-quarters"></i> ${temp}<sup>o</sup>C</h3>
    </div> `
}