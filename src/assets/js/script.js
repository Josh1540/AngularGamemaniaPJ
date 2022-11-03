// FUNCIONALIDADE USANDO JQUERY--TOGGLE FUNCTION

$(document).ready(function() {

   
   



   let slideAtual = 1;
   let listaSlide = ["banner-jogos", "banner-amigos", "banner-chuva"]
                           // 0               1               2

       setInterval(mudarSlides, 1000)

       function mudarSlides() {
      
      // console.log("Slide atual é:", slideAtual);

            // Remover o Slide anterior ao atual
      if (slideAtual > 0 ) {
         $("#carrosel").removeClass(listaSlide[slideAtual - 1])
      }  else if (slideAtual == 0) {

         $("#carrosel").removeClass(listaSlide[(listaSlide.length) - 1  ])
      }
            // Adicionando Slides
         $("#carrosel").addClass(listaSlide[slideAtual]);
   
         // Indica o slide atual, qual vai ser
         slideAtual++

         if (slideAtual > (listaSlide.length) - 1) {
            slideAtual = 0;
         }
      }
   
   
   $("#bars").click(function() {

      $("#menu").toggleClass("menu-ativo");
   })

})
   //   if (  $("menu").hasClass("menu-ativo")   ) {
   //       $("menu").removeClass("menu-ativo")
   //   } else {
      //       $("menu").addClass(menu-ativo)
      //   }
      

  



function mostrarMenu() {


   let menu = document.getElementById("menu")

     if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex'; 
     } else {
        menu.style.display = 'none'; }
     }


function cadastrarNovoEmail() {

   let email = document.getElementById("campo-email").value
   
   alert("E-mail cadastrado com sucesso")
   console.log(email)
}