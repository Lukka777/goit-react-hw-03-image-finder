const API_KEY = "24332091-bbc201ebf865e6ba9d783395a";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImage(searchQuery, page) {
  const response = await fetch(
    `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`
  );
 const data = await response.json();
 return data.hits
}
