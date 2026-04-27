---
layout: default
title: Home
description: A compact community wiki.
---

# FastBuilder Wiki

A simple community wiki for documenting FastBuilder players, servers, records, methods, tutorials, McPlayHD information, and replay tools.

<div class="grid">
{% for item in site.data.nav %}
<a class="card" href="{{ item.url | relative_url }}">
<h2>{{ item.title }}</h2>
<p>{{ item.description }}</p>
</a>
{% endfor %}
</div>
