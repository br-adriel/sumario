export default function joinDocs(prevDocs, fetchedDocs) {
  if (!prevDocs.length) return fetchedDocs;
  if (!fetchedDocs.length) return prevDocs;

  // verifica se está realizando a mesma query que a anterior
  if (
    prevDocs.some((item) => {
      item.key === fetchedDocs[0].key;
    })
  )
    return prevDocs;

  // verifica se já foram buscados todos os itens
  const notRepeated = [];
  for (let i = 0; i < fetchedDocs.length; i++) {
    if (prevDocs[0].key === fetchedDocs[i].key) break;
    notRepeated.push(fetchedDocs[i]);
  }
  return [...prevDocs, ...notRepeated];
}
