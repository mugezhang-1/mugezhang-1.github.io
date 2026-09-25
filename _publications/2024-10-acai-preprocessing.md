---
title: "Microarchitectural Analysis of Pre-Processing Stage in Machine Learning Workloads"
collection: publications
category: conferences
permalink: /publication/2024-acai-preprocessing
date: 2024-10-01
venue: "7th International Conference on Algorithms, Computing and Artificial Intelligence (ACAI 2024)"
venue_short: "ACAI 2024"
authors: "M. Zhang, D. Y. Lee, V. Janarthanan, J. Ryoo"
tags: [ML Systems, Computer Architecture]
selected: false
paperurl: "https://ieeexplore.ieee.org/document/10899564"
excerpt: "A hardware-level study of the data pre-processing stage in machine learning pipelines, which takes a growing share of end-to-end time as datasets scale."
citation: "Zhang, M., Lee, D. Y., Janarthanan, V., & Ryoo, J. (2024). Microarchitectural Analysis of Pre-Processing Stage in Machine Learning Workloads. <i>7th International Conference on Algorithms, Computing and Artificial Intelligence (ACAI)</i>. IEEE."
bibtex: |
  @inproceedings{zhang2024preprocessing,
    title     = {Microarchitectural Analysis of Pre-Processing Stage in Machine Learning Workloads},
    author    = {Zhang, Muge and Lee, D. Y. and Janarthanan, V. and Ryoo, Jeeho},
    booktitle = {2024 7th International Conference on Algorithms, Computing and Artificial Intelligence (ACAI)},
    year      = {2024},
    publisher = {IEEE},
    url       = {https://ieeexplore.ieee.org/document/10899564}
  }
---

Pre-processing is easy to overlook when profiling machine learning workloads, yet it sits on the critical path of every training and inference pipeline and grows with data size. This paper characterizes the pre-processing stage at the microarchitectural level across representative ML applications, identifying where time is spent and what that implies for hardware and software design.
