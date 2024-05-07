function validation() {
    const inputs = document.querySelectorAll('.input')
    const form = document.querySelector('form')
    
    form.addEventListener("submit", (form) =>{
        form.preventDefault()

        inputs.forEach(input => {
            if(input.value === ''){
                input.classList.add('error')
                input.nextElementSibling.classList.remove('none')
            } else{
                input.classList.remove('error')
                input.nextElementSibling.classList.add('none')
            }
        });
    })
}

export default validation