# Teleskop Tarayıcı & Keşif Dürbünü

Ultra gizlilik odaklı, açık kaynak masaüstü tarayıcı ve yerel arama motoru.

## Gereksinimler

- Node.js 20+
- pnpm 9+

## Kurulum

```bash
pnpm install
node node_modules/.pnpm/electron@*/node_modules/electron/install.js
pnpm run build
```

## Çalıştırma

```bash
pnpm dev
```

Keşif Dürbünü web arayüzü (tarayıcı dışı):

```bash
pnpm kesif:web
```

API: `http://127.0.0.1:3921`

## Proje yapısı

- `packages/teleskop-core` — paylaşılan modeller
- `packages/kesif-durbunu` — crawler, indeks, arama API
- `packages/teleskop-assistant` — yerel asistan (kural tabanlı)
- `apps/desktop` — Electron tarayıcı
- `apps/kesif-web` — harici arama sitesi
- `apps/mobile` — Flutter (Faz 2)

## Özellikler (v0.1)

- Sekmeli gezinme, workspace, kurulum sihirbazı
- Keşif Dürbünü yerel arama + seed indeks
- Reklam/izleyici engelleme, gizlilik paneli, panic button
- Yer imleri, geçmiş, notlar, araçlar kenar çubuğu
- Şifre yöneticisi (OS şifreli depo), güvenli indirme uyarısı
- RAM Saver, ekran görüntüsü, çevrimdışı oyunlar
- 6 dilde yerel asistan komutları

## Lisans

Apache-2.0
