<template>
  <ul class="navigation">
    <li class="current dropdown">
      <NuxtLink to="/">Home</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/">Home page 01</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-2">Home page 02</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="/">Page</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-about">About</NuxtLink>
        </li>
        <li class="dropdown">
          <NuxtLink to="/">Team</NuxtLink>
          <ul>
            <li> <NuxtLink to="/page-team">Team</NuxtLink> </li>
            <li> <NuxtLink to="/page-team-details">Team Details</NuxtLink> </li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Services</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-services">Services grid</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-service-details">Services Details</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Projects</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/page-project">Projects grid</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/page-project-details">Project Details</NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">News</NuxtLink>
      <ul>
        <li>
          <NuxtLink to="/news-grid">News Grid</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news-details">News Details</NuxtLink>
        </li>
      </ul>
    </li>
    <li>
      <NuxtLink to="/page-contact">Contact</NuxtLink>
    </li>
  </ul>
</template>