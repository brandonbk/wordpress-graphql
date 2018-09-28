# WordPress GraphQL Server

## Installation / Running
_Note:_ Requires YARN and Docker with compose.
1. Clone this repository
2. Create a `.env` file in the project root and set the appropriate variables (see below)
2. In the project root, run `yarn start`
3. The GraphQL API is now available on `http://localhost:5987/graphql`

### Environment Variables
```sh
API_URI=

# required only for writes
API_USERNAME=
API_PASSWORD=
```
See `src/env.js` for complete descriptions of each variable.

## Developing
To add package dependencies (e.g. `yarn add`) you should do so within the Docker container.
1. Run `yarn start`
2. Once the container is running, from another terminal run `yarn terminal` - you should now be inside the docker container
3. Run `yarn add [package-name]` or any other command from within the Docker terminal
