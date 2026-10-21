# What's new

The full notes ship inside the resource as `CHANGELOG_<version>.md`.

## 4.6.0 — Water Operations (October 2026)

**New**

- **Aerial Firefighting**: a job for the MS41s amphibious water bomber (needs the `ms41s` + `ms_aircraft_core` resources). Scoop from the sea, drop on 12 fires, land at base. Solo or duo.
- **WATER page on the PFD** in the MS41s: tanks, doors, probes, drop mode, arm and foam.
- **Water operations** (`Config.WaterOps`): amphibious aircraft can land on and take off from water with no low-flying or crash penalty.
- **Offshore Supply** is now solo or duo, and can be flown in the MS41s.

**Fixed**

- Failing or cancelling the practical test keeps the theory pass and the pilot's authorisation; only the fee is lost.
- Landing on the filed runway no longer voids ATC compliance and pay.
- Typing in tablet and menu text boxes no longer reaches the game (T opening chat, key bindings firing).
- City Hall auto-detection no longer turns on the physical-licence check when the bridge is disabled.
- The server console says on every start whether the pilot job is required or open access is on.
- Water landings and takeoffs (including near LSIA) are no longer flagged as off-runway, and a hard touchdown on water is no longer a crash strike.
- An empty aircraft dealer now shows the reason (for example, no base plane or helicopter licence), and the server console logs the details.
- Certificates show the character's name instead of the Steam name.
- Fixed the F8 error `@MS_FlightSim_MSE/bridge/client.lua:116: attempt to index a nil value (global 'lib')`.

**Performance**

- Wind processing runs only while you're in an aircraft.
- The tower console and ground-service board cost less while players stand near them.

**For server owners**

- Drop-in: the database migrates itself.
- With the MS41s, ensure `ms_aircraft_core` and `ms41s` before `MS_FlightSim`.
- Optional config merge: the 2026-10-09 and 2026-10-16 blocks in `config_additions.lua`.

## 4.5.0 — The Airport Update (September 2026)

The MS-100 airliner, the Ground Services job with the MS-E ground fleet, the three-screen ATC tower console, AI aircraft parked at stands, the airport taxi-network editor, sub-company levels and hired pilots, autopilot on the PFD, the flight recorder, and a large performance pass.
