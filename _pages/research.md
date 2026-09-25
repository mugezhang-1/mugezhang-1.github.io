---
layout: single
title: "Research"
permalink: /research/
author_profile: true
description: "Research of Muge Zhang: multilingual language model pretraining beyond native orthography, cross-lingual reasoning-intensive retrieval, and retrieval-grounded medical reasoning."
---

{% include base_path %}

<p class="lead">I work on multilingual NLP, retrieval, and multimodal medical reasoning. The common thread is making language models work when the data was not written for the task at hand: a different writing system, a query that needs reasoning across languages, or a rare clinical case that no guideline covers.</p>

<div class="directions">
  <article class="direction" id="romanization">
    <span class="direction__num" aria-hidden="true">01</span>
    <div class="direction__body">
      <h3>Pretraining multilingual models beyond native orthography</h3>
      <p>Multilingual models share knowledge across languages through shared subwords, and that mechanism breaks when related languages use different scripts. In a controlled pretraining study across eight languages in four typological pairs and three model scales, we compared orthographic text, IPA, and romanization as input representations. Romanized pretraining gave the strongest cross-lingual transfer, the gap over native text widened with scale, and the benefit only appears when pretraining from scratch. I built the full stack for this work: modded-nanoGPT with custom BPE tokenizers and multi-node SLURM training on H100s at the Ohio Supercomputer Center. Accepted to <a href="https://arxiv.org/abs/2608.25904">EMNLP 2026</a>.</p>
    </div>
  </article>
  <article class="direction" id="cross-lingual-retrieval">
    <span class="direction__num" aria-hidden="true">02</span>
    <div class="direction__body">
      <h3>Cross-lingual reasoning-intensive retrieval</h3>
      <p>Retrievers that look stable on multilingual benchmarks such as MMTEB collapse on cross-lingual queries that require reasoning, degrading 28 to 35% on the hardest task and language combinations. Same-backbone comparisons and alignment probes point to the cause: the contrastive training recipe, not the backbone or the data language, decides whether cross-lingual alignment survives. Manuscript in preparation.</p>
    </div>
  </article>
  <article class="direction" id="medical-reasoning">
    <span class="direction__num" aria-hidden="true">03</span>
    <div class="direction__body">
      <h3>Retrieval-grounded medical reasoning</h3>
      <p>Clinical guidelines cover the common cases, and medical LLMs mostly memorize them. With clinicians at Ohio State we built <a href="https://arxiv.org/abs/2605.21807">OGCaReBench</a>, a free-form benchmark of expert-validated questions from published case reports; the best model answers 56% without retrieval and up to 82% with it. I am now extending this to images and time: a causal temporal-reasoning benchmark from MIMIC-CXR and MIMIC-IV, where a model sees a prior and a recent chest X-ray plus long EHR context and must identify the event that explains the change, with multimodal reasoners trained by SFT warmup and GRPO-based RL using evidence-grounded rewards.</p>
    </div>
  </article>
</div>


## Get in touch

I am always glad to talk with students and researchers who share these interests. {% assign email_parts = site.author.email | split: "@" %}The best way to reach me is by <a href="#" data-u="{{ email_parts[0] | split: "" | reverse | join: "" }}" data-d="{{ email_parts[1] | split: "" | reverse | join: "" }}" title="Click to copy">email</a>.
