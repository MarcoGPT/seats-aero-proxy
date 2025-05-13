# Seats Aero Proxy (Vercel Serverless)

API intermediária para consultar disponibilidade de passagens no Seats.aero sem bloqueio de CORS.

## Endpoints

GET `/api/search`

### Parâmetros obrigatórios:
- `origin`: código IATA (ex: GRU)
- `destination`: código IATA (ex: JFK)
- `startDate`: data inicial (ex: 2025-06-01)
- `endDate`: data final (ex: 2025-06-10)

## Exemplo:

https://SEU-PROJETO.vercel.app/api/search?origin=GRU&destination=JFK&startDate=2025-06-01&endDate=2025-06-10
