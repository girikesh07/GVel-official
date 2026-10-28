# GVel integrated prototype

## Run locally
1. Install Node.js LTS and Git if needed.
2. Open this `gvel` folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Visit http://localhost:3000

## Included in this iteration
- The supplied GVel icon and wordmark are used on the login screen, header and favicon.
- Original responsive travel app UI is preserved in `public/gvel-app.html`.
- Route search uses Nominatim geocoding + OSRM public driving-route data and draws the route on Leaflet/OpenStreetMap.
- Planner nearby pins query OpenStreetMap's Overpass service for mapped hospitals, fuel stations, hotels and hostels.
- Festival records are stored in `window.FESTIVAL_EVENTS` and rendered as date-sorted cards. Dates are a starter dataset, not a verified live official calendar feed.
- Hotel/hostel links lead to provider sites; prices are not fetched live inside GVel yet.

## Important limitations
- Public OSM/OSRM/Overpass endpoints can throttle requests, have incomplete records, or be temporarily unavailable. Routing is not live-traffic navigation.
- Account screen in the supplied HTML is a demo UI only; it does not create a secure account or authenticate a user. Do not use real passwords or sensitive information. Production authentication needs a backend/provider (e.g. Firebase or Supabase), configuration keys and security rules.
- Live hotel prices and in-app bookings require approved booking-provider APIs and credentials. Current links open external providers.
- To make festival dates genuinely real-time, connect an authoritative calendar/API or maintain a verified admin-managed dataset. Current festival entries are labelled as estimates where appropriate.
- Map POI results depend on what contributors have mapped; verify hospitals, opening hours, fuel availability and accommodation details independently.

## Main files
- `public/gvel-app.html` — supplied UI and prototype interactions
- `public/gvel-logo-icon.png` — supplied square logo
- `public/gvel-wordmark.png` — supplied GVel wordmark
- `app/page.js` — responsive wrapper
