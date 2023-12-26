const $navLinks = document.querySelectorAll('[data-scroll]')
const $allLinks = document.querySelectorAll('a')
const $inputs = document.querySelectorAll('input') 
const $form = document.querySelector('.client-data')
const $submitBtn = document.querySelector('.contacts-link')

$allLinks.forEach(link => {
     link.addEventListener('click', (e) => {
          e.preventDefault()
     })
})

document.addEventListener('scroll', () => {
     const $header = document.querySelector('.header')

     if(scrollY > 0) {
          $header.style['backgroundColor'] = 'rgba(192, 48, 28, 0.7)'
          $header.style['opacity'] = '1'
     } else if(scrollY === 0) {
          $header.style['backgroundColor'] = ''
          $header.style['opacity'] = '.7'
     }
})

for(const link of $navLinks) {
     link.addEventListener('click', () => {
          const pageBlock = document.querySelector(`#${link.textContent.toLowerCase()}`)
          console.log(pageBlock.scrollIntoView())
     })
}

// $submitBtn.addEventListener('click', (e) => {
//      e.preventDefault()
//      console.log($form.innerHTML)
// })

function serializeForm(formNode) {
     const { elements } = formNode

     const data = Array.from(elements).
     filter(elem => !!elem.name)
     .map((element) => {
          const { name, value } = element
          
          return {[`${name}`]: value}   
     })
     
     alert(JSON.stringify(data))
}

function handleSubmit(e) {
     e.preventDefault()
     serializeForm($form)
}

$form.addEventListener('submit', handleSubmit)