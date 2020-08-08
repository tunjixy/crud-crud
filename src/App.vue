<template>
  <div id="app" class="font-karla antialiased text-darkblue">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import 'assets/css/tailwind.css';

body {
  background: #f6f8f8;
}
</style>
