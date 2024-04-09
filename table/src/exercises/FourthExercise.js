import { useState } from 'react';

function FourthExercise() {

    let [Jogos, setJogos] = useState();

    let [nome, setNome] = useState();

    let vitoria = Jogos / 2 * 3
    let empate = Jogos / 2 * 1
    let total = vitoria + empate


    function alterarNome(elemento) {
        setNome(elemento.target.value)
    }
    function alterarJogos(elemento) {
        setJogos(elemento.target.value) 
    }
        
        return (
            <div class="container">
                <div>Nome do time:<input onChange={alterarNome} type= "text" placeholder = "Nome do Time"></input></div>
                <p>Quantidades de jogos:<input onChange={alterarJogos} type = "number" placeholder='Quantidade de Jogos' disabled = {!nome}></input></p>
                <p>Pontos de vitoria: {vitoria}</p>
                <p>Pontos de empate: {empate}</p>
                <p>Total de pontos: {total}</p>
            </div>
        );



    
     
    
  
}
    export default FourthExercise;