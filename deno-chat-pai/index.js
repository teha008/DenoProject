addEventListener('fetch', (event) => {
  const response = new Response('헬로 월드', {
    headers: { 'Content-Type': 'text/plain' },
  })
  event.respondWith(response)
})
