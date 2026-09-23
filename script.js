'use strict';

// ♥ PERSONALIZE YOUR SCRAPBOOK HERE.
// Change her name, your messages, and the music path in this one object.
// {name} in any message is replaced with girlfriendName.
const SCRAPBOOK = {
  girlfriendName: 'Sayang', // Change this to your girlfriend's name.
  music: 'music/our-song.mp3', // Put your own song at this path.
  introTitle: 'Hey, I made\nsomething for you.',
  introCopy: "It's nothing fancy...\nbut it's yours. ♡",
  introBottom: 'Good things are better with you ♡',
  welcomeTitle: 'Welcome, {name} ♡',
  welcomeCopy: "Thank you for being you.\nThis is a little place I made,\nfilled with some of unexlpainable feelings\nI'm so lucky to have you. ♡",
  welcomeSignature: 'Can you be my sayang?.',
  deskWhisper: 'You make life\nso much\nsweeter ♡',
  lettersPostscript: "No matter the moment,\nI'm always here for you. ♡",
  loveSticky: "I'm so lucky\nyou're you ♡",
  footerMain: 'A simple website, for my extraordinary you. ♡',
  footerCopy: 'Thank you for being the most\nbeautiful part of my story. ♡',
  secret: 'You found\nthe secret one 👀\n\nI love you more than\nthis website has bugs.',
  letters: [
    { title: 'When you miss me', color: '#f3c8c9', seal: '#c67e89', paragraphs: [
      '{name},',
      "If you're reading this, it probably means you miss me, and honestly, I probably miss you too.",
      "I just want you to know that no matter how far we are, awak selalu on my mind. You're a my happiness, and I'm so grateful for having you.",
      "Until we see each other again, remember — you're always with me, in my thoughts, in my heart, and in everything I do. ♡",
      'I miss you, always. ♡'
    ] },
    { title: "When you're sad", color: '#cdd1e3', seal: '#7b86af', paragraphs: [
      '{name},',
      "Some days feel heavy, and it's okay to let yourself feel them.",
      "If I can, I wrap you in the my hug, make you hot tea, and lay down with you until you felt a little softer.",
      "Take a little breath. this is the place untuk awak tenang kan diri.",
      "I'm here, through the cloudy days too. ♡"
    ] },
    { title: 'When you overthink', color: '#d9dec3', seal: '#8a9673', paragraphs: [
      '{name},',
      "I know your thoughts can get a little loud sometimes. Come back to this moment with me. Tenangkan diri. bernafas slowly.",
      "Sayang jangan sedih, gaduh macam mana pun kita, saya selalu back to you.",
      "I know you love me deeply, and please know that i love the way you love me.",
      "One thing at a time, my bucuk. ♡"
    ] },
    { title: 'When you feel unloved', color: '#e0c5df', seal: '#ac79aa', paragraphs: [
      '{name},',
      'If your heart needs a reminder today, let this be it: you matter so much to me.',
      "Not because of what you do for me. Because you're you.",
      'You are loved, even in the moments you forget. ♡'
    ] },
    { title: "When you can't sleep", color: '#f0d6bf', seal: '#c48e79', paragraphs: [
      '{name},',
      "If I beside you, I'd hold your hand and tell you about all the little things I'm looking forward to doing with you.",
      'Another coffee but tak boleh selalu. Another walk with nowhere to go.',
      "Rest your mind. Sweet dreams. ♡"
    ] },
    { title: 'When you need a reminder', color: '#f4d0b4', seal: '#c88970', paragraphs: [
      // '{name},',
      // "I'm proud of you. Of the way you keep trying, of the kindness you choose, and of all the little things you do",
      // 'I hope you give yourself a little of the gentleness you give everyone else.',
      // "My life is warmer and happier with you in it.",
      // "I'd choose you again and again and again. On the easy days, on the messy days, and on all the days we going through. ♡"
    ] }
  ],
  // notes: [
  //   'You make ordinary days feel special. ♡', "I'm really lucky to have you.",
  //   'You are one of my favourite parts of every day.', 'I hope you know how loved you are.',
  //   'Life feels a little softer with you in it.', "I'd still choose you.",
  //   'Thank you for being you.', 'You make my world a little brighter.'
  // ],
  // reasons: [
  //   'The way you get excited when telling me something', 'Your random voice notes',
  //   "How comfortable life feels when I'm with you", 'Your kindness, even in little things',
  //   'The way you care about the people you love', 'Your beautiful smile',
  //   'How you always try your best', 'The way you make ordinary days feel special',
  //   'You, just the way you are', 'And so much more... ♡'
  // ],
  // finalMessage: [
  //   "I don't always know how to say these things out loud.", 'So I made this instead.',
  //   'I hope whenever you come back here,', "you're reminded that somewhere in this world,",
  //   "there's someone who's really happy that you exist.", 'And that someone is me. ♡',
  //   'I love you. Always. ♡'
  // ]
};

// ♥ YOUR PHOTOS: change image paths, titles, dates, and captions here.
// The dates below are examples. Replace them with your real memories.
// Missing photos show a designed placeholder rather than a broken image.
const MEMORIES = [
  { image: 'images/memory1.jpg', title: 'Our first date', date: '12 Jan 2024', caption: 'The beginning of my favourite story. ♡', symbol: '☀' },
  { image: 'images/memory2.jpg', title: 'Coffee & you', date: '3 Feb 2024', caption: 'My favourite company, over one more cup.', symbol: '☕' },
  { image: 'images/memory3.jpg', title: 'That night', date: '14 Feb 2024', caption: 'A sky full of stars, and I was looking at you.', symbol: '☾' },
  { image: 'images/memory4.jpg', title: 'Silly moments', date: '20 Mar 2024', caption: 'The little laughs I wish I could bottle up.', symbol: '✿' },
  { image: 'images/memory5.jpg', title: 'You & me', date: 'Always', caption: 'Wherever we are, this is my favourite place.', symbol: '♡' },
  { image: 'images/memory6.jpg', title: 'Little things', date: 'Big happiness', caption: 'Nothing fancy. Everything I need.', symbol: '❀' },
  { image: 'images/memory7.jpg', title: 'Random days', date: 'Still special', caption: 'Even our ordinary days are worth keeping. ♡', symbol: '✧' }
];

const $ = id => document.getElementById(id);
const personal = text => text.replaceAll('{name}', SCRAPBOOK.girlfriendName);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const copyFields = { 'intro-title': 'introTitle', 'intro-copy': 'introCopy', 'intro-bottom': 'introBottom', 'welcome-title': 'welcomeTitle', 'welcome-copy': 'welcomeCopy', 'welcome-signature': 'welcomeSignature', 'desk-whisper': 'deskWhisper', 'letters-postscript': 'lettersPostscript', 'love-sticky': 'loveSticky', 'footer-main': 'footerMain', 'footer-copy': 'footerCopy', 'secret-message': 'secret' };
Object.entries(copyFields).forEach(([id, key]) => { $(id).textContent = personal(SCRAPBOOK[key]); });

// Intro: make the scrapbook accessible only after opening the cover.
$('open-site').addEventListener('click', () => {
  $('intro').classList.add('leaving');
  $('website').inert = false;
  document.body.classList.remove('intro-open');
  document.querySelector('.brand').focus({ preventScroll: true });
  setTimeout(() => { $('intro').hidden = true; }, reducedMotion.matches ? 0 : 1000);
});

// Native dialogs supply keyboard focus trapping and Escape-to-close.
let dialogTrigger = null;
function openDialog(dialog, trigger) {
  dialogTrigger = trigger || document.activeElement;
  dialog.showModal();
  document.body.classList.add('modal-open');
}
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    dialogTrigger?.focus({ preventScroll: true });
  });
});
$('letter-dialog').setAttribute('aria-labelledby', 'letter-title');
$('memory-dialog').setAttribute('aria-labelledby', 'lightbox-title');
$('secret-dialog').setAttribute('aria-labelledby', 'secret-message');

SCRAPBOOK.letters.forEach((letter, index) => {
  const button = document.createElement('button');
  button.className = 'envelope-button';
  button.style.setProperty('--env', letter.color);
  button.style.setProperty('--seal', letter.seal);
  button.setAttribute('aria-haspopup', 'dialog');
  button.innerHTML = '<span class="envelope" aria-hidden="true"><span class="envelope-flap"></span><span class="envelope-seal">♥</span></span><span></span>';
  button.lastElementChild.textContent = letter.title;
  button.addEventListener('click', () => {
    button.classList.add('opening');
    $('letter-title').textContent = `${letter.title}... ♡`;
    $('letter-content').replaceChildren(...letter.paragraphs.map(text => {
      const p = document.createElement('p'); p.textContent = personal(text); return p;
    }));
    openDialog($('letter-dialog'), button);
    setTimeout(() => button.classList.remove('opening'), 450);
  });
  $('envelope-grid').append(button);
});

let previousNote = -1;
let picking = false;
$('pick-note').addEventListener('click', () => {
  if (picking || !SCRAPBOOK.notes.length) return;
  picking = true;
  const candidates = SCRAPBOOK.notes.map((_, i) => i).filter(i => i !== previousNote);
  const index = candidates.length ? candidates[Math.floor(Math.random() * candidates.length)] : 0;
  previousNote = index;
  $('jar').classList.add('picking');
  $('pick-note').disabled = true;
  setTimeout(() => {
    $('note-message').textContent = personal(SCRAPBOOK.notes[index]);
    $('picked-note').hidden = false;
    $('picked-note').getAnimations().forEach(animation => { animation.cancel(); animation.play(); });
    $('jar').classList.remove('picking');
    $('pick-note').textContent = 'Another one ♡';
    $('pick-note').disabled = false;
    picking = false;
  }, reducedMotion.matches ? 0 : 600);
});

function placeholder(memory) {
  const div = document.createElement('div');
  div.className = 'memory-placeholder';
  div.setAttribute('role', 'img');
  div.setAttribute('aria-label', `${memory.title} — a place for your photo`);
  const icon = document.createElement('span'); icon.textContent = memory.symbol; icon.setAttribute('aria-hidden', 'true');
  const label = document.createElement('small'); label.textContent = 'a place for our moment';
  div.append(icon, label); return div;
}
function memoryImage(memory, container) {
  const image = new Image();
  image.alt = memory.title;
  image.addEventListener('error', () => { container.replaceChildren(placeholder(memory)); }, { once: true });
  image.src = memory.image;
  container.replaceChildren(image);
}
MEMORIES.forEach(memory => {
  const button = document.createElement('button'); button.className = 'polaroid';
  button.style.setProperty('--rotation', `${(Math.random() * 5 - 2.5).toFixed(1)}deg`);
  button.setAttribute('aria-label', `View memory: ${memory.title}`);
  button.setAttribute('aria-haspopup', 'dialog');
  const photo = document.createElement('div'); photo.className = 'memory-image'; memoryImage(memory, photo);
  const title = document.createElement('h3'); title.textContent = memory.title;
  const date = document.createElement('p'); date.className = 'memory-date'; date.textContent = memory.date;
  button.append(photo, title, date);
  button.addEventListener('click', () => {
    memoryImage(memory, $('lightbox-image'));
    $('lightbox-title').textContent = memory.title;
    $('lightbox-date').textContent = memory.date;
    $('lightbox-caption').textContent = personal(memory.caption);
    openDialog($('memory-dialog'), button);
  });
  $('memory-grid').append(button);
});
const future = document.createElement('div'); future.className = 'polaroid future-polaroid';
future.style.setProperty('--rotation', '-2deg');
future.innerHTML = '<div><span aria-hidden="true">+</span><p>More memories<br>to come ♡</p></div>';
$('memory-grid').append(future);

SCRAPBOOK.reasons.forEach(reason => {
  const row = document.createElement('div'); row.className = 'love-row reveal';
  const heart = document.createElement('span'); heart.textContent = '♥'; heart.setAttribute('aria-hidden', 'true');
  const text = document.createElement('p'); text.textContent = personal(reason);
  row.append(heart, text); $('love-list').append(row);
});

// Reveal each row as it enters the viewport, with a no-observer fallback.
if ('IntersectionObserver' in window) {
  document.body.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll('nav a').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-10% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main>section').forEach(section => navObserver.observe(section));
}

$('show-final').addEventListener('click', () => {
  $('last-invitation').hidden = true;
  $('last').classList.add('finished');
  $('final-message').replaceChildren(...SCRAPBOOK.finalMessage.map((line, index) => {
    const p = document.createElement('p'); p.textContent = personal(line); p.style.setProperty('--delay', `${index * 1.15}s`); return p;
  }));
  $('final-message').hidden = false;
  $('final-message').tabIndex = -1;
  $('final-message').focus({ preventScroll: true });
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('span'); heart.textContent = '♥';
    // Keep the glowing hearts at the edges so the message stays readable.
    heart.style.left = `${i % 2 ? 85 + Math.random() * 10 : Math.random() * 12}%`;
    heart.style.top = `${20 + Math.random() * 75}%`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.fontSize = `${16 + Math.random() * 17}px`;
    $('glowing-hearts').append(heart);
  }
});
$('secret-heart').addEventListener('click', event => openDialog($('secret-dialog'), event.currentTarget));

// Audio loads only when Play is pressed. Missing/unsupported audio is caught.
const song = $('song');
let sourceSet = false;
song.volume = 0.5;
function setPlayer(open) {
  $('music-player').hidden = !open;
  $('music-toggle').setAttribute('aria-expanded', String(open));
  $('music-toggle').setAttribute('aria-label', `${open ? 'Close' : 'Open'} music player`);
}
$('music-toggle').addEventListener('click', () => setPlayer($('music-player').hidden));
$('close-player').addEventListener('click', () => { setPlayer(false); $('music-toggle').focus(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('music-player').hidden) { setPlayer(false); $('music-toggle').focus(); } });
document.addEventListener('click', event => { if (!$('music-player').hidden && !$('music-player').contains(event.target) && !$('music-toggle').contains(event.target)) setPlayer(false); });
function audioUnavailable() {
  $('music-status').textContent = 'Our song is waiting to be added. ♡';
  updatePlayButton();
}
function updatePlayButton() {
  $('play-song').textContent = song.paused ? '▶' : 'Ⅱ';
  $('play-song').setAttribute('aria-label', song.paused ? 'Play song' : 'Pause song');
  $('music-toggle').classList.toggle('playing', !song.paused);
}
$('play-song').addEventListener('click', async () => {
  if (!song.paused) { song.pause(); return; }
  if (!sourceSet) { song.src = SCRAPBOOK.music; sourceSet = true; }
  try { await song.play(); $('music-status').textContent = 'Because everything sounds better with you ♡'; }
  catch { audioUnavailable(); }
});
song.addEventListener('error', audioUnavailable);
song.addEventListener('play', updatePlayButton);
song.addEventListener('pause', updatePlayButton);
function timeLabel(seconds) { if (!Number.isFinite(seconds)) return '0:00'; return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`; }
song.addEventListener('loadedmetadata', () => { $('duration').textContent = timeLabel(song.duration); });
song.addEventListener('timeupdate', () => {
  $('current-time').textContent = timeLabel(song.currentTime);
  $('song-progress').value = Number.isFinite(song.duration) && song.duration > 0 ? song.currentTime / song.duration * 100 : 0;
});
$('song-progress').addEventListener('input', event => { if (Number.isFinite(song.duration) && song.duration > 0) song.currentTime = Number(event.target.value) / 100 * song.duration; else event.target.value = 0; });
function updateMute() { const muted = song.muted || song.volume === 0; $('mute-song').textContent = muted ? '×' : '♪'; $('mute-song').setAttribute('aria-label', muted ? 'Unmute song' : 'Mute song'); }
$('volume').addEventListener('input', event => { song.volume = Number(event.target.value); song.muted = false; updateMute(); });
$('mute-song').addEventListener('click', () => { if (song.volume === 0) { song.volume = 0.5; $('volume').value = 0.5; song.muted = false; } else song.muted = !song.muted; updateMute(); });
