const convertbutton = document.querySelector(".butto");
const selecteuro = document.querySelector(".Euro");

function ConvertValor() {
  const valorinput = document.querySelector(".value").value;

  const valor_real = document.querySelector(".par2");

  const valor_dolar = document.querySelector(".par3");

  console.log(selecteuro.value);

  const dolar = 5.2;

  const euro = 6.2;

  if (selecteuro.value == "dolar") {
    valor_dolar.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(valorinput / dolar);
  }

  if (selecteuro.value == "euro") {
    valor_dolar.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(valorinput / euro);
  }

  valor_real.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorinput);
}

function trocadevalor(){
    const bandeira = document.querySelector(".par4");
    const trocabandeira = document.querySelector(".imagem1");


    if (selecteuro.value == "dolar"){
        bandeira.innerHTML = "Dolar Americano";
       trocabandeira.src = "./assets/estados-unidos (1) 1.png";
    
    }

    if (selecteuro.value == "euro"){
        bandeira.innerHTML = "Euro";
        trocabandeira.src = "./assets/Euro.png"
    }


    ConvertValor()

} 
convertbutton.addEventListener("click", ConvertValor);
selecteuro.addEventListener("change", trocadevalor );