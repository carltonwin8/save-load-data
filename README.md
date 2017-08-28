# Knockout And Hapi Test

Start the server first and then the client via:
`npm run watchNserve`

# Port

| Port | Details |
| --- | --- |
| 4000 | Hapi back end |
| 5000 | Caddy serves dist/ and is proxy to Hapi for the api/ route |
| 3000 | Browser-sync proxy to caddy server for hot reloads on code changes |
