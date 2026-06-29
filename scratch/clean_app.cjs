const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Reset to a clean string first?
// Wait, we need to make sure we don't double-replace things if we run it again.
// To make it idempotent or run on a clean slate, let's do the replacements.

// 1. Convert class=" to className="
content = content.replace(/ class=/g, ' className=');

// 2. Remove HTML comments <!-- -->
content = content.replace(/<!--.*?-->/g, '');

// 3. Fix unclosed <br> tags
content = content.replace(/<br>/g, '<br />');

// 4. Convert inline style="..." to style={{...}}
content = content.replace(/ style="([^"]*)"/g, (match, styleStr) => {
  const rules = styleStr.split(';').map(rule => rule.trim()).filter(Boolean);
  const camelRules = rules.map(rule => {
    let [key, val] = rule.split(':').map(s => s.trim());
    if (!key || !val) return null;
    
    // Camelcase key
    const camelKey = key.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
    
    // If it's a number, keep it as string if it has px or other units
    let safeVal = val;
    if (!isNaN(val)) {
      safeVal = Number(val);
    } else {
      safeVal = `'${val.replace(/'/g, "\\'")}'`;
    }
    return `${camelKey}: ${safeVal}`;
  }).filter(Boolean);
  
  return ` style={{ ${camelRules.join(', ')} }}`;
});

// 5. Convert specific attributes to CamelCase for React/JSX
const attrs = [
  'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule',
  'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-opacity',
  'fill-opacity', 'stop-color', 'stop-opacity', 'srcset', 'crossorigin',
  'autoplay', 'viewbox'
];

attrs.forEach(attr => {
  const camelAttr = attr.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
  const regex = new RegExp(` ${attr}=`, 'gi');
  content = content.replace(regex, ` ${camelAttr}=`);
});

// Fix srcset specifically if not caught
content = content.replace(/ srcset=/g, ' srcSet=');
content = content.replace(/ viewbox=/g, ' viewBox=');

// 6. Ensure img, input, and other self-closing tags are closed
content = content.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');

// Diagnostics: Count opening vs closing tags
const tags = ['div', 'a', 'span', 'svg', 'section', 'footer'];
tags.forEach(tag => {
  const openCount = (content.match(new RegExp(`<${tag}(\\s|>)`, 'g')) || []).length;
  const closeCount = (content.match(new RegExp(`</${tag}>`, 'g')) || []).length;
  console.log(`Tag <${tag}>: opened ${openCount} times, closed ${closeCount} times.`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('App.jsx converted and checked successfully!');
