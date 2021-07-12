const submit = document.getElementById("btnsubmit");
const cityname = document.getElementById("cityname");
const city_output = document.getElementById("cityoutput");
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');



const getInfo = async (event)=>{
    event.preventDefault();
   const cityval = cityname.value;
    

if(cityval===''){
city_output.innerText=`please write a value`;
}else{
    try{
            let url = `api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=280a9f71e03a8c3916d87276b4107d4b`;
            const response = await fetch(url);
            console.log(response);
            const data =  await response.json();
            console.log(data);
            const arrData = [data];  
            console.log(arrData);
            temp.innerText= arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
}
catch{
    city_output.innerText=`please write city name properly`;
   
}
}
};






submit.addEventListener('click',getInfo);