let daysMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

let inputDate = document.querySelector('#input-data')
let btn       = document.querySelector('.btn-data')
let years     = document.querySelector('.years')
let months    = document.querySelector('.months')
let days      = document.querySelector('.days')

btn.addEventListener('click',()=>{
    let now = new Date()
    let inputdate = new Date(inputDate.value)

    let currentyear  = now.getFullYear()
    let currentmonth = now.getMonth()+1
    let currentday   = now.getDate()
    

    let year  = inputdate.getFullYear()
    let month = inputdate.getMonth()+1
    let date  = inputdate.getDate()
    
    yearResult = currentyear-year

        if(currentmonth >= month){
            monthResult=currentmonth-month
        }else{
            yearResult--
            monthResult=12+currentmonth-month
        }

        if(currentday >= date){
            dayResult=currentday-date
        }else{
            monthResult--
            dayResult=daysMonth[currentmonth]+ currentday-date
            if(monthResult<0){
                monthResult=11
                yearResult--
            }
        }
        

        years.innerHTML=yearResult
        months.innerHTML=monthResult
        days.innerHTML=dayResult

        if((year>currentyear)||
            (month>currentmonth&&year==currentyear)||
            date>currentday&&month==currentmonth&&year==currentyear){
            years.innerHTML="-"
            months.innerHTML="-"
            days.innerHTML="-"
            alert('Not Born Yet')
        }

        if(inputDate.value==''){
            alert('Please enter your year of birth')
            years.innerHTML="-"
                months.innerHTML="-"
                days.innerHTML="-"
        }
})