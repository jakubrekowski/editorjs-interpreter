let jsonInput = document.querySelector('#json-input')
let jsonInputBtn = document.querySelector('#json-input-btn')

jsonInputBtn.addEventListener('click', (event) => {
    document.querySelector('#output-code').innerHTML = interpreter(jsonInput.value) + '<br><pre class="text-bold">HTML source is in console</pre>'
    console.log(interpreter(jsonInput.value))
})
