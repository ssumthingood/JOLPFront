import https from 'https-browserify'

const agent = new https.Agent({  
rejectUnauthorized: false
});

export default agent;