<script setup lang="ts"></script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <Header></Header>
    <div class="pl-1 pl-2 pl-3 pl-4 pl-5 pl-6 pl-7 pl-8 pl-9 pl-10"></div>
    <Workspace class="flex grow border overflow-hidden">
      <Left class="w-64 flex-col"></Left>
      <Center class="flex-grow border-x bg-gray-200"></Center>
      <!-- <Right class="w-64"></Right> -->
    </Workspace>
    <Footer></Footer>
  </div>
</template>
