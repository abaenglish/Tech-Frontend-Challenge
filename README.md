# Tech-Frontend-Challenge

# Goals/Outcomes ✨
- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently
- Link to the source code, use your favorite repository manager (GitHub, GitLab, ...)
- Link to the deployed Demo, use your favorite static site hosting platform (surge, github-pages, now, ...)
- The app should run on any computer by running npm install , npm test and have a demo online.
- We'll evaluate the exercise by looking commits and test passed.

# Pre-requisites ✅
- Don’t forget to add your spotify id and secret to config.js file in order to connect with Spotify API and remember to not upload this data to the repository

# Requirements 📖
- Fetch and display *Released This Week* songs
  - Use the API path `new-releases`
- Fetch and display *Featured Playlists*
  - Use the API path `featured-playlists`
- Fetch and display *Browse* genres
  - Use the API path `categories`
 
- Loading state/UI *(optional, current UX is already clean)*

# Think about 💡
- Taking a look at the Spotify API documentation
- Do you resolve each API request one after the other or in parallel?
- Where do you make the API requests?
- How much logic do you offload out of the UI components?

# What's Already Been Done 🏁
- UI/UX for all elements, including previews (mobile responsive)
- A Spotify request helper (`makeRequest.js` o other library https://developer.spotify.com/documentation/web-api/libraries/)

# Screenshots 🌄

![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
![screenshot-mobile](https://puu.sh/GwPLS/0bcb566d23.png)

# Theoretical Part
- What is React JS?
- Why should we use ReactJS?
- What are the life stages of a component?
- How does ReactJS use "keys"?
- Is there a difference between "container component" and "presentation component"?
- Why are "synthetic events" used?
- What is an "arrow function"?
- What is React Redux?
