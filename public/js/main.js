const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name')
const submit_btn=document.getElementById("submit_btn");
const temp=document.getElementById('temp')
const temp_real_val=document.getElementById('temp_real_val')
const temp_status=document.getElementById('temp_status')
const data_hide=document.querySelector('.middle_layer')
const day=document.getElementById('day')
const date=document.getElementById('date')
const getinfo=async(event)=>{
    event.preventDefault()
    let cityVal=cityName.value;
   
    alert('clicked')
    // let url=api.openweathermap.org/data/2.5/weather?q={mumbai}&appid={b14425a6554d189a2d7dc18e7d7263}
    let url='https://api.openweathermap.org/data/2.5/weather?q=islamabad,pakistan&APPID=e3030ca24c8b441630c82a3f88a27b75'
    if(cityVal==="")
    {
        city_name.innerText="plz enter city name"
        data_hide.classList.add('data_hide')

    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal},pakistan&APPID=e3030ca24c8b441630c82a3f88a27b75`
        const responce=await fetch(url);
        const data=await responce.json();
        const arrdata=[data];
        city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`
        temp_real_val.innerHTML=arrdata[0].main.temp;
        temp_status.innerText=arrdata[0].weather[0].main;
        const tempMood=arrdata[0].weather[0].main;
        
        // Create a new Date object
var currentDate = new Date();
var month = currentDate.getMonth() + 1; 
var dayy = currentDate.getDate();
var year = currentDate.getFullYear();

// Format the date as MM/DD/YYYY
var formattedDate = month + '/' + dayy + '/' + year;
var dayOfWeek = currentDate.getDay();

// Array to map day indices to day names
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the name of the current day
var today = daysOfWeek[dayOfWeek];
day.innerHTML=today;
date.innerHTML=formattedDate


       if(tempMood=='Clear')
       {
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }else if(tempMood=='Clouds')
        {
            temp_status.innerHTML= "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if(tempMood=='Rain')
        {
            temp_status.innerHTML= "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
        }
        else
        {
            temp_status.innerHTML= "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        data_hide.classList.remove('data_hide')
    }

        catch{
            city_name.innerText="plz enter correct city_name"
            data_hide.classList.add('data_hide')
        }
        
    }
}
submit_btn.addEventListener('click',getinfo);