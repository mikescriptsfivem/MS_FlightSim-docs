# Performance on busy servers

The defaults are tuned for high-population servers. The main lever is how many AI aircraft and NPCs exist at once.

- **AI traffic** is the biggest cost. Keep `Config.AITraffic.groundOnly = true` (the default), and use `/aitraffic preset light` if the airport feels heavy. `Config.AITraffic.maxConcurrentCap` sets the hard limit.
- **Mission NPCs** are created only on the client that needs them, so a crowded LSIA doesn't hit the entity limit. The settings are in `Config.Performance`.
- **Leftover entities**: job vehicles and props are deleted by the server when their owner disconnects.
- **Idle cost**: when nobody is near a screen or flying, the script only runs light background checks. The tower console and ground board draw only while a player is within 30 m.
- Switch off systems you don't use in `Config.Features` (for example the floating radar or runway guide) to save a little more.
