<template>
  <div class="p-4 md:p-10 lg:p-16 min-h-screen relative overflow-hidden">
    <HeaderTitle title="About Me" />

    <p class="mt-10 font-normal leading-[30px]">Hi! my name is <b class="font-semibold">Galih Anggoro Jati</b>. I am {{
      myAge }} years old and I
      am Informatics Engineer who loves technology especially programming. I am friendly, responsive, interest for learn
      about new things, and i like challenges. My hobby is playing pingpong, guitar, badminton, games and photography
      enthusiast.</p>

    <div class="mt-10 flex flex-wrap gap-10 lg:gap-16">
      <div>
        <img src="/profile-galih.webp" alt="Galih AJ" class="max-w-[300px] max-h-[300px] rounded-lg w-full" />
      </div>
      <div class="self-baseline">
        <table class="">
          <tbody>
            <tr>
              <td class="align-top pb-7 text-left font-semibold">
                <div class="flex items-center gap-2">
                  <IconChevronRight />
                  Age
                </div>
              </td>
              <td class="align-top pb-7 text-left pl-10 pr-3">:</td>
              <td class="align-top pb-7 text-left">{{ myAge }}</td>
            </tr>
            <tr>
              <td class="align-top pb-7 text-left font-semibold">
                <div class="flex items-center gap-2">
                  <IconChevronRight />
                  Degree
                </div>
              </td>
              <td class="align-top pb-7 text-left pl-10 pr-3">:</td>
              <td class="align-top pb-7 text-left">S1 Informatics Engineering</td>
            </tr>
            <tr>
              <td class="align-top pb-7 text-left font-semibold">
                <div class="flex items-center gap-2">
                  <IconChevronRight />
                  City
                </div>
              </td>
              <td class="align-top pb-7 text-left pl-10 pr-3">:</td>
              <td class="align-top pb-7 text-left">Jakarta, Indonesia</td>
            </tr>
            <tr>
              <td class="align-top pb-7 text-left font-semibold">
                <div class="flex items-center gap-2">
                  <IconChevronRight />
                  Freelance
                </div>
              </td>
              <td class="align-top pb-7 text-left pl-10 pr-3">:</td>
              <td class="align-top pb-7 text-left">
                <span class="text-green-600 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path
                      d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                  Available
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-1">
          <p class="mb-4">Follow me on <a class="text-primary font-semibold hover:underline"
              href="https://www.instagram.com/galihanggorojati/" target="_blank">Instagram</a></p>
          <p class="mb-4">Follow me on <a class="text-primary font-semibold hover:underline"
              href="https://www.linkedin.com/in/galih-anggoro-jati/" target="_blank">Linkedin</a></p>
        </div>

      </div>
    </div>

    <div class="mt-10 lg:mt-16 mb-4 lg:mb-12">
      <h3 class="text-lg font-semibold text-slate-800">Tools and Technologies</h3>

      <div class="mt-4 flex flex-wrap mb-24 lg:mb-0 items-center gap-4 lg:gap-6">
        <div class="group flex relative cursor-pointer mb-4">
          <PHP />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">PHP</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <JS />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">JavaScript</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <Laravel />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Laravel
            Framework</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <Lumen />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">Lumen
            Framework</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <Vue />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">VueJS</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <React />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">ReactJS</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <NuxtJS />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">NuxtJS</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <HTML />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">HTML</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <CSS />
          <span
            class="group-hover:opacity-100 hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">CSS</span>
        </div>

        <div class="group flex relative cursor-pointer mb-4">
          <PostgreSQL />
          <span
            class="group-hover:opacity-100  hidden group-hover:inline whitespace-nowrap transition-opacity bg-gray-800 px-3 py-1 text-sm text-gray-100 rounded-md absolute left-1/2 z-10 -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">PostgreSQL</span>
        </div>
      </div>
    </div>


    <div class="flex justify-start lg:justify-end mb-10">
      <ButtonNext to="/portfolio" name="next" />
    </div>

    <div class="mb-4" />

  </div>
</template>

<script setup>

useHead({
  title: 'About - Galih Anggoro Jati'
})

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

let myAge = getAge('1996/01/16');
</script>