# Ground services

[← Back to contents](../README.md)

Ground crew sign on at an airport, take handling jobs on parked aircraft, drive out in the right vehicle, and get paid for each service.

## Who can work it

By default anyone can sign on as ground crew. To limit it to one job, set these in `Config.GroundServices`:

| Setting | Default | What it does |
| --- | --- | --- |
| `enabled` | `true` | Turns ground services on or off |
| `requireJob` | `false` | `true` = only players with `crewJob` can sign on |
| `crewJob` | `'groundcrew'` | The framework job used when `requireJob = true` |
| `minGrade` | `0` | Lowest grade of that job allowed to sign on |

Players without the job are told "You do not have the ground-crew job."

## Signing on

You work the airport you sign on at, and you only see its jobs.

1. Go to the ground-services board and press **E**. This hands you the pointer for the screen.
2. Click the button on the screen to sign on.
3. Open jobs at your airport appear on the board and as blips on your map.

You can also open the same crew menu with a command:

| Command | What it does |
| --- | --- |
| `/groundservices` | On foot: opens the crew board. In an aircraft: opens the pilot request menu. |
| `/gscrew` | Opens the crew board |

You must stand inside an airport to sign on. If you leave the airport, you get a warning and are signed off after 15 seconds (`outsideAirportGraceSeconds`). Your job goes back on the board.

## The board

The board is a TV screen showing open jobs and who is on duty. You click its buttons to sign on, take a job and release it.

- LSIA has its board already placed in `config.lua`. It is the only board at LSIA.
- Admins place boards at other airports in game with `/gsboard place`. Stand where crew will stand, facing the wall you want the screen on. It is saved on the server and survives restarts and updates.
- `/gsboard remove` removes the board you stand next to (within 8 m). `/gsboard list` prints all placed boards to the F8 console.
- The **Screens** tab in `/adminps` lists every board. From there admins can go to, move or remove boards placed in game.
- Up to 12 boards can be placed in game (`board.maxStations`).
- Each board has a map blip. Who sees it follows `Config.BlipVisibility.groundServices`.

## Services and pay

Each job is one aircraft with one or more services. You are paid per service as you finish it. Pay varies by up to 10% either way per job (`payVariation = 0.10`), and the board shows the exact amount.

| Service | Default pay | MS-E vehicle | Stock fallback |
| --- | --- | --- | --- |
| Refuelling | $320 | HD-18 Fuel (`mse_fuel`) | `tanker`, `tanker2` |
| Baggage | $240 | TG-30 Tug (`mse_tug`) with BC-25 baggage cart, or BL-40 belt loader | `handler`, `forklift` |
| Catering | $200 | CT-70 Catering (`mse_cater`) | `boxville`, `mule` |
| Water & lavatory | $160 | PW-15 Water (`mse_water`) or LS-12 Lavatory (`mse_lav`) | `utillitruck2`, `utillitruck` |
| Ground power | $140 | GP-90 Ground Power (`mse_gpu`) | `airtug` |
| Passenger stairs | $150 | PS-50 Stairs (`mse_stairs`) | none |
| Cargo pallets | $260 | TG-30 Tug with PD-20 pallet dolly | `handler`, `forklift` |
| Pushback | $300 | TG-30 Tug with TB-20 towbar | `docktug`, `airtug` |

The server checks the vehicle you actually use, so a fuel truck cannot do bags. Pushback is not part of the default set AI aircraft ask for on arrival.

## How a job works

1. An AI aircraft parks at a stand and shuts down. In the default ground-only mode it simply appears there. About 4 seconds later it calls for handling and the job appears on the board.
2. Take the job from the board. A GPS route leads you to the aircraft.
3. Press **G** (or choose "Get the ..." in the job menu) to get the vehicle for the next service. It appears at the nearest free equipment bay. If you are within 40 m of the bay, you are put straight in it.
4. Work each service at the aircraft:
   - **Hose services** (fuel, water, ground power): take the nozzle or cable from the truck with **E** or third eye, walk it to the aircraft and plug it in. When the work is done, unplug it and put it back on the truck.
   - **Door services** (catering, stairs, cargo): drive to the aircraft door and stop to dock.
   - **Baggage**: a belt loader places itself at the aircraft. Carry each of the 6 bags from the cart onto the running belt.
   - **Pushback**: the towbar is fitted to the MS-E tug for you. Stop the towbar at the nose gear to couple, push the aircraft back to the marker, then stop to uncouple.
5. Each service pays as soon as it is done. When the last one is done, the turnaround is complete and the aircraft is released.
6. Bring the vehicle back to the equipment bays and press **G** there to hand it back.

If you release a job, it goes back on the board and finished services stay finished for the next crew member.

### Time limits

| Setting | Default | What happens |
| --- | --- | --- |
| `requestTTLSeconds` | 900 | A job nobody takes expires |
| `claimTTLSeconds` | 600 | A taken job nobody finishes goes back on the board |
| `aiTurnaround.standWaitSeconds` | 240 | An AI aircraft on a stand waits this long for someone to take its job |
| `aiTurnaround.serviceMaxSeconds` | 600 | Once a job is taken, the aircraft waits this long for crew to finish |
| `aiTurnaround.departAfterServiceSeconds` | 20 | The aircraft stays this long after the crew finishes |

## Losing a job

You lose the job, unpaid for the service you were on, when:

- your job vehicle is wrecked or sunk,
- your job vehicle disappears (deleted, cleaned up or removed by another script), or
- you disconnect, including a game crash.

The job goes back on the board. Unfinished services start over. Services already finished stay finished and stay paid. A pilot who asked for the service is told the crew could not finish.

## Pilots requesting service

Player pilots can ask for handling on their own aircraft.

1. Park at an airport and stay in the aircraft.
2. Type `/groundservices`.
3. Tick the services you need and choose **Call ground crew**.

Crew on duty see the request on their board at once. You get a message as each service finishes, and another when you are clear to push and start. Use **Cancel my request** in the same menu to cancel. You can have one open request at a time. The request costs the pilot nothing.

## AI aircraft and crew

AI aircraft only ask for handling while crew are signed on at their airport.

- With no crew on duty, no new parked aircraft appear (in the default ground-only mode). An aircraft already parked leaves 20 seconds after it shuts down.
- Each crew member signed on adds up to 4 open AI jobs at that airport (`aiDemand.jobsPerCrew`) and 2 different services (`aiDemand.servicesPerCrew`).
- The server never holds more than 40 open jobs in total (`maxOpenRequests`).
- AI aircraft do not take stands within 35 m of the spots where player job aircraft spawn (`Config.AITraffic.jobSpawnClearance`).

## The MS-E ground fleet

The MS-E vehicles ship in their own resource, `MS_FlightSim_MSE`. It must be started before MS_FlightSim. Without it, crew can still use the stock fallback vehicles listed under [Services and pay](#services-and-pay). Passenger stairs has no stock fallback.

| Vehicle | Model | Used for |
| --- | --- | --- |
| MS-E TG-30 Tug | `mse_tug` | Baggage, cargo pallets and pushback |
| MS-E BL-40 Belt Loader | `mse_belt` | Baggage loading |
| MS-E GP-90 Ground Power | `mse_gpu` | Ground power |
| MS-E HD-18 Fuel | `mse_fuel` | Refuelling |
| MS-E PW-15 Water | `mse_water` | Water service |
| MS-E LS-12 Lavatory | `mse_lav` | Lavatory service |
| MS-E CT-70 Catering | `mse_cater` | Catering |
| MS-E PS-50 Stairs | `mse_stairs` | Passenger stairs |
| MS-E BC-25 Baggage Cart | `mse_bagcart` | Trailer, towed by the tug |
| MS-E PD-20 Pallet Dolly | `mse_pallet` | Trailer, towed by the tug |
| MS-E TB-20 Front Towbar | `mse_towbar` | Fits the tug for pushback |

### Controls

When you sit in the driver seat, a card on the left of the screen shows that vehicle's special keys for a few seconds.

| Key | Vehicle | Action |
| --- | --- | --- |
| **E** (tap) | All powered units | Amber warning lights on or off |
| **E** (hold) | All powered units | Horn |
| **H** (tap) | All powered units | Headlights |
| **Page Up / Page Down** | Catering | Raise or lower the box |
| **H** (hold) | Catering | Open or shut the rear door |
| **Page Up / Page Down** | Stairs | Raise or lower the stairs |
| **H** (hold) | Stairs | Bridge plate out or in |
| **Page Up / Page Down** | Belt loader | Raise or lower the belt |
| **L** (tap) | Belt loader | Belt on or off |
| **L** (hold) | Belt loader | Run the belt backwards |
| **U** | Tug | Fit or park the towbar |
| **Y** | Tug | Couple or release the aircraft |
| **T** | Tug | Hitch or release a baggage cart |

**L**, **U**, **Y** and **T** can be rebound in **Settings → Key Bindings → FiveM**.

### Renting equipment

`/msefleet` opens the airport-equipment menu. Players can rent any powered MS-E vehicle for free for 15 minutes (`rentals.minutes`). Return it to an equipment bay before the time runs out, or it despawns. You cannot rent while you hold a ground-services job.

Job vehicles and rentals nobody is using are removed after 5 minutes when no player is within 60 m (`cleanup`).

## AI traffic settings

These live in `Config.AITraffic`.

| Setting | Default | What it does |
| --- | --- | --- |
| `enabled` | `true` | Master switch for AI aircraft |
| `groundOnly` | `true` | `true` = aircraft only appear parked on a stand, wait for crew, and leave once handled. `false` = full flying AI traffic (**beta**). |
| `maxConcurrent` | `6` | AI flights at once, server-wide |
| `spawnIntervalMs` | `45000` | Minimum time between new flights |
| `maxConcurrentCap` | `8` | Hard ceiling when traffic grows with player count. Raise it only if your server has entity headroom. |
| `scaleWithPlayers` | `true` | Adds one flight per 25 online players (`playersPerFlight`), up to `maxConcurrentCap` |
| `noAirports` | `{ 'Grapeseed' }` | Airports AI never departs from, flies to or lands at. Players still use them normally. |

Ground-only mode is what keeps the ground-services job supplied with work. Leave it on unless you want to test flying AI.

### Presets

Admins change the amount of traffic live with `/aitraffic preset <name>`. It needs the `msflightsim.admin` ace, or run it in the server console.

| Preset | Flights at once | Spawn interval |
| --- | --- | --- |
| `light` | 3 | 60 s |
| `medium` | 6 | 45 s |
| `heavy` | 12 | 25 s |

With `scaleWithPlayers` on, `maxConcurrentCap` still limits the total, so `heavy` stops at 8 unless you raise the cap. A preset lasts until the next restart. Set `maxConcurrent` and `spawnIntervalMs` in your config to make it permanent.
