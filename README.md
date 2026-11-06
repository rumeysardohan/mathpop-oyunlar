# MathPop Oyunları 🐠

Kesir, ondalık gösterim ve yüzde dönüşümleri için deniz altı temalı matematik oyunları.
Telefonda, bilgisayarda ve akıllı tahtada çalışır. Kurulum gerekmez.

| Oyun | Klasör | Kısaca |
|---|---|---|
| Deniz Altı Eş Avı | `deniz-alti-es-avi/` | 9 balık arasından hazine kartındaki sayının 3 eşini bul |
| Büyüteçle Eş Avı | `buyutecle-es-avi/` | Yüzen balıkları büyüteçle netleştir; kolay / orta / zor, can ve ses efekti |

## Klasör yapısı

```
mathpop-oyunlar/
├── index.html               ← ana sayfa (iki oyuna bağlantı)
├── deniz-alti-es-avi/
│   └── index.html
├── buyutecle-es-avi/
│   └── index.html
├── assets/
│   ├── simge.png            ← logo (sol üst köşe)
│   ├── deniz-arka-plan.jpg
│   └── balik-1.webp … balik-6.webp
├── .nojekyll                ← GitHub Pages için (silme)
└── README.md
```

## GitHub'a yükleme (tarayıcıdan, program kurmadan)

1. **Hesap aç:** github.com adresine gir, ücretsiz hesap oluştur.
2. **Depo oluştur:** Sağ üstteki **+** → **New repository**.
   - Repository name: `mathpop-oyunlar`
   - **Public** seçili olsun (ücretsiz GitHub Pages için gerekli).
   - **Create repository**'ye bas.
3. **Dosyaları yükle:** Açılan sayfada **uploading an existing file** bağlantısına tıkla.
   Bilgisayarındaki `mathpop-oyunlar` klasörünün **içindeki her şeyi** (klasörün kendisini değil)
   seçip pencereye sürükle. Alttaki **Commit changes** butonuna bas.
   - `.nojekyll` gizli dosya olduğu için görünmeyebilir. Görünmüyorsa sorun değil;
     depo sayfasında **Add file → Create new file** ile adı `.nojekyll` olan boş bir dosya oluştur.
4. **Yayına aç:** Depoda **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main**, klasör: **/(root)** → **Save**.
5. 1–2 dakika bekle. Sayfanın üstünde adres çıkar:

```
https://KULLANICI-ADIN.github.io/mathpop-oyunlar/
https://KULLANICI-ADIN.github.io/mathpop-oyunlar/deniz-alti-es-avi/
https://KULLANICI-ADIN.github.io/mathpop-oyunlar/buyutecle-es-avi/
```

Bu bağlantıları öğrencilerle, velilerle veya Instagram profilinde paylaşabilirsin.

## Güncelleme

Bir oyunu değiştirdiğinde, depoda ilgili klasöre gir → **Add file → Upload files** ile yeni
`index.html` dosyasını aynı ada yükle → **Commit changes**. Site birkaç dakikada yenilenir.

## Yeni oyun ekleme

1. Yeni bir klasör aç (ör. `kesir-carki/`) ve oyunun `index.html` dosyasını içine koy.
2. Görselleri `assets/` klasörüne koy, oyunda `../assets/dosya-adi.png` diye çağır.
3. Ana sayfadaki `index.html` içinde bir oyun kartını kopyalayıp `href` ve yazıları değiştir.

## Notlar

- Sesler tarayıcıda üretilir, ayrı ses dosyası yoktur. İlk dokunuştan sonra çalar.
- Seviye ve ses tercihi her cihazda ayrı hatırlanır.
- Yazı tipleri (Baloo 2, Nunito) Google Fonts'tan yüklenir; internet yoksa sistem yazı tipi kullanılır.
- Görseller ve logo @mathpopwithru'ya aittir.
