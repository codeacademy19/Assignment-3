const axios = require('axios');

const getPosts = async (url) => {
  const posts = await axios.get(url);
  // console.log(posts);
  return posts.data;
};
export default getPosts;
