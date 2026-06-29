const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Convert class=" to className="
content = content.replace(/ class=/g, ' className=');

// 2. Remove HTML comments <!-- -->
content = content.replace(/<!--.*?-->/g, '');

// 3. Convert inline style="..." to style={{...}}
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

// 4. Convert specific attributes to CamelCase for React/JSX
const attrs = [
  'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule',
  'stroke-miterlimit', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-opacity',
  'fill-opacity', 'stop-color', 'stop-opacity', 'srcset', 'crossorigin',
  'autoplay', 'viewbox'
];

attrs.forEach(attr => {
  const camelAttr = attr.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
  // Replace attributes (e.g. stroke-width= to strokeWidth=)
  const regex = new RegExp(` ${attr}=`, 'gi');
  content = content.replace(regex, ` ${camelAttr}=`);
});

// Fix srcset specifically if not caught
content = content.replace(/ srcset=/g, ' srcSet=');
content = content.replace(/ viewbox=/g, ' viewBox=');

// 5. Ensure img, input, and other self-closing tags are closed
// Let's do a basic fix for <img ...> tags not closed with />
content = content.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');

fs.writeFileSync(filePath, content, 'utf8');
console.log('App.jsx converted successfully!');
