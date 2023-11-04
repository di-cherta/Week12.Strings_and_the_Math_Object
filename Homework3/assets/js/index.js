function calculateBMI(){
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const result = document.getElementById("result");
    let bmi = (weight / Math.pow( (height/100), 2));
    bmi = Math.round(bmi);
    result.textContent = 'Индекс массы тела (ИМТ): ' + bmi;
}

