### Response Examples from Mozilla Site
## Simple webpage grab - French preferred
```
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

## Posting data from a form
```
POST /cpmtact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-length: 64
Content-type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20%of%20your%20catalogue
```

## Successful web page load
```
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept Ranges: bytes
Content-LengthL 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```

## 404 page not found response
```
HTTP/1.1 404 Not Found
Date: Sat, 09 Oct 2010 14:33:02 GMT
Server: Apache
Last-Modified: Tue, 01 May 2007 14:24:39 GMT
ETag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
Accept Ranges: bytes
Content-LengthL 10732
Content-Type: text/html

<!DOCTYPE html... (contains a site-customised page helping the user to find content)
```
