import '../styles/index.scss'
import toggler from './Components/Menu'
import video from './Components/video'


if (process.env.NODE_ENV === 'development') {
  require('../index.html')
}


document.addEventListener('DOMContentLoaded',function(){
  const hideHelper = document.querySelector('#hide-helper')
  // mobile menu
  toggler('menuToggler','main-navbar','hidden',function(){
    const menu = document.querySelector(`#menuToggler`);
    // hide-helper
    hideHelper.classList.toggle('inactiveSection')
    if(menu.getAttribute('data-open')==="false") {
        menu.setAttribute('data-open','true')
        menu.innerHTML = '<i class="fas fa-times"></i>'
    }else {
        menu.setAttribute('data-open','false')
        menu.innerHTML = '<i class="fas fa-bars"></i>'
    }
  })
  // tabs
  const tabButtons = document.querySelectorAll('#buttons-container a')

  tabButtons.forEach((button)=>{
    button.addEventListener('click',function(e){
      e.preventDefault()
      const id = `#${this.getAttribute('data-target')}`
      // hide all tabs
      document.querySelectorAll(".tab-item").forEach((node)=>node.classList.add('hidden'))
      // make selected tab visible
      document.querySelector(id).classList.remove('hidden')
      // remove all active classes from buttons
      tabButtons.forEach((button)=>button.classList.remove('active'))
      // add active class to selected button
      this.classList.add('active')
      
    })
  })

  // video
  video('review')
})



