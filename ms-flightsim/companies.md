# Companies

Every pilot works for one main company run by its captains, and any licensed pilot who owns an aircraft can also found a sub-company of their own.

## The main company

### Captains

A captain is a player on the pilot job at or above `Config.PilotAuthorization.captainGrade`. The shipped value is `3`. Set it to the top grade of your pilot job, or nobody can reach it.

Captains see a **Company** tab in the pilot tablet (`/pilottablet`). The tab follows the player's real pilot-job grade, so it also works in open-access mode for anyone you set to the pilot job at captain grade.

### What captains can do

| Action | How it works |
| --- | --- |
| Company fund | See the balance and the transaction log |
| Withdraw | Take part or all of the fund into your bank |
| Hire | Enter an online player's server ID. They are set to the pilot job at grade 0. |
| Fire | Only pilots below your own grade. They are set to unemployed. Works on offline pilots too. |
| Promote or demote | Set a pilot's grade. Only to a grade below your own, and only for pilots below you. |
| Bonus | Pay an online pilot up to $100,000 from the fund. Not to yourself. |
| Set salaries | Set a salary per grade, from $0 to $50,000 |
| Pay salaries | Pays every online pilot their grade's salary once, from the fund |

Salaries are only paid when a captain presses **Pay salaries**. Nothing is paid on a timer. If the fund cannot cover the total, nobody is paid.

### The company cut

10% of every legal job payout goes into the company fund. Set it with `Config.Payouts.companyCutPct` (`0.10`). Set it to `0` to turn the cut off.

- Smuggling is exempt, because it pays black money.
- The cut is taken after all other pay multipliers and before the co-pilot split, so a two-pilot flight is cut once.

### Where the fund lives: `Config.CompanyBridge`

| `mode` | Company tab | Company cut | Where the fund is |
| --- | --- | --- | --- |
| `'internal'` (default) | Shown | Taken | MS_FlightSim's own database table |
| `'society'` | Shown | Taken | An `esx_addonaccount` society account. Invoices paid through `esx_billing` land in the fund. Withdrawals, bonuses and salaries draw from it. ESX only. |
| `'external'` | Hidden | Still taken and logged | Your own boss menu handles hiring and the fund |
| `'disabled'` | Hidden | Not taken | No fund. Pilots keep 100% of their pay. |

Settings for `'society'` mode:

| Setting | Default | What it does |
| --- | --- | --- |
| `societyAccount` | `'society_pilot'` | The society account that holds the fund. Use `society_<your pilot job>`. |
| `autoCreateSociety` | `true` | Creates the account at start-up if it is missing |
| `autoDetect` | `true` | Prints known billing and banking resources found at start-up. It never changes the mode for you. |

In `'external'` and `'disabled'` modes the pilot-job grade still controls captain abilities everywhere else in the script.

## Sub-companies

A sub-company is your own small airline under the main company. You tag aircraft you own into its fleet, hire AI pilots, and send them out on real AI flights. The aircraft stay personally yours.

Open it from the **Sub-Company** tab in the pilot tablet.

### Founding one

You need:

- a plane or helicopter licence, and
- at least one aircraft you own.

Founding costs $25,000 (`Config.SubCompany.creationCost`). The name must be 3 to 32 characters. You can own one sub-company. Disbanding it removes every aircraft from the fleet but keeps them yours, and the founding fee is not refunded.

### Levels

The company earns XP for each run it collects: 25 XP per run plus 0.01 XP per dollar of the run's pay. Levels raise how many aircraft, runs and pilots you can have. There are 20 levels.

| Level | Total XP | Fleet aircraft | Runs at once | Pilot seats |
| --- | --- | --- | --- | --- |
| 1 | 0 | 2 | 1 | 1 |
| 3 | 689 | 3 | 1 | 1 |
| 4 | 1,121 | 3 | 1 | 2 |
| 5 | 1,583 | 4 | 2 | 2 |
| 7 | 2,575 | 5 | 2 | 3 |
| 9 | 3,637 | 6 | 3 | 3 |
| 10 | 4,189 | 6 | 3 | 4 |
| 13 | 5,917 | 8 | 3 | 5 |
| 16 | 7,734 | 9 | 3 | 6 |
| 17 | 8,357 | 10 | 3 | 6 |
| 19 | 9,626 | 10 | 3 | 7 |
| 20 | 10,271 | 10 | 3 | 7 |

The fleet never goes above `maxFleet` (10) and runs at once never go above `dispatch.maxActive` (3). Set `levels.enabled = false` to give every company the full allowance from the start.

### Fleet

- Only fixed-wing aircraft can join a fleet. Helicopters cannot.
- Only aircraft you own (not rented) can be added.
- An aircraft out on a run cannot be retrieved, sold or sent again until it lands and is collected.

### Hiring AI pilots

A fleet aircraft needs a pilot assigned before it can fly a run. Each pilot flies one aircraft.

| Setting | Default | What it means |
| --- | --- | --- |
| Applicants | 4 | Shown in the hiring pool, which changes every 30 minutes |
| Skill | 1 to 5 | Better pilots earn more per run and stay longer when idle |
| Hiring fee | skill × $9,000 | Paid once from your money |
| Wage | skill × 2.5% | Taken from each run they fly. Never charged on a timer. |
| Pay bonus | skill × 5% | Added to each run they fly |
| Experience | 12 XP per run | Every 120 XP raises their skill by 1, up to 5 |

**Morale.** Pilots start at 100 morale. After 12 hours without a run, morale starts to drop by 6 per hour, more slowly for higher skill. Each run restores 30. At 0 the pilot resigns. You cannot fire a pilot while their aircraft is in the air.

### Maintenance

Each run uses the aircraft's own fuel and condition, the same values it has when you fly it yourself.

| Item | Default |
| --- | --- |
| Fuel used by a 15-minute run | 16% (longer runs use more) |
| Wear from a 15-minute run | 5% (longer runs wear more) |
| Lowest fuel to send it out | 15% |
| Lowest condition to send it out | 25% |
| Refuel price | $14 per percent |
| Repair price | $95 per percent |

Refuel and repair from the tablet. You pay from your own money.

### Dispatching flights

Pick a fleet aircraft with a pilot and a route, and send it.

| Route | From | To |
| --- | --- | --- |
| Short Haul | LSIA | Sandy Shores |
| Regional | LSIA | Grapeseed |
| Long Haul | LSIA | Cayo Perico |

1. The run becomes a real AI flight. It departs the origin and lands at the destination in your aircraft model, painted your company colour.
2. Its callsign is built from your company name. For example, Mike Air Cargo flies as MAC123.
3. If you set a tail logo, the flight carries it.
4. You are told when it lands. Collect the pay in the tablet.

How the pay is worked out:

- $55 per km flown, at least $150 per run.
- +5% for every $100,000 the aircraft cost, up to +75%.
- Each aircraft and route gets its own price within ±20%, changed every 15 minutes. The price shown in the tablet is what the run pays.
- The pilot's pay bonus is added when the run is sent.

At most 2 company flights are in the air at once across the server. If no AI slot is free, the run goes on a timetable instead and still pays. Runs to an airport in `Config.AITraffic.noAirports` (Grapeseed by default) always use the timetable.

If a live flight does not make it, it pays nothing and the aircraft comes back damaged.

### Tail logo

Paste a FiveManage image link (https) into the Sub-Company tab. The logo shows on fleet aircraft the next time they leave the hangar, and on every company flight. Leave the field empty to remove it.

### Franchise cut

Headquarters takes 15% (`franchiseCut`) of:

- every collected run, and
- your share of any paid job you fly yourself in a fleet aircraft.

It goes into the main company fund. This is on top of the main [company cut](#the-company-cut).

### Leaderboard

The tablet shows the top 10 sub-companies by gross earnings (`leaderboardTop`).

## Commands

| Command | What it does |
| --- | --- |
| `/subco create <name>` | Found a sub-company |
| `/subco rename <name>` | Rename it |
| `/subco fleet` | Show your earnings and owned aircraft, with their IDs |
| `/subco assign <id>` | Add an owned aircraft to the fleet |
| `/subco unassign <id>` | Remove it from the fleet |
| `/subco board` | Show the leaderboard |
| `/subco disband` | Close the sub-company |
| `subcodiag` *(server console)* | Checks the sub-company database tables. Use it when the Sub-Company tab says the server did not respond. |
