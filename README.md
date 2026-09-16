# A Little Place · Just for You ♡

Open `index.html` in a modern browser. No framework, build step, server, or backend is needed.

## Make it yours

- Edit `SCRAPBOOK` at the top of `script.js` for her name, letters, little notes, reasons, and final message.
- Edit the `MEMORIES` array for photos, dates, titles, and captions. Included dates are examples.
- Add `images/memory1.jpg` through `images/memory7.jpg`, or use your own paths in `MEMORIES`.
- Add your song at `music/our-song.mp3`, or change `SCRAPBOOK.music`.
- Adjust the palette in `:root` at the top of `style.css`.

Missing photos display designed placeholders. Missing music displays a friendly message when Play is pressed. All rejected audio playback promises are handled. A browser may still log a missing local asset/network request; that is separate from a JavaScript error.

The site works offline, including the local desk illustration. Google Fonts are an optional visual enhancement; installed handwriting and system fonts serve as fallbacks without internet.

The intro opens with each page load. Sections use real anchor links, dialogs support Escape and restore focus, and motion follows the device's reduced-motion preference. Music plays only after pressing Play.

## Files

`index.html` — page structure · `style.css` — responsive design and animations · `script.js` — editable content and interactions · `images/` — desk illustration and your photographs · `music/` — your song.
