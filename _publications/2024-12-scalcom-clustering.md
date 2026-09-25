---
title: "Hierarchical Agglomerative Clustering Optimization for Massive Data"
collection: publications
category: conferences
permalink: /publication/2024-scalcom-clustering
date: 2024-12-01
venue: "IEEE 24th International Conference on Scalable Computing and Communications (ScalCom 2024)"
venue_short: "ScalCom 2024"
authors: "W. Dai, M. Zhang"
tags: [Data Mining, Scalable Computing]
selected: false
paperurl: "https://ieeexplore.ieee.org/document/10925041"
excerpt: "Speeds up hierarchical agglomerative clustering on massive datasets by filtering observations by their distance to centroids and keeping only the marginal ones that matter."
citation: "Dai, W., & Zhang, M. (2024). Hierarchical Agglomerative Clustering Optimization for Massive Data. <i>IEEE 24th International Conference on Scalable Computing and Communications (ScalCom)</i>. IEEE."
bibtex: |
  @inproceedings{dai2024hac,
    title     = {Hierarchical Agglomerative Clustering Optimization for Massive Data},
    author    = {Dai, Wenyun and Zhang, Muge},
    booktitle = {2024 IEEE 24th International Conference on Scalable Computing and Communications (ScalCom)},
    year      = {2024},
    publisher = {IEEE},
    url       = {https://ieeexplore.ieee.org/document/10925041}
  }
---

Hierarchical agglomerative clustering produces interpretable dendrograms but scales poorly, because every merge step re-examines pairwise distances. This paper proposes an optimization that filters observations by their distance to cluster centroids, keeping only the relatively marginal observations, which are far more likely to be selected in a merge than central ones, and shows the resulting speedups on large datasets.
