import React from 'react';
import './App.css';

const operacao = parseInt(prompt("Digite 1 para calcular a área de um RETÂNGULO, 2 para a de um TRIÂNGULO, 3 para a de um CÍRCULO ou 4 para a de um QUADRADO"));

function App() {
  switch (operacao) {


    case 1:
    var base = parseInt(prompt("Digite um valor para a base:"));
    var altura = parseInt(prompt("Digite um valor para a altura:"));
      var area = base*altura;
      return(
        <div className="App">
        {alert("O valor da área é igual a: "+area)};
        </div>
      );
      break;


      case 2:
        var base = parseInt(prompt("Digite um valor para a base:"));
        var altura = parseInt(prompt("Digite um valor para a altura:"));
          var area = (base*altura)/2;
          return(
            <div className="App">
            {alert("O valor da área é igual a: "+area)};
            </div>
          );
        break;


        case 3:
          var raio = parseInt(prompt("Digite um valor para o raio:"));    
            var area = Math.PI*(raio*2);
            return(
              <div className="App">
              {alert("O valor da área é igual a: "+area)};
              </div>
            );
          break;


         case 4:
            var lado = parseInt(prompt("Digite um valor para o lado:"));   
              var area = lado*lado;
              return(
                <div className="App">
                {alert("O valor da área é igual a: "+area)};
                </div>
              );
            break;
  
    default:
      return(
        <div className="App">
          {alert("Operação cancelada")}
        </div>
      );
      break;

}
}
export default App;
