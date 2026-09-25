---
title: "When Cases Get Rare: A Retrieval Benchmark for Off-Guideline Clinical Question Answering"
collection: publications
category: conferences
permalink: /publication/2026-ogcarebench
date: 2026-05-20
venue: "arXiv preprint arXiv:2605.21807"
venue_short: "arXiv"
type: "Preprint"
authors: "D. Lee, M. Zhang, Y. Yu, A. Manne, S. Koesters, F. Wen, B. Buchanan, L. Villagomez, O. Moninuola, J. Lim, K. Tobin, A. Srisuwananukorn, P. Zhang, S. Kumar"
tags: [Retrieval, Medical NLP]
selected: true
paperurl: "https://arxiv.org/abs/2605.21807"
pdfurl: "https://arxiv.org/pdf/2605.21807"
excerpt: "OGCaReBench, a free-form, retrieval-focused benchmark of expert-validated clinical questions drawn from published case reports. The best model answers only 56% without retrieval and up to 82% with it."
citation: "Lee, D., Zhang, M., Yu, Y., Manne, A., Koesters, S., Wen, F., Buchanan, B., Villagomez, L., Moninuola, O., Lim, J., Tobin, K., Srisuwananukorn, A., Zhang, P., & Kumar, S. (2026). When Cases Get Rare: A Retrieval Benchmark for Off-Guideline Clinical Question Answering. <i>arXiv preprint arXiv:2605.21807</i>."
bibtex: |
  @article{lee2026ogcarebench,
    title   = {When Cases Get Rare: A Retrieval Benchmark for Off-Guideline Clinical Question Answering},
    author  = {Lee, Doeun and Zhang, Muge and Yu, Yi and Manne, Ashish and Koesters, Stephen and Wen, Frank and Buchanan, Brady and Villagomez, Lynda and Moninuola, Oluwatoba and Lim, James and Tobin, Kathryn and Srisuwananukorn, Andrew and Zhang, Ping and Kumar, Sachin},
    journal = {arXiv preprint arXiv:2605.21807},
    year    = {2026},
    url     = {https://arxiv.org/abs/2605.21807}
  }
---

Across medical specialties, clinical practice is anchored in evidence-based guidelines that codify the best-studied diagnostic and treatment pathways. Those pathways routinely fall short for the long tail of real-world care that no guideline covers. Most medical large language models, however, are trained to encode common, guideline-focused knowledge in their parameters, and current evaluations mostly test recall of that memorized content, often in multiple-choice settings.

We introduce **OGCaReBench**, a free-form, retrieval-focused benchmark for evaluating LLMs on clinical questions that require going beyond typical guidelines. Extracted from published medical case reports and validated by medical experts, it contains long-form clinical questions with free-text answers, giving a systematic framework for assessing open-ended medical reasoning in rare, case-based scenarios. Even the best-performing baseline (GPT-5.2) answers only 56% of the benchmark correctly, and specialized medical models reach only 42%. Augmenting models with retrieved medical articles raises performance to up to 82%, underscoring how much real-world medical reasoning depends on evidence grounding.
