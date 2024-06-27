export const fetchPostsApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  };

export const fetchPhostosApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return response.json();
  };

export const fetchCommentsApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    return response.json();
  };

  export const UnsplashPhostosApi = async () => {
    const response = await fetch('https://api.unsplash.com/search/photos?page=2&query=office&client_id=Y8nXuEhRp-YY2NJ5GyjP__SNkqukcR6_l6ZwWFJe6qI');
    const data = await response.json();
    return data.results.map(photo => ({
      id: photo.id,
      url: photo.urls.raw,
      description: photo.description,
      profile: photo.user.profile_image.large,
      profile_image: photo.user.profile_image.large,
      name : photo.user.name,
      username : photo.user.username,
      date : photo.updated_at, 
      likes : photo.likes,
      bio : photo.user.bio,
      views : photo.user.likes,
      location : photo.user.location
    }));
  };