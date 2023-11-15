$('.teamsec-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: true,
  dots: false,
  autoplay: false
});

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);

  });

});


var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});



/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");


const body = document.body;

const btn1 = document.getElementsByClassName('catalogbtn')[0];
const btn2 = document.getElementsByClassName('materialsbtn')[0];
const btn3 = document.getElementsByClassName('questionsbtn')[0];
const btn4 = document.getElementsByClassName('reviewsbtn')[0];
const btn5 = document.getElementsByClassName('contactsbtn')[0];
const btn6 = document.getElementsByClassName('consultwrapbtn')[0];  
// Клонируем меню, чтобы задать свои стили для мобильной версии
/*const menu = document.querySelector("#menu").cloneNode(1);*/

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);



//hamb.addEventListener("mouseover", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}
  
  
/*

if(btn1) {
  btn1.addEventListener('click', function() {
      console.log(111);
     popup.classList.toggle("open");
     body.classList.toggle("noscroll");
     renderPopup();
  });
}

if(btn2) {
btn2.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});
}

if(btn3) {
btn3.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});
}

if(btn4) {
btn4.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});
}

if(btn5) {
btn5.addEventListener('click', function() {
   popup.classList.toggle("open");
   body.classList.toggle("noscroll");
   renderPopup();
});
}

*/