document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#name');
    const usernameElement =  document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement =  document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const endpoint = `https://api.github.com/users/bcortez-gomes`;
    const token = process.env.VITE_GITHUB_TOKEN;


    if (!token) {
        console.error("⚠️ GitHub Token is missing! Check your .env file.");
        return;
    }

    fetch(endpoint, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": "application/vnd.github.v3+json"
        }
    })
    .then(res => res.json())
    .then(json => {
        nameElement.innerText = json.name || "No Name";
        usernameElement.innerText = json.login || "No Username";
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        reposElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
    .catch(err => console.error("❌ API Request Failed:", err));
})