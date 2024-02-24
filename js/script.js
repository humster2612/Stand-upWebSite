"use strict"

document.addEventListener('DOMContentLoaded'), function(){
    const form = document.getElementById('form');
    form.addEventListener('submit',formSend);

    async function formSend(e){
        e.preventDefault();


        let error = formValidate(form);


        if (error ===0){
            let response = await fetch ('sendmail.php',{
                method:'POST',
                body: formData

            });
           

        }else{
            alert('Заполните все поля ')

        }

    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index<formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);


            if (input.classList.contains('_email')){
                    if (emailTest(input)){
                        formAddError(input);
                        error++;
                    }
            }else if(input.getAttribute("type")==="checkbox" && input.checked ===false ){
                formAddError(input);
                error++;                 
            }else{
                if(input.value === ''){
                    formAddError(input);
                    error++;   
                }
            }

        }
    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');

    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');

    }

    // function emailTest(input){
    //     return  hghbf j d fhgbyfuhbl fb oerrurbjgkgjutj b ;f jf g du ei
    
    // }

        


}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


