let read = document.getElementById('read');
let lastText = document.getElementById('lastText')

read.addEventListener('click', () => {
    if(read.textContent === 'Читать далее' ){
        read.textContent = 'Cкрыть'
    }else{
        read.textContent = 'Читать далее'
    }
  lastText.classList.toggle('show');
})