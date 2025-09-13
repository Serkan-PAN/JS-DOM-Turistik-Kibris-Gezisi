// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.

const tumResimler = document.querySelectorAll('img');

tumResimler.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('grayscale');
  });

  img.addEventListener('mouseleave', () => {
    img.classList.remove('grayscale');
  });
});

/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- Not: keyboard eventlerini document'e değil window'a ekleyin. 
*/

const body = document.querySelector('body');

window.addEventListener('keydown', (e) => {
  const tus = e.key;

  if (tus === '1') {
    body.classList.add('theme1');
  } else if (tus === '2') {
    body.classList.add('theme2');
  } else if (tus === '3') {
    body.classList.add('theme3');
  } else if (tus === 'Escape') {
    body.classList.remove('theme1', 'theme2', 'theme3');
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/

const txt = document.querySelector('input');
const btn = document.querySelector('button');

txt.addEventListener('input', (x) => {
  x.target.value = x.target.value.toUpperCase();
  if (x.target.value.length > 5) {
    btn.disabled = false;
  } else if (x.target.value.length <= 5) {
    btn.disabled = true;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/

const form = document.querySelector('form');
const result = document.querySelector('#submitResult');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  result.textContent = `${txt.value} başarı ile kaydedildi...`;

  txt.value = '';

  btn.disabled = true;
});
