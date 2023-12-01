document.addEventListener('DOMContentLoaded', function() {
    fetch('/js/Datos_Anemia_2021.json')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('datos-Anemia');
            tabla.innerHTML = '<tr><th>Fecha</th><th>Temperatura (°C)</th><th>Tipo de nubes</th><th>Cobertura nubosa</th></tr>';
            data.forEach(registro => {
                tabla.innerHTML += `<tr>
                    <td>${registro.Fecha}</td>
                    <td>${registro['Departamento']}</td>
                    <td>${registro['Distrito']}</td>
                    <td>${registro['Total de niños']}</td>
                    <td>${registro['Niños con Anemia']}</td>
                    <td>${registro['Porcentaje de Niños con Anemia']}</td>
                    <td>${registro['Porcentaje de atención médica']}</td>
                </tr>`;
            });
        });
});