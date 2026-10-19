# Updating

An update replaces the resource files but keeps your database and your override files. Put your changes in `config_overrides.lua` and they survive; the exceptions are money and language settings, which live in `config.lua` (see [Configuration](configuration.md)).

::: tip Before you start
Back up your database and the `MS_FlightSim` folder. Rolling back is then a copy-paste.
:::

1. Back up your database and the `MS_FlightSim` folder.
2. Stop the server. Don't hot-restart a running server mid-update.
3. Copy the new files over the old ones. Your `config_overrides.lua`, `hud-config-overrides.js` and `zz_overrides.lua` aren't in the download, so they stay.
4. Re-apply any `Config.Payouts`, `Config.Prices` or `Config.Language` edits to the new `config.lua`. If you edited other parts of `config.lua` directly, open `config_additions.lua` and copy in the new settings listed under each dated entry since your last update.
5. Read the release's `CHANGELOG` for behaviour changes and settings to decide on.
6. Start the server. New database tables and columns are added automatically.

Database content — licences, hours, ranks, aircraft, companies, layouts drawn in game — always carries over.
