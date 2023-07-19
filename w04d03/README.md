# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] All without refreshing the browser

### AJAX / AJAJ
* Asynchronous Javascript and XML (eXtensible Markup Language)
* use JS to make HTTP requests (instead of the browser)

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  method: 'GET',
  url: 'http://localhost:8001/tweets',
  success: (response) => {},
  error: (err) => {}
});

$.ajax({
  method: 'GET',
  url: 'http://localhost:8001/tweets'
}).then((response) => {})
  .catch((err) => {
    // send to an error logging service
    // show the user a nice message
  })
```


SPA (browser renders the page) client-side rendering
MPA (server renders out the page) server-side rendering















