# Elegance Agency Website

A responsive React + Vite + Tailwind CSS website for Elegance Agency, using a luxury burgundy, gold and cream visual identity.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract this ZIP file.
2. Open the `elegance-agency-website` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Build for deployment
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

## Before publishing
- Check the contact number and WhatsApp number in `src/App.jsx`:
  - `PHONE_DISPLAY = '0700303393'`
  - `WHATSAPP_NUMBER = '254700303393'`
- Replace stock event images with real Elegance Agency photos when available.
- Add real testimonials and social links only when you have confirmed content.
- The inquiry form opens WhatsApp with a pre-filled message. The visitor must press **Send** in WhatsApp. It does not save inquiries to a database.
- The optional email field is included in the WhatsApp message; no email service is connected yet.

## Main files
- `src/App.jsx` — full website sections and interactions
- `src/index.css` — global styles and Tailwind layers
- `tailwind.config.js` — brand colours and fonts
- `index.html` — page title, description and font loading
