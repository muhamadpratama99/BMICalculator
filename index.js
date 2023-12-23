document.querySelector('.check').addEventListener('click', function () {
    const weight = Number(document.querySelector('.weight-input').value)
    const height = Number(document.querySelector('.height-input').value) /100
    console.log(weight, height, typeof weight, typeof height)
    if (!weight || !height) {
        document.querySelector('.output2').textContent = ""
        document.querySelector('.output1').textContent = "Berat & tinggi badan masih kosong"
    } else {
        const BMI = (weight / (height*height)).toFixed(2)
        console.log(BMI)
        document.querySelector('.output1').textContent = `BMI Anda yaitu ${BMI}`
        if (!BMI) {
            document.querySelector('.output2').textContent = "Berat & tinggi badan masih kosong"
        } else if (BMI <= 18.49) {
            document.querySelector('.output2').textContent = `Anda kekurangan berat badan (Underweight)`
        } else if (BMI >= 18.5 && BMI <= 24.9) {
            document.querySelector('.output2').textContent = `Selamat Berat Badan Anda Normal (Ideal)!`
        } else if (BMI >= 25 && BMI <= 27) {
            document.querySelector('.output2').textContent = `Anda kelebihan berat badan (Overweight)`
        } else if (BMI >= 27) {
            document.querySelector('.output2').textContent = `Waduh Anda Obesitas! Kurangi karbo! Perbanyak olahraga!`
        } else if (!BMI) {
            document.querySelector('.output2').textContent = "Berat & tinggi badan masih kosong"
        }
    }
})