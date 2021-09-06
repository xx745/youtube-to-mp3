## YouTube to MP3
[Node.js](https://nodejs.org/) app which converts YouTube videos to mp3 files.

## You can use GitPod to start contributing
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/xx745/youtube-to-mp3)

### Using locally
1. Install dependencies
    ```bash
    yarn
    ```
3. Start server
    ```bash
    yarn dev
    ```
2. Load `http://localhost:3000` in your browser

3. Depending on the file size conversion might take from few seconds to few hours.

### Running inside Docker ([Alpine image](https://hub.docker.com/_/alpine))
1. Build docker image - this is required only once
    ```bash
    make build
    ```
2. Run Docker container - this is required only once
    ```bash
    make run
    ```
4. Start Docker container (use after running `make run`)
    ```bash
    make start
    ```
4. Stop Docker container
    ```bash
    make stop
    ```
4. Enter containers bash
    ```bash
    make bash
    ```

Load `http://localhost:3000` in your browser
