
            const scriptURL = 'https://script.google.com/macros/s/AKfycbygMZXNlh0P6BYEyQKnMRYlUvjqZYwo3JaAGrtpOC2nwJ6pKYGhbewRN0V59SVROr8/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })