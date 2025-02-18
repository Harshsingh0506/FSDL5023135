document.getElementById('carbonForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const transportation = parseFloat(document.getElementById('transportation').value);
    const energy = parseFloat(document.getElementById('energy').value);
    const waste = parseFloat(document.getElementById('waste').value);

    // Simple calculation for carbon footprint (example multipliers)
    const transportationCO2 = transportation * 0.9;  // Assumes 0.9 kg CO2 per mile
    const energyCO2 = energy * 0.5; // Assumes 0.5 kg CO2 per kWh
    const wasteCO2 = waste * 0.8;  // Assumes 0.8 kg CO2 per kg of waste

    // Total carbon footprint
    const totalFootprint = transportationCO2 + energyCO2 + wasteCO2;

    // Show result
    document.getElementById('footprintValue').textContent = `Your total carbon footprint is ${totalFootprint.toFixed(2)} kg CO2e per month.`;
    document.getElementById('result').style.display = 'block';
});
