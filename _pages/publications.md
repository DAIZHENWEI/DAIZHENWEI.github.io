---
title: "Publications [(Google Scholar)](https://scholar.google.com/citations?user=f73pQXsAAAAJ&hl=en&oi=ao)"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
