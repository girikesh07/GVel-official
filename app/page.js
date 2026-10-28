'use client';

import { useState } from 'react';

export default function Home() {
  const [showCodeInfo, setShowCodeInfo] = useState(false);

  return (
    <main className="gvel-shell">
      <iframe
        className="gvel-frame"
        src="/gvel-app.html"
        title="GVel travel planner"
        allow="geolocation"
      />
     
    </main>
  );
}
