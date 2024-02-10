const convertButton = document.querySelector(".butto");
const selectEuro = document.querySelector(".Euro");

function ConvertValor() {
  const valorInput = document.querySelector(".value").value;

  const valorReal = document.querySelector(".par2");
  const valorDolar = document.querySelector(".par3");

  let dolar = 5.2;  
  let euro = 6.2;   

  
  const apiKey = '949dc37b7ae33ea7d587f985';

  fetch(`https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
     
      dolar = data.rates.BRL;
      euro = data.rates.EUR;

      if (selectEuro.value === "dolar") {
        valorDolar.innerHTML = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(valorInput / dolar);
      }

      if (selectEuro.value === "euro") {
        valorDolar.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(valorInput / euro);
      }

      valorReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valorInput);
    })
    .catch(error => {
      console.error("Erro ao obter as taxas de câmbio:", error);
      
    });
}

function trocaDeValor() {
  const bandeira = document.querySelector(".par4");
  const trocaBandeira = document.querySelector(".imagem1");

  if (selectEuro.value === "dolar") {
    bandeira.innerHTML = "Dólar Americano";
    trocaBandeira.src = "./assets/estados-unidos (1) 1.png";
  }

  if (selectEuro.value === "euro") {
    bandeira.innerHTML = "Euro";
    trocaBandeira.src = "./assets/Euro.png";
  }

  ConvertValor();
}

convertButton.addEventListener("click", ConvertValor);
selectEuro.addEventListener("change", trocaDeValor);
