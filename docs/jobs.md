# Jobs and missions

[← Back to contents](../README.md)

There are 17 missions, from entry level up. All start at a job NPC at an airport, and all can be flown with a co-pilot, who is paid on their own rank. Base pay is the default before rank, company cut and your multipliers; change any of it in `Config.Payouts`.

| Mission | Licence | Minimum rank | Extra requirement | Default base pay |
| --- | --- | --- | --- | --- |
| Air Cargo Delivery | Plane | — | — | $800 + $300/km |
| Banner Towing | Plane | — | — | $600 |
| Airshow (up to 4 pilots) | Plane | — | — | Event, started at LSIA |
| Passenger / Air Taxi | Plane | Private | Turbine rating | $700 + $500/km + tip |
| Sightseeing | Plane | Private | — | $1,200 + bonuses |
| Aerial Survey | Plane | First Officer | — | $400 per point + $600 |
| Crop Dusting | Plane | First Officer | — | $400 per pass + $1,500 |
| Sky Writing | Plane | Senior First Officer | — | $3,500 |
| Offshore Supply (seaplane) | Plane | Senior First Officer | — | $3,200 + $450 per box |
| Captain Flight (airliner) | Plane | Captain | Jet rating | $5,000 + time bonus |
| Aerial Firefighting (MS41s) | Plane | Captain | Turbine rating | $6,000 + $600 per fire + $3,000 |
| Smuggling | Plane | Instructor | 5 legal jobs | $6,000 black money |
| Heavy Lift | Helicopter | Senior First Officer | Skylift rating | $5,000 + $500/km |
| Emergency Supply Drop | Helicopter | Captain | — | $4,500 + $600 per crate |
| MedEvac / SAR | Helicopter | Flight Captain | Medevac rating | $8,000 |
| Wildfire Suppression | Helicopter | Senior Flight Captain | Firefighting rating | $4,000 + $800 per fire |
| VIP Extraction | Helicopter | Senior Flight Captain | — | $12,000 + $6,000 |

## Notes

- **Emergency services**: players on the ambulance or fire job who hold a helicopter licence skip the rank and rating for MedEvac and Wildfire Suppression.
- **Aerial Firefighting** needs the `ms41s` and `ms_aircraft_core` resources: scoop water from the sea and drop it on a fire front of 12 fires. Without them, the job reports the aircraft as unavailable.
- **Offshore Supply** is solo or duo. With the MS41s running, the pilot chooses between the Dodo and the MS41s at the start.
- **Water operations**: amphibious aircraft listed in `Config.WaterOps.models` can land on and take off from water with no low-flying or crash penalty. The MS41s adds itself; add `'dodo', 'seabreeze', 'tula'` to include the stock seaplanes.
- **Ground Services** is a separate job anyone can do, no licence needed: refuel, pushback, cargo, baggage, catering, water, stairs and ground power for aircraft at the stands. Each service pays $140–$320.
- Every mission can be switched off in `Config.Features` or the `/adminps` **Jobs** tab.
