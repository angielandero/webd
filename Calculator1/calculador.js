function calculateTip() {
    // Obtener los valores de los campos
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);

    // Validar los valores
    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    // Calcular la propina y el total
    const tipAmount = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tipAmount;

    // Mostrar los resultados
    document.getElementById('tip-amount').textContent = `Propina: €${tipAmount.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `Total a pagar: €${totalAmount.toFixed(2)}`;
}
