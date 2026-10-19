# Jobs and missions

[← Back to contents](../README.md)

There are 16 paid missions plus the Airshow event. Missions are started from the Jobs tab, which opens at the cargo / job NPC of an airport. Every paid mission can be flown with a co-pilot: each pilot is paid on their own rank, plus a 20% crew bonus (`coPilotBonusPct`).

Base pay is the default before rank, crew bonus, the 10% company cut and your multipliers. Flying without ATC clearance while a controller is on duty halves it, and a damaged aircraft can reduce it to half. The last amount in a pay cell is the completion bonus. Base pay is the default before rank, company cut and your multipliers; change any of it in `Config.Payouts`.

| Mission | Licence | Minimum rank | Extra requirement | Default base pay |
| --- | --- | --- | --- | --- |
| Air Cargo Delivery | Plane | — | — | $800 + $300/km |
| Banner Towing | Plane | — | — | $600 + $200 per waypoint + $400 |
| Airshow (leader + up to 3 wingmen) | Plane | — | — | No pay — an event, started from the Other tab at LSIA |
| Passenger / Air Taxi | Plane | Private | Turbine rating | $700 + $500/km + tip |
| Sightseeing | Plane | Private | — | $1,200 + bonuses |
| Aerial Survey | Plane | First Officer | — | $400 per point + $600 |
| Crop Dusting | Plane | First Officer | — | $400 per pass + $1,500 |
| Sky Writing | Plane | Senior First Officer | — | $3,500 + $200 per point + $1,500 |
| Offshore Supply (seaplane) | Plane | Senior First Officer | — | $3,200 + $450 per box + $1,200 |
| Captain Flight (airliner) | Plane | Captain | Jet rating | $5,000 + time bonus |
| Aerial Firefighting (MS41s) | Plane | Captain | Turbine rating | $6,000 + $600 per fire + $3,000 |
| Smuggling | Plane | Instructor | 5 legal jobs, flown in a Streamer216 | $6,000 black money (no company cut) |
| Heavy Lift | Helicopter | Senior First Officer | Skylift rating | $5,000 + $500/km |
| Emergency Supply Drop | Helicopter | Captain | — | $4,500 + $600 per crate + $1,500 |
| MedEvac / SAR | Helicopter | Flight Captain | Medevac rating | $8,000 + $800 per extra survivor |
| Wildfire Suppression | Helicopter | Senior Flight Captain | Firefighting rating | $4,000 + $800 per fire + $2,000 |
| VIP Extraction | Helicopter | Senior Flight Captain | — | $12,000 + $6,000 |

## Notes

- **Emergency services**: players on the ambulance or fire job who hold a helicopter licence skip the rank and rating for MedEvac; fire-job players also skip them for Wildfire Suppression. Their job board then shows only those missions.
- **Aerial Firefighting** needs the `ms41s` resource (on `ms_aircraft_core`): scoop water and drop it on a fire front of 12 fires. Without it, the job says the water bomber is not available. Fire-job players with a plane licence can fly it too.
- **Offshore Supply** is solo or duo. With the MS41s running, the pilot chooses between the Dodo and the MS41s at the start.
- **Water operations**: amphibious aircraft listed in `Config.WaterOps.models` can land on and take off from water with no low-flying or crash penalty. The MS41s adds itself; add `'dodo', 'seabreeze', 'tula'` to include the stock seaplanes.
- **Ground Services** is a separate job anyone can do, no licence needed: refuel, pushback, cargo, baggage, catering, water, stairs and ground power for aircraft at the stands. Each service pays $140–$320 (±10%). See [Ground services](ground-services.md).
- **Heavy Lift** can also be started with `/heavylift`.
- Every mission can be switched off in `Config.Features`. The `/adminps` **Jobs** tab covers all of them except Offshore Supply and the Airshow. Ground Services is switched with `Config.GroundServices.enabled`.
