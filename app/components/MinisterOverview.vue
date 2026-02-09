<!-- components/MinisterOverview.vue -->
<template>
  <section class="md:py-6  py-8 mt-6 bg-secondary">
    <div class=" mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold  md:mb-8 mb-10">
        لمحة عن الوزير
      </h2>
<!-- <hr class="my-auto h-5"> -->
 <hr class="border-gray-300 mt-2 pb-4">
      <div
        class="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto"
      >
        <!-- صورة الوزير -->
        <div class="">
          <div class=" rounded-4xl overflow-hidden shadow-2xl">
            <img
              src="\images\01K042ENG86WPF1363SZBZ94T7.png"
              alt="أسعد حسن الشيباني - وزير الخارجية والمغتربين"
              class="object-cover"
              height="400"
              width="400"
              loading="lazy"
            />
            <!-- overlay خفيف للجمالية -->
            <div
            ></div>
          </div>
        </div>

        <!-- النص -->
        <div class="md:pt-6 w-full lg:w-7/12">
          <h3
            class="text-3xl text-center md:text-start md:text-3xl lg:text-4xl font-bold text-Primary mb-6"
          >
            أسعد حسن الشيباني
          </h3>

          <p
            class=" text-xl md:text-2xl font-bold text-[#F9E6A7] leading-relaxed mb-8"
          >
            وزير الخارجية والمغتربين في الجمهورية العربية السورية.
          </p>
          <div class="text-gray-400 leading-relaxed ">
            <p class="leading-relaxed">
              أسعد حسن الشيباني، من بني شيبان، ولد في محافظة الحسكة ١٩٨٧، انتقل
              مع عائلته للسكن في دمشق، وهناك تخرج من جامعتها عام ٢٠٠٩ من كلية
              الآداب والعلوم الإنسانية: فرع اللغة الانجليزية وآدابها.
            </p>
            <br>
            <p class="leading-relaxed">
              انضم للثورة السورية منذ بدايتها ٢٠١١ وشهد كل مراحلها ولم يفارقها
              منذ تلك اللحظة وشارك في تأسيس حكومة الإنقاذ السورية، وأسس إدارة
              الشؤون السياسية.
            </p>
            <br>
            <p class="leading-relaxed">
              عمل في الجانب الإنساني وأقام علاقات متميزة مع الأمم المتحدة
              ووكالاتها وسهل العمل الانساني في شمال غرب سوريا
            </p>
            <br>
            <p class="leading-relaxed">
              حصل على درجة الماجيستير في العلوم السياسية والعلاقات الخارجية من
              تركيا عام ٢٠٢٢. واليوم يكمل الدكتوراه في ذات التخصص. وأنهى كذلك
              المرحلة الأخيرة من ماجيستير إدارة الأعمال MBA في الجامعة
              الأمريكية.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
