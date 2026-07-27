# Video provenance

Every clip displayed on the project page is copied byte-for-byte from the
ContactFlow CoRL paper supplement at commit
`3f931a1883f3a900a0663cfe5a1e364f97b34b2c`.

All clips are 49-frame, 8 fps rollouts from a 14B ContactFlow model. The left
panel is the model prediction and the right panel is the observed ground truth.

| Public file | Paper-supplement source | Model |
|---|---|---|
| `droid.mp4` | `world_model_composites_6s/droid/08_droid_14B-allmix_composite.mp4` | 14B all-mix |
| `agibot.mp4` | `world_model_composites_6s/agibot/09_agibot_14B-human7k_composite.mp4` | 14B human-only |
| `taco.mp4` | `world_model_composites_6s/taco/03_taco_14B-human7k_composite.mp4` | 14B human-only |
| `egodex.mp4` | `world_model_composites_6s/egodex/15_egodex_14B-human7k_composite.mp4` | 14B human-only |

The public copies are verified against their source files before deployment.
