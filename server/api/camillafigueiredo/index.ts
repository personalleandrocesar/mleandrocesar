export default defineEventHandler((event) => {


  // Send JSON response
  return {
    "nome": "Camilla",
    "nomeCompleto": "Camilla Figueiredo",
    "email": "",
    "senha": "1234",
    "foto": "https://m.leandrocesar.com/img/camillafigueiredo.jpeg",
    "servico": "Consultoria on-line",
    "objetivo": "Definição",
    "tempo": "60 min.",
    "dias": "6 dias",
    "treinoA": "Quadriceps/adutores/peito/tríceps",
    "treinoB": "Gluteo/panturrilha/costa/bíceps",
    "treinoC": "",
    
    // Dados Menu Global
    "periodo": "04/12/23 - 04/01/24",
    "status": 2,
    // Treino atual
    "treinoActual": "05/12/23 - 04/01/24",
    // Próxima Treino 
    "treinoNext": "05/01/24",
    // Avaliação atual
    "valuationActual": "",
    // Próxima avaliação 
    "valuationNext": ""
  }
})
