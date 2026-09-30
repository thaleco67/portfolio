const memoryCard = document.getElementById('memoryCard');

memoryCard.addEventListener('mousemove', (e) => {
  const rect = memoryCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;

  memoryCard.style.transform =
    `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
});

memoryCard.addEventListener('mouseleave', () => {
  memoryCard.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
});


const body = document.body
const botao = document.getElementById("darkMode")

botao.addEventListener('click', () => {
  body.classList.toggle("light-mode")
})

window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  document.getElementById('spine-fill').style.height = pct + '%';
});
// Edite os itens de cada pasta aqui
const pastas = {
  projetos: [
    { titulo: "GO FRUIT", tag: ".fig" },
    { titulo: "Rooftop", tag: ".fig" },
    { titulo: "Tabela periodica", tag: ".fig" }
  ],
  certificados: [
    { titulo: "UX Design - Alura", tag: ".pdf" },
    { titulo: "Figma Avançado", tag: ".pdf" }
  ],
  techstack: [
    { titulo: "Figma", tag: ".tool" },
    { titulo: "Photoshop", tag: ".tool" },
    { titulo: "Illustrator", tag: ".tool" },
    { titulo: "Canva", tag: ".tool" }
  ]
};

const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("folder-content");

function renderFolder(nome) {
  const itens = pastas[nome] || [];
  content.innerHTML = itens.map(item => `
      <div class="item-card">
        <div class="item-thumb">
          <!-- troque por: <img src="caminho-da-imagem.jpg" alt=""> -->
          <img src="Captura de Tela 2026-09-15 às 08.48.16.png" alt="">
        </div>
        <div class="item-info">
          <p>${item.titulo}</p>
          <span>${item.tag}</span>
        </div>
      </div>
    `).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    renderFolder(tab.dataset.folder);
  });
});

renderFolder("projetos");
const formContato = document.getElementById("contato-form");
const statusForm = document.getElementById("form-status");

formContato.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = formContato.nome.value.trim();
  const email = formContato.email.value.trim();
  const mensagem = formContato.mensagem.value.trim();

  const assunto = encodeURIComponent(`Contato pelo portfólio - ${nome}`);
  const corpo = encodeURIComponent(`${mensagem}\n\n${nome}\n${email}`);

  window.location.href = `mailto:seuemail@gmail.com?subject=${assunto}&body=${corpo}`;

  statusForm.textContent = "// abrindo seu app de email...";
  formContato.reset();
});