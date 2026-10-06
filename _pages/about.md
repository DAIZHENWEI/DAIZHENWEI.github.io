---
layout: academic
home: true
permalink: /
title: "About"
excerpt: "Principal Applied Scientist at Microsoft M365 Copilot, working on LLM post-training, evaluation, and reliable agents."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<section id="about" class="intro" aria-labelledby="about-heading">
  <h1 id="about-heading">Zhenwei Dai <span class="name-native" lang="zh">戴振威</span></h1>
  <p>I am a <strong>Principal Applied Scientist at Microsoft M365 Copilot</strong>, where I lead LLM post-training and evaluation. My work focuses on improving instruction following, response quality, reliability, and inference efficiency for agents in everyday productivity workflows.</p>
  <p>Previously, I worked across <strong>Amazon Ads</strong>, <strong>Amazon Search</strong>, and <strong>AWS AI Research and Education (AIRE)</strong>, focusing on NLP model training and LLM post-training.</p>
  <p>I earned my PhD at <a href="https://www.rice.edu/">Rice University</a> in August 2022, advised by Prof. <a href="https://www.cs.rice.edu/~as143/">Anshumali Shrivastava</a> and Prof. <a href="https://reinhardheckel.com/">Reinhard Heckel</a>. My doctoral research focused on efficient algorithms for large-scale machine learning, randomized algorithms, and data mining.</p>
  <p class="research-focus"><strong>Research interests</strong><br>LLM post-training; reliable agents, tool use, and evaluation; efficient reasoning and adaptation; memory-efficient algorithms and probabilistic data structures.</p>
</section>

<section id="minicorp" class="home-section" aria-labelledby="minicorp-heading">
  <div class="section-heading">
    <h2 id="minicorp-heading">MiniCorp</h2>
  </div>
  <article class="project-feature">
    <p class="project-kicker">Featured research project <span aria-hidden="true">·</span> 2026</p>
    <h3>Office Simulators for Enterprise AGI</h3>
    <p>MiniCorp is an office simulator where AI agents work together, make decisions, and respond to market feedback. We use this setting to study how an AI-run company learns over time.</p>
    <p>A collaboration with <a href="https://jingyingzeng.com/">Jingying Zeng</a> and our coauthors.</p>
    <img class="project-image" src="{{ '/minicorp_demo.png' | relative_url }}" alt="Illustration of connected MiniCorp offices with AI agents working across different industries" width="2172" height="724" loading="lazy" decoding="async">
    <p class="project-paper">Our paper: <em>MiniCorp: The Last Mile of the AI Agent Firm</em></p>
    <div class="project-links">
      <a class="project-website" href="https://agents-minicorp.com/">Explore MiniCorp <span aria-hidden="true">↗</span></a>
      <a href="https://arxiv.org/pdf/2610.05912">Read the paper <span aria-hidden="true">↗</span></a>
    </div>
  </article>
</section>

<section id="experience" class="home-section" aria-labelledby="experience-heading">
  <div class="section-heading">
    <h2 id="experience-heading">Experience</h2>
    <a href="{{ '/cv/' | relative_url }}">Full CV <span aria-hidden="true">→</span></a>
  </div>
  {% include academic-experience.html %}
</section>

<section id="publications" class="home-section" aria-labelledby="publications-heading">
  <div class="section-heading">
    <h2 id="publications-heading">Selected Publications</h2>
    <a href="{{ '/publications/' | relative_url }}">View all <span aria-hidden="true">→</span></a>
  </div>
  <p class="publication-note">* denotes equal contribution.</p>
  {% include academic-publications.html limit=6 %}
  <a class="all-publications" href="{{ '/publications/' | relative_url }}">View all selected publications <span aria-hidden="true">→</span></a>
</section>
