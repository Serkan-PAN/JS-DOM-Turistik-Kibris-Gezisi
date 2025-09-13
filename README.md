# Eğlence Otobüsü – Kıbrıs Turu (DOM + JS)

Basit, eğlenceli ve öğretici bir **DOM & JavaScript** projesi.  
Sayfadaki görsellerde hover efekti, klavye ile tema değiştirme, form doğrulama ve submit akışı gibi temel etkileşimler içerir.

![cover](https://i.ibb.co/pzLyQR1/fun-bus.jpg)

## İçindekiler
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Klasör Yapısı](#klasör-yapısı)
- [Kurulum & Çalıştırma](#kurulum--çalıştırma)
- [Kullanım](#kullanım)
- [Klavye Kısayolları](#klavye-kısayolları)
- [Ekran Görselleri](#ekran-görselleri)
- [İyileştirme Fikirleri](#iyileştirme-fikirleri)
- [Lisans](#lisans)

---

## Özellikler

- 🖼️ **Hover’da Gri Tonlama:** Tüm görsellerin üzerine gelince `grayscale` filtresi uygulanır, ayrılınca kalkar.
- 🎨 **Tema Değiştirme (Klavye ile):**  
  `1` → `theme1`, `2` → `theme2`, `3` → `theme3`; `Esc` → temayı sıfırlar.
- 🔠 **Form Doğrulama (Gerçek Zamanlı):**  
  İsim alanına yazdıkların **anında BÜYÜK HARF**’e çevrilir. **5 karakterden uzun** olduğunda **Kaydet** butonu aktif olur.
- ✅ **Submit Akışı:**  
  Form gönderilince giriş değeri temizlenir, buton tekrar `disabled` olur ve altta **“{VALUE} başarı ile kaydedildi…”** mesajı gösterilir.
- 📱 **Responsive Tasarım:** 500px altı ekranlar için düzenlemeler içerir.
- 🧩 **Basit & Öğretici:** DOM seçimleri, event’ler, class yönetimi gibi temel JS konularını örnekler.

---

## Teknolojiler

- **HTML5**, **CSS3**
- **Vanilla JavaScript (ES6+)**
- Google Fonts: *Bangers*, *Titillium Web* (HTML’de link verilmiştir)

---

## Klasör Yapısı

```
.
├─ index.html
├─ index.css
└─ index.js
```

> Not: Harici bir derleme adımı yoktur; dosyalar doğrudan tarayıcıda çalışır.

---

## Kurulum & Çalıştırma

1. Bu depoyu klonla veya dosyaları indir:
   ```bash
   git clone <repo-url>
   cd <repo-klasörü>
   ```
2. Bir canlı sunucu ile aç (önerilen):
   - VS Code kullanıyorsan **Live Server** eklentisiyle `index.html`’i çalıştır.
   - Alternatif olarak dosyayı doğrudan çift tıklayıp tarayıcıda açabilirsin.

> Her şey **client-side** çalışır; ek ayar gerekmez.

---

## Kullanım

- Sayfayı açtığında üstte sabit bir navigasyon, içerikte Kıbrıs turu temalı metin ve görseller, altta bir form görürsün.
- Görsellerin üzerine geldiğinde otomatik **gri ton** uygulanır.
- Klavyeden **1/2/3** tuşlarıyla temayı değiştir, **Esc** ile sıfırla.
- Form alanına **en az 6 karakter** yaz; yazdıkların otomatik **büyük harf** olur.  
  Şart sağlandığında **Kaydet** butonu aktifleşir. Gönderince onay mesajı görürsün.

---

## Klavye Kısayolları

| Tuş      | İşlev                              |
|----------|------------------------------------|
| `1`      | `theme1` temasını uygular          |
| `2`      | `theme2` temasını uygular          |
| `3`      | `theme3` temasını uygular          |
| `Esc`    | Tüm tema class’larını temizler      |

---

## Ekran Görselleri

- Kapak görseli: https://i.ibb.co/pzLyQR1/fun-bus.jpg  
- Kumsal: https://i.ibb.co/TH2xjJ5/kumsal.jpg  
- Beşparmak Dağları: https://i.ibb.co/CKLYfT4/besparmak-Daglari.jpg  
- Rota: https://i.ibb.co/GJFdztf/rota.jpg

> Görseller `index.html` içerisinde doğrudan linklenmiştir.

---

## İyileştirme Fikirleri

- [ ] Tema seçimlerini **LocalStorage**’a kaydet (sayfa yenilense de tema korunsun).
- [ ] Form’a **temel regex doğrulama** ekle (örn. sadece harf).
- [ ] Erişilebilirlik için odak sırası ve `:focus` stillerini zenginleştir.
- [ ] Tema geçişlerine **CSS transition** ekle.
- [ ] **Dark mode** varyasyonu ekle.

---

### Notlar

- Navigasyon ve butonlar görsel/demonstratif amaçlıdır; backend entegrasyonu yoktur.  
- Görsellere **`alt`** metinleri eklenmiştir (erişilebilirlik için önerilir).
