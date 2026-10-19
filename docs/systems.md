# Systems

[← Back to contents](../README.md)

Beyond the missions, these systems run the airport. Each can be tuned or switched off in its own config block.

## Air traffic control

- Pilots press **F10** in the aircraft for the ATC menu: request take-off and landing (runway or helipad), plus Ground Services and the VIP limousine. Flight plans are filed in the tablet's **Flight Plan** tab. Runways lock while in use.
- Players on the pilot job at grade 2 or higher (`Config.ATCDuty.atcMinGrade`) go on duty at the airport's tower console. Each airport has one controller, signed off 15 seconds after leaving the airport or on disconnect. In open-access mode only admins can take ATC duty.
- **Tower console**: a three-screen radar on TV props. Press **E** (rebindable) to sit, use the mouse to operate it, **A/D/W** to look at the left, right and main screen, **S** to step back, and **Backspace** to leave. Admins place it with `/atcscope place` or the **Screens** tab.
- While a controller is on duty, flying a job without clearance pays half (`Config.Payouts.noATCClearancePayMult`). With no controller on duty, plans are approved automatically.
- **ATC voice**: pre-recorded English voice lines, included and free to run. See [Air traffic control](atc.md).

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
- **TCAS** warns of nearby traffic: it scans 2,500 m around a plane in the air (400 m on the ground; 1,500 m / 300 m for helicopters).
- **Wind** is the same for everyone on the server (3–18 knots plus gusts by default; weather profiles can raise it) and drifts the aircraft sideways.
- **Malfunctions** can occur in flight (3% chance every 30 seconds, more with poor maintenance): stuck gear, fuel leak, engine failure, electrical or hydraulic failure.
- **Airspace**: altitude and no-fly zones push aircraft out and add strikes; police, ambulance and fire are exempt from them. Restricted zones send escort jets; only medevac, firefighting and water-bomber job aircraft and emergency landings are exempt from those.
- **Flight recorder**: every flight is logged with route, duration and approach.
