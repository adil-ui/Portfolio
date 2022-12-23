import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery'

function checkSize() {
  if($(window).width() < 767)
  {
    console.log("Resize",$('nav'));
      $('nav').removeClass("fixed-top")
      $('nav').removeClass("bg-transparent").addClass('bg-dark')
  } else {
    $('nav').removeClass("bg-dark").css("background-color", '#F06040')
    $('nav').css("box-shadow", "#000000 0px 0px 35px")
    $('nav').addClass("fixed-top")
  }

}


$(document).ready(() => {
  setTimeout(() => {
    checkSize()
  }, 1000)
  $(window).on("resize", () =>{
    checkSize()
  })
    $(window).scroll(() => {
        if($(window).scrollTop() !== 0 && $(window).width() >= 767) {
            $('nav').removeClass("bg-transparent").css("background-color", '#F06040')
            $('nav').css("box-shadow", "#000000 0px 0px 35px")
        } else if($(window).width() >= 767) {
            $('nav').addClass("fixed-top")
            $('nav').css("box-shadow", 'none')
            $('nav').removeClass('bg-dark').addClass('bg-transparent');
        }
        
    })
    
  
})

    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
