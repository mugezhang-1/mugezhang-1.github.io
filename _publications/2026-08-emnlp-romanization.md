---
title: "One Form to Transfer Them All: Pretraining Multilingual Language Models Beyond Native Orthography"
collection: publications
category: conferences
permalink: /publication/2026-emnlp-romanization
date: 2026-08-26
venue: "Conference on Empirical Methods in Natural Language Processing (EMNLP 2026), Main Conference"
venue_short: "EMNLP 2026"
status: "To appear"
authors: "M. Zhang, A. Jencks, K. Badikela, Y. Tsvetkov, S. Kumar"
tags: [Multilingual NLP, Pretraining]
selected: true
paperurl: "https://arxiv.org/abs/2608.25904"
pdfurl: "https://arxiv.org/pdf/2608.25904"
excerpt: "A controlled comparison of orthographic text, IPA, and romanization as input for multilingual pretraining across eight languages and three model scales. Romanized pretraining gives the strongest cross-lingual transfer, and the gap widens with scale."
citation: "Zhang, M., Jencks, A., Badikela, K., Tsvetkov, Y., & Kumar, S. (2026). One Form to Transfer Them All: Pretraining Multilingual Language Models Beyond Native Orthography. <i>Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP)</i>."
bibtex: |
  @inproceedings{zhang2026oneform,
    title     = {One Form to Transfer Them All: Pretraining Multilingual Language Models Beyond Native Orthography},
    author    = {Zhang, Muge and Jencks, Aaron and Badikela, Krishna and Tsvetkov, Yulia and Kumar, Sachin},
    booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP)},
    year      = {2026},
    url       = {https://arxiv.org/abs/2608.25904}
  }
---

Multilingual language models transfer knowledge across languages through a shared subword vocabulary, a mechanism that breaks down when related languages use different writing systems. Prior work addresses this through script equalization, using romanization or IPA transcription, but direct comparisons are rare: the focus has been on encoder-only models, and most work adapts existing pretrained models rather than pretraining from scratch.

We systematically compare input representations for autoregressive multilingual pretraining, contrasting orthographic text, IPA, and romanization in a controlled setup across three scales (467M, 709M, and 1.03B parameters) on eight languages in four typologically motivated pairs. Across a wide range of downstream tasks on seen and unseen languages, romanized pretraining yields the strongest cross-lingual transfer, and its advantage over text widens with scale. IPA improves over text in most settings but trails romanization. Surprisingly, finetuning a text-pretrained model on romanized data hurts performance on languages the base model already covers, and only marginally helps when the model lacks script coverage. For multilingual models spanning typologically diverse scripts, romanization should be treated as a core design choice applied at pretraining, not a post hoc fix.
