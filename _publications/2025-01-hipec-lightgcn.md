---
title: "Microarchitectural Characterization of LightGCN and ExpressGNN and Architectural Implications"
collection: publications
category: conferences
permalink: /publication/2025-hipec-lightgcn
date: 2025-01-20
venue: "20th International Conference on High Performance, Edge and Cloud Computing (HiPEAC 2025), Barcelona, Spain"
venue_short: "HiPEAC 2025"
type: "Poster"
authors: "C. Davis, P. Stockton, M. Zhang, J. Ryoo, E. John"
tags: [Graph Neural Networks, Computer Architecture]
selected: false
excerpt: "Profiles two graph neural network models, LightGCN and ExpressGNN, on modern hardware and draws out what their bottlenecks imply for future architectures."
citation: "Davis, C., Stockton, P., Zhang, M., Ryoo, J., & John, E. (2025). Microarchitectural Characterization of LightGCN and ExpressGNN and Architectural Implications (Poster). <i>20th International Conference on High Performance, Edge and Cloud Computing (HiPEAC)</i>, Barcelona, Spain."
bibtex: |
  @misc{davis2025gnn,
    title        = {Microarchitectural Characterization of {LightGCN} and {ExpressGNN} and Architectural Implications},
    author       = {Davis, C. and Stockton, P. and Zhang, Muge and Ryoo, Jeeho and John, Eugene},
    howpublished = {Poster at the 20th International Conference on High Performance, Edge and Cloud Computing (HiPEAC)},
    address      = {Barcelona, Spain},
    year         = {2025}
  }
---

Graph neural networks stress hardware differently from dense models: irregular memory access dominates, and the balance between gather, aggregate, and update phases shifts with graph structure. This poster characterizes LightGCN and ExpressGNN at the microarchitectural level and discusses the architectural implications of the bottlenecks we observed.
