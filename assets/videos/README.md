# Video provenance

The result videos are genuine 49-frame, 8 fps ContactFlow paper-supplement
rollouts. Each full-resolution `*-ours.mp4` file is copied byte-for-byte from
the 14B rollout selected below. Each matching `*-ground-truth.mp4` is the
832×480 ground-truth pane extracted from the corresponding committed paper
composite at commit `3f931a1883f3a900a0663cfe5a1e364f97b34b2c`.

| Dataset | Our full-resolution rollout | Matching ground-truth source | Model / PSNR |
|---|---|---|---|
| DROID | `world_model_rollouts_6s_14b/droid/10_droid_14B-allmix_psnr24.16.mp4` | `world_model_composites_6s/droid/07_droid_14B-allmix_composite.mp4` | 14B all-mix / 24.16 dB |
| GenieSim | `world_model_rollouts_6s_14b/geniesim/16_geniesim_14B-human7k_psnr27.91.mp4` | `world_model_composites_6s/geniesim/11_geniesim_14B-human7k_composite.mp4` | 14B human-only / 27.91 dB |
| TasteRob | `world_model_rollouts_6s_14b/tasterob/20_tasterob_14B-human7k_psnr28.89.mp4` | `world_model_composites_6s/tasterob/14_tasterob_14B-human7k_composite.mp4` | 14B human-only / 28.89 dB |
| OakInk | `world_model_rollouts_6s_14b/oakink/08_oakink_14B-human7k_psnr29.72.mp4` | `world_model_composites_6s/oakink/06_oakink_14B-human7k_composite.mp4` | 14B human-only / 29.72 dB |

The two panes in every source composite were verified against the named
full-resolution rollout before extraction. The public page labels the model
generation and ground truth directly and synchronizes their playback.

`contactflow-condition.mp4` is the selected 50%-speed rainbow future-flow
visualization derived from the exact OakInk training pair
`scene_01__A007__seq__0b666c7b299d875e5f1e__2023-04-21-11-38-16__pw0015__seg000__view_allocentric_right`.
Red marks the current contact surface; orange through violet show the next four
frames. The temporal coloring changes only the visualization: the projected
ContactFlow geometry and its registration to the RGB sequence are preserved.
