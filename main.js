const repos = [
  {name: "g",   url: "https://github.com/pancakedevourer/g",   desc: "A C-like procedural and imperative programming language."},
  {name: "blib", url: "https://github.com/pancakedevourer/blib", desc: "Very small STB-style C library with convienience functions."},
  {name: "mk", url: "https://github.com/pancakedevourer/mk", desc: "Very small C build system."},
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
