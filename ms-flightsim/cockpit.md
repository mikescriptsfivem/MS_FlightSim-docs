# Cockpit and flying

This page explains what the pilot sees in the cockpit, how the autopilot, autoland and auto-hover work, and how wind, malfunctions, fuel and repairs affect a flight.

## The PFD (cockpit display)

The PFD appears when a player sits in the pilot or co-pilot seat of a plane or helicopter. Passengers in the back don't see it. It stays on when the engine is off; engine gauges simply drop to zero. The PFD never starts or stops the engine itself.

When you get in, the avionics boot first. F10 stays locked until the display shows READY.

### Clicking the PFD needs the F10 cursor

Every button and knob on the PFD is clicked with the mouse, and the mouse only reaches the PFD while the **F10** cursor is open. Press F10 again to close it. If F10 is taken on your server, `/atccursor` does the same. Your keyboard keeps driving the game while the cursor is open.

### What's on it

| Area | Shows |
| --- | --- |
| Attitude indicator | Pitch ladder, bank, flight path marker, a small TAWS terrain grid in the corner. Red chevrons appear in an extreme nose-up or nose-down attitude and point back to the horizon |
| Speed and altitude | Airspeed in knots, altitude in feet |
| Data strip | Gear, ground speed, throttle, body health, engine health, lights. Each cell can be hidden by the owner |
| Left panel | Flight data |
| Right panel | Engine and fuel |
| Map | Moving map with runways, airports and nearby traffic (5 km range by default) |
| Wind | Wind direction and speed, plus the headwind and crosswind part |

### Bezel buttons

| Button | Does |
| --- | --- |
| REQ LAND · REQ TKOF | Pick a runway and request landing or take-off |
| CLR RWY | Release your runway |
| MAP | Open the large map |
| LTS · BODY · ENG · FUEL | Lights, damage, engine and fuel pages |
| CFG | Layout, scale, volume and display options |
| ALRT | Expand the warnings list |
| SOS | Emergency (squawk 7700) |
| GEAR | Raise or lower the gear |
| AP · AL · HV | Autopilot, autoland, auto-hover |
| ADV | Switch between the full PFD and a small simple HUD |

### Warnings and callouts

Spoken callouts warn about:

- **Terrain (TAWS/GPWS)**: "Caution Terrain", "Terrain, Terrain" and "Pull Up" when you descend fast close to the ground. Planes get the first warning at 500 ft above ground, helicopters at 150 ft.
- **Stall** and **overspeed**.
- **Sink rate**, **bank angle** (from 40°), **don't sink** after take-off, and **too low, gear** on approach with the gear up.
- **Windshear** on take-off and approach.
- **V1** on the take-off roll and **minimums** at 200 ft above ground on approach.

Players set the callout volume with the **Callout sounds** slider in CFG. At 0 every warning sound is silent.

## Moving and resizing the PFD

1. Open the F10 cursor.
2. Click **CFG** on the bezel.
3. Drag the **DRAG TO MOVE** bar to move the PFD.
4. Pick a **PFD scale**: 50%, 75%, 100% or 125%. The ATC transcript has its own scale.
5. Use the switches to hide the PFD or the ATC transcript, or to turn the TAWS terrain grid and the runway guide on or off.
6. Click **DONE**.

The layout is saved on the player's own PC and comes back next time. The PFD is always pulled back on screen after a resolution change.

If a panel ends up off screen, too small or hidden, type `/resetpilothud`. It restores the position, scale, hidden panels and floating map to their defaults.

## Owner defaults: hud-config-overrides.js

Owners set HUD defaults for everyone in `html/hud-config-overrides.js`. Updates never replace this file.

1. Rename `html/hud-config-overrides.js.example` to `html/hud-config-overrides.js`.
2. Set single fields, one per line:

   ```js
   window.HUDConfig.atc.volume        = 0.5;    // ATC voice volume
   window.HUDConfig.minimumsAlt       = 300;    // "Minimums" callout height, 0 = off
   window.HUDConfig.panels.engPanel   = false;  // hide the right engine/fuel panel
   window.HUDConfig.dataStrip.lights  = false;  // hide one data-strip cell
   window.HUDConfig.nd.range          = 8000;   // map range in metres
   window.HUDConfig.sounds.gear_up    = 'sounds/my-gearup.mp3';
   ```

3. Restart the resource.

Never replace a whole block (for example `window.HUDConfig.atc = { ... }`), or you lose every other key in it. Position and scale are each player's own choice and aren't set here.

## Autopilot

Planes only. The autopilot flies the aircraft through GTA's own flight model, so it banks and climbs like a real aircraft.

### Before you engage

| Requirement | Default |
| --- | --- |
| You are the pilot of a plane (not a helicopter) | |
| Height above ground | At least 400 ft |
| Aircraft health | Above 65% |
| Somewhere to go | A map waypoint, a flight plan filed in the tablet, or a heading set on the heading bug |

The gear retracts on its own when you engage. The engine is switched on if it was off.

### Engage and disengage

- Click **AP** on the PFD, or type `/autopilot`.
- `/autopilot` has no key by default. Bind one in **Settings → Key Bindings → FiveM** under "Toggle autopilot (AP)".
- It disengages when you move the controls, lower the gear, or the aircraft gets too damaged.

### Modes

| Mode | Steers by |
| --- | --- |
| **NAV** | Your map waypoint or your filed flight plan (up to 10 waypoints) |
| **HDG** | The heading bug |

Turning the heading bug switches to HDG. Click the mode chip on the PFD, or use `/apmode`, to switch back.

### Heading and altitude selectors

| Control | Scroll | Shift + scroll | Click |
| --- | --- | --- | --- |
| HDG knob or box | 1° | 10° | Type an exact heading |
| ALT knob or ALT SEL box | 100 ft | 1,000 ft | Type an exact altitude |

The altitude selector goes up to **8,500 ft**. Altitudes from a filed flight plan are held to the same cap. Descents follow a 3° path. A dialled altitude takes effect at once if the autopilot is already flying.

### Commands

Commands work without the F10 cursor.

| Command | Does |
| --- | --- |
| `/autopilot` | Engage or disengage |
| `/apheading <0-359>` | Set the heading bug. Leave the number out to type it in a box |
| `/apalt <feet>` | Set the altitude bug in feet above sea level. Leave the number out to type it in a box |
| `/apmode nav` · `/apmode hdg` | Pick a mode. Without a word it toggles |

## Autoland

Planes only. Autoland flies the approach and lands on a runway you reserved.

1. Reserve a landing runway: **REQ LAND** on the PFD, or the F10 ATC menu. A controller approves it if one is on duty; otherwise you reserve it yourself.
2. Fly to within about 4 km of the airport, roughly lined up with the runway.
3. Click **AL** on the PFD, or type `/autolanding`.

Without a landing reservation autoland refuses. The gear comes down by itself. If you arrive too high, the aircraft flies a descending circle near the airport to lose height, then lines up and lands. Press **AL** or `/autolanding` again to cancel.

`/autolanding` has no key by default. Bind one in **Settings → Key Bindings → FiveM** under "Toggle auto-landing (AL)".

## Auto-hover (helicopters)

Click **HV** on the PFD to hold a steady hover. The helicopter keeps its height and comes to a near stop, with a little wind drift.

| Requirement | Default |
| --- | --- |
| Engine | Running |
| Height above ground | Above 8 ft |
| Health | Above 50% |
| Autopilot | Off |

Moving the controls takes over again. Auto-hover has no command or key binding; it's the HV button only.

## Throttle

Aircraft use GTA's normal throttle controls. There is no separate throttle lever.

## TCAS

TCAS warns about other aircraft close to you.

| Setting | Default |
| --- | --- |
| Scan range, plane in the air | 2,500 m |
| Scan range, plane on the ground | 400 m |
| Scan range, helicopter | 1,500 m in the air, 300 m on the ground |
| "Traffic, Traffic" | Converging traffic within 1,800 m and 250 ft vertically |
| "Climb" / "Descend" | Converging traffic within 900 m |

Near the ground TCAS goes quieter: no "Descend" below 500 ft, only traffic alerts below 300 ft, and nothing below 75 ft. TCAS runs a self-test when the avionics boot; a badly damaged aircraft can fail it.

## Wind

Everyone on the server feels the same wind.

| Setting | Default |
| --- | --- |
| Steady wind | 3 to 18 knots |
| Direction and speed change | Every 5 minutes, drifting smoothly |
| Gusts | On top of the steady wind, near airports only (within 3 km, on approach or departure with the gear down) |
| Weather | Rain, thunder and blizzards make it stronger and gustier; fog and smog calmer. Capped at 35 knots steady and 40 knots of gusts |

Wind pushes the aircraft sideways and never speeds it up or slows it down. It also acts on the take-off and landing roll. A sudden gust near an airport triggers the "Windshear" callout. Autoland ignores wind unless the owner sets `Config.Weather.autolandWind = true`, which makes it crab into the crosswind and refuse to land above 25 knots of crosswind or 10 knots of tailwind.

Turn wind off with `Config.Features.wind = false`.

## Malfunctions

Malfunctions can happen while flying.

| Type | Chance weight |
| --- | --- |
| Stuck landing gear | 25 |
| Fuel leak | 25 |
| Engine failure | 20 |
| Electrical failure | 15 |
| Hydraulic failure (heavy steering) | 15 |

- **During a job**, the base chance is 3% every 30 seconds. A well-kept aircraft (maintenance and engine health both 80% or more) gets a tenth of that. Maintenance of 50% or more gets 40%. Below that the chance climbs, and a damaged engine raises it further.
- **Outside a job**, players on the pilot job (everyone in open-access mode) get 40% of the base chance, and owned aircraft at or below 30% maintenance get more.
- During a malfunction, altitude zones don't apply and an off-runway landing isn't penalised, so you can put the aircraft down anywhere.

Turn them off with `Config.Malfunctions.enabled = false`.

## Fuel, repairs and insurance

| Item | Default |
| --- | --- |
| Fuel price | $8 per gallon |
| Fuel display | Litres on the gauge, fuel page and refuel dialog (`Config.Economy.fuelDisplayUnit = 'percent'` shows a percentage) |
| Maintenance wear | 2% per flight hour, plus 10% per hard landing |
| Low maintenance | Below 30%, the engine stutters at random |
| Repair | $10 per point |
| Insurance | 1% of the purchase price, lasts 30 days |

Refuel and repair at the aircraft mechanic. Insurance is bought and claimed at the mechanic or the dealer.

- A **claim** brings a destroyed aircraft back with full health and fuel, and ends the policy.
- A destroyed aircraft **without insurance** comes back after a server restart at 40% health with an empty tank. Repair and refuel it before flying a job.

Prices are set in `Config.Prices`. See [Economy and pay](economy.md).
