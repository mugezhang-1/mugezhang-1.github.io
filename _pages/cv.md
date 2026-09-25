---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
description: "Curriculum vitae of Muge Zhang: PhD student in Computer Science and Engineering at The Ohio State University."
redirect_from:
  - /resume
---

{% include base_path %}
{% assign cvpdf = site.static_files | where: "path", "/files/cv.pdf" | first %}
{% if cvpdf %}
<p class="cv__actions"><a class="btn btn--outline" href="{{ base_path }}/files/cv.pdf"><i class="fas fa-file-pdf" aria-hidden="true"></i>Download PDF</a></p>
{% endif %}

<div class="cv">

<section class="cv__section">
  <h2>Education</h2>
  <div class="cv__entry">
    <div class="cv__when">Aug 2025 – May 2030 (expected)</div>
    <div class="cv__what">
      <strong>Ph.D. in Computer Science and Engineering</strong>
      <span>The Ohio State University, Columbus, OH</span>
      <span class="cv__meta">Advisor: <a href="https://sites.google.com/view/sachinkumar">Sachin Kumar</a> · GPA 4.00/4.00</span>
      <span class="cv__meta">Research: multilingual NLP, retrieval, and multimodal medical reasoning</span>
      <span class="cv__meta">Coursework: Machine Learning, Speech &amp; Language Processing, Data Mining, Data Visualization, Artificial Intelligence, Cybersecurity, Software Startups</span>
    </div>
  </div>
  <div class="cv__entry">
    <div class="cv__when">Dec 2024</div>
    <div class="cv__what">
      <strong>M.S. in Applied Computer Science</strong>
      <span>Fairleigh Dickinson University</span>
      <span class="cv__meta">GPA 3.92/4.00</span>
    </div>
  </div>
  <div class="cv__entry">
    <div class="cv__when">June 2021</div>
    <div class="cv__what">
      <strong>B.A.</strong>
      <span>King's College London</span>
      <span class="cv__meta">Upper Second-Class Honours</span>
    </div>
  </div>
</section>

<section class="cv__section">
  <h2>Research experience</h2>
  <div class="cv__entry">
    <div class="cv__when">2025 – present</div>
    <div class="cv__what">
      <strong>Graduate Researcher</strong>
      <span>The Ohio State University · Advisor: <a href="https://sites.google.com/view/sachinkumar">Sachin Kumar</a></span>

      <div class="cv__project">
        <span class="cv__project-title">Romanization for multilingual LM pretraining</span><span class="cv__status">EMNLP 2026</span>
        <ul>
          <li>Ran a controlled study of input representations (orthographic text, IPA, Uroman romanization) for multilingual pretraining from scratch across 8 languages in 4 typological pairs. Romanization won across model scales and evaluation settings, and the benefit requires pretraining from scratch.</li>
          <li>Built the full pretraining stack: modded-nanoGPT with custom BPE tokenizers and SLURM-based multi-node distributed training on H100 clusters at the Ohio Supercomputer Center.</li>
        </ul>
      </div>

      <div class="cv__project">
        <span class="cv__project-title">Cross-lingual reasoning-intensive retrieval</span><span class="cv__status">In preparation</span>
        <ul>
          <li>Showed that retrievers stable on multilingual benchmarks such as MMTEB collapse on cross-lingual reasoning-intensive queries, degrading 28 to 35% on the hardest task and language combinations.</li>
          <li>Isolated the cause with same-backbone comparisons and alignment probes: the contrastive training recipe, not the backbone or data language, determines whether cross-lingual alignment survives.</li>
        </ul>
      </div>

      <div class="cv__project">
        <span class="cv__project-title">Temporal reasoning over chest X-rays</span><span class="cv__status">Ongoing</span>
        <ul>
          <li>Building a causal temporal-reasoning benchmark from MIMIC-CXR and MIMIC-IV with clinical collaborators: given a prior and recent X-ray pair plus long EHR context, identify the medical event explaining the radiographic change.</li>
          <li>Training multimodal reasoners with SFT warmup followed by GRPO-based RL with evidence-grounded rewards.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="cv__entry">
    <div class="cv__when">2023 – 2025</div>
    <div class="cv__what">
      <strong>Research Assistant</strong>
      <span>Fairleigh Dickinson University · Advisors: Jeeho Ryoo and Wenyun Dai</span>
      <ul>
        <li>Extended Med-DDPM conditional diffusion to synthesize Alzheimer's-specific 3D structural MRIs; hybrid real and synthetic training beat real-only segmentation baselines (Dice 0.7244). Published at IEEE MIPR 2025.</li>
        <li>Profiled microarchitectural bottlenecks in ML and GNN workloads; optimized MapReduce hierarchical clustering (9 to 82% faster at over 90% accuracy). Four IEEE conference papers.</li>
      </ul>
    </div>
  </div>
</section>

<section class="cv__section">
  <h2>Publications</h2>
  <ol class="cv__pubs">
    {% assign pubs = site.publications | sort: "date" | reverse %}
    {% for pub in pubs %}
    <li>{{ pub.authors | replace: "M. Zhang", '<strong>M. Zhang</strong>' }}. <a href="{{ base_path }}{{ pub.url }}">{{ pub.title }}</a>. <em>{{ pub.venue_short }}</em>{% if pub.type %} ({{ pub.type }}){% endif %}, {{ pub.date | date: "%Y" }}.</li>
    {% endfor %}
  </ol>
  <p class="cv__meta">Full list on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
</section>

<section class="cv__section">
  <h2>Work experience</h2>
  <div class="cv__entry">
    <div class="cv__when">Sep 2024 – Dec 2024</div>
    <div class="cv__what">
      <strong>Backend Engineer Intern</strong>
      <span>Binance US · Remote</span>
      <ul>
        <li>Developed and maintained internal backend tooling in Python in a high-security environment.</li>
      </ul>
    </div>
  </div>
  <div class="cv__entry">
    <div class="cv__when">May 2021 – Aug 2023</div>
    <div class="cv__what">
      <strong>Software Engineer</strong>
      <span>Wefind AI · Beijing, China</span>
      <ul>
        <li>Built a machine-translation workflow (Python, OpenAI API, spaCy and NLTK), improving accuracy by 30% and cutting manual post-editing by 50%.</li>
        <li>Architected microservices (Flask, Docker, Kubernetes on AWS) serving over 10,000 daily requests at 99.9% uptime; added Redis caching to cut latency by 40%.</li>
      </ul>
    </div>
  </div>
</section>

<section class="cv__section">
  <h2>Skills and service</h2>
  <div class="cv__entry">
    <div class="cv__when">ML &amp; systems</div>
    <div class="cv__what">
      <span class="cv__inline">Python, C/C++, CUDA; PyTorch, HuggingFace Transformers, FlexAttention; distributed training (SLURM, multi-node); Docker, Kubernetes, AWS, Redis, Linux</span>
    </div>
  </div>
  <div class="cv__entry">
    <div class="cv__when">Service</div>
    <div class="cv__what">
      <span class="cv__inline">Reviewer, EMNLP 2026 System Demonstrations</span>
    </div>
  </div>
</section>

</div>
