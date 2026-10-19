# Requirements

[← Back to contents](../README.md)

You need a OneSync server on game build 2699 or newer, oxmysql and ox_lib. Everything else is optional and detected automatically.

| Requirement | Needed? | Notes |
| --- | --- | --- |
| OneSync | Required | Entity lockdown `relaxed` or `inactive` recommended |
| Game build 2699+ | Required | `sv_enforceGameBuild 2699` or higher |
| oxmysql | Required | MySQL or MariaDB database |
| ox_lib | Required | |
| Framework | Required | QBox (`qbx_core`), QBCore (`qb-core`) or ESX (`es_extended`), auto-detected |
| ox_target | Optional | Without it, NPCs use an `[E]` prompt |
| ox_inventory | Optional | Only for item rewards; smuggling pays cash without it |
| PolyZone | Optional | Falls back to radius checks |
| Vehicle keys | Optional | qbx/qb-vehiclekeys, Renewed-Vehiclekeys, wasabi_carlock, okokGarage, jaksam, MrNewbVehicleKeys, qs-vehiclekeys, cd_keys, t1ger_keys, sna-vehiclekeys |
| Fuel script | Optional | LegacyFuel, ox_fuel, ps-fuel, lc_fuel, cdn-fuel, ti_fuel, ND_Fuel, Renewed-Fuel, BigDaddy-Fuel |
| Billing | Optional | esx_addonaccount + esx_billing — to back the company fund |
| City hall | Optional | qbx_cityhall, qb-cityhall, esx_cityhall — for physical licences |
| Dispatch | Optional | ps-dispatch |

## Companion resources

These are detected at runtime; MS_FlightSim works without them, but some features need them.

| Resource | Adds |
| --- | --- |
| `ms100` | The MS-100 airliner (5 liveries), flown by the AI traffic |
| `MS_FlightSim_MSE` | The ground fleet (8 vehicles, 3 trailers) used by the ground-services job |
| `MS_FlightSim_LSIA` | The LSIA airport map. Do not run another LSIA map alongside it |
| `ms_aircraft_core` (1.8.0+) + `ms41s` | The Aerial Firefighting job and the MS41s on Offshore Supply |
