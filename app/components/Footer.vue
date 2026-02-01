<template>
  <footer
    class="bg-secondary text-syria-white py-12 px-4 md:px-6 sticky buttom-0 lg:px-8 md:w-[85%] md:mx-auto"
  >
    <div class="container mx-auto">
      <div
        class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 mb-2 lg:mb-6 pb-4 lg:pb-12 pt-7.5 pe-12 ps-4"
      >
        <div class="w-50">
          <img
            src="/images/mini-logo.svg"
            alt="شعار وزارة الخارجية والمغتربين"
            class="md:h-[75%] w-auto opacity-90 hidden md:block"
          />
        </div>
        <div class="me-4 ms-0 md:mx-2 md:hidden">
          <nuxt-link to="/">
            <img
              class="w-auto h-10 sm:h-11 md:h-12 object-contain"
              src="/images/logo.svg"
              alt=""
            />
          </nuxt-link>
        </div>
        <div class="lg:col-span-2 order-4 md:order-1">
          <h3
            class="text-xl font-bold mb-5 border-b border-Primary text-Primary pb-3"
          >
            وزارة الخارجية والمغتربين
          </h3>
          <p>
            نسعى في وزارة الخارجية والمغتربين بالجمهورية العربية السورية إلى
            تيسير كافة الإجراءات الدبلوماسية والقنصلية للمواطنين في الداخل
            والمغتربين حول العالم، مع الالتزام بسرعة الإنجاز وشفافية المعلومات
          </p>
        </div>

        <div class="md:order-2">
          <h3
            class="text-xl font-bold mb-5 border-b border-Primary text-Primary pb-3"
          >
            روابطة المهمة
          </h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="hover:text-syria-red transition-colors flex items-center gap-2"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="order-3 lg:order-4">
          <h3
            class="text-xl font-bold mb-5 border-b border-Primary text-Primary pb-3"
          >
            خدماتنا
          </h3>
          <ul class="space-y-3">
            <li v-for="service in servicesLinks" :key="service.to">
              <NuxtLink
                :to="service.to"
                class="hover:text-syria-red transition-colors flex items-center gap-2"
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="order-5">
          <h3
            class="text-xl font-bold mb-5 border-b border-Primary text-Primary pb-3"
          >
            تابعنا على
          </h3>
          <ul class="space-y-3">
            <li class="flex gap-2">
              <a
                href="javascript:;"
                class="p-2 rounded-lg flex items-center border hover:text-white hover:bg-Primary border-gray-300 text-Primary justify-center transition-all duration-500 hover:border-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 71 72"
                  fill="currentColor"
                  class=""
                >
                  <path
                    d="M46.4233 38.6403L47.7279 30.3588H39.6917V24.9759C39.6917 22.7114 40.8137 20.4987 44.4013 20.4987H48.1063V13.4465C45.9486 13.1028 43.7685 12.9168 41.5834 12.8901C34.9692 12.8901 30.651 16.8626 30.651 24.0442V30.3588H23.3193V38.6403H30.651V58.671H39.6917V38.6403H46.4233Z"
                    fill=""
                  />
                </svg>
              </a>
              <a
                href="javascript:;"
                class="p-2 rounded-lg flex items-center border border-gray-300 text-Primary justify-center transition-all duration-500 hover:border-gray-100 hover:text-white hover:bg-Primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 71 72"
                  fill="currentColor"
                >
                  <path
                    d="M27.3762 35.7808C27.3762 31.1786 31.1083 27.4468 35.7132 27.4468C40.3182 27.4468 44.0522 31.1786 44.0522 35.7808C44.0522 40.383 40.3182 44.1148 35.7132 44.1148C31.1083 44.1148 27.3762 40.383 27.3762 35.7808ZM22.8683 35.7808C22.8683 42.8708 28.619 48.618 35.7132 48.618C42.8075 48.618 48.5581 42.8708 48.5581 35.7808C48.5581 28.6908 42.8075 22.9436 35.7132 22.9436C28.619 22.9436 22.8683 28.6908 22.8683 35.7808ZM46.0648 22.4346C46.0646 23.0279 46.2404 23.608 46.5701 24.1015C46.8997 24.595 47.3684 24.9797 47.9168 25.2069C48.4652 25.4342 49.0688 25.4939 49.6511 25.3784C50.2334 25.2628 50.7684 24.9773 51.1884 24.5579C51.6084 24.1385 51.8945 23.6041 52.0105 23.0222C52.1266 22.4403 52.0674 21.8371 51.8404 21.2888C51.6134 20.7406 51.2289 20.2719 50.7354 19.942C50.2418 19.6122 49.6615 19.436 49.0679 19.4358H49.0667C48.2708 19.4361 47.5077 19.7522 46.9449 20.3144C46.3821 20.8767 46.0655 21.6392 46.0648 22.4346ZM25.6072 56.1302C23.1683 56.0192 21.8427 55.6132 20.9618 55.2702C19.7939 54.8158 18.9606 54.2746 18.0845 53.4002C17.2083 52.5258 16.666 51.6938 16.2133 50.5266C15.8699 49.6466 15.4637 48.3214 15.3528 45.884C15.2316 43.2488 15.2073 42.4572 15.2073 35.781C15.2073 29.1048 15.2336 28.3154 15.3528 25.678C15.4639 23.2406 15.8731 21.918 16.2133 21.0354C16.668 19.8682 17.2095 19.0354 18.0845 18.1598C18.9594 17.2842 19.7919 16.7422 20.9618 16.2898C21.8423 15.9466 23.1683 15.5406 25.6072 15.4298C28.244 15.3086 29.036 15.2844 35.7132 15.2844C42.3904 15.2844 43.1833 15.3106 45.8223 15.4298C48.2612 15.5408 49.5846 15.9498 50.4677 16.2898C51.6356 16.7422 52.4689 17.2854 53.345 18.1598C54.2211 19.0342 54.7615 19.8682 55.2161 21.0354C55.5595 21.9154 55.9658 23.2406 56.0767 25.678C56.1979 28.3154 56.2221 29.1048 56.2221 35.781C56.2221 42.4572 56.1979 43.2466 56.0767 45.884C55.9656 48.3214 55.5573 49.6462 55.2161 50.5266C54.7615 51.6938 54.2199 52.5266 53.345 53.4002C52.4701 54.2738 51.6356 54.8158 50.4677 55.2702C49.5872 55.6134 48.2612 56.0194 45.8223 56.1302C43.1855 56.2514 42.3934 56.2756 35.7132 56.2756C29.033 56.2756 28.2432 56.2514 25.6072 56.1302ZM25.4001 10.9322C22.7371 11.0534 20.9174 11.4754 19.3282 12.0934C17.6824 12.7316 16.2892 13.5878 14.897 14.977C13.5047 16.3662 12.6502 17.7608 12.0116 19.4056C11.3933 20.9948 10.971 22.8124 10.8497 25.4738C10.7265 28.1394 10.6982 28.9916 10.6982 35.7808C10.6982 42.57 10.7265 43.4222 10.8497 46.0878C10.971 48.7494 11.3933 50.5668 12.0116 52.156C12.6502 53.7998 13.5049 55.196 14.897 56.5846C16.289 57.9732 17.6824 58.8282 19.3282 59.4682C20.9204 60.0862 22.7371 60.5082 25.4001 60.6294C28.0687 60.7506 28.92 60.7808 35.7132 60.7808C42.5065 60.7808 43.3592 60.7526 46.0264 60.6294C48.6896 60.5082 50.5081 60.0862 52.0983 59.4682C53.7431 58.8282 55.1373 57.9738 56.5295 56.5846C57.9218 55.1954 58.7745 53.7998 59.4149 52.156C60.0332 50.5668 60.4575 48.7492 60.5768 46.0878C60.698 43.4202 60.7262 42.57 60.7262 35.7808C60.7262 28.9916 60.698 28.1394 60.5768 25.4738C60.4555 22.8122 60.0332 20.9938 59.4149 19.4056C58.7745 17.7618 57.9196 16.3684 56.5295 14.977C55.1395 13.5856 53.7431 12.7316 52.1003 12.0934C50.5081 11.4754 48.6894 11.0514 46.0284 10.9322C43.3612 10.811 42.5085 10.7808 35.7152 10.7808C28.922 10.7808 28.0687 10.809 25.4001 10.9322Z"
                    fill="currentColor"
                  /></svg
              ></a>
              <a
                href="javascript:;"
                class="p-2 rounded-lg flex items-center border border-gray-300 text-Primary justify-center transition-all duration-500 hover:border-gray-100 hover:text-white hover:bg-Primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 72 72"
                  fill="currentColor"
                >
                  <path
                    d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                    fill="currentColor"
                  /></svg
              ></a>
              <a
                href="javascript:;"
                class="p-2 rounded-lg flex items-center border border-gray-300 justify-center text-Primary hover:text-white hover:bg-Primary transition-all duration-500 hover:border-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <path
                    d="M17.5822 33.5652C17.5822 33.5652 36.2102 25.7194 42.6707 22.9567C45.1473 21.8518 53.546 18.3155 53.546 18.3155C53.546 18.3155 57.4224 16.7685 57.0993 20.5256C56.9916 22.0728 56.1302 27.4874 55.2688 33.3442C53.9767 41.6322 52.5769 50.6935 52.5769 50.6935C52.5769 50.6935 52.3615 53.2352 50.5311 53.6772C48.7006 54.1192 45.6856 52.1302 45.1473 51.6881C44.7165 51.3566 37.0715 46.3838 34.272 43.9527C33.5182 43.2897 32.6569 41.9637 34.3796 40.4166C38.256 36.7699 42.886 32.2392 45.6856 29.3661C46.9778 28.04 48.2698 24.9459 42.886 28.703C35.2411 34.1178 27.7038 39.201 27.7038 39.201C27.7038 39.201 25.9809 40.306 22.7507 39.3115C19.5203 38.317 15.7516 36.9909 15.7516 36.9909C15.7516 36.9909 13.1675 35.3334 17.5822 33.5652Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="text-secondary" />

      <div
        class="flex flex-col gap-4 md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700 text-sm opacity-75"
      >
        <p class=" ">
          © 2026 وزارة الخارجية والمغتربين | الجمهورية العربية جميع الحقوق
          محفوظة السورية
        </p>
        <div class="flex gap-4">
          <span class="underline text-Primary"
            ><nuxt-link to="">سياسة الخصوصية</nuxt-link></span
          >
          <span class="underline text-Primary"
            ><nuxt-link to="">الشروط والاحكام</nuxt-link></span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "الأخبار", to: "/news" },
  { label: "البعثات الدبلوماسية", to: "/missions" },
  { label: "الخدمات", to: "/services" },
  { label: "شؤون المنظمات الدولية بنا", to: "" },
];

const servicesLinks = [
  { label: "الخدمات", to: "/services/consular-registration" },
  { label: " تواصل معنا", to: "/services/passport-issuance" },
  { label: "تنزيل التطبيق", to: "/services/document-authentication" },
];
</script>
