# My Portfolio
Technologies: `React`

Here are the commands/configs used:
- create React App:
    ```
    npx create-react-app my-portfolio
    ```
- Install `gh-pages`:
    ```
    npm install gh-pages --save-dev
    ```
- Add these script to `package.json`:
    - Under `scripts` section:
      ```
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
      ```
    - at the top level (after "version"):
      ```
      "homepage": "https://<your-username>.github.io/<repository-name>",
      ```
- Deploy to Github Pages:
    ```
    npm run deploy
    ```