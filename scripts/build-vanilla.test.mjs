import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { extractTokens, prefixTokens, buildCss } from './build-vanilla.mjs';
import { readFileSync } from 'node:fs';

const indexCss = readFileSync(new URL('../src/index.css', import.meta.url), 'utf-8');

describe('extractTokens', () => {
  it('extracts :root block', () => {
    const { root } = extractTokens(indexCss);
    assert.ok(root.includes('--primary: #4D339A'));
    assert.ok(root.includes('--chart-1: #0369A1'));
  });

  it('extracts .dark block', () => {
    const { dark } = extractTokens(indexCss);
    assert.ok(dark.includes('--primary: #A683D0'));
    assert.ok(dark.includes('--background: #18181b'));
  });

  it('excludes @theme inline block', () => {
    const { root, dark } = extractTokens(indexCss);
    assert.ok(!root.includes('--color-background'));
    assert.ok(!root.includes('--color-primary'));
  });

  it('excludes @layer base block', () => {
    const { root, dark } = extractTokens(indexCss);
    const combined = root + dark;
    assert.ok(!combined.includes('@apply'));
  });
});

describe('prefixTokens', () => {
  it('prefixes token declarations with ciq-', () => {
    const input = '  --primary: #4D339A;\n  --background: #ffffff;';
    const output = prefixTokens(input);
    assert.ok(output.includes('--ciq-primary: #4D339A'));
    assert.ok(output.includes('--ciq-background: #ffffff'));
  });

  it('rewrites var() references to use ciq- prefix', () => {
    const input = '  --severity-high: var(--destructive);';
    const output = prefixTokens(input);
    assert.ok(output.includes('--ciq-severity-high: var(--ciq-destructive)'));
  });

  it('handles rgba values without mangling them', () => {
    const input = '  --border: rgba(255, 255, 255, 0.1);';
    const output = prefixTokens(input);
    assert.ok(output.includes('--ciq-border: rgba(255, 255, 255, 0.1)'));
  });

  it('excludes sidebar tokens', () => {
    const input = '  --sidebar: #faf9fc;\n  --sidebar-foreground: #27272a;\n  --primary: #4D339A;';
    const output = prefixTokens(input);
    assert.ok(!output.includes('--ciq-sidebar'));
    assert.ok(output.includes('--ciq-primary'));
  });
});

describe('buildCss', () => {
  it('includes Google Fonts import at the top', () => {
    const css = buildCss(indexCss, '/* components */');
    assert.ok(css.startsWith('@import url('));
    assert.ok(css.includes('Onest'));
    assert.ok(css.includes('Inter'));
  });

  it('uses .ciq-dark selector instead of .dark', () => {
    const css = buildCss(indexCss, '/* components */');
    assert.ok(css.includes('.ciq-dark'));
    assert.ok(!css.includes('\n.dark {'));
  });

  it('includes radius scale from @theme inline', () => {
    const css = buildCss(indexCss, '/* components */');
    assert.ok(css.includes('--ciq-radius-lg: var(--ciq-radius)'));
    assert.ok(css.includes('--ciq-radius-xl: calc(var(--ciq-radius) + 4px)'));
    assert.ok(css.includes('--ciq-radius-sm: calc(var(--ciq-radius) - 4px)'));
  });

  it('appends component CSS after tokens', () => {
    const css = buildCss(indexCss, '.ciq-card { border: 1px solid var(--ciq-border); }');
    assert.ok(css.includes('.ciq-card'));
    const tokenEnd = css.indexOf('}', css.lastIndexOf('.ciq-dark'));
    const componentStart = css.indexOf('.ciq-card');
    assert.ok(componentStart > tokenEnd);
  });
});
