// Función para navegación SPA
function navigateTo(sectionId) {
    // Ocultar todas
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    // Mostrar seleccionada
    document.getElementById(sectionId).classList.add('active');
    // Cerrar menú móvil si está abierto
    const bsCollapse = bootstrap.Collapse.getInstance(document.getElementById('mainNav'));
    if (bsCollapse) bsCollapse.hide();
    // Scroll arriba
    window.scrollTo(0,0);
}

// Datos de Docentes (Arreglo completo de los 42 docentes)
const docentesData = [
    ["ALMEYDA LEVANO, ANDRES GABRIEL", "ORDINARIO PRINCIPAL", "100373"],
    ["ALVARADO PINEDO, LUCAS ARNALDO", "ORDINARIO ASOCIADO", "12434"],
    ["APARCANA AQUIJE, CARLOS", "ORDINARIO PRINCIPAL", "2574"],
    ["APARCANA ORELLANA, ALDRYN OSCAR", "ORDINARIO ASOCIADO", "116144"],
    ["AQUIJE MUÑOZ, WALTER RONALD", "ORDINARIO PRINCIPAL", "100319"],
    ["ARCOS SOTOMAYOR, NESTOR GILBERTO", "ORDINARIO PRINCIPAL", "100364"],
    ["BERROCAL NAVARRO, ORLANDO EUGENIO", "ORDINARIO PRINCIPAL", "100258"],
    ["CAVERO DONAYRE, RICARDO CESAR", "ORDINARIO ASOCIADO", "100165"],
    ["CHAMORRO HUAMANI, LORENZO", "ORDINARIO PRINCIPAL", "100283"],
    ["CUPE LUNASCO, MANUEL MARIANO", "ORDINARIO PRINCIPAL", "65464"],
    ["DE LA CRUZ TORRES, JORGE LUIS", "ORDINARIO PRINCIPAL", "100277"],
    ["EURIBE KU, CARLOS ALBERTO", "ORDINARIO AUXILIAR", "97916"],
    ["FLORES MUÑOZ, MANUEL ISABEL", "ORDINARIO PRINCIPAL", "75140"],
    ["GUTIERREZ BORDA, ALBERTO ERNESTO", "ORDINARIO PRINCIPAL", "2930"],
    ["HERRERA LAINE, JUAN PEDRO", "ORDINARIO ASOCIADO", "100294"],
    ["HUAMAN OROSCO, GUSTAVO", "ORDINARIO AUXILIAR", "206787"],
    ["HUAMANI LICAS, MAXIMO", "ORDINARIO PRINCIPAL", "100311"],
    ["HUAYNA DUEÑAS, JORGE ENRIQUE", "ORDINARIO ASOCIADO", "13792"],
    ["LANDEO ALFARO, ELMER LEONIDAS", "ORDINARIO AUXILIAR", "81908"],
    ["LLAMCCAYA RAMIREZ, FLAVIO ABAD", "ORDINARIO ASOCIADO", "100069"],
    ["LOAYZA VERA, RENE ELEODORO", "ORDINARIO PRINCIPAL", "100380"],
    ["LOVERA PEÑA, RAUL FELIX", "ORDINARIO PRINCIPAL", "100467"],
    ["LOZA ROJAS, CESAR", "ORDINARIO PRINCIPAL", "2611"],
    ["MAGALLANES YUI, JAVIER EDUARDO", "ORDINARIO PRINCIPAL", "99971"],
    ["MISSA FRANCO, LLUDY ELADIA", "ORDINARIO PRINCIPAL", "65467"],
    ["MORALES ALMORA, JOSE LUIS", "ORDINARIO PRINCIPAL", "100055"],
    ["MORAN PEÑA, ANDRES NICOLAS", "ORDINARIO PRINCIPAL", "100003"],
    ["MORENO TARAZONA, JOSE", "ORDINARIO ASOCIADO", "102148"],
    ["MUÑOZ DE VELASQUEZ, TEODOSIA VILMA ISABEL", "ORDINARIO PRINCIPAL", "102811"],
    ["NORIEGA FALCON, RUBEN ARQUIMEDES", "ORDINARIO PRINCIPAL", "100266"],
    ["QUINTANA BERAMENDI, JAIME RENAN", "ORDINARIO ASOCIADO", "100326"],
    ["RAMOS TORREALVA, ZULLY MARIBEL", "ORDINARIO AUXILIAR", "66428"],
    ["RISCO OLIVEROS, JUAN ANTONIO", "ORDINARIO PRINCIPAL", "100290"],
    ["ROSALES PAPA, LORGIO OMAR", "ORDINARIO PRINCIPAL", "2600"],
    ["SALAS DELGADO, MANUEL ENRIQUE", "ORDINARIO PRINCIPAL", "100297"],
    ["TASAYCO MONTOYA, MIGUEL FEDERICO", "ORDINARIO PRINCIPAL", "100322"],
    ["TITO FLORES, RUBEN", "ORDINARIO PRINCIPAL", "100114"],
    ["TORNERO MEDINA, BELISA ROSALBA", "ORDINARIO AUXILIAR", "118255"],
    ["TORRES SOTELO, CESAR IVAN", "ORDINARIO AUXILIAR", "20707"],
    ["YACTAYO RUIZ, ROBERTO PEDRO", "ORDINARIO PRINCIPAL", "82610"],
    ["YANCE MENDOZA, OSWALDO", "ORDINARIO ASOCIADO", "100273"],
    ["YATACO BERNAOLA, MERLY LILIANA", "ORDINARIO PRINCIPAL", "2610"]
];

// Llenar tabla de docentes automáticamente
const tableBody = document.getElementById('teachersTableBody');
docentesData.forEach((docente, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${(index + 1).toString().padStart(2, '0')}</td>
        <td>${docente[0]}</td>
        <td><span class="badge bg-light text-dark border">${docente[1]}</span></td>
        <td class="text-center">
            <a href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=${docente[2]}" 
                target="_blank" class="btn btn-sm btn-portal rounded-pill px-3">
                <i class="bi bi-person-badge"></i> Ver Perfil
            </a>
        </td>
    `;
    tableBody.appendChild(row);
});