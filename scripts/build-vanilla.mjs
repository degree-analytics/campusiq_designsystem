import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const GOOGLE_FONTS = `@import url('https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');`;

/**
 * Extract the contents of a CSS block by regex pattern using brace-counting.
 * Returns the text between the opening and closing brace (exclusive).
 */
function extractBlock(css, selectorPattern) {
  const match = selectorPattern.exec(css);
  if (!match) return '';

  let depth = 0;
  let start = -1;
  let end = -1;

  for (let i = match.index; i < css.length; i++) {
    if (css[i] === '{') {
      depth++;
      if (depth === 1) start = i + 1;
    } else if (css[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }

  if (start === -1 || end === -1) return '';
  return css.slice(start, end);
}

export function extractTokens(css) {
  return {
    root: extractBlock(css, /:root\s*\{/),
    dark: extractBlock(css, /\.dark\s*\{/),
  };
}

export function prefixTokens(block) {
  return block
    .split('\n')
    .filter(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('--sidebar')) return false;
      return true;
    })
    .map(line => {
      // Prefix declarations: --foo: value → --ciq-foo: value
      let result = line.replace(/--(?!ciq-)([\w-]+)(\s*:\s*)/g, '--ciq-$1$2');
      // Rewrite var(--foo) → var(--ciq-foo) but not var(--ciq-foo) (already prefixed)
      result = result.replace(/var\(--(?!ciq-)([\w-]+)\)/g, 'var(--ciq-$1)');
      return result;
    })
    .join('\n');
}

export function buildCss(indexCss, componentsCss) {
  const { root, dark } = extractTokens(indexCss);
  const prefixedRoot = prefixTokens(root);
  const prefixedDark = prefixTokens(dark);

  return [
    GOOGLE_FONTS,
    ``,
    `/* CampusIQ Design System — campusiq-ui.css */`,
    `/* Auto-generated tokens from campusiq_designsystem/src/index.css */`,
    `/* Do not edit token blocks directly — run scripts/build-vanilla.mjs to regenerate */`,
    ``,
    `:root {`,
    `  /* Font families (not in index.css — defined by brand guide) */`,
    `  --ciq-font-display: 'Onest', system-ui, sans-serif;`,
    `  --ciq-font-body: 'Inter', system-ui, sans-serif;`,
    ``,
    `  /* Radius scale (from @theme inline — not in :root) */`,
    `  --ciq-radius-sm: calc(var(--ciq-radius) - 4px);`,
    `  --ciq-radius-md: calc(var(--ciq-radius) - 2px);`,
    `  --ciq-radius-lg: var(--ciq-radius);`,
    `  --ciq-radius-xl: calc(var(--ciq-radius) + 4px);`,
    `  --ciq-radius-2xl: calc(var(--ciq-radius) + 8px);`,
    `  --ciq-radius-3xl: calc(var(--ciq-radius) + 12px);`,
    `  --ciq-radius-4xl: calc(var(--ciq-radius) + 16px);`,
    ``,
    prefixedRoot,
    `}`,
    ``,
    `.ciq-dark {`,
    prefixedDark,
    `}`,
    ``,
    `/* ===== Component Classes ===== */`,
    ``,
    componentsCss,
  ].join('\n');
}

export function buildDesignMd(proseSource) {
  return proseSource;
}

// CLI entry point
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const indexCss = readFileSync(join(ROOT, 'src/index.css'), 'utf-8');

  let componentsCss = '';
  try {
    componentsCss = readFileSync(join(ROOT, 'src/vanilla/components.css'), 'utf-8');
  } catch {
    console.warn('Warning: src/vanilla/components.css not found — generating tokens only');
  }

  let designMd = '';
  try {
    designMd = readFileSync(join(ROOT, 'src/vanilla/DESIGN.md'), 'utf-8');
  } catch {
    console.warn('Warning: src/vanilla/DESIGN.md not found — skipping DESIGN.md generation');
  }

  mkdirSync(join(ROOT, 'dist'), { recursive: true });
  writeFileSync(join(ROOT, 'dist/campusiq-ui.css'), buildCss(indexCss, componentsCss));
  console.log('✓ dist/campusiq-ui.css');

  if (designMd) {
    writeFileSync(join(ROOT, 'dist/DESIGN.md'), buildDesignMd(designMd));
    console.log('✓ dist/DESIGN.md');
  }
}
