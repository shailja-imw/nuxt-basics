<script setup>

const date = useDateFormat(new Date)

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link active" aria-current="page"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/add" class="nav-link active" aria-current="page"
                >Add</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/1/update"
                class="nav-link active"
                aria-current="page"
                >update</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/gallery" class="nav-link active" aria-current="page"
                >gallery</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/users" class="nav-link active" aria-current="page"
                >users</NuxtLink
              >
            </li>
          </ul>
          <form class="d-flex">
            {{ date }}
          </form>
        </div>
      </div>
    </nav>
    <div id="page-content" class="mt-5 container">
      <slot></slot>
    </div>
  </div>
</template>
