const form = document.getElementById('myForm')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const search = document.getElementById('search').value

  const userName = search.split(' ').join('')
  
  let url = `https://api.github.com/users/${userName}`
  

  fetch(url).then(res=>res.json()).then(user=> {
    console.log(user)
    if(user.message) {
      alert(`${userName} nao encontrado`)
      const about = document.querySelector('.containerAbout')
      // about.style.display = 'none'
      const container = document.querySelector('.container')
      container.style.display = 'none'

    } else {
      const about = document.querySelector('.containerAbout')
      about.style.display = 'none'
      const container = document.querySelector('.container')
      container.style.display = 'block'

      container.innerHTML = `
      <img src="${user.avatar_url}">
      <h1>${user.name || ''}</h1>
      <h2>@${user.login}</h2>
      <div class="containerCards">
      <div class="cards">
        <p>${user.followers}</p>
        <h3>Followers</h3>
      </div>
      <div class="cards">
        <p>${user.following}</p>
        <h3>Following</h3>
      </div>
      <div class="cards">
        <p>${user.public_repos}</p>
        <h3>Repositorios</h3>
      </div>
    </div>


      
      `
    }
  })

  repos()

})

const repos = async () => {
  const search = document.getElementById('search').value

  const userName = search.split(' ').join('')
  const url = await fetch(`https://api.github.com/users/${userName}/repos`)
  data = await url.json()
  console.log(data)
  document.querySelector('.containerRepo').innerHTML = ``

  data.forEach(function(repo) {
    
    document.querySelector('.h1').innerHTML = `
    <h1>All your repositories</h1>
    `
    document.querySelector('.containerRepo').innerHTML += `

    <a href="${repo.html_url}" class="repo" target="_blank">
    <h2>${repo.name}</h2>
    <p class="oi">${repo.description || ''}</p>

    <ul class="repoInfo">
    
    <li>${repo.language || ''}</li>
    <li class="stars">${repo.stargazers_count}</li>
    <li class="forks">${repo.forks}</li>
    
    
    </ul>

    </a>

    
    `

  })


}

form.addEventListener('submit')

