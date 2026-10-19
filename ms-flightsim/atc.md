# Air traffic control

Pilots ask the tower for landing and takeoff clearance and file flight plans, and a player controller at a three-screen tower console approves or denies them.

## How it works

- Each airport can have one controller on duty. They control only that airport.
- At an airport with no controller, every request and flight plan is approved automatically.
- An approved landing or takeoff locks the runway for 2 minutes, so two pilots can't use it at once.
- ATC voice lines play in English, pre-recorded and free to run.

The whole system is switched with `Config.Features.atc` and `Config.Features.atcDuty`.

## For pilots

### Open the ATC controls

Press **F10** in a plane or helicopter. It shows the mouse cursor so you can click the cockpit panel. Press **F10** again to hide it.

- If F10 does nothing, type `/atccursor`, or bind the key in **Settings > Key Bindings > FiveM** ("ATC Communications (Toggle Cursor)").
- F10 only works once the avionics have finished booting.

### Request landing or takeoff

1. Press **F10**.
2. Click **REQ LAND** or **REQ TKOF** on the cockpit panel.
3. Pick a runway from the list. Locked runways show who holds them and can't be picked.
4. Wait for the answer. The button shows whether you were cleared or denied, and a message gives the reason for a denial.
5. When cleared, the runway is locked for you and the blue alignment markers show your runway.
6. Click **CLR RWY** when you are done, so others can use the runway. Otherwise the lock ends after 2 minutes.

Before a takeoff clearance, you must be within 250 m of the runway centreline. Otherwise the tower answers "Hold short" and tells you to taxi there first.

There is no separate taxi request.

### Runway locks

| Setting | Default | What it does |
| --- | --- | --- |
| `Config.RunwayCooldown` | `120` | Seconds a runway stays locked after a clearance |
| `Config.RunwayConflictClearance` | `75.0` | Runways closer than this (metres) lock together, such as Sandy Shores 12/30 and 09/27, which cross |

Players with a job in `Config.EmergencyJobs` (default `police`, `ambulance`, `fire`) can take a runway that someone else has locked. The other pilot is told.

### File a flight plan

1. Open the pilot tablet (`/pilottablet`) and go to the **Flight Plan** tab.
2. Choose the departure and arrival airports.
3. Optionally choose the departure and arrival runways, a callsign and a cruise altitude. Left blank, the callsign is `FLT-<your server ID>` and the altitude is picked for you.
4. Click **Submit to ATC**.

- With a controller on duty at the departure or arrival airport, the plan waits for their approval.
- With no controller there, the plan is approved at once.
- You can only have one open plan. Click **Cancel Plan** before filing a new one.
- A plan expires 1 hour after you file it (`Config.ATCDuty.flightPlanExpiry = 3600`).
- Closed airports can't be used in a plan.
- With a filed plan, landing and takeoff clearance are requested for you as you approach and depart, using the plan's runways.

### Pay without clearance

Jobs flown without an approved flight plan pay less while a controller is on duty.

| Config key | Default | Meaning |
| --- | --- | --- |
| `Config.Payouts.noATCClearancePayMult` | `0.5` | Pay multiplier for a job flown without an approved plan. `1.0` turns the penalty off. |
| `Config.ATCDuty.freeFlightNoATC` | `true` | With no controller on duty, plans are auto-approved and the penalty never applies |

`Config.Payouts.noATCClearancePayMult` overrides `Config.ATCDuty.noClearancePayMult`, so change it in `Config.Payouts`. Only an approved flight plan counts. A landing or takeoff clearance on its own does not.

### Traffic on your radar

With `Config.ATCScope.pilotsSeeTraffic = false` (the default), pilots' radars show the map, nav fixes, flight-plan routes and their own route, but not other aircraft. The controller sees all traffic. TCAS is not affected and still shows nearby aircraft. Set it to `true` to show traffic to everyone.

## For controllers

### Who can go on duty

| Setting | Default |
| --- | --- |
| `Config.ATCDuty.atcJob` | `'pilot'` |
| `Config.ATCDuty.atcMinGrade` | `2` |

With open access on (`Config.PilotAuthorization.enabled = false`), only admins can go on duty.

### Go on duty

1. Walk up to a tower console. The prompt reads "[E] Operate radar console".
2. Press **E** to sit at the screens. The key can be rebound in **Settings > Key Bindings > FiveM** ("ATC console: sit at the screens").
3. Click **SIGN ON** at the top of the right screen.

You now control the airport the console stands in.

- If another player already controls that airport, you can't sign on there.
- Leave the airport and you get a warning. After 15 seconds outside you are signed off (`outsideAirportGraceSeconds`).
- Disconnecting signs you off.
- Click **SIGN OFF** to end your shift.

### Using the console

- Move the mouse to point, click to use buttons and menus, and scroll to zoom.
- **W**: main screen. **A**: left screen. **D**: right screen. **S**: step back to see all three. Pressing A or D again returns to the main screen.
- **Backspace**: leave the console.

| Screen | What it shows |
| --- | --- |
| Main | The radar: runways, range rings, aircraft with callsign, altitude, speed and type, track lines and history dots. Conflicts show yellow, critical ones flashing red. The MAP menu toggles layers such as taxiways, stands, fixes and zones. |
| Left | Aircraft list: callsign, type, altitude, speed, heading, flight-plan status and route. Click a column to sort, click a row to centre the radar on it. AI aircraft are marked AI. |
| Right | Clearance requests, pending flight plans, plans on file, active runways, and sign on / off |

Display defaults are in `Config.ATCScope.display`: range 10 NM, range menu 0.5 to 40 NM.

### Clearances and flight plans

On the right screen:

- **CLEAR** grants a landing or takeoff request. **DENY** asks for a reason: HOLD POSITION, TRAFFIC, WEATHER, RUNWAY CLOSED or RESUBMIT.
- **APPROVE** or **DENY** a pending flight plan the same way.
- You only see requests and plans for your airport. Requests from AI aircraft appear here too.
- A chime plays when a new request or plan arrives (`Config.ATCScope.sound`).

### Active runways

Tick up to 2 runways (`Config.ATCDuty.maxActiveRunways`) under **ACTIVE RUNWAYS** and click **APPLY**. Pilots at your airport see them as the runways in use.

### Who sees the screens

With `viewers = 'nearby'` (default), anyone within 30 m (`renderDistance`) sees the screens. Set `viewers = 'atc'` so only the on-duty controller's game draws them.

## Placing the tower console (admins)

A console is three TV screens. Each console belongs to the airport it stands in. A console outside every airport can't be used to sign on.

### With a command

1. Stand where the main screen should go.
2. Type `/atcscope place`. A see-through screen appears. The left and right screens are added beside it automatically.
3. Move it into place:
   - Arrow keys: move
   - **PgUp / PgDn**: raise and lower
   - **Q / E**: rotate
   - Hold **Shift**: small steps
4. Press **Enter** to save, or **Backspace** to cancel.

`/atcscope place left` or `/atcscope place right` moves one side screen yourself. `/atcscope swap` mirrors the sides if they come out the wrong way round. `/atcscope remove` deletes the nearest console. These commands are admin-only.

### With the admin panel

Open `/adminps` > **Screens** and click **Place ATC Console**. The same placement tool starts. The list shows every console with its airport and position, with **Go To**, **Move** and **Remove** (press Remove twice to confirm).

Placed consoles are saved in the database. They survive restarts and script updates.

Consoles can also be written by hand in `Config.ATCScope.stations`. An airport with a console in `config.lua` uses only that one.

## ATC voice

The tower speaks: flight plan received, clearance granted or denied, runway assignment and waypoint callouts.

- The voice ships pre-recorded in English in `html/sounds/atc/cache`. Upload the whole folder.
- `Config.AIATCChatter.runtimeMode = 'static'` (default) plays only the shipped recordings. No API key, no cost.
- Each airport has its own voice: LSIA a New York accent, Sandy Shores and Grapeseed a Southern accent, Cayo Perico a Spanish accent.
- Turn single kinds of lines off in `Config.AIATCChatter.triggers`.
- `Config.AIATCChatter.enabled = false` silences all ATC speech. The F10 menu, clearances and runway locks still work. Cockpit callouts are separate (`Config.Features.sounds`).

### Re-recording the voice (optional)

You only need this to make your own voice or phrases. It uses ElevenLabs and costs you API credit.

1. Add your key to `server.cfg` as a convar. Use `set`, never `setr`; the key never reaches players.

   ```cfg
   set ms_flightsim_elevenlabs_key "your-key"
   ```

2. Choose your voices in `Config.AIATCChatter.elevenlabs`.
3. Restart the server.
4. Run `/atcbootstrap` from the server console, or in game as an admin. It records the ATC phrase library and skips lines already recorded.
5. Run `/atchudbootstrap` to re-record the cockpit callouts too. It replaces the files in `html/sounds`.

To record missing lines on the fly while players fly, set `runtimeMode = 'runtime'`. Daily limits stop runaway costs: `dailyCharCap = 50000` characters for the server and `perPilotDailyChars = 2500` per pilot. Without the key, runtime mode switches the voice off instead of erroring.
