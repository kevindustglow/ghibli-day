# 吉卜力公園親子日

Kevin 一家 2026/11 名古屋行的吉卜力公園當天手機引導頁。單一檔案 `index.html`，沒有 build 步驟。

## 怎麼改

| 想改什麼 | 在 `index.html` 找 |
|---|---|
| 飯店名稱、預設日期 | `const TRIP = {...}` |
| 每一步的標題與重點 | `function buildSteps` 裡的 `add({...})` |
| 日期選項 | `<select id="date">` |
| 出門清單 | `<ul class="chk">` |
| 路線圖站點 | `const NODES = [...]` |

存檔推上 `main`，GitHub Pages 約 1 分鐘後更新。

## 資料狀態（2026-10-22）

- 開園時間、休園日、票種、入場規則：已對照 ghibli-park.jp 官方網站。
- 地鐵與 Linimo 分鐘數：估計值，尚未對官方時刻表。
- 路線圖是順序示意，非實際位置。

個人旅行筆記，非官方資訊。
