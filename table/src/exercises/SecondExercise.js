import {useState} from 'react';


function SecondExercise() {

    let [nome, setNome] = useState ();
    let salario = 1000;
    let reajuste = 10;

    let NovoSalario = salario * reajuste / 100;
    let total = NovoSalario + salario;

    function alterarNome (elemento) {
    setNome(elemento.target.value)
}

    return (
      <div>
            <h4>{nome}</h4>
           
      </div>
    );
  }

  
  export default SecondExercise;