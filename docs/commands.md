# Commands and admin tools

[← Back to contents](../README.md)

Players mostly use the tablet and NPCs; admins do nearly everything from `/adminps`. Admin commands accept anyone with the `command` ace or a framework group listed in `Config.AdminGroups` (default `admin`, `superadmin`).

## Player commands

| Command | What it does |
| --- | --- |
| `/pilottablet` | Open the pilot tablet |
| `/myflights` | List your recorded flights |
| `/resetpilothud` | Reset the HUD layout |
| `/unstuckjobs` | Clear a stuck job state |
| `/groundservices` | Sign on or off as ground crew |
| `/gscrew` | Open the ground-crew board from anywhere |
| `/msefleet` | Ground-vehicle menu |
| `/apheading <deg>` · `/apalt <ft>` · `/apmode nav\|hdg` | Autopilot heading, altitude and mode |
| `/heavylift` · `/heavyliftcancel` | Start or cancel a heavy-lift job |
| `/cancelmedevac` | Cancel a medevac |
| `/subco ...` | Sub-company actions (create, rename, fleet, assign, board) |

## Keys

Players can rebind these in **Settings → Key Bindings → FiveM**.

| Key | Action |
| --- | --- |
| F10 | ATC menu and cursor (`/atccursor` if F10 is taken) |
| E | Interact with NPCs, the tower console and the ground board |
| B | Smoke colour (sky writing, airshow) |
| P / G / O / H | Airshow leader: cycle routine, engage, start, disengage |
| L | Belt loader on/off |
| Y | Drop cargo (smuggling) |
| *(unbound)* | Autopilot and autoland toggles — bind them yourself |

## Admin commands

| Command | What it does |
| --- | --- |
| `/adminps` | Admin panel (name set by `Config.AdminCommand`) |
| `/atcscope place\|list\|remove\|calibrate` | Place and manage ATC tower consoles |
| `/gsboard place\|list\|remove` | Place and manage ground-service boards |
| `/airportnav` | Draw and edit an airport's taxiway network |
| `/aitraffic preset light\|medium\|heavy` · `why` · `here` | Tune and diagnose AI traffic (ace `msflightsim.admin`) |
| `/pilotuniform try\|save\|reset\|list` | Set up per-rank pilot uniforms |
| `subcodiag` *(server console)* | Check the sub-company database setup |

## The admin panel

`/adminps` has these tabs:

| Tab | For |
| --- | --- |
| Players | Give or revoke licences, reset strikes, blacklist, whitelist pilots |
| Zones | Create and edit altitude and no-fly zones |
| Locations | Enable or disable NPC sites |
| Airports | Add airports or override built-in ones. A disabled airport has no jobs, ATC or AI. *Capture Walk* records points as you walk |
| Screens | ATC consoles and ground-service boards |
| Licensed Pilots | Every pilot, online and offline |
| Aircraft | The dealer list |
| Jobs | On/off per mission |
| Salaries | Pay presets and the economy gauge |
| Settings | General options |
