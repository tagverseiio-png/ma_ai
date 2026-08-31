const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');

// Files to process (all route .tsx files except __root.tsx and index.tsx which are already done)
const files = fs.readdirSync(routesDir)
  .filter(f => f.endsWith('.tsx') && f !== '__root.tsx' && f !== 'index.tsx');

const replacements = [
  // Background colors
  [/\bbg-\[#F4F4F0\]/g, 'bg-[var(--site-bg)]'],
  [/\bbg-\[#F4F4F0\]\/50/g, 'bg-[var(--site-bg)]/50'],
  
  // Text colors - be careful not to replace inside hover states with specific intent
  [/\btext-\[#111111\]/g, 'text-[var(--site-fg)]'],
  [/\btext-gray-600/g, 'text-[var(--site-muted)]'],
  [/\btext-gray-500/g, 'text-[var(--site-muted)]'],
  
  // Border colors
  [/\bborder-black\/10/g, 'border-[var(--site-border)]'],
  [/\bborder-black\/20/g, 'border-[var(--site-border)]'],
  
  // Input/card backgrounds
  [/\bbg-white\/5/g, 'bg-[var(--site-surface)]/5'],
  [/\bbg-white(?!\s*\/)/g, 'bg-[var(--site-surface)]'],
  
  // Placeholder text
  [/\bplaceholder:text-gray-600/g, 'placeholder:text-[var(--site-muted)]'],
  [/\bplaceholder:text-gray-500/g, 'placeholder:text-[var(--site-muted)]'],
];

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  for (const [pattern, replacement] of replacements) {
    content = content.replace(pattern, replacement);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${file}`);
}

console.log('Done!');
