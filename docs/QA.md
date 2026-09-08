# Verification — 2026-09-08

## Automated checks

`npm test`: 19 passing tests. These cover:

- A unique solution for the archive constraints and the derived radio frequencies.
- Reachability of all 4,096 tide states, inverse gear operations, and adaptive hints from the current configuration (including the final starting state).
- Final-orbit dependencies and the Echo → Present completion gate.
- Both endings, validated save recovery, local-storage failure handling, and personal-note persistence.
- Chinese/English copy completeness, translation key resolution, and local PNG scene assets.

`npm run build`: static `dist/` output completed successfully.

## Actual browser checks

Used the Codex in-app browser and its real buttons, controls and text fields, without injecting a solved state.

- Started a fresh Chinese game, collected both archive clues, verified incorrect-answer feedback, then solved the archive.
- Reloaded, resumed, switched to English, collected and solved the radio with visible values and optional signal playback.
- Collected both tidal clues. Reset the tide to the final starting configuration, changed a dial, and verified that the final hint updated. Followed that plan to all zeroes and calibrated.
- Read the final inscription and unfinished letter. Confirmed the final instrument offers a time shift in the Present, anchored the correct orbits in the Echo, returned to the Present and reached the ending choice.
- Completed both endings. Reloaded a completed game and verified the ending and a mixed Chinese/English personal note survived.
- No console errors or warnings were reported during this route.

## Responsive checks

For every room in both time states, checked that the hotspot buttons were inside the viewport and that their centers were hit-testable (not behind navigation). All **32 combinations** passed; none produced horizontal page overflow.

| Viewport | Purpose | Room/time combinations |
| --- | --- | --- |
| 844 × 390 | Short landscape phone | 8 |
| 820 × 1180 | Portrait tablet | 8 |
| 1280 × 800 | Desktop | 8 |
| 390 × 844 | Portrait phone | 8 |

Portrait phone screenshots were also inspected for the tide and final-orbit controls; both were operated successfully. The viewport override was reset after testing.

The code review found portrait cropping and short-landscape navigation overlap. Both were fixed and checked again. Edge clue labels now face inward; the journal retains an accessible name when its visual text is hidden.

The temporary playthrough was cleared through the game’s own restart confirmation, leaving an opening game for the user. This is a browser-engine check, not a test on physical Android/iOS devices.
