This is a very simple Chrome based WebRTC experiment project. 

To start, 

* run the coordinate WebSocket ICE server by 

    $ cd websocketServer
    $ node server.js
    
* run the HTTP server for serving the testpage

    $ cd httpServer
    $ node server.js

* use the latest Chrome or the self build Chrome to browser http://localhost:8000

NOTE:

Because the WebSocket server is so naive that it can only serve two peers at the same time. So coordinate with your testing partner to make the experiment go smooth. :)

If you want to set up your own stun server, you might find this http://www.stunprotocol.org/ useful. 