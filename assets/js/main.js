const form = document.getElementById('myForm')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const search = document.getElementById('search').value

  const userName = search.split(' ').join('')
  
  let url = `https://api.github.com/users/${userName}`

  fetch(url).then(res=>res.json()).then(user=> {
    console.log(user)
    if(user.message) {
      document.querySelector('.container').innerHTML = `
      
      <h1>Não encontrado!!!</h1>

      `
    } else {
      const container = document.querySelector('.container')

      container.innerHTML = `
      
      <h1>${user.name}</h1>
      <h2>@${user.login}</h2>
      <img src="${user.avatar_url}">

      
      <span>Seguidores ${user.followers}</span>
      <span>Seguindo ${user.following}</span><br>

      <div class="repo">
      <span>Repositório ${user.public_repos}</span> 
      </div>

      
      `
    }
  })

})

const repos = async () => {
  const search = document.getElementById('search').value

  const userName = search.split(' ').join('')
  const url = await fetch(`https://api.github.com/users/${userName}/repos`)
  data = await url.json()
  console.log(data)

  data.forEach(function(repo) {
    document.querySelector('.container').innerHTML += `
    
    
    `
  })

}

form.addEventListener('submit', repos)

