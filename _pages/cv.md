---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
description: "Curriculum vitae of Muge Zhang."
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
    <div class="cv__when">2025 – present</div>
    <div class="cv__what">
      <strong>Ph.D. in Computer Science and Engineering</strong>
      <span>The Ohio State University, Columbus, OH</span>
      <span class="cv__note">Advisor: <a href="https://sites.google.com/view/sachinkumar">Sachin Kumar</a></span>
    </div>
  </div>
</section>

<section class="cv__section">
  <h2>Research interests</h2>
  <ul class="chips">
    <li>Multimodal large language models</li>
    <li>Reasoning and inference</li>
    <li>Retrieval-augmented generation</li>
    <li>Multilingual and cross-modal understanding</li>
    <li>Complex information processing</li>
  </ul>
</section>

<section class="cv__section">
  <h2>Experience</h2>
  <div class="cv__entry">
    <div class="cv__when">2025 – present</div>
    <div class="cv__what">
      <strong>Graduate Teaching Associate</strong>
      <span>Department of Computer Science and Engineering, The Ohio State University</span>
    </div>
  </div>
  <div class="cv__entry">
    <div class="cv__when">2024 – 2025</div>
    <div class="cv__what">
      <strong>Student Researcher</strong>
      <span>Advised by <a href="https://jhryoo.com">Jeeho Ryoo</a></span>
      <ul>
        <li>Microarchitectural characterization of ML pre-processing stages and graph neural network workloads.</li>
        <li>Machine-learning-based generation of synthetic MRI scans for Alzheimer's disease diagnosis.</li>
        <li>Learning-based caching for IoT devices and scalable hierarchical clustering.</li>
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
</section>

</div>
