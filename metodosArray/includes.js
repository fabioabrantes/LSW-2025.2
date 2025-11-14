const palavrasProibidas = [" idiota ", "Burro", " feio "];

// Limpando o array de palavras proibidas (removendo espaços e padronizando)
const palavrasProibidasFormatada = palavrasProibidas.map((p) =>
  p.trim().toLowerCase()
);
console.log(palavrasProibidasFormatada);

function comentarioValido(comentario) {
  // Limpa e padroniza o comentário
  const comentarioFormatado = comentario
    .trim()
    .replace(/\s+/g, "")
    .toLowerCase();
  // Verifica se alguma das palavras proibidas está no comentário
  palavrasProibidasFormatada.forEach((palavra) => {
    if (comentarioFormatado.includes(palavra)) {
      console.log("🛑 Comentário bloqueado: contém palavras ofensivas.");
    } else {
      console.log("✅ Comentário aprovado.");
    }
  });
}

comentarioValido(" jose é burro");

comentarioValido("   IDIOTA   ");
