// =======================
// Navegação dos Cards
// =======================
document.addEventListener("DOMContentLoaded", () => {
    const pageCards = document.querySelectorAll(".card[data-page]");

    pageCards.forEach(card => {
        const target = card.dataset.page;
        if (!target) return;

        const goToPage = () => window.location.href = target;

        card.addEventListener("click", goToPage);

        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                goToPage();
            }
        });
    });
});


// =======================
// Modal
// =======================

const modal = document.getElementById("modal");
const openBtn = document.getElementById("BotaoLigar");
const closeBtn = document.getElementById("closeBtn");

// Proteção caso algum elemento não exista
if (modal && openBtn && closeBtn) {

    // Abrir modal
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Fechar modal pelo X
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Fechar clicando fora do conteúdo
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("show");
    });

    // Fechar com ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") modal.classList.remove("show");
    });

} else {
    console.warn("⚠️ Elementos do modal não encontrados no DOM.");
}

// =======================
// Modal de Imagem Ampliada
// =======================

const imageModal = document.getElementById("imageModal");
const imageModalImg = document.querySelector(".image-modal-img");
const imageModalClose = document.querySelector(".image-modal-close");
const imageModalBack = document.querySelector(".image-modal-back");
const clickableImages = document.querySelectorAll(".clickable-image");

if (imageModal && imageModalImg && imageModalClose && clickableImages.length > 0) {
    // Abrir modal ao clicar em imagem clicável
    clickableImages.forEach(img => {
        img.addEventListener("click", () => {
            imageModalImg.src = img.src;
            imageModalImg.alt = img.alt;
            imageModal.classList.add("show");
        });
    });

    // Fechar modal pelo X
    imageModalClose.addEventListener("click", () => {
        imageModal.classList.remove("show");
    });

    // Fechar modal pelo botão Voltar
    if (imageModalBack) {
        imageModalBack.addEventListener("click", () => {
            imageModal.classList.remove("show");
        });
    }

    // Fechar clicando fora da imagem
    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
            imageModal.classList.remove("show");
        }
    });

    // Fechar com ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && imageModal.classList.contains("show")) {
            imageModal.classList.remove("show");
        }
    });
}


// =======================
// Modal de Vídeo com botão de voltar
// =======================

const videoModal = document.getElementById("videoModal");
const videoModalPlayer = document.querySelector(".video-modal-player");
const videoModalClose = document.querySelector(".video-modal-close");
const videoModalBack = document.querySelector(".video-modal-back");
const videoButtons = document.querySelectorAll(".btn-video");

if (videoModal && videoModalPlayer && videoButtons.length > 0) {
    // Abrir modal ao clicar em link de vídeo
    videoButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const src = btn.href;
            videoModalPlayer.src = src;
            videoModal.classList.add("show");
            videoModalPlayer.play();
        });
    });

    // Fechar modal pelo X
    if (videoModalClose) {
        videoModalClose.addEventListener("click", () => {
            videoModalPlayer.pause();
            videoModalPlayer.src = "";
            videoModal.classList.remove("show");
        });
    }

    // Fechar modal pelo botão Voltar
    if (videoModalBack) {
        videoModalBack.addEventListener("click", () => {
            videoModalPlayer.pause();
            videoModalPlayer.src = "";
            videoModal.classList.remove("show");
        });
    }

    // Fechar clicando fora do conteúdo
    videoModal.addEventListener("click", (e) => {
        if (e.target === videoModal) {
            videoModalPlayer.pause();
            videoModalPlayer.src = "";
            videoModal.classList.remove("show");
        }
    });

    // Fechar com ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && videoModal.classList.contains("show")) {
            videoModalPlayer.pause();
            videoModalPlayer.src = "";
            videoModal.classList.remove("show");
        }
    });
}
