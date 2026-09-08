# Verification — chapter expansion, 2026-09-08

## Automated checks

`npm test`: **35 passing tests**. `npm run build`: static `dist/` generated successfully.

- Unique solutions for the opening archive/radio and the new ferry route, lamp testimony, six mirrors, five-cycle cultivation, specimen cabinet, causal archive and shutter overlay.
- Reachability of all 4,096 tide positions, inverse operations and adaptive tide hints.
- Exact adaptive solutions for all 512 electrical-bridge boards.
- Phase gates, valid ending choices, independent chapter state, contiguous unlocks, solved-puzzle protection, narrow puzzle resets and retained started status.
- Migration of version-one saves with partial and completed first-chapter progress, language, preferences and personal notes. Invalid flags cannot forge completion.
- Both original endings and both campaign endings; full save round trips.
- Bilingual interface, story, hints, evidence, and real local PNG scene assets.

## Actual browser playthrough

The Codex in-app browser was used with real buttons and text fields on a separate `localhost:4190` origin. No solved state was injected. The user's `localhost:4188` save was kept separate.

1. Completed the original archive, radio, tide and meridian. Anchored in the Echo, returned to the Present and chose to keep the tape. Verified that the next-chapter button appeared.
2. Entered the ferry, collected Present and Echo records, tested a wrong route, backtracked and completed the ten-move crossing. Reloaded midway and resumed with the solved route intact. Switched to English. Solved the lamp statements, changed the electrical board, requested all three hints, followed its new state-dependent solution and grounded the bridge. Verified that an Echo exit requires returning to the Present.
3. Entered the conservatory, collected both records, and completed six-mirror tracing at phone size. Verified the live beam reached the receiver through all six mirrors. Tried an invalid cultivation program, reset it, and confirmed every intermediate value of the correct program. Completed the specimen cabinet. Entered a mixed Chinese/English personal deduction and verified carried results from prior chapters.
4. Entered the lighthouse. Confirmed that origin coordinates were locked before the two preceding instruments. Collected both records, reordered causal events, aligned all three shutter layers, and entered the coordinates from the carried journal results. Reached the final choice in the Present.
5. Completed the carry-records ending, reloaded and resumed at that ending, and verified the personal deduction survived. Revisited the lighthouse and completed the seal-instruments ending. Switched to Chinese and verified the final text recalls the original tape choice.
6. Revisited all earlier chapters through the directory. Completed mechanisms, phase, notes and chapter progress remained independent.

Browser console errors and warnings: **none reported** during the complete route and final layout checks.

## Responsive verification

Checked actual DOM geometry and hit testing of every scene hotspot, navigation button and side-tool button. Checks also covered horizontal overflow, chapter title/description overlap and overlap between new chapter hotspot labels.

- New chapters II–IV: both languages and both time states at **320 × 640, 390 × 844, 720 × 800, 844 × 390, and 1280 × 800**. These are 60 distinct chapter/language/time/viewport combinations; affected layouts were retested after fixes.
- Original chapter: all four rooms in both time states at **390 × 844, 720 × 800, and 844 × 390**, in English (24 combinations). All hotspot/navigation/tool centers remained usable.
- Actual phone-size screenshots were inspected for the live mirror beam, cultivation controls, shutter overlay and narrow English scene layout. Screenshots of the three new locations and mirror puzzle are retained in `docs/screenshots/`.

Fixed during verification: low scene markers near navigation, long English labels intersecting on small scenes, a long heading colliding with its description at 320 pixels, narrow-screen side-tool placement, chapter-directory started status, and current-chapter journal counts.

An independent code review found no important remaining issue after these changes. Browser emulation is not physical Android/iOS device testing. The viewport override and temporary test tab/server were cleaned up after verification.
