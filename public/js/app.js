console.log('Client side JavaScript File is loaded')
 
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document. querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    messageOne.textContent = "Searching Weather..."
    messageTwo.textContent = ""
    fetch('http://localhost:3000/weather?address=' + encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if (data.error){
            messageOne.textContent = data.error
            messageTwo.textContent = data.location
            
        
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})    
})