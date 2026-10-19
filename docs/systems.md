# Systems

[← Back to contents](../README.md)

Beyond the missions, these systems run the airport. Each can be tuned or switched off in its own config block.

## Air traffic control

- Pilots press **F10** for the ATC menu: request taxi, take-off and landing, file flight plans. Runways lock while in use.
- Players on the pilot job at grade 2 or higher can go on duty as controller from the HUD or the tower console. Each airport has one controller, signed off automatically when they leave.
- **Tower console**: a three-screen radar on TV props. Press **E** to sit, use the mouse to operate it, and **W/A/D/S** to move between screens. Admins place it with `/atcscope place` or the **Screens** tab.
- Flying a job without ATC clearance pays less (half by default, set in `Config.Payouts`).
- **ATC voice**: pre-recorded English voice lines with ATIS, included and free to run.

## AI traffic and ground services

- AI aircraft park at real stands, shut down and call for ground crew. They appear only when crew are signed on, and are removed when the job is done.
- Out of the box they never taxi or fly. Flying AI (pushback, taxi, departure, approach, go-around) is a beta you enable with `Config.AITraffic.groundOnly = false`. Set the amount with `/aitraffic preset light|medium|heavy`.
- **Ground crew** sign on at the board (**E**), claim a job, and get the right ground vehicle for it. Pilots can also request services for their own aircraft.
- **Taxi network**: AI follow a taxiway graph. LSIA ships traced; admins draw other airports in game with `/airportnav`, and drawn layouts survive updates.

## Companies

- **Main company**: captains (top pilot grade) manage the company fund, employees and salaries in the tablet **Company** tab. With `Config.CompanyBridge.mode = 'society'` the fund is your ESX society account, so esx_billing invoices land in it.
- **Sub-companies**: any licensed pilot who owns an aircraft can found one ($25,000). They level up through 20 levels, hire AI pilots, maintain up to 10 aircraft, and dispatch real AI flights carrying their tail logo. Headquarters takes a 15% cut.

## Cockpit and flight model

- Movable, resizable PFD/HUD with attitude indicator, TAWS/GPWS, stall warnings and engine on/off.
- Autopilot with heading bug and altitude selector (up to 8,500 ft), autoland for planes and auto-hover for helicopters.
- **TCAS** shows nearby traffic within 12 km.
- **Wind** is the same for everyone on the server (3–18 knots plus gusts) and drifts the aircraft sideways.
- **Malfunctions** can occur during jobs (3% chance every 30 seconds, more with poor maintenance): stuck gear, fuel leak, engine, electrical or hydraulic failure.
- **Airspace**: altitude and no-fly zones push aircraft out and add strikes; restricted zones send escort jets. Emergency services are exempt.
- **Flight recorder**: every flight is logged with route, duration and approach.
