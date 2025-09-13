function calcular(){
    const num = document.getElementById('temp').value;
    const resultado = (parseFloat(num) - 32) * (5 / 9);
    alert("La temperatura calculada es " + resultado +" °C.");
}