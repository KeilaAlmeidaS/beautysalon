/*abre e fecha o menu quando clicar o icone*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu,esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o headr da página quando der scroll*/
const header = document.querySelector('#header')
const navHeught = header.offsetHeight

function changeHeaderWenScroll() { 
  
  if (window.scrollY >= navHeught) {
    //SCROLL É MAIR QUE A ALTURA DO HEADER 
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*Testimonials carosel slider:swiper*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '_swiper-paginatin'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesperview: 2,
      setWrapperSize: true
    }
  }
})

/*scrolReveal:mostrar elementos quando dar ecroll na pagina*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
`#home .image,#home .text,
 #about.image , #about .text
 #services header,#services.card,
 #testimonials header, #Testimonials .testimonials
 #contact .text, #contact .links,
 footer .brand, footer .social
 `, 
 {interval: 100} 
 )

 /*back-to-top (botão voltar para cima)*/
 const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
 
/*When Scroll*/
window.addEventListener('scroll', function(){
  changeHeaderWenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})