# Updating

[← Back to contents](../README.md)

An update replaces the resource files but keeps your database and your override files. Put every change in `config_overrides.lua` and nothing you set is lost.

1. Back up your database and the `MS_FlightSim` folder.
2. Stop the server. Don't hot-restart a running server mid-update.
3. Copy the new files over the old ones. Your `config_overrides.lua`, `hud-config-overrides.js` and `zz_overrides.lua` aren't in the download, so they stay.
4. If you edited `config.lua` directly, open `config_additions.lua` and copy in the new settings listed under each dated entry since your last update.
5. Read the release's `CHANGELOG` for behaviour changes and settings to decide on.
6. Start the server. New database tables and columns are added automatically.

Database content — licences, hours, ranks, aircraft, companies, layouts drawn in game — always carries over.
