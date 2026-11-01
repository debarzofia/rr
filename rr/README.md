# NET Caffe & Restaurant – Menu (Next.js)

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start   # production

## Photos
Put every food photo in `public/images/` (next to `net-logo.jpg`).
In `lib/menu-app.js`, each item has `img: "images/<file name>"` — the file name
must match exactly (including capitals and .jpg/.png).

## Edit the menu
Open `lib/menu-app.js`: items live in the `MENU` array
(look for `>>> ADD ITEMS HERE`). Contact links/phones are in the `CONTACT` object at the top.

## Files
- `app/globals.css` – all styles
- `app/markup.js`   – page structure
- `lib/menu-app.js` – menu data + behaviour
