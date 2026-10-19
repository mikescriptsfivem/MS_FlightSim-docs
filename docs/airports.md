# Airports, locations and airspace

[← Back to contents](../README.md)

Six airports ship ready to fly, admins add or adjust more in game with `/adminps`, and the airspace rules keep pilots off the city and on the runways.

## Built-in airports

These come from `Config.Airports` in `config.lua`. Each airport is a circle: a centre and a radius.

| Airport | Radius | Runways | Job location |
| --- | --- | --- | --- |
| LSIA | 1,500 m | 12R/30L, 12L/30R, 03/21 (short) | On |
| Sandy Shores | 600 m | 12/30, 09/27 | On |
| Grapeseed | 500 m | 06/24 | On |
| Cayo Perico | 450 m | 13/31 | Off |
| Roxwood | 550 m | 17/35 | Off |
| Vespucci Helipad | 130 m | none (helicopters) | none |

- Roxwood is a custom map. It only works if you run the Roxwood County map resource.
- Cayo Perico and Roxwood ship switched off. Turn them on in the **Locations** tab (see below).
- Inside any airport radius, altitude zones never apply. Pilots can descend, land and take off freely.

## Add a custom airport

Custom airports are stored in the database. They survive restarts and script updates. Changes to an airport apply after you restart MS_FlightSim.

1. Walk to where you want the airport centre.
2. Open `/adminps` and go to the **Airports** tab.
3. Type a **Label** (up to 60 characters). It must not match an existing airport.
4. Click **Use My Position** to fill in the centre.
5. Set the **Radius**: 50 to 5,000 m, default 800 m. It should cover the runways, the apron and the approach.
6. Click **Add Airport**.
7. Click **Manage** on the new airport card and fill in the sections below.
8. Restart MS_FlightSim.

### What you can set on a custom airport

| Section | What it does |
| --- | --- |
| Replaces | Hides a built-in job location this airport sits on top of, so you don't get duplicate NPCs and blips. Applies at once. |
| Runways | Stand at one end and click **Capture A**, then at the other end and click **Capture B**. Type the runway numbers (B is optional for a one-way runway) and click **Add Runway**. |
| Heli Spawn | Where the medevac rescue helicopter appears for this airport. Without it, the nearest helipad is used. |
| Helipads | Extra pads, used by medevac, firefighting, heavy lift, supply drop, VIP extraction and helicopter landings. |
| Cargo NPC | The dispatcher players talk to, to start missions here. |
| Cargo job | Plane spawn, forklift and three pallets. With all five captured, the airport appears as a cargo and smuggling destination. |
| Passenger / tourist spawn | Where boarding passengers wait for passenger, sightseeing and survey jobs. Falls back to the plane spawn. |
| Plane spawn points | Extra parking slots. Jobs use the first free one. They only work once the cargo job above is complete. |
| Services | Dealer, trainer, painter and mechanic NPCs. Set only the ones this airport offers. |
| Garage / hangar | The marker players park at to store their aircraft. |

Every capture uses your current position. For NPCs and spawns, face the way the NPC or the aircraft nose should point.

If a custom airport sits within 500 m of a built-in one without **Replaces** set, the Airports tab shows an overlap warning.

### Capture Walk

Capture Walk records many points in one trip, so the panel only closes once.

1. On the airport card, tick the box next to each row you want to capture. **Select Missing** ticks every row not yet set.
2. Click **Start Capture Walk**. The panel closes.
3. Walk to each spot and press **E**. The screen shows which point is next.
4. When the last point is captured, the panel reopens on the Airports tab.

## Adjust a built-in airport

Built-in airports (except the Vespucci Helipad) also appear in the **Airports** tab, marked "Built-in airport — services only". Use them when a custom map has moved things.

| You can capture | Notes |
| --- | --- |
| Services and garage / hangar | Not on LSIA. LSIA's peds are set in `config.lua` (`Config.ShopPed`, `Config.TrainingPed`, `Config.MechanicPed`, `Config.CustomizePed`). |
| Passenger / tourist spawn | Replaces the airport's configured spot. |
| Job NPC and cargo overrides | Moves the dispatcher, the forklift and the pallets. Capture only what your map moved. Pallet 1 also moves the cargo loading point. |
| Helipads | Added to the airport's pads. |
| Plane spawn points | Used first. The airport's built-in parking becomes overflow. |

These apply after a restart.

## Enable or disable airports (Locations tab)

The **Locations** tab lists every job location. Click **Disable** to close one, **Enable** to reopen it. The setting is saved in the database.

An airport counts as closed when a disabled location sits inside its radius. A closed airport:

- loses its job NPC and blip, and jobs skip it
- disappears from the ATC tower console
- is refused as a departure or arrival in flight plans
- gets no AI traffic, including sub-company flights
- is skipped by the HUD's "nearest airport"

Built-in locations also have **Delete**, which hides them. A deleted location can be brought back with **Restore**. Custom airports are deleted in the **Airports** tab instead.

## Extra NPC locations in config.lua

You can also place NPCs at other airports in `Config.Locations`. Each entry is optional field by field:

| Field | What it places |
| --- | --- |
| `airport` | The airport label, for display and matching |
| `garageSpawn` | Where bought aircraft spawn |
| `hangarCoords` | The hangar storage marker |
| `dealer`, `trainer`, `cargo` | Dealer, flight instructor and cargo dispatcher NPCs |
| `painter` | Painter NPC, with `radius` and `fee` |
| `mechanic` | Mechanic NPC, with `tugSpawnCoords` for the tow tug |
| `fuelZone` | Refuel and service area, with `radius` |

`config.lua` has a commented Sandy Shores example and a blank template. The **Airports** tab does the same job without editing files.

## Altitude and no-fly zones

Altitude zones set a minimum height above the ground over towns, bases and hills. 21 zones ship, from LS Downtown (380 m) to Senora Desert (30 m). They live in `Config.AltitudeZones`.

### What happens to a pilot

1. A pilot flies below the zone's minimum. A warning appears every 4 seconds: "RESTRICTED AIRSPACE", the zone name, the height to climb to and the current height.
2. The aircraft is pushed upwards until it is above the minimum.
3. If the zone has **Strike on Violation** on, a strike is added once the warning has run for the zone's **Warn Delay**. A countdown shows on screen.
4. Climbing above the minimum or leaving the zone ends the warning.

A pilot who bails out of an aircraft more than 15 m above the ground inside a zone also gets a strike.

### Who is exempt

- Players with a job in `Config.EmergencyJobs` (default `police`, `ambulance`, `fire`)
- Aircraft inside any airport radius
- Helicopters over a helipad
- An aircraft in a malfunction emergency
- The medevac and firefighting job helicopters, and the crop duster over its field

### The ZONES tab

In `/adminps` > **Zones** you can:

- create a zone: name, circle or polygon, planes, helicopters or both, minimum altitude (m above ground), warn delay, **Allow Landing**, **Strike on Violation**
- use the **3D Editor** to place the centre and radius, or the polygon corners, from a free camera
- edit, disable or delete any zone, including the built-in ones
- disable or enable all zones at once

Zone edits and the on/off state are saved in the database. Zone rings show on the map for players in an aircraft (`Config.BlipVisibility.altitudeZones`).

## Restricted zones and escort jets

Two zones send fighter jets after anyone who flies in: Fort Zancudo (2 jets) and Bolingbroke Penitentiary (1 jet). They are set in `Config.RestrictedZones`.

1. The pilot enters the zone more than 50 m above the ground. A warning appears and the jets spawn to escort them.
2. A 30-second countdown runs.
3. Leaving the zone before the countdown ends sends the jets away.
4. If the pilot is still inside after 30 seconds, the jets open fire.
5. Once they have opened fire, the jets keep chasing until the pilot lands or is 1,500 m from the zone centre.

Only the pilot triggers it, not passengers. Helicopters over a helipad, aircraft in a malfunction emergency, and the medevac and firefighting job helicopters are exempt. Emergency jobs are **not** exempt here. Switch the whole system off with `Config.Features.restrictedZones = false`.

## Runway discipline

Planes at an airport must take off and land on a runway. The runway area is the full runway length plus 15 m at each end, and 15 m either side of the centreline.

- Only the moment of takeoff and landing is checked. Taxiing anywhere is fine.
- It only applies inside an airport radius. Bush strips and fields are never judged.
- Helicopters and water takeoffs and landings are exempt.
- A forced landing during a malfunction, or in a heavily damaged aircraft, is not penalised (`exemptDamaged = true`).

| Situation | Penalty |
| --- | --- |
| On a mission | Every payout of that mission is cut by 50% (`missionPayCutPct`). The cut does not stack. |
| Free flight | A warning. Every 10th warning (`freeFlightWarnings`) becomes a strike. |

Settings are in `Config.RunwayDiscipline`. Any player can type `/rwyzones` to show or hide the runway areas in the world.

## Taxi network (/airportnav)

The taxi network is a map of taxiways and parking stands at an airport. AI aircraft follow it to taxi between the runway and the stands. The tower console draws it too.

- LSIA ships with its layout already drawn.
- Admins draw other airports in game. Saving is admin-only and needs `Config.AirportNavigation.editorEnabled = true` (it is on in the shipped `config.lua`).
- A saved layout is stored in the database. It replaces the shipped layout for that airport, and survives restarts and script updates.
- Every save is kept as a version, so you can go back.

| Command | What it does |
| --- | --- |
| `/airportnav` | Show or hide the layout within 300 m of you |
| `/airportnav edit` | Open or close the editor at the airport you stand in |
| `/airportnav save` | Save the layout. It goes live for everyone. |
| `/airportnav versions` | List saved versions in the F8 console |
| `/airportnav restore <n>` | Bring back a saved version |
| `/airportnav reset confirm` | Drop the saved layout and go back to the shipped one |

The editor opens a top-down camera. Use **WASD** to pan and the mouse wheel to zoom. The on-screen help lists the drawing controls.

## Blip visibility

`Config.BlipVisibility` decides who sees each map blip.

| Value | Who sees it |
| --- | --- |
| `'always'` | Every player |
| `'pilot'` | Players with the pilot job. Hidden when the pilot job is not required (open access). |
| `'inPlane'` | Players sitting in a plane or helicopter |
| `'pilotOrPlane'` | Pilots, or anyone in an aircraft. Same as `'inPlane'` in open access. |
| `'hidden'` | Nobody |

| Blip | Default |
| --- | --- |
| `dealer` | `'always'` |
| `instructor` | `'always'` |
| `cargo` | `'always'` |
| `groundServices` | `'always'` |
| `painter` | `'pilotOrPlane'` |
| `mechanic` | `'pilotOrPlane'` |
| `hangar` | `'pilotOrPlane'` |
| `runway` | `'pilotOrPlane'` |
| `taxiway` | `'pilotOrPlane'` |
| `altitudeZones` | `'inPlane'` |
