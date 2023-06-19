funcionPredeterminada = () => {
    let formulario = document.getElementById("formulario")
    
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorhoras = Number( document.getElementById("valorPorHora").value);
        let valorhtml = Number( document.getElementById("estructhtml").value);
        let valorcss = Number( document.getElementById("estilocss").value);
        let valorjavascript = Number( document.getElementById("logicajavascript").value);
        let valorerrores = Number( document.getElementById("errores").value);
        let valorapis = Number( document.getElementById("cantAPI").value);
        let valorinterfaz = Number(document.getElementById("interfazHoras").value);
        
        let total = valorhoras * (valorhtml + valorapis + valorcss + valorinterfaz + valorjavascript + valorerrores);
        console.log(valorTotal);
        document.getElementById("valorTotal").value = total;
      })
    
  }
  funcionPredeterminada();