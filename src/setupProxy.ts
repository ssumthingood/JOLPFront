import { createProxyMiddleware, RequestHandler } from "http-proxy-middleware";

// // const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app: { use: (arg0: RequestHandler) => void; }){
    app.use(
        createProxyMiddleware('/api',{
            target:'https://fantasy.premierleague.com/api/bootstrap-static/',
            changeOrigin:true,
        })
    );
    // app.use(
    //     createProxyMiddleware('/socket.io',{
    //         target:'ws://fantasy.premierleague.com/api/bootstrap-static',
    //         changeOrigin:true,
    //         ws:true
    //     })
    // );
};