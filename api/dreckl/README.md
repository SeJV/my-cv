# Path www.sebastian-vogt.dev/drecklapi
- For every route there is a GET, with params in query
- With POST: Params in body
## Authentication: /auth
**pin**: 4 digit Pin with sha256 in hex encrypted
## Abwesenheit: /abwesenheit
### GET /get 
Returns current "abwesenheits" info
### PUT /put
Query params: 
- from (ISO datetime or NULL)
- until (ISO datetime or NULL)
- title (String or NULL)
- description (String or NULL)
### POST /post
Params in body as JSON like **PUT**
### DELETE /delete
No params, sets any value of abwesenheit to null

## /countuser
### POST /post: 
- current timestamp gets stored 
### GET /get:
- with optional 'since' as js timestamp: 
