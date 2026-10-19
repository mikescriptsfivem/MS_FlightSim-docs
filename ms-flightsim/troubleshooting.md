# Troubleshooting

Most problems come from three things: the pilot-job setting, the start order, or a missing companion resource. Check the server console first — the script says what it detected on every start.

| Problem | Cause and fix |
| --- | --- |
| Players are told *"Only licensed pilots can accept aviation contracts"* | The pilot job is required (`Config.PilotAuthorization.enabled = true`) and they don't have it. Give them the job with `/setjob`, or set it to `false` for open access. The console prints which mode is active |
| *"Plane certificate required"* or *"Helicopter certificate required"* | The player hasn't passed the licence at the Training NPC yet. This applies in open-access mode too |
| *"Requires physical … license — purchase at City Hall"* | `Config.CityHallBridge.requirePhysicalLicense` is on. Set it to `false` unless you want the city-hall step |
| A job shows as locked in the tablet | Rank or rating missing. The card shows the reason; see [Jobs](jobs.md) |
| *"No supported framework found"* | MS_FlightSim started before your framework. Move its ensure line to the end |
| No AI aircraft at the stands | By design they appear only when ground crew are signed on. Run `/aitraffic why` (needs the `msflightsim.admin` ace) to see the reason |
| Ground board or tower screen is black | The map or prop resource is missing, or the screen was placed with an old model. Check `MS_FlightSim_LSIA` is running and re-place it from the **Screens** tab |
| Sub-Company tab says "not set up" | Run `subcodiag` in the server console; if tables are missing, import `sql/migrations.sql` |
| F10 does nothing | It only works seated in a plane or helicopter once the avionics are up. Otherwise another script uses F10: Rebind it in **Settings → Key Bindings → FiveM**, or use `/atccursor` |
| Anyone can start any job regardless of job or rank | `Config.Debug` is `true`. Set it to `false` on a live server |
| Players crash when an admin restarts something | Never restart `MS_FlightSim_LSIA` (a map) with players online |
| Your config changes disappear after an update | They were made in `config.lua`. Move them to `config_overrides.lua` (money and language settings must stay in `config.lua`; re-apply them) |
| A pay or price change in `config_overrides.lua` does nothing | Money settings are applied inside `config.lua`. Change them there, or use the **Salaries** dial in `/adminps` |

## Still stuck?

Open a ticket in the MikeScripts Discord with:

- your MS_FlightSim version and framework,
- the exact message players see,
- the server console output from start-up.
