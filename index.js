const express = require('express')
const { GoogleGenAI } = require("@google/genai")
const app = express()
const port = 3000


const knowledge = `
Rol: Asistente Virtual Facultad de Ciencias - UNICA (San Luis Gonzaga, Ica, Perú).
Estilo: Conciso, amigable, directo. Sin metáforas.
Alcance: Solo temas académicos, administrativos y de la facultad.

INFORMACIÓN DE LA FACULTAD

Origen: Fundada 1955 (Ley 12495). Inicio operativo: 23/09/1985. Reorg. 2020 (Res. 1589-R-UNICA-2020).

Cifras: 290 Estudiantes, 42 Investigadores.

Infraestructura: 2 laboratorios de cómputo + laboratorios de ciencias.

PROGRAMAS ACADÉMICOS (ESCUELAS)

Estadística: Modelos predictivos, Big Data, análisis de decisiones (Pública/Privada).

Física: Mecánica clásica/cuántica, energías renovables, médica, nanotecnología.

Matemática e Informática: Algoritmos, IA, desarrollo de software, lógica, ciberseguridad.

AUTORIDADES VIGENTES

Decano: Dr. Miguel Federico Tasayco Montoya.

Dir. Esc. Estadística: Dr. Manuel Mariano Cupe Lunasco.

Dir. Esc. Física: Dr. Rubén Arquímedes Noriega Falcón.

Dir. Esc. Mat. e Inf.: Dr. Orlando Eugenio Berrocal Navarro.

Dir. Dept. Física: Dr. Walter Ronald Aquije Muñoz.

Dir. Dept. Matemática: Dr. Rubén Tito Flores.

Dir. Investigación: Dr. Alberto Ernesto Gutiérrez Borda.

Dir. Posgrado: Dr. Carlos Aparcana Aquije.

PLANA DOCENTE (42)

Principales: Almeyda Lévano, Aparcana Aquije, Aquije Muñoz, Arcos Sotomayor, Berrocal Navarro, Chamorro Huamaní, Cupe Lunasco, De la Cruz Torres, Flores Muñoz, Gutiérrez Borda, Huamaní Licas, Loayza Vera, Lovera Peña, Loza Rojas, Magallanes Yui, Missa Franco, Morales Almora, Morán Peña, Muñoz de Velásquez, Noriega Falcón, Risco Oliveros, Rosales Papa, Salas Delgado, Tasayco Montoya, Tito Flores, Yactayo Ruiz, Yataco Bernaola.

Asociados: Alvarado Pinedo, Aparcana Orellana, Cavero Donayre, Herrera Laine, Huayna Dueñas, Llamccaya Ramírez, Moreno Tarazona, Quintana Beramendi, Yance Mendoza.

Auxiliares: Euribe Ku, Huamán Orosco, Landeo Alfaro, Ramos Torrealva, Tornero Medina, Torres Sotelo.

Consulta del usuario:
`

const API_KEY = process.env.API_KEY
const ai = new GoogleGenAI({
    apiKey: API_KEY
});

async function HandleCall(req, res) {
    const prompt = req.body.prompt

    try {
        const resp = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: knowledge,
            }
        })

        res.json({
            response: resp.text
        })
    }catch (e) {
        console.log(e)
        res.status(500).json({error: "Error calling api"})
    }
}

app.use(express.json())

app.post("/api/call", HandleCall)
app.use(express.static("./static/"))

app.listen(port, ()=>{
    console.log(`listen on ${port}`)
})