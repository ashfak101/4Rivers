$(document).ready(function () {
    $('.slider').owlCarousel({
      loop: true,
      nav: true,
      navText: ['<i class="icon fa-solid fa-arrow-left"></i>', '<i class="icon fa-solid fa-arrow-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        800: {
          items: 2
        },
        1000: {
          items: 4
        }
      }

    });

    $('#sliders').owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      navText: ['<i', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }

    })
  });

  const tab = document.querySelectorAll('.btn-tab');
console.log(tab);
for(let i=0 ; i<tab.length; i++){
    tab[0].style.borderBottom ='5px solid #091c30';
}

for(let i=0 ; i<tab.length; i++){
    tab[i].addEventListener('click', function(){
        for(let i=0 ; i<tab.length; i++){
            tab[i].style.borderBottom ='none';
        }
        this.style.borderBottom ='5px solid #091c30';
    })
}