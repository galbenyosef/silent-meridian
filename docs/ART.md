# Art provenance and prompt set

The four backgrounds were created for this project with the **built-in OpenAI image generation tool**, without reference images or assets from existing games. They are stored locally in `assets/` and are not fetched from an image service at runtime. The logo and instrument diagrams are original SVG/CSS drawn in code.

Shared direction: a first-person coastal observatory suspended in time; quiet monumental architecture, weathered brass instruments, deep teal shadows and sparse warm amber light. Landscape 16:9 compositions reserve negative space for interface text and keep clickable props distinct.

## Observatory — `assets/observatory.png`

Use case: stylized-concept. Asset type: full-screen background for an original point-and-click web puzzle game called Silent Meridian. Create a single extremely atmospheric cinematic landscape frame in 16:9. First-person eye-level view inside an immense abandoned ocean observatory, with a dramatic circular open roof through which a tiny eclipsed moon and stars can be seen. The hero object is a huge suspended antique brass armillary sphere centered slightly to the right, lit with cold misty teal light. Below it a heavy circular stone plinth with concentric geometric inlay floor, shallow black reflective water at its edge. A small brass observation telescope sits far right. A worn low desk with an open cream-paper logbook sits lower left. Tall slender ribbed columns, monumental scale, mysterious ruins, filmic volumetric god rays, restrained fog, sublime stillness. Midnight blue green, worn warm brass, sparse ivory glints. High-end hand-painted 3D environment concept art, evocative textured stone, credible material detail. Clear identifiable objects and empty dark corners for UI overlay. No person, no words, no logos, no interface, no border. Original architecture and prop design.

## Archive — `assets/archive.png`

Use case: stylized-concept. Full-screen original puzzle game background, single cinematic 16:9 frame. A mysterious abandoned archive in a coastal observatory, first-person eye-level. Tall curved stone alcoves filled with wooden document drawers, walls extending into shadow. Center-right: a waist-high brass mechanical cabinet with five vertical narrow columns and a circular ornament, like an impossible clockwork filing machine. Lower left: a desk under a warm amber lamp with a paper document. Far right: five small geometric brass emblems in a vertical display. A large cracked frosted glass window shows luminous fog. Deep perspective, muted bluegreen moonlight, floating dust, tactile antique wood, stillness and mystery. Distinct clickable props, no people, typography, logos, UI or borders. Original setting.

## Radio — `assets/radio.png`

Create one cinematic 16:9 full-screen background for an original web puzzle game, Silent Meridian. First-person view in an abandoned circular stone coastal observatory radio room at night. Main interactive prop at center-right (57% width, 58% height): huge vintage weathered brass radio console with three big tuning wheels and a small pale green CRT waveform screen, vacuum tubes. Left (21% width,54% height): reel-to-reel tape recorder with ivory flanges on a small table. Right (85% width,60% height): clipboard under a warm lamp. Arched window behind console reveals still ocean under a hazy crescent moon. Immense old dark stone walls, copper pipes and cables, deep foggy teal shadows, small amber lights, monumental quiet mystery. Highly detailed painterly cinematic 3D concept art, tactile worn metal and wood, clear silhouettes of the three interactable props, negative space in dark corners for user interface. No characters, no text, no letters, no logos, no UI, no border. Original prop and architecture design, no existing game references.

## Tidal well — `assets/cistern.png`

Use case: stylized-concept. Original atmospheric puzzle game background, single 16:9 cinematic frame. First-person eye-level view of a vast subterranean tidal chamber beneath an old coastal observatory. Vaulted stone nave, haunting teal light, shallow still water reflecting the architecture. Central-right: four large vertical brass pendulums and hanging concentric wheels mounted side by side on an enormous dark metal wall, amber lamps at their bases, a control pedestal below. Left foreground: a stone ledge with a water-level chart etched in brass. Right: a corroded mechanism with a lever and observation gauge. A round portal of pale teal light in the far left background. Thick copper pipes follow the stone walls. Sublime industrial geometry, weathered materials, mist, rich shadows with clear props, muted brass highlights. Hand-painted 3D concept art. No people, text, logos, interface or borders. Entirely original design.

The generated background is decorative: all exact numbers, symbols, clues, and interactive controls are rendered by the game itself, so gameplay does not depend on invented lettering in the artwork.

## Chapter expansion — 2026-09-08

Three additional backgrounds were generated with the same built-in OpenAI image generation tool, without reference images. The campaign now uses seven local scenes. No generated letters or numbers serve as puzzle clues.

- `assets/ferry.png`: original 16:9 coastal ferry terminal after midnight; monumental basalt arches, pearl-grey fog, wet black stone, tarnished brass chart in the left foreground, four signal lamps in the middle, electrical switching cabinet on the right, empty berth in the distance. Restrained silver-blue and amber lighting, no people, UI, text, or existing-game references.
- `assets/garden.png`: original 16:9 conservatory beneath the ocean; ribbed glass dome, suspended water, luminous roots, translucent leaves, optical bench on the left, seed vessel in the center, specimen cabinet on the right, single artificial sun. Green-gold light and slate-teal shadows; no people, text, UI, or reference assets.
- `assets/lighthouse.png`: original 16:9 interior of the zeroth lighthouse before dawn; open circular basalt hall, ash-violet sky, thin rose-gold horizon, floating brass ring, causal tablets to the left, celestial compass in the center, shutter console on the right, blank stone door beyond. Quiet painterly architectural realism; no people, lettering, UI, or existing-game references.

The nine new instruments, live beam, growth preview, route and layered-shadow diagrams are drawn by the game in HTML/CSS/SVG. Exact diagrams remain independent of the decorative backgrounds.

## Procedural 3D effects — 2026-09-09

`src/scene-depth.js` adds original WebGL geometry and shaders over the seven existing illustrations. The brass rings and faceted crystals are generated mathematically in code; no third-party model, texture, renderer or runtime service is used. Each location has a different arrangement, with shaded surfaces, subtle camera parallax, perspective particles, light shafts and water shimmer where appropriate.

The illustrated architecture remains the background rather than a walkable 3D world. Decorative movement does not change clues or puzzle rules. Clickable markers follow the same projection as their illustrated objects. The original artwork remains available whenever effects are disabled or WebGL is unavailable.
