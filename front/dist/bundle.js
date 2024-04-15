(() => {
  var e = {
      152: (e) => {
        e.exports = (e) => {
          const n = document.createElement("article"),
            t = document.createElement("a"),
            a = document.createElement("div"),
            s = document.createElement("div"),
            r = document.createElement("div"),
            i = document.createElement("div");
          return (
            n.classList.add("film-card"),
            (t.href = "#"),
            a.classList.add("film-image-container"),
            s.classList.add("film-information"),
            r.classList.add("film-rate"),
            i.classList.add("film-gender"),
            (a.innerHTML = `<img src="${e.poster}" alt="${e.title}">`),
            (s.innerHTML = `\n      <h3 class="film-title">${e.title}</h3>\n      <span class="film-property">Director: </span>\n      <span class="film-director">${e.director}</span>\n      <span class="film-property">Year: </span>\n      <span class="film-year">${e.year}</span>\n      <span class="film-property">Duration: </span>\n      <span class="film-duration">${e.duration}</span>\n    `),
            (r.innerHTML = `\n      <div class="icon-start-container">\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">\n<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />\n</svg>\n      </div>\n      ${e.rate}\n    `),
            (i.innerHTML = e.genre.map((e) => `<span>${e}</span>`).join("")),
            t.appendChild(a),
            t.appendChild(s),
            s.appendChild(r),
            s.appendChild(i),
            n.appendChild(t),
            n
          );
        };
      },
      714: (e, n, t) => {
        const a = t(152),
          s = document.getElementById("films-Section");
        e.exports = (e) => {
          (s.innerHTML = ""), e.forEach((e) => s.appendChild(a(e)));
        };
      },
    },
    n = {};
  function t(a) {
    var s = n[a];
    if (void 0 !== s) return s.exports;
    var r = (n[a] = { exports: {} });
    return e[a](r, r.exports, t), r.exports;
  }
  (() => {
    const e = t(714);
    $.get("https://students-api.up.railway.app/movies", (n, t) => {
      if ("success" !== t) return alert("Not films found");
      e(n);
    });
  })();
})();
