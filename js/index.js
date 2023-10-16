document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    console.log(form);
    const list = document.querySelector("#user-list");
    function renderUser(userData) {
      const name = document.createElement("li");
      name.textContent = userData.login;
      list.appendChild(name);
      const avatar = document.createElement("img");
      avatar.src = userData.avatar_url;
      avatar.alt = `${userData.login} avatar image`;
      list.appendChild(avatar);
      avatar.addEventListener("click", (e) => handleClick(userData));
  
      const profileLink = document.createElement("a");
      profileLink.href = userData.html_url;
      profileLink.textContent = "Github Profile";
  
      list.appendChild(profileLink);
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      list.innerHTML = "";
      repos.innerHTML = "";
  
      fetch(`https://api.github.com/search/users?q=${e.target.search.value}`)
        .then((res) => res.json())
        .then((usersData) => usersData.items.forEach(renderUser));
    });
    const repos = document.querySelector("#repos-list");
    
    function handleClick(userData) {
      fetch(`https://api.github.com/users/${userData.login}/repos`)
        .then((res) => res.json())
        .then((userRepos) => {
          list.innerHTML = "";
          renderUser(userData);
  
          userRepos.forEach(renderRepos);
        });
    }
    function renderRepos(){
      const li = document.createElement("li")
         li.textContent = user.full_name
     
         repos.append(li)
     
    }
  });
  