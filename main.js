const repos = [
  {name: "g",   url: "https://github.com/pancakedevourer/g",   desc: "A C-like procedural and imperative programming language."},
  {name: "blib", url: "https://github.com/pancakedevourer/blib", desc: "Very small STB-style C library with convienience functions."},
  {name: "build", url: "https://github.com/pancakedevourer/build", desc: "Very small C build system."},
];

const header1 = document.createElement("h1");
const header2 = document.createElement("h2");

paragraph.textContent = "pancakedevourer";
paragraph.style.textAlign = "center";
paragraph.style.marginBottom = "1rem";
document.body.appendChild(paragraph)

header2.textContent = "Repositories:";
document.body.appendChild(header2);

const grid = document.createElement("div");
grid.className = "grid";

for(const repo of repos)
{
    const paragraph = document.createElement("p");
    const anchor = document.createElement("a");
    const card = document.createElement("div");
  
    anchor.href = repo.url;
    anchor.target = "_blank";
    anchor.textContent = repo.name;

    card.className = "card";
    paragraph.textContent = repo.desc;

    card.appendChild(anchor);
    card.appendChild(paragraph);
    grid.appendChild(card);
}

document.body.appendChild(grid);
