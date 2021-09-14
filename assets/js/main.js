const form = document.getElementById('myForm')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const search = document.getElementById('search').value

  const userName = search.split(' ').join('')
  
  let url = `https://api.github.com/users/${userName}`

  fetch(url).then(res=>res.json()).then(user=> {
    if(user.message) {
      document.querySelector('.container').innerHTML = `
      
      <h1>Não encontrado!!!</h1>

      `
    } else {
      document.querySelector('.container').innerHTML = `
      
      <h1>${user.login}</h1>
      <img src="${user.avatar_url}">
      <p>${user.name}</p>
      
      `
    }
  })

})

