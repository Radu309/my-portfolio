// Renders <App /> to static HTML and injects it into dist/index.html after `vite build`,
// so crawlers and the first paint get real content instead of an empty #root.
import { readFile, writeFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const indexPath = new URL('../dist/index.html', import.meta.url)
const emptyRoot = '<div id="root"></div>'

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const html = await readFile(indexPath, 'utf8')

  if (!html.includes(emptyRoot)) {
    throw new Error(`Could not find ${emptyRoot} in dist/index.html`)
  }

  const markup = renderToString(createElement(App))
  await writeFile(indexPath, html.replace(emptyRoot, () => `<div id="root">${markup}</div>`))
  console.log(`Prerendered dist/index.html (${markup.length} chars)`)
} finally {
  await vite.close()
}
