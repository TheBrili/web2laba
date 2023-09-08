//Пополняемый
let arrReplenished = [
    { str: "6 месяцев - 20%", time: 6, percent: 20 },
    { str: "1 год - 22%", time: 12, percent: 22 },
    { str: "1,5 года - 15%", time: 18, percent: 15 },
    { str: "2 года - 10%", time: 24, percent: 10 },
]

//Срочный
let arrEmergency = [
    { str: "3 месяца - 20%", time: 3, percent: 20 },
    { str: "6 месяцев - 22%", time: 6, percent: 22 },
    { str: "9 месяцев - 23%", time: 9, percent: 23 },
    { str: "1 год - 24%", time: 12, percent: 24 },
    { str: "1,5 года - 18%", time: 18, percent: 18 },
    { str: "2 года - 15%", time: 24, percent: 15 }
]

function changeTypeOfContribution() {
    const valueType = document.getElementById("typeOfContribution").value
    const depositTerm = document.getElementById("depositTerm")
    depositTerm.innerHTML = "<option selected disabled hidden>Срок вклада</option>"
    if(valueType === "Пополняемый"){
        arrReplenished.map(element=>{
            const option = document.createElement("option")
            option.textContent = element.str
            depositTerm.append(option)
        })
    }else{
        arrEmergency.map(element=>{
            const option = document.createElement("option")
            option.textContent = element.str
            depositTerm.append(option)
        })
    }
}

const creatingDeposit = () => {
    const valueType = document.getElementById("typeOfContribution").value
    const depositTerm = document.getElementById("depositTerm").value
    const sumAmount = document.getElementById("sumAmount").value
    const result = document.getElementById("result")
    if(valueType !== "Вид вклада" && depositTerm !== "Срок вклада" && sumAmount !== ""){
        if(valueType === "Пополняемый"){
            arrReplenished.map(element=>{
                if(element.str === depositTerm){
                    result.innerHTML = `<p>Вклад ${valueType} на срок ${element.time} месяцев на сумму ${sumAmount} руб.</p> 
                    <p>В конце срока Вы получите ${Number(sumAmount)+Number(((sumAmount/100*element.percent)/12)*element.time)} руб.</p>`
                }
            })
        }else{
            arrEmergency.map(element => {
                if(element.str === depositTerm){
                    result.innerHTML = `<p>Вклад ${valueType} на срок ${element.time} месяцев на сумму ${sumAmount} руб.</p> 
                    <p>В конце срока Вы получите ${Number(sumAmount)+Number(((sumAmount/100*element.percent)/12)*element.time)} руб.</p>`
                }
            })
        }
    }else{
        alert("Перепроверьте, заполнили ли Вы все поля")
    }
}