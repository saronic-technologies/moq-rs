window.BENCHMARK_DATA = {
  "lastUpdate": 1795417765419,
  "repoUrl": "https://github.com/saronic-technologies/moq-rs",
  "entries": {
    "MoQ nightly costs": [
      {
        "commit": {
          "author": {
            "name": "Luke Curley",
            "username": "kixelated",
            "email": "kixelated@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "2dcb5f89948d9d2ff2822e795ccec6537f0e173a",
          "message": "feat(json)!: moq-json writes take a value and a time (#8938)\n\nCo-authored-by: quest fixer <quest-fixer@localhost>",
          "timestamp": "2026-11-17T17:28:45Z",
          "url": "https://github.com/saronic-technologies/moq-rs/commit/2dcb5f89948d9d2ff2822e795ccec6537f0e173a"
        },
        "date": 1795417764814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=1/updates=20/probes=0/us_per_update",
            "value": 24.817,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=1/updates=200/probes=0/us_per_update",
            "value": 19.084,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=8/updates=20/probes=0/us_per_update",
            "value": 17.469,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=8/updates=200/probes=0/us_per_update",
            "value": 35.157,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=32/updates=20/probes=0/us_per_update",
            "value": 44.043,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-support/probe=promise/renditions=32/updates=200/probes=0/us_per_update",
            "value": 40.145,
            "unit": "us"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=0ms/ns_per_callback",
            "value": 326.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=120/warmup=80ms/ns_per_callback",
            "value": 160.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=0ms/ns_per_callback",
            "value": 135.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=960/warmup=80ms/ns_per_callback",
            "value": 90.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=0ms/ns_per_callback",
            "value": 89.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=1/frames=2880/warmup=80ms/ns_per_callback",
            "value": 110.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=0ms/ns_per_callback",
            "value": 38.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=120/warmup=80ms/ns_per_callback",
            "value": 41.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=0ms/ns_per_callback",
            "value": 33.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=960/warmup=80ms/ns_per_callback",
            "value": 32.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=0ms/ns_per_callback",
            "value": 38.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=16/frames=2880/warmup=80ms/ns_per_callback",
            "value": 52.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=0ms/ns_per_callback",
            "value": 35.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=120/warmup=80ms/ns_per_callback",
            "value": 38.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=0ms/ns_per_callback",
            "value": 34.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=960/warmup=80ms/ns_per_callback",
            "value": 31.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=0ms/ns_per_callback",
            "value": 30.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/audio-warmup/decoders=64/frames=2880/warmup=80ms/ns_per_callback",
            "value": 30.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 7282,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 17090,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 52745,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 251436,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 13527,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 42404,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 198661,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 48796,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=estimate/ns_per_op",
            "value": 55519,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=estimate/ns_per_op",
            "value": 54885,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=estimate/ns_per_op",
            "value": 264901,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 8207,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 17261,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 52347,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 219995,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=demand/ns_per_op",
            "value": 17998,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=demand/ns_per_op",
            "value": 48098,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=demand/ns_per_op",
            "value": 231379,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=demand/ns_per_op",
            "value": 53326,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=demand/ns_per_op",
            "value": 58862,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=demand/ns_per_op",
            "value": 57075,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=demand/ns_per_op",
            "value": 304756,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 4171,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 12973,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 45513,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 242849,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 12919,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 44902,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 342839,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 47999,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=ceiling/ns_per_op",
            "value": 60026,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=ceiling/ns_per_op",
            "value": 51057,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=ceiling/ns_per_op",
            "value": 324178,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=1/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 139,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 4440,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 63750,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 1011808,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=16/tiers=16/idle=0/observers=1/op=peek/ns_per_op",
            "value": 4925,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=64/idle=0/observers=1/op=peek/ns_per_op",
            "value": 59200,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=256/tiers=256/idle=0/observers=1/op=peek/ns_per_op",
            "value": 1059088,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=4/idle=0/observers=1/op=peek/ns_per_op",
            "value": 59707,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=32/observers=1/op=peek/ns_per_op",
            "value": 69052,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=1/reservations=64/tiers=1/idle=0/observers=4/op=peek/ns_per_op",
            "value": 61248,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/bandwidth/connections=4/reservations=64/tiers=1/idle=0/observers=1/op=peek/ns_per_op",
            "value": 246213,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=1/update_us",
            "value": 346.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=8/update_us",
            "value": 971.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=8/observers=32/update_us",
            "value": 2667.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=1/update_us",
            "value": 337.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=8/update_us",
            "value": 2183.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=32/observers=32/update_us",
            "value": 9613,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=1/update_us",
            "value": 1304,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=8/update_us",
            "value": 9653.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=unscoped/routes=128/observers=32/update_us",
            "value": 37951.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=1/update_us",
            "value": 185.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=8/update_us",
            "value": 610.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=8/observers=32/update_us",
            "value": 2230.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=1/update_us",
            "value": 291.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=8/update_us",
            "value": 1857,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=32/observers=32/update_us",
            "value": 7186.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=1/update_us",
            "value": 967.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=8/update_us",
            "value": 7043.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=distinct-scopes/routes=128/observers=32/update_us",
            "value": 27085,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=1/update_us",
            "value": 95.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=8/update_us",
            "value": 476.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=8/observers=32/update_us",
            "value": 1934.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=1/update_us",
            "value": 266.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=8/update_us",
            "value": 1779.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=32/observers=32/update_us",
            "value": 7229,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=1/update_us",
            "value": 979.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=8/update_us",
            "value": 7078.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=producer-scopes/routes=128/observers=32/update_us",
            "value": 27649.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=1/update_us",
            "value": 110.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=8/update_us",
            "value": 496.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=8/observers=32/update_us",
            "value": 1930.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=1/update_us",
            "value": 317.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=8/update_us",
            "value": 2024.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=32/observers=32/update_us",
            "value": 7176.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=1/update_us",
            "value": 995.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=8/update_us",
            "value": 7312.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=rooted-producers/routes=128/observers=32/update_us",
            "value": 29549.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=8/observers=1/update_us",
            "value": 169.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=8/observers=8/update_us",
            "value": 805.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=8/observers=32/update_us",
            "value": 3244.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=32/observers=1/update_us",
            "value": 368,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=32/observers=8/update_us",
            "value": 2745.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=32/observers=32/update_us",
            "value": 11307,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=128/observers=1/update_us",
            "value": 1315.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=128/observers=8/update_us",
            "value": 10810.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=full-name/routes=128/observers=32/update_us",
            "value": 44237.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=8/observers=1/update_us",
            "value": 15.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=8/observers=8/update_us",
            "value": 64.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=8/observers=32/update_us",
            "value": 347.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=32/observers=1/update_us",
            "value": 34.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=32/observers=8/update_us",
            "value": 263.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=32/observers=32/update_us",
            "value": 927.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=128/observers=1/update_us",
            "value": 170.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=128/observers=8/update_us",
            "value": 869.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=overlap-only/routes=128/observers=32/update_us",
            "value": 3087.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=1/create_remove_and_read_us",
            "value": 28.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=8/create_remove_and_read_us",
            "value": 27.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=8/listings=32/create_remove_and_read_us",
            "value": 84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=1/create_remove_and_read_us",
            "value": 23.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=8/create_remove_and_read_us",
            "value": 28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=128/listings=32/create_remove_and_read_us",
            "value": 28.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=1/create_remove_and_read_us",
            "value": 6.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=8/create_remove_and_read_us",
            "value": 10,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/tracks=1024/listings=32/create_remove_and_read_us",
            "value": 43.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=1/update_and_read_us",
            "value": 99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=8/update_and_read_us",
            "value": 48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=8/readers=32/update_and_read_us",
            "value": 62.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=1/update_and_read_us",
            "value": 28.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=8/update_and_read_us",
            "value": 30.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=32/readers=32/update_and_read_us",
            "value": 51.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=1/update_and_read_us",
            "value": 28.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=8/update_and_read_us",
            "value": 33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=unpinned/routes=128/readers=32/update_and_read_us",
            "value": 44.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=1/update_and_read_us",
            "value": 20.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=8/update_and_read_us",
            "value": 14.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=8/readers=32/update_and_read_us",
            "value": 34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=1/update_and_read_us",
            "value": 14.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=8/update_and_read_us",
            "value": 17.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=32/readers=32/update_and_read_us",
            "value": 35.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=1/update_and_read_us",
            "value": 109.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=8/update_and_read_us",
            "value": 27.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/request=pinned/routes=128/readers=32/update_and_read_us",
            "value": 39.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=1/grant_update_us",
            "value": 9.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=8/grant_update_us",
            "value": 20.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=8/fetches=32/grant_update_us",
            "value": 69.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=1/grant_update_us",
            "value": 7.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=8/grant_update_us",
            "value": 57.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=32/fetches=32/grant_update_us",
            "value": 223.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=1/grant_update_us",
            "value": 27.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=8/grant_update_us",
            "value": 217.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/auth=fetch/patterns=128/fetches=32/grant_update_us",
            "value": 904.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=1/update_us",
            "value": 530.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=8/update_us",
            "value": 205.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=8/readers=32/update_us",
            "value": 306.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=1/update_us",
            "value": 293.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=8/update_us",
            "value": 448.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=32/readers=32/update_us",
            "value": 741.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=1/update_us",
            "value": 842.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=8/update_us",
            "value": 877.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/restart=restart/paths=128/readers=32/update_us",
            "value": 2493.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=8/update_and_consume_us",
            "value": 10.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=32/update_and_consume_us",
            "value": 10.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=8/consumers=128/update_and_consume_us",
            "value": 29.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=8/update_and_consume_us",
            "value": 3.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=32/update_and_consume_us",
            "value": 3.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=32/consumers=128/update_and_consume_us",
            "value": 9.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=8/update_and_consume_us",
            "value": 3.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=32/update_and_consume_us",
            "value": 3.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/subscriber=cache/announcements=128/consumers=128/update_and_consume_us",
            "value": 3.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=1/duplicates=0/select_us",
            "value": 19.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=8/duplicates=0/select_us",
            "value": 49.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=8/consumers=32/duplicates=0/select_us",
            "value": 190.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=1/duplicates=0/select_us",
            "value": 5.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=8/duplicates=0/select_us",
            "value": 49.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=32/consumers=32/duplicates=0/select_us",
            "value": 192.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=1/duplicates=0/select_us",
            "value": 5.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=8/duplicates=0/select_us",
            "value": 41.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/alternation=alternation/announcements=128/consumers=32/duplicates=0/select_us",
            "value": 181.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=1/stale=0/invalidate_us",
            "value": 5.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=8/stale=0/invalidate_us",
            "value": 24.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=8/consumers=32/stale=0/invalidate_us",
            "value": 82.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=1/stale=0/invalidate_us",
            "value": 2.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=8/stale=0/invalidate_us",
            "value": 18.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=32/consumers=32/stale=0/invalidate_us",
            "value": 77.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=1/stale=0/invalidate_us",
            "value": 2.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=8/stale=0/invalidate_us",
            "value": 18.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/blind=blind/announcements=128/consumers=32/stale=0/invalidate_us",
            "value": 79.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=1/refused=256/retire_us",
            "value": 6.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=8/refused=2048/retire_us",
            "value": 38.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=8/consumers=32/refused=8192/retire_us",
            "value": 136.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=1/refused=256/retire_us",
            "value": 149.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=8/refused=2048/retire_us",
            "value": 44.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=32/consumers=32/refused=8192/retire_us",
            "value": 142.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=1/refused=256/retire_us",
            "value": 16.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=8/refused=2048/retire_us",
            "value": 50.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/retirement=retirement/routes=128/consumers=32/refused=8192/retire_us",
            "value": 174.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=1/update_us",
            "value": 361.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=8/update_us",
            "value": 31.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=8/observers=32/update_us",
            "value": 40.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=1/update_us",
            "value": 35.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=8/update_us",
            "value": 31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=32/observers=32/update_us",
            "value": 30.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=1/update_us",
            "value": 53.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=8/update_us",
            "value": 50.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/broadcasts/scope=stalled-announce/routes=128/observers=32/update_us",
            "value": 339.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 75921,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1/frames=30/publishers=1/players=1/ops=8220/gaps=0/warnings=0/ns_per_op",
            "value": 11951,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 39633,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=16/frames=30/publishers=1/players=1/ops=8640/gaps=0/warnings=0/ns_per_op",
            "value": 7635,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 26785,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=256/frames=30/publishers=1/players=1/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 7175,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 24763,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=steady/groups=1024/frames=30/publishers=1/players=1/ops=30720/gaps=0/warnings=0/ns_per_op",
            "value": 7615,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 50755,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1/frames=30/publishers=1/players=1/ops=8220/gaps=0/warnings=0/ns_per_op",
            "value": 15278,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 29767,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=16/frames=30/publishers=1/players=1/ops=8640/gaps=0/warnings=0/ns_per_op",
            "value": 8525,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 80729,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=256/frames=30/publishers=1/players=1/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 55584,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 570843,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=1024/frames=30/publishers=1/players=1/ops=30720/gaps=0/warnings=0/ns_per_op",
            "value": 526489,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=0/ns_per_op",
            "value": 58771,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1/frames=30/publishers=1/players=1/ops=8220/gaps=0/warnings=0/ns_per_op",
            "value": 8933,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=7680/warnings=7680/ns_per_op",
            "value": 45534,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=16/frames=30/publishers=1/players=1/ops=8640/gaps=270/warnings=270/ns_per_op",
            "value": 16383,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=8160/warnings=8160/ns_per_op",
            "value": 135763,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=256/frames=30/publishers=1/players=1/ops=15360/gaps=510/warnings=510/ns_per_op",
            "value": 109701,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=8184/warnings=8184/ns_per_op",
            "value": 953258,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=sparse/groups=1024/frames=30/publishers=1/players=1/ops=30720/gaps=1023/warnings=1023/ns_per_op",
            "value": 822886,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=8192/ns_per_op",
            "value": 47269,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=8192/ns_per_op",
            "value": 52250,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=16/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=512/ns_per_op",
            "value": 2736,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=16/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=512/ns_per_op",
            "value": 3926,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=256/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=32/ns_per_op",
            "value": 2127,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=256/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=32/ns_per_op",
            "value": 2860,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1024/frames=1/publishers=1/players=1/ops=8192/gaps=0/warnings=8/ns_per_op",
            "value": 2109,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=burst/groups=1024/frames=30/publishers=1/players=1/ops=8192/gaps=0/warnings=8/ns_per_op",
            "value": 3095,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=1/players=1/ops=9600/gaps=0/warnings=0/ns_per_op",
            "value": 13404,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=1/players=8/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 24857,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=4/players=1/ops=15360/gaps=0/warnings=0/ns_per_op",
            "value": 20061,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/buffered/scenario=lookahead/groups=64/frames=30/publishers=4/players=8/ops=61440/gaps=0/warnings=0/ns_per_op",
            "value": 23559,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=1/catalog_publishes=2/subscribe_updates=2/unlimited_subscribe_updates=1000/elapsed_ms",
            "value": 38.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=4/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 26.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=1/viewers=16/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 29,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=1/catalog_publishes=2/subscribe_updates=8/unlimited_subscribe_updates=4000/elapsed_ms",
            "value": 45.8,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=4/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 43.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=4/viewers=16/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 46.4,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=1/catalog_publishes=2/subscribe_updates=32/unlimited_subscribe_updates=16000/elapsed_ms",
            "value": 109.6,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=4/catalog_publishes=2/subscribe_updates=128/unlimited_subscribe_updates=64000/elapsed_ms",
            "value": 109.3,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/catalog/tracks=16/viewers=16/catalog_publishes=2/subscribe_updates=512/unlimited_subscribe_updates=256000/elapsed_ms",
            "value": 118.2,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/arm_us",
            "value": 177.73200000000065,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/advance_us",
            "value": 5.568000000000239,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=1/cancel_us",
            "value": 237.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/arm_us",
            "value": 113.98699999999984,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/advance_us",
            "value": 10.607999999999507,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=10/cancel_us",
            "value": 129.4430000000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/arm_us",
            "value": 80.4190000000009,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/advance_us",
            "value": 52.78599999999933,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=100/ready=100/cancel_us",
            "value": 68.84099999999904,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/arm_us",
            "value": 853.7989999999986,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/advance_us",
            "value": 7.697000000000287,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1442.9750000000006,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/arm_us",
            "value": 666.6179999999997,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/advance_us",
            "value": 13.32000000000022,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1268.4579999999955,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/arm_us",
            "value": 684.993999999996,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/advance_us",
            "value": 65.91400000000647,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1241.785,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 721.067000000005,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 351.0569999999973,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 713.8269999999949,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/arm_us",
            "value": 12666.687000000024,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/advance_us",
            "value": 10.88899999996329,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 16396.179999999986,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/arm_us",
            "value": 9284.306999999955,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/advance_us",
            "value": 25.352999999995518,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 20744.71399999999,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/arm_us",
            "value": 9312.837000000058,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/advance_us",
            "value": 117.2430000000304,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 20513.12299999995,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 8867.45600000006,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 767.3890000000938,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 19747.446999999964,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/arm_us",
            "value": 60.12999999995827,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/advance_us",
            "value": 0.6960000000617583,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=1/cancel_us",
            "value": 27.344999999968422,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/arm_us",
            "value": 72.43400000004385,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/advance_us",
            "value": 3.4399999999550346,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=10/cancel_us",
            "value": 26.457000000050357,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/arm_us",
            "value": 75.31400000004851,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/advance_us",
            "value": 26.184000000057495,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=100/ready=100/cancel_us",
            "value": 2.8079999999590655,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1910.2440000000342,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/advance_us",
            "value": 4.375999999979285,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 398.97099999996044,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1835.4410000000598,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/advance_us",
            "value": 10.472000000049775,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 393.3149999999159,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1827.93700000002,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/advance_us",
            "value": 55.25799999998071,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 355.62500000003183,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1813.6969999999337,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 363.1700000000819,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 10.192999999958374,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/arm_us",
            "value": 333253.59400000004,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/advance_us",
            "value": 16.26399999986461,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 13404.946999999993,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/arm_us",
            "value": 330153.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/advance_us",
            "value": 50.57900000065274,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 13332.88100000027,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/arm_us",
            "value": 328808.50100000045,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/advance_us",
            "value": 323.6639999995532,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 13157.154000000446,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 325684.2350000006,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 2691.4209999995364,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=jump/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10483.307000000423,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/arm_us",
            "value": 86.0740000007354,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/advance_us",
            "value": 94.96299999955227,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=1/cancel_us",
            "value": 153.08399999958056,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/arm_us",
            "value": 60.40899999970861,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/advance_us",
            "value": 92.6820000004227,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=10/cancel_us",
            "value": 121.66699999943376,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/arm_us",
            "value": 59.12999999964086,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/advance_us",
            "value": 576.0640000007697,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=100/ready=100/cancel_us",
            "value": 63.69000000086089,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/arm_us",
            "value": 649.9950000015815,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/advance_us",
            "value": 44.26499999863154,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1/cancel_us",
            "value": 1530.6840000012016,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/arm_us",
            "value": 647.2909999993135,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/advance_us",
            "value": 109.80300000119314,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=10/cancel_us",
            "value": 1386.0310000000027,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/arm_us",
            "value": 644.4100000007893,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/advance_us",
            "value": 684.2839999990247,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=100/cancel_us",
            "value": 1432.9049999996641,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/arm_us",
            "value": 758.3329999997659,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/advance_us",
            "value": 6640.03700000103,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=1000/ready=1000/cancel_us",
            "value": 729.8929999997199,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/arm_us",
            "value": 10246.499999999287,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/advance_us",
            "value": 104.48300000098243,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1/cancel_us",
            "value": 17413.000000000466,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/arm_us",
            "value": 9294.193000001542,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/advance_us",
            "value": 207.6939999988099,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=10/cancel_us",
            "value": 22681.101999998646,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/arm_us",
            "value": 9867.969000000812,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/advance_us",
            "value": 889.4170000003214,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=100/cancel_us",
            "value": 23789.550000001327,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/arm_us",
            "value": 9986.037000000579,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/advance_us",
            "value": 12174.58699999952,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=individual/armed=10000/ready=1000/cancel_us",
            "value": 17846.804000000702,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/arm_us",
            "value": 59.9450000008801,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/advance_us",
            "value": 22.664999998596613,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=1/cancel_us",
            "value": 28.969000000870437,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/arm_us",
            "value": 63.393999998879735,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/advance_us",
            "value": 82.77900000030058,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=10/cancel_us",
            "value": 27.528000000529573,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/arm_us",
            "value": 69.45799999994051,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/advance_us",
            "value": 589.2880000010337,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=100/ready=100/cancel_us",
            "value": 5.008000000088941,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/arm_us",
            "value": 1833.2119999995484,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/advance_us",
            "value": 44.640999998591724,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1/cancel_us",
            "value": 383.67399999879126,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/arm_us",
            "value": 1866.4609999996173,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/advance_us",
            "value": 116.58700000043609,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=10/cancel_us",
            "value": 395.6430000016553,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/arm_us",
            "value": 1867.1810000014375,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/advance_us",
            "value": 746.8449999996665,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=100/cancel_us",
            "value": 351.8420000000333,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/arm_us",
            "value": 1926.727000000028,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/advance_us",
            "value": 6840.922999999748,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=1000/ready=1000/cancel_us",
            "value": 13.784000000669039,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/arm_us",
            "value": 331044.7660000009,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/advance_us",
            "value": 150.2439999985654,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1/cancel_us",
            "value": 13530.751000000237,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/arm_us",
            "value": 281665.2430000013,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/advance_us",
            "value": 966.5260000001581,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=10/cancel_us",
            "value": 13597.185000000536,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/arm_us",
            "value": 285452.9670000011,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/advance_us",
            "value": 1457.8209999999672,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=100/cancel_us",
            "value": 13135.283000001436,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/arm_us",
            "value": 299092.5850000022,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/advance_us",
            "value": 9775.723999999173,
            "unit": "us"
          },
          {
            "name": "bench-js/js/clock/mode=advance/scope=shared/armed=10000/ready=1000/cancel_us",
            "value": 10454.07300000079,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1/decoded=1/us_per_fragment",
            "value": 18.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=64/decoded=64/us_per_fragment",
            "value": 27.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=1024/decoded=1024/us_per_fragment",
            "value": 159.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=1024/declared=4294967295/decoded=0/us_per_fragment",
            "value": 6.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1/decoded=1/us_per_fragment",
            "value": 62.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=64/decoded=64/us_per_fragment",
            "value": 74.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=1024/decoded=1024/us_per_fragment",
            "value": 136.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/cmaf/mdat_bytes=65536/declared=4294967295/decoded=0/us_per_fragment",
            "value": 4.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/us",
            "value": 2960.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/us",
            "value": 1085.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/us",
            "value": 1165.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/us",
            "value": 359.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/us",
            "value": 1207.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=publish/size_bytes",
            "value": 740,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/us",
            "value": 367.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=16/phase=read/size_bytes",
            "value": 71680,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/us",
            "value": 3610.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/us",
            "value": 924,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/us",
            "value": 3116.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/us",
            "value": 1447.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/us",
            "value": 3145.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=publish/size_bytes",
            "value": 2960,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/us",
            "value": 1079,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=16/phase=read/size_bytes",
            "value": 286720,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/us",
            "value": 11372.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/us",
            "value": 3380.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=1/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/us",
            "value": 10558.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/us",
            "value": 2689.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=4/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/us",
            "value": 10135.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=publish/size_bytes",
            "value": 11840,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/us",
            "value": 4926.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/compression/publishers=16/readers=16/phase=read/size_bytes",
            "value": 1146880,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle/size_bytes",
            "value": 178211,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/measurement=consumer_bundle_gzip/size_bytes",
            "value": 53948,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 1482,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=0/size_bytes",
            "value": 4608000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 13325,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=256/compressed=1/size_bytes",
            "value": 2340002,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 6362,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 32513792,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 8075798,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=1/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 32537848,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 3004,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=0/size_bytes",
            "value": 4608000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 12130,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=256/compressed=1/size_bytes",
            "value": 2340002,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 5616,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 32513792,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 7909734,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=1/readers=4/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 32537848,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 1332,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=0/size_bytes",
            "value": 18432000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 10692,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=256/compressed=1/size_bytes",
            "value": 9360008,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 1846,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 130055168,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 7976581,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=1/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 130151392,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=0/ns_per_frame",
            "value": 2740,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=0/size_bytes",
            "value": 18432000,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=1/ns_per_frame",
            "value": 12050,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=256/compressed=1/size_bytes",
            "value": 9360008,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=0/ns_per_frame",
            "value": 2601,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=0/size_bytes",
            "value": 130055168,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=1/ns_per_frame",
            "value": 7978385,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/compression/publishers=4/readers=4/frame_bytes=1048576/compressed=1/size_bytes",
            "value": 130151392,
            "unit": "bytes"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=1/ns_per_join",
            "value": 14760.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=1/ns_per_delivery",
            "value": 1592.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=16/ns_per_join",
            "value": 4625.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=16/ns_per_delivery",
            "value": 574.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=64/ns_per_join",
            "value": 3173.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=1/readers=64/ns_per_delivery",
            "value": 463.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=1/ns_per_join",
            "value": 3372.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=1/ns_per_delivery",
            "value": 1292.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=16/ns_per_join",
            "value": 375.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=16/ns_per_delivery",
            "value": 547.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=64/ns_per_join",
            "value": 271.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=16/readers=64/ns_per_delivery",
            "value": 598.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=1/ns_per_join",
            "value": 891.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=1/ns_per_delivery",
            "value": 1348.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=16/ns_per_join",
            "value": 385.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=16/ns_per_delivery",
            "value": 600.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=64/ns_per_join",
            "value": 359.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/datagrams/tracks=64/readers=64/ns_per_delivery",
            "value": 575.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 19579,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 8434,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=1/readers=1/ns_per_frame",
            "value": 9458,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 5518,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 4993,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=1/readers=8/ns_per_frame",
            "value": 5116,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 5218,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 5562,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=4/readers=1/ns_per_frame",
            "value": 5737,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 5466,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 5641,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1/publishers=4/readers=8/ns_per_frame",
            "value": 5737,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 6095,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 6177,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=1/readers=1/ns_per_frame",
            "value": 6220,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 4695,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 4783,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=1/readers=8/ns_per_frame",
            "value": 4843,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 5162,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 6567,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=4/readers=1/ns_per_frame",
            "value": 6968,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 5869,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 5890,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=64/publishers=4/readers=8/ns_per_frame",
            "value": 6250,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 5051,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 4992,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=1/readers=1/ns_per_frame",
            "value": 5652,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 4262,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 4805,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=1/readers=8/ns_per_frame",
            "value": 5720,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 4690,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 4601,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=4/readers=1/ns_per_frame",
            "value": 5262,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=0/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 6233,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=1/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 6968,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/drift/time_mode=2/retained=1024/publishers=4/readers=8/ns_per_frame",
            "value": 6821,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/seal_us",
            "value": 42.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=1/frames=1024/open_us",
            "value": 38.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/seal_us",
            "value": 39.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=8/frames=1024/open_us",
            "value": 36.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/seal_us",
            "value": 38.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=160/depth=64/frames=1024/open_us",
            "value": 35.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/seal_us",
            "value": 41.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=1/frames=1024/open_us",
            "value": 37.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/seal_us",
            "value": 41.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=8/frames=1024/open_us",
            "value": 38.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/seal_us",
            "value": 44.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=1160/depth=64/frames=1024/open_us",
            "value": 37.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/seal_us",
            "value": 60.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=1/frames=1024/open_us",
            "value": 52.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/seal_us",
            "value": 68.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=8/frames=1024/open_us",
            "value": 55.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/seal_us",
            "value": 67.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=16384/depth=64/frames=1024/open_us",
            "value": 55.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/seal_us",
            "value": 260.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=1/frames=128/open_us",
            "value": 221.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/seal_us",
            "value": 259.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=8/frames=128/open_us",
            "value": 202.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/seal_us",
            "value": 253.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/e2ee/bytes=262144/depth=64/frames=128/open_us",
            "value": 173.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=250/readers=1/step_us",
            "value": 277.13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=250/readers=8/step_us",
            "value": 42.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=1000/readers=1/step_us",
            "value": 119.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=1000/readers=8/step_us",
            "value": 36.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=4000/readers=1/step_us",
            "value": 215.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=4000/readers=8/step_us",
            "value": 46.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=16000/readers=1/step_us",
            "value": 524.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fill-probe/runs=16000/readers=8/step_us",
            "value": 117.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=2/subscribers=1/fill_us",
            "value": 1990.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=2/subscribers=8/fill_us",
            "value": 6933.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=16/subscribers=1/fill_us",
            "value": 660.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=16/subscribers=8/fill_us",
            "value": 4050.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=128/subscribers=1/fill_us",
            "value": 787.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/fills/groups=128/subscribers=8/fill_us",
            "value": 4352.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=8/update_us",
            "value": 520.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=32/update_us",
            "value": 536.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=1/routes=128/update_us",
            "value": 1159.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=8/update_us",
            "value": 223.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=32/update_us",
            "value": 404.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=4/routes=128/update_us",
            "value": 1121.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=8/update_us",
            "value": 372.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=32/update_us",
            "value": 501.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=covering/heads=16/routes=128/update_us",
            "value": 1231.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=8/update_us",
            "value": 192,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=32/update_us",
            "value": 340.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=1/routes=128/update_us",
            "value": 1049.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=8/update_us",
            "value": 108.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=32/update_us",
            "value": 291.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=4/routes=128/update_us",
            "value": 1049.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=8/update_us",
            "value": 145.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=32/update_us",
            "value": 349,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/touched=single/heads=16/routes=128/update_us",
            "value": 1062.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=1/watch_us",
            "value": 56.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=8/watch_us",
            "value": 121.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=8/sessions=32/watch_us",
            "value": 376.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=1/watch_us",
            "value": 34.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=8/watch_us",
            "value": 120.61,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=128/sessions=32/watch_us",
            "value": 429.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=1/watch_us",
            "value": 44.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=8/watch_us",
            "value": 144.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/forward/watchers=2048/sessions=32/watch_us",
            "value": 567.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/ns_per_frame",
            "value": 5207,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.1/first_frame_us",
            "value": 12.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 1068,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 40.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1039,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 39.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1043,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 38.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 6268,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 12.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 1403,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 18.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 1063,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 39.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1054,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 39.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 6585,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 13.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 5753,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 12.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 1498,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 23.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1013,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 39.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 1149,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=lite/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 2522.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/ns_per_frame",
            "value": 12319,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=24/frames_per_chunk=1.3/first_frame_us",
            "value": 186.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/ns_per_frame",
            "value": 3529,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=1200/frames_per_chunk=50.0/first_frame_us",
            "value": 138.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 3101,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 119.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 2221,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 85.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/ns_per_frame",
            "value": 9826,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=108/frames_per_chunk=1.0/first_frame_us",
            "value": 68.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/ns_per_frame",
            "value": 2874,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=1200/frames_per_chunk=10.0/first_frame_us",
            "value": 66.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/ns_per_frame",
            "value": 2180,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=16384/frames_per_chunk=50.0/first_frame_us",
            "value": 89.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 2098,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=100/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 82.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/ns_per_frame",
            "value": 10638,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1008/frames_per_chunk=1.0/first_frame_us",
            "value": 68.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/ns_per_frame",
            "value": 10144,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=1200/frames_per_chunk=1.2/first_frame_us",
            "value": 70.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/ns_per_frame",
            "value": 2837,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=16384/frames_per_chunk=12.5/first_frame_us",
            "value": 69.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/ns_per_frame",
            "value": 1933,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=1000/chunk_bytes=65536/frames_per_chunk=50.0/first_frame_us",
            "value": 76.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/ns_per_frame",
            "value": 1105,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/frames/protocol=ietf/frame_bytes=16/chunk_bytes=65536/frames_per_chunk=3000.0/first_frame_us",
            "value": 2360.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=in/ns_per_frame",
            "value": 215.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=64/order=reordered/ns_per_frame",
            "value": 86.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=in/ns_per_frame",
            "value": 205.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=512/order=reordered/ns_per_frame",
            "value": 89.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=in/ns_per_frame",
            "value": 240.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=4096/order=reordered/ns_per_frame",
            "value": 103.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=in/ns_per_frame",
            "value": 280.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/jitter/held=8192/order=reordered/ns_per_frame",
            "value": 113.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-codec/keys=1/changed=1/ms_per_update",
            "value": 0.003428,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=1/ms_per_update",
            "value": 0.004982,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=10/changed=10/ms_per_update",
            "value": 0.007312,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=1/ms_per_update",
            "value": 0.019398,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=100/changed=10/ms_per_update",
            "value": 0.022076,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=1/ms_per_update",
            "value": 0.634436,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-codec/keys=1000/changed=10/ms_per_update",
            "value": 0.64008,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/json_parse_us",
            "value": 1.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=catalog/bytes=1026/parse_us",
            "value": 5.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-16/bytes=199/json_parse_us",
            "value": 0.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-16/bytes=199/parse_us",
            "value": 0.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-1024/bytes=12295/json_parse_us",
            "value": 21.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-1024/bytes=12295/parse_us",
            "value": 26.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-65536/bytes=786439/json_parse_us",
            "value": 1106.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=unicode-65536/bytes=786439/parse_us",
            "value": 1723.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/json_parse_us",
            "value": 1.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-10/bytes=1413/parse_us",
            "value": 6.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/json_parse_us",
            "value": 13.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-100/bytes=14362/parse_us",
            "value": 67.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/json_parse_us",
            "value": 279.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-parse/frame=stats-1000/bytes=146993/parse_us",
            "value": 844.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compress=false/ns_per_record",
            "value": 4903.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=16/compress=true/ns_per_record",
            "value": 15704.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compress=false/ns_per_record",
            "value": 7194.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=64/payload_bytes=1024/compress=true/ns_per_record",
            "value": 13232.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compress=false/ns_per_record",
            "value": 1207.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=16/compress=true/ns_per_record",
            "value": 6507.3,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compress=false/ns_per_record",
            "value": 3044.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/json-stream/records=1024/payload_bytes=1024/compress=true/ns_per_record",
            "value": 10083.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=ascending/ns_per_arrival",
            "value": 2587,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=descending/ns_per_arrival",
            "value": 3559,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=shuffled/ns_per_arrival",
            "value": 2473,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=2048/order=rolling/ns_per_arrival",
            "value": 2456,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=ascending/ns_per_arrival",
            "value": 1151,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=descending/ns_per_arrival",
            "value": 2520,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=shuffled/ns_per_arrival",
            "value": 2703,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=8192/order=rolling/ns_per_arrival",
            "value": 1531,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=ascending/ns_per_arrival",
            "value": 1106,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=descending/ns_per_arrival",
            "value": 2718,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=shuffled/ns_per_arrival",
            "value": 3358,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/ledger/arrivals=32768/order=rolling/ns_per_arrival",
            "value": 1953,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/encode_ns",
            "value": 65525,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad06/bytes=369/decode_ns",
            "value": 9253,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/encode_ns",
            "value": 65221,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Video/version=ff0dad07/bytes=304/decode_ns",
            "value": 9167,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/encode_ns",
            "value": 54035,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad06/bytes=297/decode_ns",
            "value": 7427,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/encode_ns",
            "value": 54412,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Audio/version=ff0dad07/bytes=248/decode_ns",
            "value": 7656,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/encode_ns",
            "value": 6147,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad06/bytes=5/decode_ns",
            "value": 2042,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/encode_ns",
            "value": 5539,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Group/version=ff0dad07/bytes=5/decode_ns",
            "value": 2005,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/encode_ns",
            "value": 13384,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad06/bytes=26/decode_ns",
            "value": 5855,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=31/encode_ns",
            "value": 17283,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Subscribe/version=ff0dad07/bytes=31/decode_ns",
            "value": 8874,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/encode_ns",
            "value": 2564,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad06/bytes=11/decode_ns",
            "value": 1686,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=9/encode_ns",
            "value": 2815,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Datagram/version=ff0dad07/bytes=9/decode_ns",
            "value": 1998,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/encode_ns",
            "value": 9741,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad06/bytes=15/decode_ns",
            "value": 5036,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/encode_ns",
            "value": 9958,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/lite-varint/sample=Setup/version=ff0dad07/bytes=15/decode_ns",
            "value": 5133,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=0/held_estimates=1/update_us",
            "value": 6.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=1/held_estimates=1/update_us",
            "value": 7.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=8/held_estimates=1/update_us",
            "value": 18.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=1/readers=64/held_estimates=1/update_us",
            "value": 112.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=0/held_estimates=32/update_us",
            "value": 2.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=1/held_estimates=32/update_us",
            "value": 4.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=8/held_estimates=32/update_us",
            "value": 17.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=32/readers=64/held_estimates=32/update_us",
            "value": 116.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=0/held_estimates=256/update_us",
            "value": 3.24,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=1/held_estimates=256/update_us",
            "value": 4.82,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=8/held_estimates=256/update_us",
            "value": 17.18,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=eager/connections=256/readers=64/held_estimates=256/update_us",
            "value": 123.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=0/held_estimates=0/update_us",
            "value": 0.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=1/held_estimates=1/update_us",
            "value": 4.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=8/held_estimates=1/update_us",
            "value": 21.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=1/readers=64/held_estimates=1/update_us",
            "value": 161.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=0/held_estimates=0/update_us",
            "value": 0.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=1/held_estimates=32/update_us",
            "value": 3.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=8/held_estimates=32/update_us",
            "value": 18.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=32/readers=64/held_estimates=32/update_us",
            "value": 175.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=0/held_estimates=0/update_us",
            "value": 0.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=1/held_estimates=256/update_us",
            "value": 3.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=8/held_estimates=256/update_us",
            "value": 18.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/observed/forwarding=observed/connections=256/readers=64/held_estimates=256/update_us",
            "value": 160.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=mask/op=collect/members=126/ms_per_op",
            "value": 3.931,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=mask/op=covers/members=126/ms_per_op",
            "value": 2.971,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=mask/op=collect/members=510/ms_per_op",
            "value": 43.337,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=mask/op=covers/members=510/ms_per_op",
            "value": 37.793,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=mask/op=collect/members=2046/ms_per_op",
            "value": 508.257,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=mask/op=covers/members=2046/ms_per_op",
            "value": 464.373,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=chain/op=collect/members=62/ms_per_op",
            "value": 1.059,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=4096/shape=chain/op=covers/members=62/ms_per_op",
            "value": 0.654,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=chain/op=collect/members=126/ms_per_op",
            "value": 6.633,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=16384/shape=chain/op=covers/members=126/ms_per_op",
            "value": 5.252,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=chain/op=collect/members=254/ms_per_op",
            "value": 43.187,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/pattern/bytes=65535/shape=chain/op=covers/members=254/ms_per_op",
            "value": 37.352,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=4/ns_per_change",
            "value": 5708.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=16/ns_per_change",
            "value": 7102.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=1/streams=64/ns_per_change",
            "value": 15293.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=4/ns_per_change",
            "value": 660.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=16/ns_per_change",
            "value": 2259.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=16/streams=64/ns_per_change",
            "value": 10246.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=4/ns_per_change",
            "value": 644.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=16/ns_per_change",
            "value": 2083.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/priority/subscriptions=128/streams=64/ns_per_change",
            "value": 8947.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=1/us_per_read",
            "value": 8.609,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=32/us_per_read",
            "value": 0.67,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=1024/us_per_read",
            "value": 0.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-datagrams/backlog=16384/us_per_read",
            "value": 0.268,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1025/kind=stream/frames=1/us_per_record",
            "value": 10.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=16/us_per_record",
            "value": 33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=stream/frames=256/us_per_record",
            "value": 230.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=empty/frames=256/us_per_record",
            "value": 182.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=1024/kind=max_data/frames=204/us_per_record",
            "value": 90.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16381/kind=stream/frames=1/us_per_record",
            "value": 9.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16384/kind=stream/frames=16/us_per_record",
            "value": 16.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16128/kind=stream/frames=256/us_per_record",
            "value": 224.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=empty/frames=4095/us_per_record",
            "value": 3651.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/qmux-record/record_bytes=16380/kind=max_data/frames=3276/us_per_record",
            "value": 1082.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1200/chunks=14/ns_per_byte",
            "value": 0.943,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=16384/chunks=1/ns_per_byte",
            "value": 0.073,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=16384/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.064,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1200/chunks=219/ns_per_byte",
            "value": 0.483,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=16384/chunks=16/ns_per_byte",
            "value": 0.219,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=262144/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.004,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1200/chunks=874/ns_per_byte",
            "value": 0.485,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=16384/chunks=64/ns_per_byte",
            "value": 0.251,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/reader/frame_bytes=1048576/chunk_bytes=1048576/chunks=1/ns_per_byte",
            "value": 0.001,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=1/refresh_us",
            "value": 1041.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=8/refresh_us",
            "value": 1805.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=1/joined=32/refresh_us",
            "value": 2875.64,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=1/refresh_us",
            "value": 495.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=8/refresh_us",
            "value": 656.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=8/joined=32/refresh_us",
            "value": 1884.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=1/refresh_us",
            "value": 328.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=8/refresh_us",
            "value": 574.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1/tracks=32/joined=32/refresh_us",
            "value": 1659.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=1/refresh_us",
            "value": 507.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=8/refresh_us",
            "value": 1586,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=1/joined=32/refresh_us",
            "value": 6285.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=1/refresh_us",
            "value": 422.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=8/refresh_us",
            "value": 1392.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=8/joined=32/refresh_us",
            "value": 6327.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=1/refresh_us",
            "value": 399.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=8/refresh_us",
            "value": 1402.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=64/tracks=32/joined=32/refresh_us",
            "value": 5627.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=1/refresh_us",
            "value": 2580.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=8/refresh_us",
            "value": 18948.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=1/joined=32/refresh_us",
            "value": 78156.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=1/refresh_us",
            "value": 2662.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=8/refresh_us",
            "value": 19046.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=8/joined=32/refresh_us",
            "value": 80417.19,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=1/refresh_us",
            "value": 2396.81,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=8/refresh_us",
            "value": 18382.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/refresh/retained=1024/tracks=32/joined=32/refresh_us",
            "value": 77164.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=1/us_per_op",
            "value": 167.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=1/max_us",
            "value": 147,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=1/us_per_op",
            "value": 3.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=1/max_us",
            "value": 9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=8/us_per_op",
            "value": 73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=monotonic/subscribers=8/max_us",
            "value": 96,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=8/us_per_op",
            "value": 18.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=monotonic/subscribers=8/max_us",
            "value": 103,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=1/us_per_op",
            "value": 128.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=1/max_us",
            "value": 126,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=1/us_per_op",
            "value": 5.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=1/max_us",
            "value": 42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=8/us_per_op",
            "value": 94.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=reverse/subscribers=8/max_us",
            "value": 143,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=8/us_per_op",
            "value": 18.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=reverse/subscribers=8/max_us",
            "value": 60,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=1/us_per_op",
            "value": 108.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=1/max_us",
            "value": 107,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=1/us_per_op",
            "value": 6.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=1/max_us",
            "value": 44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=8/us_per_op",
            "value": 91.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=join/order=mixed/subscribers=8/max_us",
            "value": 132,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=8/us_per_op",
            "value": 45.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=64/kind=append/order=mixed/subscribers=8/max_us",
            "value": 1419,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=1/us_per_op",
            "value": 552.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=1/max_us",
            "value": 550,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=1/us_per_op",
            "value": 4.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=1/max_us",
            "value": 9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=8/us_per_op",
            "value": 809.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=monotonic/subscribers=8/max_us",
            "value": 2127,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=8/us_per_op",
            "value": 20,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=monotonic/subscribers=8/max_us",
            "value": 54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=1/us_per_op",
            "value": 881.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=1/max_us",
            "value": 878,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=1/us_per_op",
            "value": 5.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=1/max_us",
            "value": 12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=8/us_per_op",
            "value": 905.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=reverse/subscribers=8/max_us",
            "value": 1945,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=8/us_per_op",
            "value": 25.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=reverse/subscribers=8/max_us",
            "value": 68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=1/us_per_op",
            "value": 683.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=1/max_us",
            "value": 682,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=1/us_per_op",
            "value": 6.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=1/max_us",
            "value": 38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=8/us_per_op",
            "value": 942.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=join/order=mixed/subscribers=8/max_us",
            "value": 2312,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=8/us_per_op",
            "value": 26.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=512/kind=append/order=mixed/subscribers=8/max_us",
            "value": 117,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=1/us_per_op",
            "value": 2230.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=1/max_us",
            "value": 2228,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=1/us_per_op",
            "value": 5.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=1/max_us",
            "value": 13,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=8/us_per_op",
            "value": 2623.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=monotonic/subscribers=8/max_us",
            "value": 4745,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=8/us_per_op",
            "value": 21.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=monotonic/subscribers=8/max_us",
            "value": 70,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=1/us_per_op",
            "value": 6008.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=1/max_us",
            "value": 6006,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=1/us_per_op",
            "value": 7.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=1/max_us",
            "value": 36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=8/us_per_op",
            "value": 4479.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=reverse/subscribers=8/max_us",
            "value": 6621,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=8/us_per_op",
            "value": 34.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=reverse/subscribers=8/max_us",
            "value": 76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=1/us_per_op",
            "value": 4700.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=1/max_us",
            "value": 4698,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=1/us_per_op",
            "value": 8.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=1/max_us",
            "value": 38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=8/us_per_op",
            "value": 4795.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=join/order=mixed/subscribers=8/max_us",
            "value": 8318,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=8/us_per_op",
            "value": 33.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/replay/groups=2048/kind=append/order=mixed/subscribers=8/max_us",
            "value": 63,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=1/update_us",
            "value": 72.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=8/update_us",
            "value": 195.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=8/followers=32/update_us",
            "value": 726.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=1/update_us",
            "value": 45.27,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=8/update_us",
            "value": 187.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=32/followers=32/update_us",
            "value": 700.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=1/update_us",
            "value": 71.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=8/update_us",
            "value": 218.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=watched/routes=128/followers=32/update_us",
            "value": 714.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=1/update_us",
            "value": 7.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=8/update_us",
            "value": 9.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=8/followers=32/update_us",
            "value": 8.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=1/update_us",
            "value": 16.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=8/update_us",
            "value": 11.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=32/followers=32/update_us",
            "value": 15.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=1/update_us",
            "value": 30.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=8/update_us",
            "value": 33.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/touched=unrelated/routes=128/followers=32/update_us",
            "value": 30.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=1/cancel_us",
            "value": 17.33,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=8/cancel_us",
            "value": 71.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=8/waiters=32/cancel_us",
            "value": 148.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=1/cancel_us",
            "value": 6.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=8/cancel_us",
            "value": 37.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=128/waiters=32/cancel_us",
            "value": 107.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=1/cancel_us",
            "value": 7.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=8/cancel_us",
            "value": 32.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/unrelated=2048/waiters=32/cancel_us",
            "value": 101.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=128/landed=1/settle_us",
            "value": 62.75,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=128/landed=16/settle_us",
            "value": 88.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=128/landed=128/settle_us",
            "value": 496.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=1024/landed=1/settle_us",
            "value": 46.65,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=1024/landed=16/settle_us",
            "value": 119.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=1024/landed=128/settle_us",
            "value": 475.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=8192/landed=1/settle_us",
            "value": 101.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=8192/landed=16/settle_us",
            "value": 153.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/pending=8192/landed=128/settle_us",
            "value": 785.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=0/cancel_us",
            "value": 2.84,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=0/extra_routes=128/cancel_us",
            "value": 4.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=0/cancel_us",
            "value": 3.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=1/extra_routes=128/cancel_us",
            "value": 5.08,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=0/cancel_us",
            "value": 5.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=16/extra_routes=128/cancel_us",
            "value": 7.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=0/cancel_us",
            "value": 20.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/failovers=128/extra_routes=128/cancel_us",
            "value": 37.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/active_ms",
            "value": 4.02,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=1/settled_ms",
            "value": 5.98,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/active_ms",
            "value": 11.28,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=1024/waiters=4/settled_ms",
            "value": 21.14,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/active_ms",
            "value": 17.18,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=1/settled_ms",
            "value": 26.98,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/active_ms",
            "value": 56.51,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=4096/waiters=4/settled_ms",
            "value": 92.86,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/active_ms",
            "value": 80.76,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=1/settled_ms",
            "value": 119.87,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/active_ms",
            "value": 206.53,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-forward/paths=16384/waiters=4/settled_ms",
            "value": 323.19,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/active_ms",
            "value": 4.61,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=1/settled_ms",
            "value": 6.94,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/active_ms",
            "value": 13.13,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=1024/waiters=4/settled_ms",
            "value": 22.82,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/active_ms",
            "value": 19.12,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=1/settled_ms",
            "value": 28.07,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/active_ms",
            "value": 55.65,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=4096/waiters=4/settled_ms",
            "value": 86.28,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/active_ms",
            "value": 87.66,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=1/settled_ms",
            "value": 119.01,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/active_ms",
            "value": 208.95,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=cancel-reverse/paths=16384/waiters=4/settled_ms",
            "value": 330.56,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/active_ms",
            "value": 5.49,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=1/settled_ms",
            "value": 5.5,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/active_ms",
            "value": 6.15,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=1024/waiters=4/settled_ms",
            "value": 6.16,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/active_ms",
            "value": 26.25,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=1/settled_ms",
            "value": 26.26,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/active_ms",
            "value": 24.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=4096/waiters=4/settled_ms",
            "value": 24.1,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/active_ms",
            "value": 90.99,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=1/settled_ms",
            "value": 91,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/active_ms",
            "value": 106.97,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/operation=drain-local/paths=16384/waiters=4/settled_ms",
            "value": 106.97,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/active_us",
            "value": 9.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1/settled_us",
            "value": 16.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/active_us",
            "value": 108.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=64/settled_us",
            "value": 211.29,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/active_us",
            "value": 2564.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=1/cancelled=1024/settled_us",
            "value": 5460.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/active_us",
            "value": 13.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1/settled_us",
            "value": 22.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/active_us",
            "value": 120.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=64/settled_us",
            "value": 225.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/active_us",
            "value": 2412.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=16/cancelled=1024/settled_us",
            "value": 4487,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/active_us",
            "value": 22.12,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1/settled_us",
            "value": 37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/active_us",
            "value": 178.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=64/settled_us",
            "value": 318.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/active_us",
            "value": 2962.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=false/routes=128/cancelled=1024/settled_us",
            "value": 5098.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/active_us",
            "value": 4.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1/settled_us",
            "value": 9.46,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/active_us",
            "value": 109.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=64/settled_us",
            "value": 206.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/active_us",
            "value": 2175.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=1/cancelled=1024/settled_us",
            "value": 3997.85,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/active_us",
            "value": 5.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1/settled_us",
            "value": 12.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/active_us",
            "value": 113,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=64/settled_us",
            "value": 218.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/active_us",
            "value": 2175.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=16/cancelled=1024/settled_us",
            "value": 4134.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/active_us",
            "value": 12.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1/settled_us",
            "value": 33.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/active_us",
            "value": 139.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=64/settled_us",
            "value": 263.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/active_us",
            "value": 2989.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/survivor=true/routes=128/cancelled=1024/settled_us",
            "value": 5194.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=1/update_us",
            "value": 656.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=1/subscribers=8/update_us",
            "value": 1330.21,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=1/update_us",
            "value": 1639.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=32/subscribers=8/update_us",
            "value": 9002.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=1/update_us",
            "value": 4644.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=18/namespaces=128/subscribers=8/update_us",
            "value": 33130.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=1/update_us",
            "value": 125.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=1/subscribers=8/update_us",
            "value": 569.97,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=1/update_us",
            "value": 1124.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=32/subscribers=8/update_us",
            "value": 7908.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=1/update_us",
            "value": 3966.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/requests/namespace_update=namespace_update/draft=21/namespaces=128/subscribers=8/update_us",
            "value": 31216.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/direct_us",
            "value": 8.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/front_us",
            "value": 11.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=0/fork_us",
            "value": 10.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/direct_us",
            "value": 3.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/front_us",
            "value": 6.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=0/fork_us",
            "value": 5.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/direct_us",
            "value": 3.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/front_us",
            "value": 5.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=0/fork_us",
            "value": 6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/direct_us",
            "value": 6.32,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/front_us",
            "value": 11.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=1/fork_us",
            "value": 12.09,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/direct_us",
            "value": 3.56,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/front_us",
            "value": 6.58,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=1/fork_us",
            "value": 6.79,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/direct_us",
            "value": 3.55,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/front_us",
            "value": 6.66,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=1/fork_us",
            "value": 6.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/direct_us",
            "value": 5.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/front_us",
            "value": 10.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/swaps=16/fork_us",
            "value": 10.93,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/direct_us",
            "value": 3.88,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/front_us",
            "value": 7.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/swaps=16/fork_us",
            "value": 7.36,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/direct_us",
            "value": 3.53,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/front_us",
            "value": 6.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/swaps=16/fork_us",
            "value": 6.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=1/flap_us",
            "value": 100.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=16/flap_us",
            "value": 47.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/flaps=64/flap_us",
            "value": 28.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=1/flap_us",
            "value": 39.71,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=16/flap_us",
            "value": 12.77,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/flaps=64/flap_us",
            "value": 10.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=1/flap_us",
            "value": 28.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=16/flap_us",
            "value": 8.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/flaps=64/flap_us",
            "value": 6.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=0/readable_us",
            "value": 6.02,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=0/readable_us",
            "value": 4.34,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=0/readable_us",
            "value": 1.91,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1/readable_us",
            "value": 4.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1/readable_us",
            "value": 2.41,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1/readable_us",
            "value": 2.01,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=64/readable_us",
            "value": 8.22,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=64/readable_us",
            "value": 4.94,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=64/readable_us",
            "value": 3.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=1/replayed_frames=1024/readable_us",
            "value": 25.74,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=4/replayed_frames=1024/readable_us",
            "value": 14.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/resume/readers=16/replayed_frames=1024/readable_us",
            "value": 8.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/signals/op=new-error/ns_per_op",
            "value": 288,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-close/ns_per_op",
            "value": 2320,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/signals/op=create-get-close/ns_per_op",
            "value": 2346,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/slow-group/groups=1/warnings=1/bytes=51/catchup_ms",
            "value": 2.261,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=16/warnings=1/bytes=53/catchup_ms",
            "value": 0.902,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=256/warnings=1/bytes=55/catchup_ms",
            "value": 2.788,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/slow-group/groups=1024/warnings=1/bytes=57/catchup_ms",
            "value": 6.214,
            "unit": "ms"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=1/open_us",
            "value": 1680.06,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=1/frame_us",
            "value": 449.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=1/close_us",
            "value": 596.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=8/open_us",
            "value": 915.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=8/frame_us",
            "value": 349.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=8/close_us",
            "value": 220.38,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=32/open_us",
            "value": 373.16,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=32/frame_us",
            "value": 177.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=1/sessions_per_endpoint=32/close_us",
            "value": 126.54,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=1/open_us",
            "value": 449.23,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=1/frame_us",
            "value": 93.31,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=1/close_us",
            "value": 164.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=8/open_us",
            "value": 242.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=8/frame_us",
            "value": 85.42,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=8/close_us",
            "value": 109.99,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=32/open_us",
            "value": 272.59,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=32/frame_us",
            "value": 59.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=8/sessions_per_endpoint=32/close_us",
            "value": 101.11,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=1/open_us",
            "value": 237.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=1/frame_us",
            "value": 29.57,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=1/close_us",
            "value": 112.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=8/open_us",
            "value": 199.76,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=8/frame_us",
            "value": 40.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=8/close_us",
            "value": 125.49,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=32/open_us",
            "value": 257.87,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=32/frame_us",
            "value": 40.37,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=local/endpoints=32/sessions_per_endpoint=32/close_us",
            "value": 96.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=1/open_us",
            "value": 9582.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=1/frame_us",
            "value": 1669.86,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=1/close_us",
            "value": 2086.35,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=8/open_us",
            "value": 2250.07,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=8/frame_us",
            "value": 746.39,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=8/close_us",
            "value": 565.15,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=32/open_us",
            "value": 1235.78,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=32/frame_us",
            "value": 455.89,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=1/sessions_per_endpoint=32/close_us",
            "value": 362.72,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=1/open_us",
            "value": 3561.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=1/frame_us",
            "value": 415.44,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=1/close_us",
            "value": 574.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=8/open_us",
            "value": 1181.68,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=8/frame_us",
            "value": 343.43,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=8/close_us",
            "value": 316.73,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=32/open_us",
            "value": 1118.52,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=32/frame_us",
            "value": 371.28,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=8/sessions_per_endpoint=32/close_us",
            "value": 320.47,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=1/open_us",
            "value": 3402.25,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=1/frame_us",
            "value": 358.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=1/close_us",
            "value": 442.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=8/open_us",
            "value": 1514.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=8/frame_us",
            "value": 403.92,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=8/close_us",
            "value": 356.98,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=32/open_us",
            "value": 1138.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=32/frame_us",
            "value": 792.95,
            "unit": "us"
          },
          {
            "name": "bench-js/js/socket/mode=lite07/endpoints=32/sessions_per_endpoint=32/close_us",
            "value": 322.83,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=1/groups=128/drop_us",
            "value": 222.04,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=4/groups=128/drop_us",
            "value": 111.51,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=1/subscribers=16/groups=128/drop_us",
            "value": 75.62,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=1/groups=128/drop_us",
            "value": 84.26,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=4/groups=128/drop_us",
            "value": 69.69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=4/subscribers=16/groups=128/drop_us",
            "value": 67.45,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=1/groups=128/drop_us",
            "value": 72.14,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=4/groups=128/drop_us",
            "value": 66.48,
            "unit": "us"
          },
          {
            "name": "bench-js/js/subscribe-drop/publishers=16/subscribers=16/groups=128/drop_us",
            "value": 79.17,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/publish_us",
            "value": 25.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/end_us",
            "value": 32.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=0/operation=read/idle_us",
            "value": 147.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/publish_us",
            "value": 16.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/end_us",
            "value": 33.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=0/operation=read/idle_us",
            "value": 281.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/publish_us",
            "value": 15.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/end_us",
            "value": 52.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=0/operation=read/idle_us",
            "value": 950.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/publish_us",
            "value": 12.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/end_us",
            "value": 110.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=0/operation=read/idle_us",
            "value": 4181.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/publish_us",
            "value": 31.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/end_us",
            "value": 33.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=0/operation=read/idle_us",
            "value": 160.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/publish_us",
            "value": 22.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/end_us",
            "value": 39.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=0/operation=read/idle_us",
            "value": 338.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/publish_us",
            "value": 21.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/end_us",
            "value": 69,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=0/operation=read/idle_us",
            "value": 1378.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/publish_us",
            "value": 24.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/end_us",
            "value": 185,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=0/operation=read/idle_us",
            "value": 7157.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/publish_us",
            "value": 107.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/end_us",
            "value": 59.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=0/operation=read/idle_us",
            "value": 177,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/publish_us",
            "value": 95.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/end_us",
            "value": 76.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=0/operation=read/idle_us",
            "value": 705,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/publish_us",
            "value": 81.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/end_us",
            "value": 130.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=0/operation=read/idle_us",
            "value": 3260.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/publish_us",
            "value": 80.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/end_us",
            "value": 347.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=0/operation=read/idle_us",
            "value": 17554.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/publish_us",
            "value": 180.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/end_us",
            "value": 27.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=read/idle_us",
            "value": 290.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/publish_us",
            "value": 249.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/end_us",
            "value": 37.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=read/idle_us",
            "value": 418,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/publish_us",
            "value": 252.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/end_us",
            "value": 62.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=read/idle_us",
            "value": 1205,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/publish_us",
            "value": 215.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/end_us",
            "value": 146.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=read/idle_us",
            "value": 4561.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/publish_us",
            "value": 1053.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/end_us",
            "value": 37.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=read/idle_us",
            "value": 430.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/publish_us",
            "value": 1016.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/end_us",
            "value": 45.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=read/idle_us",
            "value": 657.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/publish_us",
            "value": 966.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/end_us",
            "value": 74.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=read/idle_us",
            "value": 1841,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/publish_us",
            "value": 865.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/end_us",
            "value": 200.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=read/idle_us",
            "value": 8395.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/publish_us",
            "value": 3988.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/end_us",
            "value": 62.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=read/idle_us",
            "value": 894.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/publish_us",
            "value": 3896.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/end_us",
            "value": 84.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=read/idle_us",
            "value": 1528.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/publish_us",
            "value": 3442.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/end_us",
            "value": 119.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=read/idle_us",
            "value": 4551.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/publish_us",
            "value": 3259.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/end_us",
            "value": 366.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=read/idle_us",
            "value": 19758.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/publish_us",
            "value": 102,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/end_us",
            "value": 28.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=1/held=16/operation=open/idle_us",
            "value": 286.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/publish_us",
            "value": 105.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/end_us",
            "value": 33.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=1/held=16/operation=open/idle_us",
            "value": 479.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/publish_us",
            "value": 106,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/end_us",
            "value": 63.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=1/held=16/operation=open/idle_us",
            "value": 1285,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/publish_us",
            "value": 117.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/end_us",
            "value": 116.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=1/held=16/operation=open/idle_us",
            "value": 4949.7,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/publish_us",
            "value": 545.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/end_us",
            "value": 35.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=4/held=16/operation=open/idle_us",
            "value": 403.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/publish_us",
            "value": 564.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/end_us",
            "value": 49.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=4/held=16/operation=open/idle_us",
            "value": 641.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/publish_us",
            "value": 534.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/end_us",
            "value": 74.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=4/held=16/operation=open/idle_us",
            "value": 1717.1,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/publish_us",
            "value": 494.9,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/end_us",
            "value": 220.3,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=4/held=16/operation=open/idle_us",
            "value": 7779,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/publish_us",
            "value": 2286.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/end_us",
            "value": 75.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=25/subscribers=16/held=16/operation=open/idle_us",
            "value": 1043.6,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/publish_us",
            "value": 2309.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/end_us",
            "value": 90.2,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=100/subscribers=16/held=16/operation=open/idle_us",
            "value": 1661.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/publish_us",
            "value": 2208.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/end_us",
            "value": 132.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=400/subscribers=16/held=16/operation=open/idle_us",
            "value": 4818.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/publish_us",
            "value": 2179.4,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/end_us",
            "value": 403.5,
            "unit": "us"
          },
          {
            "name": "bench-js/js/track/retained=1500/subscribers=16/held=16/operation=open/idle_us",
            "value": 19980.8,
            "unit": "us"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=encode/ns_per_op",
            "value": 50.6,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode/ns_per_op",
            "value": 5.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=1-byte/op=decode-varint/ns_per_op",
            "value": 8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=encode/ns_per_op",
            "value": 50.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode/ns_per_op",
            "value": 8.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=2-byte/op=decode-varint/ns_per_op",
            "value": 8.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=encode/ns_per_op",
            "value": 54.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode/ns_per_op",
            "value": 7.9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=4-byte/op=decode-varint/ns_per_op",
            "value": 8.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=encode/ns_per_op",
            "value": 51.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode/ns_per_op",
            "value": 17.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=quic/value=8-byte/op=decode-varint/ns_per_op",
            "value": 11,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=encode/ns_per_op",
            "value": 51.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode/ns_per_op",
            "value": 5.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=1-byte/op=decode-varint/ns_per_op",
            "value": 11.7,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=encode/ns_per_op",
            "value": 52.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode/ns_per_op",
            "value": 9,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=2-byte/op=decode-varint/ns_per_op",
            "value": 13.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=encode/ns_per_op",
            "value": 56.4,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode/ns_per_op",
            "value": 9.2,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=4-byte/op=decode-varint/ns_per_op",
            "value": 13.5,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=encode/ns_per_op",
            "value": 61.1,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode/ns_per_op",
            "value": 21.8,
            "unit": "ns"
          },
          {
            "name": "bench-js/js/varint/format=leading-ones/value=8-byte/op=decode-varint/ns_per_op",
            "value": 16.1,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}