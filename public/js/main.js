console.log("Hii here");
let btn = document.getElementById('SubmitBtn');
let ciytName = document.getElementById('ciytName');
let city = document.getElementById('city-name');
let temp = document.getElementById('temp_real_val');
let temp_status = document.getElementById('temp_status');
let datahide = document.querySelector('.data_hide');
let tdate = document.getElementById('today-date');
let day = document.getElementById('day');
btn.addEventListener('click' , async(e)=>{
    e.preventDefault();
    let cityValue = ciytName.value ;
    if(cityValue === ""){
        city.innerText = "Enter City Name to get Weather details";
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=a05dd99be106ab232d5af50ee8de94b9`;
            let response = await fetch(url);
            let result = await response.json();
            if(response.status === 200)
            {
                     console.log(result);
                     let arrData = [result];
                     city.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
                     temp.innerText = arrData[0].main.temp;
                     let tempMood = arrData[0].weather[0].main; 

                     if(tempMood === `Clear`){
                        temp_status.innerHTML = 
                        `<i class = 'fas fa-sun' style = 'color:#eccc68;'></i>`;
                     } else if(tempMood === `Clouds`){
                        temp_status.innerHTML = 
                        `<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>`;
                     } else if(tempMood === `Rain`){
                        temp_status.innerHTML = 
                        `<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'></i>`;
                     } else {
                        temp_status.innerHTML = 
                        `<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'></i>`;
                     }
                     datahide.classList.remove('data_hide');
            } 
            else
            {
                city.innerText = 'Please Enter a Valid City Name.';
                    datahide.classList.add('data_hide');
            }
        }catch(e){
            alert(e);
        }
    }
});

const filldate = ()=>{
    let newDay = new Date();
    let dayArr = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    let monthArr = ["Jan" , "Feb" , "March" , "April" , "May" , "June" , "July" , "Aug" , "Sept" , "Oct" , "Nov" , "Dec"];
    day.innerText = `${dayArr[newDay.getDay()]}`;
    tdate.innerText = `${newDay.getDate()} , ${monthArr[newDay.getMonth()]}`;
}
filldate();