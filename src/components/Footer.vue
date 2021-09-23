<template>
  <v-footer padless color="primary">
    <div class="px-3 px-md-4 footer white--text py-6 py-sm-8 py-md-10 py-lg-12">
      <div class="footer__logo">
        <img src="https://idc.net.pk/wp-content/uploads/2021/06/idc-logo.png" alt="Darbhanga Diagnostice">
        <div class="d-flex mt-3" style="grid-gap: 6px;">
          <v-btn tile text icon v-for="(social, s) in socials" :key="s" color="white" target="_blank" :href="social.href">
            <v-icon v-text="social.icon"  />
          </v-btn>
        </div>
      </div>
      <div class="about">
        <div class="footer__title">More About Us</div>
        <div class="footer__link" v-for="(a, i) in about" :key="i">{{ a }}</div>
      </div>
      <div class="links">
        <div class="footer__title">Quick Links</div>
        <div class="footer__link" v-for="(link, l) in links" :key="l">{{ link }}</div>
      </div>
      <div class="contact">
        <div class="footer__title">More About Us</div>
        <div class="d-flex flex-column" style="grid-gap: 16px;">
          <div class="d-flex align-center" style="grid-gap: 8px;" v-for="(contact, c) in contacts" :key="c">
            <v-icon color="white" v-text="contact.icon" size="18" />
            <span>{{ contact.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socials: [
      { icon: 'mdi-facebook', href: 'https://www.facebook.com', color: '#43567d' },
      { icon: 'mdi-twitter', href: 'https://www.twitter.com', color: '#1da1f2' },
      { icon: 'mdi-instagram', href: 'https://www.instagram.com', color: '#fff7fd' },
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com', color: '#0077b5' }, 
    ],
    about: ['Book an Appointment','DD Discount Card'],
    links: ['Who we are', 'Home Sample Collection', 'Why DD', 'Quality policy', 'Certifications & Associations', 'Contact Us'],
    contacts: [
      { icon: 'mdi-map-marker', value: 'Panitanki-10, Birgunj, Nepal' },
      { icon: 'mdi-phone', value: '+977 051254545, +977 051284694' },
      { icon: 'mdi-phone', value: '051-111-000-432' },
      { icon: 'mdi-email', value: 'info@darbhangadianostic.com' },
      { icon: 'mdi-hospital-building', value: '+977 51 228 1313' }
    ]
  })
}
</script>

<style>
.footer {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;
}
.footer__title {
  font-size: 22px !important;
  font-weight: 500;
  margin-bottom: 20px;
}
.footer__link {
  font-size: 15px;
  margin-bottom: 16px;
}
@media (max-width: 1080px) {
  .footer { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 560px) {
  .footer { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>