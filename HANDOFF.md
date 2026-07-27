# ContactFlow project-page handoff

Updated: 2026-07-27

## Current public state

- Repository: `git@github.com:rpl-bonn/contactflow.git`
- Public page: <https://rpl-bonn.github.io/contactflow/>
- Branch: `main`
- Deployed website commit before this handoff: `757a89e`
- GitHub Pages workflow: `.github/workflows/pages.yml`

The hero now uses the user-selected **CF-X-D-R1-SLOW50** Contact Flow
visualization. The previously selected prediction/ground-truth result videos
were not changed.

## Selected hero condition

Website asset:

`assets/videos/contactflow-condition.mp4`

Media contract:

- H.264 / YUV420p
- 832×480
- 24 fps
- 97 encoded frames
- 4.041667 seconds
- 50% playback speed relative to the selected R1 rendering
- SHA-256:
  `111abe04a4cc42c69be35bdb0b32dda9af21b10ec2555ae73b156eb521fc6220`

Visualization semantics:

- Red is the contact surface at the current frame.
- Orange, yellow, green, cyan, blue, and violet progress into future frames.
- R1 includes the current contact and the next four consecutive frames.
- Temporal colors change only the visualization. The Contact Flow geometry and
  its registration to the RGB frames are preserved.

Authoritative OakInk training sample:

`scene_01__A007__seq__0b666c7b299d875e5f1e__2023-04-21-11-38-16__pw0015__seg000__view_allocentric_right`

The source RGB and control videos came from the exact final all-mix training
root on JUPITER:

`/e/scratch/cosmoscf/derived_v1/final_datasets/real_all_20260523/common/vace/oakink_windows_832x480_49f`

Do not replace this asset with material from the obsolete local
`docker_containers/cosmos-predict2.5` backups.

## Local reproducibility material

The selected rendered file and renderer currently live at:

- `/home/user/azirar/.openclaw/workspace/contactflow-rainbow-live/CFXD_RAINBOW_SHORT_SLOW50.mp4`
- `/home/user/azirar/.openclaw/workspace/contactflow-rainbow-live/render_future_rainbow.py`

The renderer also produced short, medium, and long future-trail variants. Only
the short R1 variant slowed to 50% was approved for the website.

## Website integration

`index.html` labels the hero as:

- `CONTACTFLOW CONDITION`
- `FUTURE CONTACT · 3D TRAJECTORIES`

Its caption is:

`Color traces the contact surface through the next four frames.`

The detailed media provenance is recorded in
`assets/videos/README.md`.

## Verification performed

- Served the static page locally and received HTTP 200 for the page and video.
- Verified the browser asset is H.264, 832×480, and web-compatible.
- Pushed commit `757a89e` to `origin/main`.
- GitHub Pages deployment run `30282464944` completed successfully.
- Downloaded the production video from the public page and verified that its
  SHA-256 exactly matches the repository asset.

## Cleanup already completed

- Deleted the rejected Telegram candidate batches.
- Permanently removed approximately 1.1 GB of obsolete local Contact Flow
  renders, review caches, and old February pipeline-output backups.
- No JUPITER data, source repository, paper result video, or selected website
  result asset was deleted.

