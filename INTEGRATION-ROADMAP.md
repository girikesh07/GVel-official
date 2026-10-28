# GVel — integration roadmap

## Included in this package
- Uploaded GVel square app icon and wide wordmark copied to `public/assets/`.
- Friend's HTML app remains at `public/gvel-app.html`, loaded by the Next.js homepage.
- Starter festival data schema at `data/festivals.json`.
- Existing HTML includes Leaflet map UI and demo planner interactions.

## Not yet live (requires implementation and/or credentials)
1. **Real-time festival calendar** — ingest official tourism/event sources, store normalized dates in a database, display source and last-checked timestamp. `data/festivals.json` is a schema/example, not a live feed.
2. **Actual route geometry** — connect the route form to a routing provider (e.g. OSRM for a public prototype or a hosted routing service); handle geocoding, travel mode, errors and rate limits. A Leaflet map by itself does not calculate routes.
3. **Live hotel prices and booking** — use a licensed hotel inventory/affiliate API and show currency, timestamp, taxes, cancellation terms, and outbound booking URL. No hotel price API is connected in this starter.
4. **Hospitals and petrol pumps** — query OpenStreetMap Overpass or another provider for nearby POIs, with loading/error states and attribution. Existing pins/demo content must not be described as verified live data.
5. **Real user accounts** — implement server-side auth, password hashing or a trusted auth provider, session protection, validation, and database storage. The HTML login is only a demo and must not collect real credentials.
6. **External booking APIs** — each provider requires its own API agreement, keys, server-side proxy, rate limiting, and compliant affiliate links. Keep secret keys out of browser code and GitHub.

## Recommended implementation order
1. Brand assets + responsive homepage (done in this starter).
2. Festival data model and official-source verification.
3. Geocoding + real route API and Leaflet route line.
4. Live POI layers (hospital, petrol pump, stay) with attribution.
5. Hotel availability/prices and external booking links.
6. Production authentication and database.
7. Deployment, monitoring, privacy policy, and API cost/rate-limit controls.

## Run
```bash
npm install
npm run dev
```
Then open http://localhost:3000.
