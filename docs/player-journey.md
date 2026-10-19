# Player journey

[← Back to contents](../README.md)

A new player goes from the flight school to their first paid job in three steps: theory exam, practical test, then the job board. Everything after that is earned by flying.

## 1. Get a licence

At the Flight Instructor NPC at LSIA. Admins can add instructors at other airports from `/adminps`.

| Licence | Theory exam | Practical test | Aircraft |
| --- | --- | --- | --- |
| Plane | $1,500 · 15 questions · 70% to pass | $55,000 · 8 phases | Mammatus |
| Helicopter | $1,500 · 15 questions from a separate bank | $45,000 · 6 phases | Conada |

- **Plane practical**: controls brief, taxi, take-off, climb to 3,000 ft, land at Sandy Shores, depart Sandy, return to LSIA, park on the apron.
- **Helicopter practical**: brief, hover, Mission Row, an in-air checkpoint in the hills, return to LSIA, land.
- A failed theory exam can be retaken after 10 minutes.
- Failing or cancelling the practical keeps the theory pass for the rest of the session; only the fee is lost.

**When the pilot job is required** (`Config.PilotAuthorization.enabled = true`), a player without it must be authorised by a player on the pilot job before taking the exam or the practical. The authorisation lasts until they disconnect. Players on the pilot job train without it.

## 2. Earn specialist ratings

From the Flight Instructor NPC. Ratings cost nothing; each practical is a real mission, and a failed attempt can be retried after 10 minutes.

| Rating | Needs | Flight hours | Completed jobs |
| --- | --- | --- | --- |
| Multi-engine | Plane licence | 20 | 8 |
| Turbine | Multi-engine | 30 | 12 |
| Jet | Turbine | 40 | 15 |
| Skylift | Helicopter licence | 25 | 10 |
| Medevac | Skylift | — | 5 |
| Firefighting | Medevac | — | 5 |

Players on the ambulance job need only the helicopter licence for Medevac; fire-job players need only the helicopter licence for Medevac and Firefighting.

## 3. Rank up

Rank score = flight hours + a bonus for badges and completed jobs (the bonus is capped at 20). Each rank above Student adds 2% to pay, so an Instructor earns 18% more.

| Rank | Score |
| --- | --- |
| Student | 0 |
| Amateur | 4 |
| Private | 8 |
| First Officer | 14 |
| Senior First Officer | 20 |
| Captain | 28 |
| Flight Captain | 40 |
| Senior Flight Captain | 60 |
| Commercial Captain | 80 |
| Instructor | 100 |

## 4. Own aircraft

The dealer NPC at LSIA sells and rents 29 aircraft. Buying needs the matching base licence (plane or helicopter).

| Term | Default |
| --- | --- |
| Rental length | 120 minutes |
| Rental deposit | 40% of the price |
| Selling back | 30% of the price |
| Insurance | 1% of the price per 30 days |

Owners store aircraft in the hangar and pay for fuel ($8/gal), repairs ($10/point), maintenance and paint ($5,000).

## 5. Fly safely

Crashes add strikes.

| Strikes | Effect |
| --- | --- |
| 1–2 | Warning |
| 3 | Dealer prices +25% |
| 5 | Dealer closed to them for 24 hours |
| 8 | Dealer prices +75% |
| 10 | Permanently blacklisted from the dealer until an admin lifts it |

The **Safety Refresher** course ($20,000, once per 24 hours, needs at least one strike) removes one strike. It ends with one theory question and 60 seconds to answer; a wrong answer or a timeout loses the fee and removes nothing. It never lifts a blacklist. The logbook shows each pilot's safety record.

## The pilot tablet

`/pilottablet` opens the pilot's own tabs: Logbook, Badges, Map, Flight Plan and Sub-Company, plus Company for captains. The other tabs open at their NPCs:

| Tab | Opens at |
| --- | --- |
| Jobs, Routes, Other | Cargo / job NPC |
| Training | Flight Instructor |
| Shop | Aircraft dealer |
| Paint | Painter |
| Services | Fuel and service zone |

`/myflights` lists your 25 most recent flights. A flight is recorded when it lasts at least 30 seconds and covers at least 500 m.
