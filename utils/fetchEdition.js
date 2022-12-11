export default async function fecthEdition(url) {
  const res = await fetch(url);
  const json = await res.json();
  if (json.languages) {
    json.languages = await Promise.all(
      json.languages.map(async (lang) => {
        const response = await fetch(`https://openlibrary.org${lang.key}.json`);
        const result = await response.json();
        return result.name_translated['pt-br'];
      })
    );
  }
  if (json.authors) {
    json.authors = await Promise.all(
      json.authors.map(async (author) => {
        const response = await fetch(
          `https://openlibrary.org${author.key}.json`
        );
        const result = await response.json();
        if (result.photos) {
          const fotos = result.photos.filter((imagem) => imagem !== -1);
          result.photos = fotos.length ? fotos : undefined;
        }
        return result;
      })
    );
  }
  if (json.covers) {
    const capas = json.covers.filter((imagem) => imagem !== -1);
    json.covers = capas.length ? capas : undefined;
  }
  return json;
}
