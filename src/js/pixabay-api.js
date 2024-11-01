const API_KEY = "46806668-35f52dba5a140225900df36e0";
const list = document.querySelector(".list");

const params = new URLSearchParams({
    key: API_KEY,
    q: "",               
    image_type: "photo",  
    orientation: "horizontal",
    safesearch: "true"
});

const fetchImages = (query) => {
  params.set('q', query); 

  return fetch(`https://pixabay.com/api/?${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    })
    .then((response) => {
      if (response.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }

      return response.hits.map(hit => ({
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        tags: hit.tags,
        likes: hit.likes,
        views: hit.views,
        comments: hit.comments,
        downloads: hit.downloads,
      }));
    })
    .catch((error) => { throw error });
};

export { fetchImages };
