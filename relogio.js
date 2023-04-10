function relogio(){

    var img = document.getElementById("imagem")
    ////////////////////////////////////////////



    const espacoRelogio = document.querySelector(".relogio");

    const horaAgora = new Date (); 

    const horas = horaAgora.getHours(); 

    const minutos = horaAgora.getMinutes();

    const segundos = horaAgora.getSeconds();

    const formatoHora = horas.toString().padStart(2, "0");
    
    const formatoMinutos = minutos.toString().padStart(2, "0");

    const formatoSegundos = segundos.toString().padStart(2, "0");

    espacoRelogio.textContent = `${formatoHora}:${formatoMinutos}:${formatoSegundos}`;

    const frase = document.querySelector(".frase")

    dia = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");

    mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

    hoje = new Date()

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`


    if (formatoHora >= 00 && formatoHora < 12){
        document.body.style.backgroundImage = 'url(https://s1.1zoom.me/b3160/633/Philippines_Tropics_Coast_Sea_Palma_Beach_513926_1920x1080.jpg)'
        document.body.style.color = 'yellow'
        document.body.style.backgroundSize = 'cover'; 
        img.src = "https://img.freepik.com/icones-gratis/sol_318-178494.jpg"
        
    }
    else if (formatoHora >= 12 && formatoHora < 18){
        document.body.style.backgroundImage = 'url(https://images.alphacoders.com/116/1161907.jpg)'
        document.body.style.color = 'purple'
        document.body.style.backgroundSize = 'cover';
        img.src = "https://icones.pro/wp-content/uploads/2021/04/icone-de-soleil-jaune.png"
    }
    else{
        document.body.style.backgroundImage = 'url(https://static.vecteezy.com/ti/vetor-gratis/p3/18891972-ilustracaoial-papel-de-parede-da-area-de-trabalho-vista-da-praia-com-grandes-pedras-e-coqueiros-a-noite-iluminada-pela-luz-azul-que-emerge-do-mar-vetor.jpg)'
        document.body.style.color = 'white'
        document.body.style.backgroundSize = 'cover';
        img.src = "https://www.publicdomainpictures.net/pictures/390000/nahled/mond-himmel-transparent-png.png"
    
    }
}

setInterval(relogio,1000 )

