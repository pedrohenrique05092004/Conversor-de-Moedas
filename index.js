//Váriaveis//
    const FirstButton = document.querySelector(".first-button")
    const FirstSelect = document.querySelector(".first-select")
    const SecondSelect = document.querySelector(".second-select")

//Eventos//
    FirstSelect.addEventListener("change", FirstSelectChanged)
    SecondSelect.addEventListener("change", SecondSelectChanged)
    FirstButton.addEventListener("click", ButtonClicked)

//Funções//

    function ButtonClicked() {
    //Váriaveis//

    const Input = document.querySelector(".input").value
    const FirstParagraphValueToChange = document.querySelector(".first-value-to-change")
    const SecondParagraphValueToChange = document.querySelector(".second-value-to-change")
    const DolarValue = 5
    const EuroValue = 3
    const BitcoinValue = 4
    const RealValue = 7

    //Operações//

    if(FirstSelect.value == "Real"){
        FirstParagraphValueToChange.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        })
        .format(Input)

    }

    if(FirstSelect.value == "Dolar"){
        FirstParagraphValueToChange.innerHTML = new Intl.NumberFormat('en-US',
    {
        style: 'currency',
        currency: 'USD'
    })
    .format(Input)
}

if(FirstSelect.value == "Euro") {
    FirstParagraphValueToChange.innerHTML = new Intl.NumberFormat('de-DE',
        {
            style: 'currency',
            currency: 'EUR'
        })
        .format(Input)
}

if(FirstSelect.value == "Bitcoin") {
    FirstParagraphValueToChange.innerHTML = new Intl.NumberFormat('de-DE',
        {
            style: 'currency',
            currency: 'BTC'
        })
        .format(Input)
}


    if (SecondSelect.value == "Dolar") {
        SecondParagraphValueToChange.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency',
                currency: 'USD'
            })
            .format(Input / DolarValue)
    }

    if (SecondSelect.value == "Euro") {
        SecondParagraphValueToChange.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'EUR'
            })
            .format(Input / EuroValue)
    }

    if (SecondSelect.value == "Bitcoin") {
        SecondParagraphValueToChange.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency',
                currency: 'BTC'
            })
            .format(Input / BitcoinValue)
    }

    if(FirstSelect.value == "Real"){
        FirstParagraphValueToChange.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        })
        .format(Input )

    }

    

}

    function FirstSelectChanged() {
    //Variáveis//

    const FirstParagraphToChange = document.querySelector(".First-Paragraph-to-change")
    const SecondParagraphToChange = document.querySelector(".Second-Paragraph-to-change")
    const FirstImg = document.querySelector(".first-img")
    const FirstParagraphValueToChange = document.querySelector(".first-value-to-change")
    const SecondParagraphValueToChange = document.querySelector(".second-value-to-change")

    //Operações//
    if (FirstSelect.value == "Real") {
        FirstParagraphToChange.innerHTML = "Real Brasileiro"
        FirstImg.src = "./Imagens/brasil 2.png"
        FirstParagraphValueToChange.innerHTML = "R$0,00"
    }


    if (FirstSelect.value == "Dolar") {
        FirstParagraphToChange.innerHTML = "Dólar Americano"
        FirstImg.src = "./Imagens/estados-unidos (1) 1.png"
        FirstParagraphValueToChange.innerHTML = "$0,00"
    }

    if (FirstSelect.value == "Euro") {
        FirstParagraphToChange.innerHTML = "Euro"
        FirstImg.src = "./Imagens/Euro imagem.png"
        FirstParagraphValueToChange.innerHTML = "0,00 €"
    }

    if (FirstSelect.value == "Bitcoin") {
        FirstParagraphToChange.innerHTML = "Bitcoin"
        FirstImg.src = "./Imagens/bitcoin 1.png"
        FirstParagraphValueToChange.innerHTML = "0,00 ₿"
    }
}

function SecondSelectChanged() {
    //Variáveis//

    const FirstParagraphToChange = document.querySelector(".First-Paragraph-to-change")
    const SecondParagraphToChange = document.querySelector(".Second-Paragraph-to-change")
    const SecondImg = document.querySelector(".second-img")
    const FirstParagraphValueToChange = document.querySelector(".first-value-to-change")
    const SecondParagraphValueToChange = document.querySelector(".second-value-to-change")

    //Operações//

    if (SecondSelect.value == "Real") {
        SecondParagraphToChange.innerHTML = "Real Brasileiro"
        SecondImg.src = "./Imagens/brasil 2.png"
        SecondParagraphValueToChange.innerHTML = "R$0,00"
    }

    if (SecondSelect.value == "Dolar") {
        SecondParagraphToChange.innerHTML = "Dólar Americano"
        SecondImg.src = "./Imagens/estados-unidos (1) 1.png"
        SecondParagraphValueToChange.innerHTML = "$0,00"
    }

    if (SecondSelect.value == "Euro") {
        SecondParagraphToChange.innerHTML = "Euro"
        SecondImg.src = "./Imagens/Euro imagem.png"
        SecondParagraphValueToChange.innerHTML = "0,00 €"
    }

    if (SecondSelect.value == "Bitcoin") {
        SecondParagraphToChange.innerHTML = "Bitcoin"
        SecondImg.src = "./Imagens/bitcoin 1.png"
        SecondParagraphValueToChange.innerHTML = "0,00 ₿"
    }
}





