const cards = document.querySelector("section.cards");
const card = document.querySelector("div.card");
const modalOverlay = document.querySelector("div.modal-overlay");
const modal = document.querySelector(".content-modal");
const body = document.querySelector("body");

const videos = [
  {
    title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
    duration: "57 min",
    thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
    video_id: "GykTLqODQuU",
  },
  {
    title: "Desvendando o CSS Grid na prática | Mayk Brito",
    duration: "36 min",
    thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
    video_id: "HN1UjzRSdBk",
  },
  {
    title: "Array: Higher Order Functions | Mayk Brito",
    duration: "54 min",
    thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
    video_id: "rAzHvYnQ8DY",
  },
  {
    title: "O que é API? REST e RESTful? | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
    video_id: "ghTrp1x_1As",
  },
  {
    title: "Desvendando a variável this no Javascript | Mayk Brito",
    duration: "48 min",
    thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
    video_id: "GSqR2i-Pq6o",
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
    duration: "33 min",
    thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
    video_id: "2alg7MQ6_sI",
  },
];

const loadVideos = () => {
  videos.map((video, index) => {
    let cardClone = card.cloneNode(true);

    cardClone.setAttribute("id", index);
    cardClone.querySelector("img").src = video.thumb;
    cardClone.querySelector(".title").innerHTML = video.title;
    cardClone.querySelector(".duration").innerHTML = video.duration;

    cardClone.addEventListener("click", () => {
      modal.querySelector(
        "iframe"
      ).src = `https://www.youtube.com/embed/${video.video_id}`;
      modalOverlay.classList.add("active");
      modal.classList.add("active");
      body.style.overflow = "hidden";
    });

    cards.appendChild(cardClone);
  });
};

loadVideos();

card.remove();

modal.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  body.style.overflow = "initial";
});
