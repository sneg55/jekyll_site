---
layout: blog-index
title: bzx blog title
metadescription: bzx blog description
permalink: /blog/
pagination:
  enabled: true
  collection: posts
  permalink: /:num/ 
---

<header>
<h1>bZx Blog</h1>
</header>
<section class="first-post">
    <article>
    {% assign newest_post = paginator.posts.last %}
        <div class="first-post-image">
            <a href="{{ newest_post.canonical }}">
                <img src="{{ newest_post.cover }}" alt="{{ newest_post.title }}" />
            </a>
            <div class="article-content">
                <h3>{{ newest_post.title }}</h3>
                <p>{{ newest_post.date }}</p>
            </div>
        </div>
    </article>
</section>
<section class="tiles">

{% for post in paginator.posts %}
	<article>
        <div class="post-image">
            <a href="{{ post.canonical }}">
                <img src="{{ post.cover }}" alt="{{ post.title }}" />
            </a>
            <div class="article-content">
                <h3>{{ post.title }}</h3>
                <p>{{ post.date }}</p>
            </div>
        </div>
    </article>
{% endfor %}

</section>

{% if paginator.next_page %}
  <a class="button" href="{{ paginator.next_page_path | prepend: site.baseurl }}">Next</a>
{% endif %}

  {% if paginator.previous_page %}
    <a class="button" href="{{ paginator.previous_page_path | prepend: site.baseurl }}">Previous</a>
  {% endif %}
