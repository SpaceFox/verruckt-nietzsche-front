export async function getMorale(situation) {
  const url = new URL('https://nietzsche.spacefox.fr/verruckt-nietzsche/morale');
  // const url = new URL('http://localhost:8081/verruckt-nietzsche/morale');
  url.searchParams.append('s', situation);
  const response = await fetch(url.toString());
  return response.json();
}

export async function postOpinion(correct, requestId) {
  const url = new URL('https://nietzsche.spacefox.fr/verruckt-nietzsche/opinion');
  // const url = new URL('http://localhost:8081/verruckt-nietzsche/opinion');
  await fetch(url.toString(), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ correct, requestId }),
  });
}
