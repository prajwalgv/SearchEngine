const axios = require('axios');

const instance = axios.create({
    baseUrl: "https://cs-search-engine-demo.search.windows.net/indexes/index-search-engine-demo/docs"
});
instance.defaults.headers = {
    'api-key': 'okri7GJ0yp3HIeWLBbwVm9Px8TTNZOdlupmsrtRXygAzSeDu5Jet',
    'Content-Type': 'application/json'
}
export default instance;

