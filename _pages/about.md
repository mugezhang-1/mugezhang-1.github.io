---
permalink: /
layout: home
title: "Muge Zhang"
description: "Personal website of Muge Zhang, PhD student in Computer Science and Engineering at The Ohio State University, working on multilingual NLP, retrieval, and multimodal medical reasoning."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="hero">
  <p class="eyebrow">PhD student · Computer Science and Engineering · The Ohio State University</p>
  <h1 class="hero__title">Hi, I'm Muge.</h1>
<p class="hero__name">
  <span class="hero__ipa" lang="und-fonipa" title="IPA pronunciation of Muge Zhang">/mu gə ʈʂaŋ/</span>
  <a class="pill" href="https://www.name-coach.com/muge-zhang" target="_blank" rel="noopener"><i class="fas fa-fw fa-volume-high" aria-hidden="true"></i>Hear my name</a>
</p>
  <p class="hero__lead">I work on multilingual NLP, retrieval, and multimodal medical reasoning: how language models transfer across writing systems, find the right evidence, and reason over clinical data.</p>
  <div class="hero__actions">
    <a class="btn btn--primary" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener"><i class="ai ai-google-scholar" aria-hidden="true"></i>Google Scholar</a>
  </div>
</section>

<section class="section" id="about">
  <h2>About</h2>
  <p>I am a PhD student in the <a href="https://cse.osu.edu">Department of Computer Science and Engineering at The Ohio State University</a>, advised by <a href="https://sites.google.com/view/sachinkumar">Sachin Kumar</a>. I am broadly interested in multimodal large language models, reasoning, and retrieval-augmented systems, and in understanding how models access information, reason over it, and ultimately become more reliable for the people who use them.</p>
  <p>My current focus is on strengthening the connection between retrieval and reasoning, supporting multilingual and cross-modal understanding, and developing methods that help LLMs handle complex, structured inputs. More generally, I want to help build AI systems that pair strong reasoning with practical usefulness for everyday users.</p>
</section>

<section class="section" id="news">
  <h2>News</h2>
  {% assign news = site.data.news | sort: "date" | reverse %}
  <ul class="news">
    {% for item in news %}
    <li class="news__item"{% if forloop.index > 6 %} data-news-extra hidden{% endif %}>
      <time class="news__date" datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: "%b %Y" }}</time>
      <div class="news__text">{{ item.text | markdownify | remove: '<p>' | remove: '</p>' }}</div>
    </li>
    {% endfor %}
  </ul>
  {% if news.size > 6 %}
  <button class="linkbtn" type="button" data-news-toggle aria-expanded="false" data-more="Show all {{ news.size }} updates" data-less="Show fewer">Show all {{ news.size }} updates</button>
  {% endif %}
</section>

<section class="section" id="selected-publications">
  <div class="section__head">
    <h2>Selected publications</h2>
    <a class="section__more" href="{{ base_path }}/publications/">All publications<i class="fas fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  {% assign selected = site.publications | where: "selected", true | sort: "date" | reverse %}
  <div class="pub-list">
    {% for pub in selected %}{% include publication-item.html pub=pub compact=true %}{% endfor %}
  </div>
</section>

