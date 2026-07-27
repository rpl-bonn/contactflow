const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const videoObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      const videos = entry.target.matches("video")
        ? [entry.target]
        : [...entry.target.querySelectorAll("video")];

      if (entry.isIntersecting) {
        const referenceTime = videos[0]?.currentTime ?? 0;
        for (const video of videos) {
          if (Math.abs(video.currentTime - referenceTime) > 0.08) {
            video.currentTime = referenceTime;
          }
          video.play().catch(() => {});
        }
      } else {
        for (const video of videos) {
          video.pause();
        }
      }
    }
  },
  { threshold: 0.35 },
);

document.querySelectorAll(".result-pair").forEach((pair) => {
  const videos = [...pair.querySelectorAll("video")];
  videoObserver.observe(pair);

  pair.addEventListener("click", () => {
    const shouldPlay = videos.some((video) => video.paused);
    if (shouldPlay) {
      const referenceTime = videos[0]?.currentTime ?? 0;
      for (const video of videos) {
        video.currentTime = referenceTime;
        video.play().catch(() => {});
      }
    } else {
      for (const video of videos) {
        video.pause();
      }
    }
  });
});

document.querySelectorAll("video").forEach((video) => {
  if (video.closest(".result-pair")) {
    return;
  }

  videoObserver.observe(video);
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
