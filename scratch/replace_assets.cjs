const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace the circular avatar image in the profile block with a stylized monogram
const rawAvatar = /<img[^>]*?alt="me"[^>]*?class="bg-neutral-700[^>]*?>/i;
content = content.replace(rawAvatar, `
<div className="bg-gradient-to-br from-[#00bcff] to-[#006680] rounded-full h-20 w-20 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-cyan-950/50">
  YU
</div>
`);

// 2. Replace the verification icon next to Yerassyl Unerbek
const rawVerify = /<img[^>]*?alt="me"[^>]*?class="h-5 w-5 object-cover"[^>]*?>/i;
content = content.replace(rawVerify, `
<svg className="h-5 w-5 text-[#00bcff] fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
</svg>
`);

// 3. Replace skills image icons with high-end CSS colored dots (GitHub/Linear-style)
const skillColors = {
  'React.js': 'bg-cyan-400',
  'TypeScript': 'bg-blue-500',
  'tailwindcss': 'bg-teal-400',
  'Nest.js': 'bg-red-500',
  'Redux': 'bg-purple-500',
  'HTML': 'bg-orange-500',
  'CSS': 'bg-blue-400',
  'Express.js': 'bg-neutral-400',
  'Next.js': 'bg-white',
  'Framer Motion': 'bg-pink-500',
  'Git': 'bg-orange-600',
  'PostgreSQL': 'bg-blue-600',
  'MongoDB': 'bg-green-500',
  'docker': 'bg-sky-500',
  'Java': 'bg-amber-600',
  'React Native': 'bg-cyan-500'
};

Object.entries(skillColors).forEach(([name, colorClass]) => {
  // Matches <img class="h-5 w-auto" alt="React.js" src="./skills/react.png" /> followed by the text name
  const regex = new RegExp(`<img[^>]*?alt="${name.replace('.', '\\.')}"[^>]*?\\/>`, 'gi');
  content = content.replace(regex, `<span className="w-2.5 h-2.5 rounded-full ${colorClass} shrink-0"></span>`);
});

// 4. Replace carousel images with premium card gradients
const projectGradients = {
  'SED Market': { from: 'from-emerald-950', to: 'to-neutral-900', desc: 'E-Commerce Portal' },
  'dinen': { from: 'from-indigo-950', to: 'to-neutral-900', desc: 'Delivery Network' },
  'Flood Panel': { from: 'from-rose-950', to: 'to-neutral-900', desc: 'Control Center' },
  'Flood': { from: 'from-teal-950', to: 'to-neutral-900', desc: 'Analytics Engine' },
  'SuperApp': { from: 'from-purple-950', to: 'to-neutral-900', desc: 'Multi-tool OS' },
  'Contester': { from: 'from-amber-950', to: 'to-neutral-900', desc: 'Online Judge' },
  'serpin': { from: 'from-sky-950', to: 'to-neutral-900', desc: 'LMS Platform' }
};

Object.entries(projectGradients).forEach(([name, grad]) => {
  const regex = new RegExp(`<img[^>]*?alt="${name}"[^>]*?\\/>`, 'gi');
  content = content.replace(regex, `
  <div className="mt-3 w-56 h-32 rounded-xl bg-gradient-to-br ${grad.from} ${grad.to} border border-neutral-800 flex flex-col justify-center items-center p-3 text-center shadow-lg hover:border-neutral-700 transition-all duration-300">
    <span className="text-white text-sm font-bold tracking-tight">${name}</span>
    <span className="text-neutral-500 text-[10px] mt-1 uppercase tracking-wider font-semibold">${grad.desc}</span>
  </div>
  `);
});

// 5. Replace other missing icons like inside Career card with a clean vector briefcase icon
const rawCareerIcon = /<img[^>]*?alt="Professional[^>]*?>/i;
content = content.replace(rawCareerIcon, `
<svg className="h-5 w-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>
`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('App.jsx assets replaced successfully!');
