addEventListener('fetch', (event) => {
  const response = new Response('hello world', {
    headers: { 'Content-Type': 'text/plain' },
  })
  event.respondWith(response)
})
