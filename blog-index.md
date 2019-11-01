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
        <h1>bZx Blog</h1>
    </header>
</div>
<section class="first-post">
    <div class="container container-xl">

        <article>
            {% assign newest_post = paginator.posts.first %}
            <a href="{{ newest_post.url }}">
                <div class="grid">
   
                    <div class="post-image">
                            <img src="{{ newest_post.cover }}" alt="{{ newest_post.title }}" />

                    </div>
                    <div class="article-content">
                        <h2>{{ newest_post.title }}</h2>
                        <p class="description">
                    Bamboo Relay is the first 0x-standard relay, and in fact the first DEX, to ever offer non-custodial
                    peer-to-peer margin lending. The debut…
                        </p>
                        <p class="date">{{ newest_post.date }}</p>
                    </div>
                </div>
            </a>

        </article>
    </div>
</section>
<section class="posts">
    <div class="container container-xl posts-container">
        
        {% assign newest_post = paginator.posts.first %}
         <article class="first-post">
            <a href="{{ newest_post.url }}">
                <div class="grid">
   
                    <div class="post-image">
                            <img src="{{ newest_post.cover }}" alt="{{ newest_post.title }}" />

                    </div>
                    <div class="article-content">
                        <h4>{{ newest_post.title }}</h4>
                        <p class="description">
                    Bamboo Relay is the first 0x-standard relay, and in fact the first DEX, to ever offer non-custodial
                    peer-to-peer margin lending. The debut…
                        </p>
                        <p class="date">{{ newest_post.date }}</p>
                    </div>
                </div>
            </a>

        </article>

        {% assign shifted_posts = paginator.posts | shift %}
        {% for post in shifted_posts %}
            <article class="d-flex flex-d-c">

                <a href="{{ post.url }}">
                    <div class="grid">

                        <div class="post-image">
                            <img src="{{ post.cover }}" alt="{{ post.title }}" />
                        </div>
                        <div class="article-content">
                            <h4>{{ post.title }}</h4>
                            <p class="description">
                    We are thankful for the support of our backers during the private presale. It is through your
                    support that we were able to develop, audit…
                            </p>
                            <p class="date">{{ post.date }}</p>
                        </div>
                    </div>

                </a>

            </article>
        {% endfor %}
    </div>
</section>
<section class="pagination">
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

{% include subscription.html content="Subscribe to our newsletter" %}

