# Economy and pay

[← Back to contents](../README.md)

This page explains how a job's pay is worked out, which settings control money, and how to make the economy richer or tighter.

## How a job's pay is worked out

Every finished job runs the same steps, in this order. Each pilot in the cockpit is worked out separately, with their own rank and strikes.

| Step | What happens | Default |
| --- | --- | --- |
| 1. Base pay | The job's value: base pay plus distance, bonuses and objectives | Per job, in `Config.Payouts.jobs` |
| 2. Rank bonus | +2% for every rank above Student | Student +0%, Instructor +18% |
| 3. No-ATC penalty | A controller is on duty and you flew without an approved flight plan | Pay × 0.5 |
| 4. Aircraft condition | Cargo, passenger and smuggling flights pay less in a damaged aircraft | Down to × 0.5 for a wreck |
| 5. Company cut | A slice goes to the company fund. Smuggling is exempt | 10% |
| 6. Co-pilot bonus | With a co-pilot aboard, each pilot gets extra | +20% each |
| 7. Strike penalty | Pilots with crash strikes earn less | 3 strikes: −25%. 8 strikes: −75% |
| 8. Server multiplier | The **Salaries** dial in `/adminps` | × 1.00 |
| 9. Runway penalty | You took off or landed off the runway during the job | −50% |
| 10. Franchise fee | You flew a plane from your own sub-company fleet | 15% to the main company |

With no controller on duty, the no-ATC penalty never applies. The company cut is paid into the fund once per flight, from the captain's share. The co-pilot's equal share isn't paid in twice.

### Example

A Captain-rank pilot (+10%) finishes a solo medevac worth $8,000, with ATC clearance and no strikes:

1. $8,000 × 1.10 = $8,800
2. Company cut 10%: $8,800 − $880 = **$7,920** to the pilot

With a co-pilot of the same rank, both pilots get $7,920 × 1.20 = **$9,504**.

## Pay settings: Config.Payouts

`Config.Payouts` sits at the top of `config.lua`.

| Key | Default | What it does |
| --- | --- | --- |
| `payMultiplier` | `1.0` | Scales every job's base pay and bonuses. `1.5` = +50% |
| `companyCutPct` | `0.10` | Share of every legal payout that goes to the company fund. `0` turns it off |
| `rankPayPerLevel` | `0.02` | Pay bonus per rank above Student |
| `coPilotBonusPct` | `0.20` | Extra pay each pilot earns with a co-pilot aboard |
| `noATCClearancePayMult` | `0.5` | Pay multiplier for a job flown without ATC clearance. `1.0` turns the penalty off |
| `rankScore` | | How flight hours, badges and jobs add up to a rank |
| `jobs` | | Base pay and bonuses for each mission |
| `economy` | | The gauge, bands and presets of the Salaries tab |

The strike penalties live in `Config.Strikes.penalties`. The same percentage also raises that pilot's aircraft prices at the dealer. The Safety Refresher course removes one strike.

### Per-job base pay

| Job | Key | Default |
| --- | --- | --- |
| Air cargo | `delivery` | $800 + $300 per km. Each extra pallet adds 60% |
| Air taxi | `passenger` | $700 + $500 per km, up to 50% comfort tip |
| Survey | `survey` | $400 per point + $600 on completion |
| Sightseeing | `sightseeing` | $1,200, up to 40% satisfaction bonus |
| Captain flight | `captain` | $5,000 + $10 for every second left on the clock |
| Medevac | `medevac` | $8,000, $800 per extra survivor, −$200 for a rough landing |
| Heavy lift | `heavylift` | $5,000 + $500 per km. A failed drop pays 30% |
| Crop dusting | `dusting` | $400 per pass + $1,500 on completion |
| Wildfire suppression | `firefight` | $4,000 + $800 per fire + $2,000 on completion |
| Banner towing | `banner` | $600 + $200 per waypoint + $400 on completion |
| Sky writing | `skywriting` | $3,500 + $200 per point + $1,500 on completion. A partial display pays 40% |
| Supply drop | `supplydrop` | $4,500 + $600 per crate + $1,500 on completion |
| VIP extraction | `vipextract` | $12,000 + $6,000 on completion |
| Offshore supply | `dodo` | $3,200 + $450 per box + $1,200 on completion |
| Smuggling | `smuggling` | $6,000 in black money |

Cargo offers also vary by ±25% each time the board refreshes.

## Price settings: Config.Prices

| Key | Default | What it does |
| --- | --- | --- |
| `aircraftPriceMultiplier` | `1.0` | Scales every aircraft's buy and rent price |
| `rentDepositPct` | `0.40` | Rental deposit, as a share of the aircraft's value |
| `rentLatePenaltyPct` | `0.25` | Share of the deposit lost when a rental comes back late |
| `rentDestroyPenaltyPct` | `0.50` | Share of the deposit lost when a rental is destroyed |
| `sellBackPct` | `0.30` | What the dealer pays back, as a share of the purchase price |
| `insurancePremiumPct` | `0.01` | Insurance premium for 30 days, as a share of the purchase price |
| `passiveIncomePct` | `0.01` | Only used if the old passive income is switched back on (off by default) |
| `fees.fuelPerGallon` | `8` | Fuel price |
| `fees.repairPerPoint` | `10` | Repair price per point |
| `fees.paint` | `5000` | Paint job |
| `fees.trainingPlane` | `55000` | Plane practical training |
| `fees.trainingHeli` | `45000` | Helicopter practical training |
| `fees.theoryExam` | `1500` | Theory exam |
| `fees.strikeRetraining` | `20000` | Safety Refresher course |

Rentals last 120 minutes.

## The Salaries tab

`/adminps` → **Salaries** holds the server multiplier (step 8 above). It changes pay live, without a restart, and is saved in the database, so it survives restarts and updates.

1. Type a value between 0.1 and 10, or click a preset to fill it in.
2. Click **SAVE**.

| Preset | Value | Use it for |
| --- | --- | --- |
| **Legacy** | Keeps what you have | Leave pay as it is. Every server that never picked a preset shows Legacy |
| **Low** | 0.50 | A serious, slow-progress economy |
| **Standard** | 1.00 | The default scale |
| **High** | 2.00 | Fast progression |

A saved value that matches no preset shows as **Custom**.

The gauge shows which band your multiplier falls in:

| Band | Multiplier |
| --- | --- |
| Low | 0.10 – 0.71 |
| Standard | 0.71 – 1.41 |
| High | 1.41 – 2.83 |
| Very high | 2.83 – 5.66 |
| Extreme | 5.66 – 10.0 |

The tab also shows typical pay per run for each progression tier, worked out from your job settings. If `Config.Payouts.payMultiplier` isn't 1.0, the tab shows both dials and their product.

The Salaries dial only touches mission pay. Ground services, sub-company dispatch and company transfers keep their own numbers.

## Where to make changes

`Config.Payouts` and `Config.Prices` are applied once, while `config.lua` loads. That means:

- **Editing them in `config.lua` works.** Restart the resource afterwards. An update replaces `config.lua`, so note your values and set them again (see [Updating](updating.md)).
- **Setting them in `config_overrides.lua` mostly doesn't**, because that file loads after the values were already applied. The one exception is `rankPayPerLevel`, which is read live.
- In `config_overrides.lua`, set the live setting instead. Those lines survive updates.

| Panel key | Live setting for `config_overrides.lua` |
| --- | --- |
| `companyCutPct` | `Config.CompanyCutPct` |
| `coPilotBonusPct` | `Config.CoPilot.bonusPct` |
| `noATCClearancePayMult` | `Config.ATCDuty.noClearancePayMult` |
| `rankPayPerLevel` | `Config.Payouts.rankPayPerLevel` (works as is) |
| `fees.fuelPerGallon` | `Config.Economy.fuelCostPerGallon` |
| `fees.repairPerPoint` | `Config.Economy.repairCostPerPoint` |
| `fees.paint` | `Config.CustomizePed.fee` |
| `fees.trainingPlane` · `fees.trainingHeli` | `Config.Training.plane.fee` · `Config.Training.heli.fee` |
| `fees.theoryExam` | `Config.TheoryExam.fee` |
| `sellBackPct` | `Config.SellBackPercent` |
| `rentDepositPct` | `Config.RentDepositPercent` |

## Tuning recipes

**Pay 25% more for every mission.** No file edit: `/adminps` → Salaries → type `1.25` → **SAVE**.

**Pay 25% more by file.** In `config.lua`:

```lua
Config.Payouts = {
    payMultiplier   = 1.25,
```

**Smaller company cut.** In `config_overrides.lua`:

```lua
Config.CompanyCutPct = 0.05   -- 5%
```

**Turn the company cut off.**

```lua
Config.CompanyCutPct = 0
```

**Reward flying with a co-pilot more.**

```lua
Config.CoPilot.bonusPct = 0.30   -- +30% each
```

**Bigger reward for rank.**

```lua
Config.Payouts.rankPayPerLevel = 0.03   -- Instructor earns +27%
```

**Softer no-ATC penalty.**

```lua
Config.ATCDuty.noClearancePayMult = 0.75   -- lose 25% instead of 50%
```

**Cheaper flight school.**

```lua
Config.Training.plane.fee = 30000
Config.Training.heli.fee  = 25000
Config.TheoryExam.fee     = 1000
```

**Cheaper fuel.**

```lua
Config.Economy.fuelCostPerGallon = 5
```
