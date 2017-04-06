import $ from 'jquery';


export function searchFlickr(text) {
  const api = 'https://api.flickr.com/services/rest/?method=flickr.photos.search';
  const key = '6e6290dd516607f3d00e0f94b929d2af';
  const format = 'json';
  const search = text || 'cat';
  const extras = 'url_z';
  const request = `${api}&api_key=${key}&format=${format}&nojsoncallback=1&text=${search}&extras=${extras}`;
  fetch(request).then(response => {

  })
}