---
layout: blog-index
title: bzx blog title
metadescription: bzx blog description
permalink: /blog/
pagination:
  enabled: true
  per_page: 10
  collection: posts
  permalink: /:num/
---
<div class="container container-xl">
    <header class="blog-index">
        <h1 class="mb-50 mt-70 mt-sm-30 mb-sm-30 fs-46 lh-120 fw-800 color-primary text-center fs-sm-32">bZx Protocol Blog</h1>
    </header>
</div>
<section class="first-post">
    <div class="container container-xl">

        <article class="color-primary">
            {% assign newest_post = paginator.posts.first %}
            <a href="{{ newest_post.url }}">
                <div class="grid">

                    <div class="post-image">
                            <img src="{{ newest_post.cover }}" alt="{{ newest_post.title }}" />

                    </div>
                    <div class="article-content">
                        <h2 class="fs-32 lh-140 fw-700 mb-20 mt- fs-sm-24">{{ newest_post.title }}</h2>
                        <p class="description fs-16 fs-sm-12 lh-160 mb-20">
                            {{ newest_post.intro }}
                        </p>
                        <p class="date fs-14 fs-sm-11 lh-180">{{ newest_post.date | date_to_string }}</p>
                    </div>
                </div>
            </a>

        </article>
    </div>
</section>
<section class="posts">
    <div class="container container-xl posts-container">

        {% assign newest_post = paginator.posts.first %}

        {% include article-tile.html class="first-post" post=newest_post %}

        {% assign shifted_posts = paginator.posts | shift %}
        {% for post in shifted_posts %}

            {% include article-tile.html post=post %}

        {% endfor %}
    </div>
</section>
<section class="pagination mt-50 mb-90">
    <div class="container container-xl">

        {% if paginator.total_pages > 1 %}
            <ul class="d-flex j-content-sa">
            {% if paginator.previous_page %}
            <li>
                <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}"
                    class="button button-primary button-lg d-flex j-content-center">Newer posts</a>
            </li>
            {% endif %}
            {% if paginator.next_page %}
            <li>
                <a href="{{ paginator.next_page_path | prepend: site.baseurl }}"
                    class="button button-primary button-lg d-flex j-content-center">Older posts</a>
            </li>
            {% endif %}
            </ul>
        {% endif %}
    </div>
</section>

{% include subscription.html content="Subscribe to our newsletter" buttonText="Submit" %}
