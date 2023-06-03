// Contact Form Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbzyQidQ4AEjhK4f2FB2R6qDi0cP4PlHFEeaM-1npEg5RLeNT99NrhOrFzN7cwS_Z8YE/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById('msg')
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML = "Thank You for your message!!"
          })
          setTimeout(function() {
            msg.innerHTML = ""
    
          }, 10000)
          form.reset()
          .catch(error => console.error('Error!', error.message))
      })