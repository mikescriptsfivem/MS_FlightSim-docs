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
| ox_inventory | Optional | On QBCore/QBox, smuggling pays black money as an item with it; without it, to the dirty-money account (`Config.QBDirtyMoneyAccount`, default `cash`). ESX always uses the `black_money` account |
| Vehicle keys | Optional | Keys are given automatically with qbx_vehiclekeys, qb-vehiclekeys, Renewed-Vehiclekeys, wasabi_carlock, okokGarage, jaksam vehicle keys and MrNewbVehicleKeys |
| Fuel script | Optional | LegacyFuel, ox_fuel, ps-fuel, lc_fuel, cdn-fuel, ti_fuel, ND_Fuel, Renewed-Fuel, BigDaddy-Fuel |
| Billing | Optional | esx_addonaccount + esx_billing — to back the company fund |
| City hall | Optional | qbx_cityhall, qb-cityhall, esx_cityhall — for physical licences |
| Dispatch | Optional | ps-dispatch |

## Companion resources

All optional: MS_FlightSim runs without them, and the features that need one switch off.

| Resource | Adds |
| --- | --- |
| `ms100` | The MS-100 airliner (5 liveries), flown by the AI traffic |
| `MS_FlightSim_MSE` | The ground fleet (8 vehicles, 3 trailers) used by the ground-services job |
| `MS_FlightSim_LSIA` | The LSIA airport map. Do not run another LSIA map alongside it |
| `ms_aircraft_core` (1.8.0+) + `ms41s` | The Aerial Firefighting job and the MS41s on Offshore Supply |
