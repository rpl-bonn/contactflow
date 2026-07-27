# Video provenance

The result videos are genuine 49-frame, 8 fps ContactFlow paper-supplement
rollouts. Each full-resolution `*-ours.mp4` file is copied byte-for-byte from
the 14B rollout selected below. Each matching `*-ground-truth.mp4` is the
832×480 ground-truth pane extracted from the corresponding committed paper
composite at commit `3f931a1883f3a900a0663cfe5a1e364f97b34b2c`.

| Dataset | Our full-resolution rollout | Matching ground-truth source | Model / PSNR |
|---|---|---|---|
| DROID | `world_model_rollouts_6s_14b/droid/11_droid_14B-allmix_psnr22.75.mp4` | `world_model_composites_6s/droid/08_droid_14B-allmix_composite.mp4` | 14B all-mix / 22.75 dB |
| AgiBot | `world_model_rollouts_6s_14b/agibot/13_agibot_14B-human7k_psnr21.44.mp4` | `world_model_composites_6s/agibot/09_agibot_14B-human7k_composite.mp4` | 14B human-only / 21.44 dB |
| TACO | `world_model_rollouts_6s_14b/taco/04_taco_14B-human7k_psnr29.07.mp4` | `world_model_composites_6s/taco/03_taco_14B-human7k_composite.mp4` | 14B human-only / 29.07 dB |
| OakInk | `world_model_rollouts_6s_14b/oakink/07_oakink_14B-human7k_psnr29.93.mp4` | `world_model_composites_6s/oakink/05_oakink_14B-human7k_composite.mp4` | 14B human-only / 29.93 dB |

The two panes in every source composite were verified against the named
full-resolution rollout before extraction. The public page labels the model
generation and ground truth directly and synchronizes their playback.

`contactflow-condition.mp4` is a representative 49-frame, 8 fps ContactFlow
conditioning visualization copied from the project-owned OakInk conditioning
overlay:

`oscar_benchmark/oscar_bench/cond_overlays/oakink/scene_01__A001__seq__0b3d183d6b2e90eefd66__2023-04-27-20-38-16__pw0000__seg000__view_allocentric_right.hands_overlay.mp4`
