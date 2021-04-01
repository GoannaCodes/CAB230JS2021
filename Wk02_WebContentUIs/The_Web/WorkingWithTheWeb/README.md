## Application Layer
Application Layer Protocols define message formats and exchange rules unique to the application.
  - HTTP (Hypertext Transfer Protocol)
  - HTTPS (Secure Hypertext Transfer Protocol)
Application Layers rely on the Transport Layer 
  - TCP/IP (Transmission Control Protocol/Internet Protocol)
  - TLS/SSL (Transport Layer Security/Secure Sockets Layer)

## Packet Routing
Assign a range of IP addresses to each organisation
Others reserved for local networks, special purposes
  - Local Host: 127.0.0.1
  - Network Addresses: 131.181.0.0
  - Intranet Addresses
    - 10.0.0.0 ~ 0.225.225.255 `2^32`

## Domain Names
A mapping between a symbolic name and an IP address
  - www.qut.edu.au [131.181.196.203]
Resolved through Domain Name Servers (DNS)

## HTTP GET and POST Requests
A web client makes request via HTTP to a web server\
A web server receives and reponds to HTTP requests

GET
  - retrieve a resource, often a static web page
  - most common web request
POST
  - posting or sending some information
  - usual example is an HTML form
We later add security (HTTPS)

## Uniform Resource Locators (URL)
Identify where it is located and how to access it.\
General format:
`<scheme>:<scheme-specific-part>`

For example http://www.myserver.com:80/index.html
  - `http` is the scheme
  - `www.myserver.com` is the host
  - `80` is the port
  - `index.html` is the local resource name
