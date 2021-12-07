<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    :show-arrows="false"
  >
    <v-carousel-item
      class="carousel"
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://lh3.googleusercontent.com/G09ST6vLkBiPmSGqNiMp3f28jmXAqW1FytiHVDLDTNhGyGpQ-hz99x2hsShrd9a98f1uSfcZDWCCiZXUe7R2EgwGIK3cpFBzjMFozQVWWjjM2I7AIagJ-UhDCm-kxQ0QjNq6YA0kCZ1Gu7HIsuj19oMoBMkEAqEM2jstu2_XLTPB3a9qSUSvWic_w7y5BOTCSpNIbFXCVZtALmompdNVopf3GL4ALk30B-9hFMbRU5vVNxYoBaB6Q8sCLuryE4diV_aDM1nDEA6qOWYf21RntjGRrNKSu05Sm-1SSlh77fKyYBZITZfkybz2EZJY9WjMz7nw23gyn_tgNrrCTDSqVGKv16mo-rLDe8iVgb3KtdG7DReCFzJEv-KzC3lcrDQYgMAsYLwc6m4l5PRANzLVjvM2nRvK7bdigQWEQFd8ON1xew8MUn1GhjpIpbB2UO9cDYdtE-pam1PKzlyKLRAjanCGk8y5sL4MTaBJIfliB2G_LroZ0HZJRqcT6RuUkpsWgVcr6g2Qy7pHcFM5U0OdEUF5AnxxytEpj41yjnKDoRaFBlQkggy37SDTmtwNY37hAdsps_tFHuKi3jN8GZkbTOWVZbxuj98JRt2uw5d59pt4jM2pKPcCWfqHSRRBISpjN7kUfqU67I0h-vr9hxJCik1q1q_1J89fl0uH-Mh09kryMNL1qnZ2umMXPYNXewzP6dMnQrP7JPeoDETHimEePeCzfQ=w1603-h968-no?authuser=0",
        },
        {
          src: "https://lh3.googleusercontent.com/yB0AwWy6R-bJ31_zJUaJy2GC8RSShzzq5lID0J-xkGtYfhe-37tT7gUrodbUe2bj4GPCjWEs1qzXgPLabd-F_9CBIWfGy7E-CQGZwzxt71HAj877Ry6o2Mp772Uec4Ji99r3n370P1CmlMd1sCYFemGf_fHHx9PsB7-ilLXBiPp8Y8kfIQnoS_XtiFoH7Vb2P0QwCD5sU8tCa95ZUsbxxiBoR8gB56YOC7XOLN8UDCXGCxWThCMntQ9FaNVIPpH9BUxljdrTb4NOYbJFPwjEu9wb9JVIkvZF-WxAuDfU00mIIN4qQtOQTRG-01oCNsybIz5neTKhdYXQECi2uMJVMk_eCPT-poH-wdwwnH-Zyn0-I01mwucRTpEwF4A2P4sxctHnHDXHffncdfy7bc4bNURqFyqHbF9KfGLNCEwCt937W9mZeVXX_HxDT9VTg7LZT1MBmRPuvDQVvxS65b-hpNYv5SfvWhLYYVOSRq4W2cFhRaqWzjiKRyAn61--OPdtYgEc58gTn0AkpQXTUijh9xeMJRw9aN6IqHHb1UI-7qSOqWcCJA0QZIDIzMrJLBnUhTh-pYkyN1RsHg_HCqCWJqH2GKDVIrwimx1PDIaTftLb5Jii-4-lc_C7YEVPLZBTkURbaqeSPyUikhxVAGb2kgNuB5W9maLppOxG8AwASm3SBM8y2MR05BsQik05rEIYxK9k1mJ7XewLXYSQw62ZEL_5pg=w1920-h848-no?authuser=0",
        },
        {
          src: "https://lh3.googleusercontent.com/o9k4gkPFV8QwwlxyYq6KYSxFJBHdx4Bcau5MoqXhRCgbAZt5MBfXBy5y_ugt_TigSJomcE2_jTKUkZjtKT4VwNv8wxm9VdQsG5ytmyexHupUal-JolpxDY5N6LsrMyov1bTLn-1-NLRR-uvOJTnpwIICs7qV-CPyPJRvIyh1lVzbTeRxHheYXxdvB6IensrJgo3JTKXg1x0cBNE2z2i2EUodASiwbq3LwcFCxNaM_4-WGTCPdypfPa1JfztIlH6WUQV2wui_4PT0WWBOzUCxy0Tc5gyPzrSO-zORTiXef78iY-3eqIgutw5adfpSyEsVGIBbNwp5y2UdeeoHTG72y3VgjFyAhKybRdtxshet-pmNSXI4VQo-fWelId2wy0EeJOk5CumVhcShMSUmefBBOKq-ZTogRQXhVv0jX8yQUomrQyWXnGUmTYUei6fPfPM458JHQo25JH2Cpk1DMVsecQdbogIjlp5sZZYpUpJbBaZzLxSebVdY37HLFnC_JMB8xEBh4gVHpGq51CZKnBTo1WuQoVMj05Of5rt7LFLYEFdZkg0IvHYlBx6yzpsWVL_OPjvU9bDZpkhTYbIVI9ZHpu7hAMFQcpiJAbwzvWp2_55PMS2W6vKpvueOmLeyzgT5_RYXkL2mQ_HjbUG_p1OUWnA2StruEZpo9Q618vQlBJvZY5cVHhHBh7J_DpsqIC4KVRQWt--ZGmENzGQwQZyWnhfeXA=w1871-h968-no?authuser=0",
        },
        {
          src: "https://lh3.googleusercontent.com/AR5iDwbcUcrm3uLrM3qa1acCmB8Nhleibo03jfj8mHPLQdLECnb_IpeXNsDsN5MSlwOgYS4pYuK9OHQ42P-2MP7AyWVs3mMZ9CXXYCEmMxs0zkAypSCWmPWZxQJjnsA5v_bgIwC-M62uYyFxBQT26DJH4et30HKrZSp0_-mpKGPLfKBwM_TGBqZyOGkzGinQpYPZyP9-VRRxexv1ijKB8H1KqBV6vt-6gnHNAd4rl50SF_tOTDg7DK8I-3gDlc_dU6_HvYE9g1vBtDYaZ60Ef7fLN5dOsYRR1i4XiArgtzF2PrPHrpqSL_lu7lzBz07sJSoVGk0NJ-wI9ivGNx7Cav4nW8abluPX2s--EqZ5UxIFmigcjsmumr9y4uROYAlSi7-HNV2BJeYrx77c1-1DeslXa7Ls4klU27BqvvhIOyCsIQsiybBrLTvWb2_Hn0ENH6f-xpmw3-cTeEz3kORuq_UQNM-tAS6xG3KgSi2P7S_It5CBYgIjYBYmII28sqhhgvOEX6g97CX0VMmcUP56DypFD6hBHACjuepPgh0d4av7wRCr4SJo6PDXOwICo0s2RVvlA3WnvDSaHqqHxN2IMMSTobEDQFDm3EMe4xQ4CketMe-D8RDVsWuavIXzVxtqlUe9JqxjZo0BKyz30C93q_t7Lttf_B_Enr__nSOSusbgNe_6PEyBsALf1yKNfCDpjKrR97mfooulLePlxrYIYs1rSA=w1920-h950-no?authuser=0",
        },
      ],
    };
  },
};
</script>
<style></style>
