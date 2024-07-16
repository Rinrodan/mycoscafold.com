---
title: Contact
date: 2021-12-18T03:10:36.000Z
draft: false
language: en
description: A test with @tailwindcss/typography & Prose
featured_image: ../assets/images/featured/featured-img-placeholder.png
---

<!-- @format -->

<section class="lg:pb-24">
  <div class="max-w-screen-md px-4 mx-auto">
        <div class="headerImageContainer">
            <div class="photo-attr">
                <span>
                    <a 
                        href="{{ .Site.Params.contactpage.PhotoAttrUrl }}" 
                        target="_blank">{{ .Site.Params.contactpage.PhotoAttrText }}</a>
                </span>
            </div>
            <img
                src="{{.Site.Params.contactpage.headerImageUrl}}"
                alt="{{.Site.Params.contact.headerImageAltText}}"
                class="headerImage"
                width="1000"
                height="300">
        </div>
    <div class="container">
        <h1>{{ .Title }}</h1>
        <h2>{{ .description }}</h2>
            <iframe 
                name="lc_contact_form" 
                class="iframe rounded-sm"
                frameborder="0" 
                width="100%" 
                height="600" 
                src="https://683865.17hats.com/p#/embed/wssdgxvwcwbcntkbgbkrvhrdrsgdpnhw">
            </iframe>
        <script 
            type="text/javascript" 
            src="https://683865.17hats.com/vendor/iframeSizer.min.js">
        </script>
    </div>
  </div>
</section>
