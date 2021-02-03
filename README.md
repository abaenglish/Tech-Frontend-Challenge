# Tech-Frontend-Challenge

# Goals/Outcomes ✨
- To test knowledge of consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently
- Link to the source code, use your favorite repository manager (GitHub, GitLab, ...)
- Link to the deployed Demo, use your favorite static site hosting platform (surge, github-pages, now, ...)
- The app should run on any computer by running npm install , npm test and have a demo online.
- We'll evaluate the exercise by looking commits and test passed.

# Pre-requisites ✅
- Add your Spotify client ID & secret to `config.js`
  - Note. **Never add this type of config to version control. This would usually come from your build server.**

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
- A Spotify request helper (`makeRequest.js`)

# Screenshots 🌄

![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
![screenshot-mobile](https://puu.sh/GwPLS/0bcb566d23.png)

# Theoretical Part
- ¿Qué es React JS?
- ¿Por qué deberíamos utilizar ReactJS?
- ¿Cuáles son las etapas de vida de un componente?
- ¿Cómo utilizar ReactJS las "claves"?
- ¿Existe alguna diferencia entre "componente contenedor" y "componente de presentación"?
- ¿Para qué se utilizan los "eventos sintéticos"?
- ¿Qué es una "función de flecha"?
- ¿Qué es React Redux?
