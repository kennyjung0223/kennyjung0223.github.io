const t = anime.timeline({
  easing: "easeInOutQuad",
});

t.add({
  targets: "#cover-trace",
  opacity: [0,1],
  translateY: [-50,0],
});