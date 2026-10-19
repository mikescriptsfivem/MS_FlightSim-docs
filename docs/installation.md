# Installation

[← Back to contents](../README.md)

Drop the folders in, add the ensure lines in the right order, and start the server. The database creates its own tables on first start.

## Steps

1. Extract the download into your `resources` folder.
2. Add the ensure lines to `server.cfg`. **Order matters: MS_FlightSim always starts last.**

   ```cfg
   ensure oxmysql
   ensure ox_lib
   ensure qbx_core          # or qb-core / es_extended
   # ensure ox_inventory, ox_target, your keys and fuel scripts here

   ensure ms100
   ensure MS_FlightSim_MSE
   ensure MS_FlightSim_LSIA
   # ensure ms_aircraft_core   # only with the MS41s water bomber
   # ensure ms41s

   ensure MS_FlightSim
   ```

3. **Database**: nothing to do. Every table is created automatically on first start. `sql/schema.sql` is included if you prefer to import by hand.
4. **Pilot job**: create a `pilot` job in your framework, or switch to open access so nobody needs a job (see [Configuration](configuration.md#pilot-job-or-open-access)).
5. **Discord logs (optional)**: add the webhook as a convar in `server.cfg`. Use `set`, never `setr`, so players can't read it.

   ```cfg
   set ms_flightsim_webhook "https://discord.com/api/webhooks/..."
   ```

6. **Start the server and read the console.** You should see your framework detected and a line saying whether the pilot job is required or open access is on.
7. **In game**, run `/adminps` to open the admin panel. Place the ATC tower console with `/atcscope place` or the panel's **Screens** tab. The LSIA ground-services board is already placed.

## Good to know

- The ATC voice ships pre-recorded in `html/sounds/atc/cache` (about 31 MB). Upload the whole folder: it needs no API key and costs nothing to run.
- Never restart `MS_FlightSim_LSIA` while players are connected. Restarting a map resource crashes clients.
- Keep `Config.Debug = false` on a live server. With it on, the pilot-job, rank and rating checks are skipped.
