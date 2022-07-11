export async function getParts(type, query) {
  let params = {};

  if (type) {
    params = { type };
  }

  if (query) {
    params = { ...params, query };
  }

  const res = await fetch(`http://localhost:8081/store/parts?${new URLSearchParams(params)}`);

  return await res.json();
}

export async function getPartTypes() {
  const res = await fetch('http://localhost:8081/store/part-types');
  return await res.json();
}
