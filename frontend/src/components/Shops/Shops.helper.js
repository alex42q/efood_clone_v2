export const FilterTheShops = () =>{
    const date = new Date()
    const day = date.getDay();
    if (day === 0) {
        return "Sunday"
    }else if(day === 1) {
        return "Monday"
    }else if(day === 2) {
        return "Tuesday"
    }else if (day === 3) {
        return "Wednesday"
    }else if (day === 4) {
        return "Thursday"
    }else if (day === 5) {
        return "Friday"
    }else if (day === 6) {
        return "Saturday"
    }
}

export const GetDayByDb = (day) =>{
    const theDay = FilterTheShops();
    if (day === theDay) {
        return theDay;
    }
}

export const GetTimeAndCompare = (startTime2, endTime2) =>{
    const start = startTime2.split(":")[0] * 60 + startTime2.split(":")[1]*1;
    const end =  endTime2.split(":")[0] * 60 + endTime2.split(":")[1]*1;
   
    const date = new Date(); 
    const now = date.getHours() * 60 + date.getMinutes();
    if(start >= now || now <= end){
        return true
    }else{
        return false
    }
}