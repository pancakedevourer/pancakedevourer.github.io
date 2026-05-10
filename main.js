const repos = [
  {name: "repo-name",   url: "https://github.com/user/repo-name",   desc: "Opis repozytorium."},
  {name: "repo-name-2", url: "https://github.com/user/repo-name-2", desc: "Opis repozytorium."},
  {name: "repo-name-3", url: "https://github.com/user/repo-name-3", desc: "Opis repozytorium."},
];

const h1 = document.createElement("h1");
h1.textContent = "Repositories:";
document.body.appendChild(h1);

const grid = document.createElement("div");
grid.className = "grid";

for (const repo of repos) {
    const card = document.createElement("div");
    card.className = "card";

    const a = document.createElement("a");
    a.href = repo.url;
    a.target = "_blank";
    a.textContent = repo.name;

    const p = document.createElement("p");
    p.textContent = repo.desc;

    card.appendChild(a);
    card.appendChild(p);
    grid.appendChild(card);
}

document.body.appendChild(grid);
