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

## Chapters II–IV: the coast beyond the observatory

The expansion adds three playable chapters, each set in a new illustrated location with three mechanisms. The original chapter remains intact. Releasing its minute reveals the route through the ferry, conservatory and lighthouse. Each location presents one record in the Present and another in the Echo, with discoverable rules distributed across them. Players carry completed-chapter results forward in their journal. Sound and timing dexterity are never required.

### II · The Nameless Ferry / 无名渡站

A boat appears after the sea starts moving. Its lamps disagree about which signals are true.

1. **Ten-move crossing:** trace an orthogonal, non-repeating path from A1 to D4, avoid B1/C1, pass C2 before A4, and take exactly ten moves. The unique route is A1 → A2 → B2 → C2 → C3 → B3 → A3 → A4 → B4 → C4 → D4. Clicking a visited cell rewinds the path.
2. **Lamps’ testimony:** each lit lamp must make a true statement, and each dark lamp a false one. A says B is dark; B says C is lit; C says A and D differ; D says A is dark AND B is lit. Only A dark and B/C/D lit is consistent. The carried result is **3 truthful lamps**.
3. **Zero-potential bridge:** pressing one of nine cells flips it and its orthogonal neighbors. All must become dark. From reset, one solution presses A1, B1, B2, A3 and C3. The third hint solves the current state exactly. Every one of the 512 boards is reachable and solvable.

The restored ferry descends through a seam in the sea. Completing all three mechanisms and returning to the Present unlocks chapter III.

### III · The Glass Conservatory / 玻璃温室

The artificial sun preserves memories of borrowed minutes inside specimens.

1. **Light without a sun:** light enters from the left in row 3 of a five-by-five grid, visits six fixed mirrors, and must leave to the right in row 5. Mirrors I–VI are /, /, \\, /, /, \\. A live SVG beam follows each turn; trace termination detects loops. The target has one solution among 64 arrangements.
2. **One minute of growth:** begin with root 1, leaf 0, flower 0. Sun adds current roots to leaves; rain adds one root; mist adds current leaves to flowers then consumes one root. Mist requires a root; any value above six stops cultivation. Exactly five cycles must end at root 2, leaf 5, flower 5. The only program is Rain → Sun → Rain → Sun → Mist. The carried result is **2 roots**. Every intermediate step is visible.
3. **Unnamed specimens:** fill a four-by-four cabinet with 1–4, once per full row and column. Five givens are fixed; no box or diagonal rule applies. The unique rows are 1234 / 3412 / 4321 / 2143.

The completed specimen reveals that the coast’s last minute was divided among four locations. Completing all mechanisms and leaving in the Present unlocks chapter IV.

### IV · The Zeroth Lighthouse / 第零座灯塔

A lighthouse omitted from every map preserves the original choice.

1. **Causal archive:** order five events, numbered 1–5. Shadow immediately follows lamp; bell’s position is twice lamp’s; door comes after bell. Only Letter → Lamp → Shadow → Bell → Door satisfies all constraints.
2. **Three shutters:** independently rotate three three-by-three masks, then combine them by parity (odd coverage lights a cell, even coverage erases it). Match the observed target. From reset the unique rotations are A 90°, B 270°, C 180°. The repaired mechanism reveals door number **5**.
3. **Origin coordinates:** first restore the causal archive and shutters. Read the observatory’s third frequency (6), ferry’s truthful lamp count (3), complete memory’s roots (2), and shutter door number (5), in travel order. Enter **6–3–2–5**.

Opening the door in the Present offers two endings: carry the records to the coast, or seal the instruments and leave the light. Both recall whether the player kept or erased the tape in chapter I. Revisits preserve solved mechanisms, chapter completion, and the shared personal notebook.

### Progression and saves

Save schema version 2 retains the existing `silent-meridian.v1` storage key and migrates old version-one payloads. Chapter I keeps its original state and ending; chapters II–IV each store independent puzzle values, phase, discovered records, hint levels, started/completed flags and ending choice. Hydration validates solved values and a contiguous sequence of completed chapters before permitting unlocks. Unknown data cannot forge completion. The directory can revisit any unlocked chapter; a whole-campaign restart uses the existing confirmation dialog with explicit four-chapter wording.
