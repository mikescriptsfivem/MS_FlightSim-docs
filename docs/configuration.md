# Configuration

[← Back to contents](../README.md)

Everything is set in `config.lua`, but **your own changes belong in `config_overrides.lua`**, which updates never replace. Most day-to-day settings (jobs on/off, pay, aircraft, airports, zones) can also be changed live in `/adminps` without touching a file.

## Where to put your changes

1. Rename `config_overrides.lua.example` to `config_overrides.lua`.
2. Set single fields there, one per line. Never copy a whole table, or you'll miss new keys in future updates.

   ```lua
   Config.PilotAuthorization.enabled = false
   Config.GroundServices.requireJob  = true
   Config.ATCScope.pilotsSeeTraffic  = true
   ```

3. Restart MS_FlightSim. The overrides load after `config.lua`, so your values win.

> **Exceptions: money and language.** `Config.Payouts`, `Config.Prices` and `Config.Language` are applied while `config.lua` itself loads, so setting them in `config_overrides.lua` has no effect. Change them in `config.lua`, or raise or lower all pay with the **Salaries** dial in `/adminps`. See [Economy](economy.md) and [Languages](languages.md), and re-apply these edits after an update.

Other update-safe files work the same way:

| File | For |
| --- | --- |
| `html/hud-config-overrides.js` | HUD defaults |
| `locales/zz_overrides.lua` | Changing single translation strings |
| `config_additions.lua` | Not a settings file: a dated list of every new setting per release, for owners who edit `config.lua` directly |

## Pilot job or open access

`Config.PilotAuthorization.enabled` decides who can fly jobs.

| Value | Behaviour |
| --- | --- |
| `true` (default) | Only players with the pilot job (`/setjob <id> pilot 0`) can take flight jobs. Others are told *"Only licensed pilots can accept aviation contracts."* |
| `false` | **Open access**: no `/setjob` needed. Anyone can train at the NPC, earn their licence and take jobs. Licences and ranks still apply — those are earned by flying |

The server console prints which mode is active on every start.

## Settings owners change most

| Setting | Default | What it does |
| --- | --- | --- |
| `Config.PilotAuthorization.pilotJob` | `'pilot'` | Job name used when the pilot job is required |
| `Config.PilotAuthorization.captainGrade` | `3` | Pilot-job grade that unlocks the Company tab (hire, fire, fund). Set it to your top grade |
| `Config.Language` | `'en'` | `en`, `cs`, `de`, `es`, `fr`, `pl`, `ro` or `ru` — set it in `config.lua` |
| `Config.Framework` | `'auto'` | Force `'qbox'`, `'qbcore'` or `'esx'` if detection picks the wrong one |
| `Config.Features` | all on | Switch off individual missions or systems (TCAS, TAWS, wind, autoland and more) |
| `Config.Payouts` | | Economy Control Panel: global pay multiplier, company cut, rank bonus and pay per job — edit in `config.lua` |
| `Config.Prices` | | Aircraft price multiplier, rental deposit, sell-back rate, training and service fees — edit in `config.lua` |
| `Config.GroundServices.requireJob` | `false` | `true` limits the ground-services job to the `groundcrew` job |
| `Config.AITraffic.groundOnly` | `true` | AI aircraft stay parked at stands. `false` enables flying AI (beta) |
| `Config.ATCScope.pilotsSeeTraffic` | `false` | Whether pilots, not only controllers, see traffic on their radar |
| `Config.Performance` | | Entity budgets for busy servers (see [Performance](performance.md)) |
| `Config.Debug` | `false` | Keep `false` on a live server: `true` skips the pilot-job, rank and rating checks |

## Economy

`Config.Payouts` and `Config.Prices` at the top of `config.lua` are the single place for money. The `/adminps` **Salaries** tab adds presets (Legacy, Low, Standard, High) and a gauge that shows whether your pay sits in a healthy band.

Default fees: plane training $55,000, helicopter training $45,000, theory exam $1,500, Safety Refresher $20,000, fuel $8/gal, repair $10/point, paint $5,000.
