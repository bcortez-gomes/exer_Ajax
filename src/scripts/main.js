const GITHUB_USERNAME = "bcortez-gomes";

async function fetchGitHubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("GitHub user not found");
        }

        const user = await response.json();

        document.getElementById("avatar").src = user.avatar_url;
        document.getElementById("name").textContent = user.name || "No Name";
        document.getElementById("username").textContent = `@${user.login}`;
        document.getElementById("repos").innerHTML = `<h4>Repositórios</h4> ${user.public_repos}`;
        document.getElementById("followers").innerHTML = `<h4>Seguidores</h4> ${user.followers}`;
        document.getElementById("following").innerHTML = `<h4>Seguindo</h4> ${user.following}`;
        document.getElementById("link").href = user.html_url;
        document.getElementById("link").textContent = "Ver no Github";

    } catch (error) {
        console.error("Error fetching GitHub data:", error);
    }
}

fetchGitHubProfile(GITHUB_USERNAME);
