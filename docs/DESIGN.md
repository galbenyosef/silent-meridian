# Silent Meridian — design and solutions

**Spoilers for every puzzle and the ending below.**

## Original premise

An observer folded the coast’s final minute into an observatory so the seawall could finish closing. Tide, memory and sound hold the minute open. The player is the same observer, who has lost the memory of setting the system up. Their own records guide them back.

The visual direction is quiet, monumental stone architecture with teal night light and weathered brass. The Echo shifts the palette and reveals a different record at each location. It is an observation mechanic, not a running countdown. There are no jump scares or irreversible failures.

## Evidence network

All four rooms are accessible immediately. Each room contains a record in the Present and another in the Echo. Evidence can be read again in the journal or beside the relevant puzzle. Each solved instrument adds its result to the journal automatically.

1. **Archive:** five observers, represented by emblems. Present evidence puts Sun third and Diamond last. Echo evidence puts Star immediately before Sun and Tide before Peak. These constraints have one solution: **Tide, Star, Sun, Peak, Diamond**.
2. **Radio:** band one is Star’s position in the arrivals, band two doubles it, band three adds two to band two. **2, 4, 6**. The radio confirms that the seawall is safe.
3. **Tidal well:** four hands have marks 0–7. Control A advances I/II, B advances II/III, C advances III/IV, and D advances I once and IV twice. All hands must be at **0**. Reverse controls exactly undo a turn. The coupling matrix is invertible modulo 8, so every possible state remains solvable. The final hint calculates signed turns from the current configuration, not only from the starting state.
4. **Meridian:** after all three calibrations, the lens inscription combines the tide’s resting value, Sun’s arrival position, and radio band three. Inner to outer: **0, 3, 6**. Anchor it in the Echo, then return to the Present to release time.

## Completion

The player chooses to leave their own recorded message for the next keeper, or erase it and let the cycle end. Both choices advance the clock to **00:18**. The player can revisit the station and reread evidence, or explicitly restart from settings.

## Validation boundaries

Node tests check the uniqueness of the archive and radio solutions, reachability of all 4,096 tide configurations, dynamic hints, the Echo/Present endgame gate, both ending branches, save recovery and bilingual copy. Browser checks cover actual interactions, visual layout, language switching, persistence and a full completion route.
