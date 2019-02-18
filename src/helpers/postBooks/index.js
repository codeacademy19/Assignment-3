const axios = require('axios');

const getPosts = async () => {
  const posts = await axios.post('http://localhost:7000/Books');
  // console.log(posts);
  return posts.data;
};
export default getPosts;
