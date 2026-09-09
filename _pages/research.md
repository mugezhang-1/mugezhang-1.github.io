---
layout: single
title: "Research"
permalink: /research/
author_profile: true
description: "Research directions of Muge Zhang: retrieval that serves reasoning in LLMs, multilingual and cross-modal understanding, and complex structured inputs."
---

{% include base_path %}

<p class="lead">I want language models to be trustworthy when the answer depends on information they were not trained on. That means getting the right evidence in front of the model, reasoning over it carefully, and doing so in every language and modality a user might bring. My work sits at the intersection of retrieval, reasoning, and multimodal understanding.</p>

<div class="directions">
  <article class="direction" id="retrieval-reasoning">
    <span class="direction__num" aria-hidden="true">01</span>
    <div class="direction__body">
      <h3>Retrieval that serves reasoning</h3>
      <p>Retrieval-augmented generation usually treats retrieval and reasoning as separate stages: fetch some passages, then hope the model uses them well. I am interested in closing that gap, so that what a model retrieves is shaped by what it needs to reason about, and its reasoning stays grounded in what it actually retrieved. Questions I care about include when a model should retrieve at all, how to tell useful evidence from distracting evidence, and how to make the resulting answers verifiable.</p>
    </div>
  </article>
  <article class="direction" id="multilingual-multimodal">
    <span class="direction__num" aria-hidden="true">02</span>
    <div class="direction__body">
      <h3>Multilingual and cross-modal understanding</h3>
      <p>Most of the world's information is not in English, and much of it is not text. I study how models can retrieve and reason across languages and modalities, such as answering a question in one language from documents in another, or grounding an answer in a figure, a table, or an image. The goal is for capability to transfer, rather than being rebuilt from scratch for every language and input type.</p>
    </div>
  </article>
  <article class="direction" id="structured-inputs">
    <span class="direction__num" aria-hidden="true">03</span>
    <div class="direction__body">
      <h3>Complex, structured inputs</h3>
      <p>Real tasks come with long documents, nested tables, code, and mixed-format records, not tidy paragraphs. I work on methods that help LLMs handle these inputs faithfully: preserving structure when it matters, locating the relevant parts of very long contexts, and combining pieces of evidence that are spread across a document.</p>
    </div>
  </article>
</div>

## Earlier work

Before starting my PhD, I worked on the systems side of machine learning and on applied ML for medical imaging with [Jeeho Ryoo](https://jhryoo.com)'s group. That work looked at where ML pipelines actually spend their time on modern hardware, and at what to do when good training data is scarce.

<ul class="worklist">
  <li><strong>Characterizing ML workloads on hardware.</strong> Microarchitectural analysis of the data pre-processing stage in ML pipelines (<a href="{{ base_path }}/publication/2024-acai-preprocessing">ACAI 2024</a>) and of graph neural networks such as LightGCN and ExpressGNN (<a href="{{ base_path }}/publication/2025-hipec-lightgcn">HiPEAC 2025</a>).</li>
  <li><strong>Learning-based systems.</strong> An AI-powered caching scheme that predicts user behavior on IoT devices (<a href="{{ base_path }}/publication/2024-cyberc-cache">CyberC 2024</a>) and an optimization that scales hierarchical agglomerative clustering to massive datasets (<a href="{{ base_path }}/publication/2024-scalcom-clustering">ScalCom 2024</a>).</li>
  <li><strong>Synthetic medical imaging.</strong> Generating synthetic MRI scans to expand training data for Alzheimer's disease diagnosis (<a href="{{ base_path }}/publication/2025-mipr-alzheimers">MIPR 2025</a>).</li>
</ul>

## Get in touch

I am always glad to talk with students and researchers who share these interests. The best way to reach me is by [email](mailto:{{ site.author.email }}).
