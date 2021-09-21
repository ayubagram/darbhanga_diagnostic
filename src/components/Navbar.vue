<template>
  <v-app-bar color="primary" elevation="0" height="150" absolute>
    <div style="width: 100%">
      <div class="d-flex align-center justify-space-between" style="width: 100%">
        <div style="height: 100px; width: 260px;">
          <img src="https://idc.net.pk/wp-content/uploads/2021/06/idc-logo.png" alt="Darbhanga Diagnostice">
        </div>
        <div>
          <v-btn tile text icon v-for="(social, s) in socials" :key="s" color="white" target="_blank" :href="social.href">
            <v-icon v-text="social.icon"  />
          </v-btn>
        </div>
      </div>
      <div>
      <ul class="main__ul">
        <li class="nav__item" v-for="(item, i) in navs" :key="i">
          <v-btn color="white" class="px-5" small height="40" tile text>
            <span>{{ item.title }}</span>
            <v-icon v-if="item.children" right v-text="'mdi-menu-down'" />
          </v-btn>
          <ul class="main__ul__ul primary" v-if="item.children">
            <li v-for="(child, c) in item.children" :key="c" class="d-flex nav__nav__item">
              <v-btn color="white" small tile height="40" text class="px-5" width="100%">
                <span>{{ child.title }}</span> 
                <v-icon v-if="child.children" right v-text="'mdi-menu-down'" />
              </v-btn>
              <ul class="main__ul__ul__ul primary" v-if="child.children">
                <li v-for="(x, y) in child.children" :key="y" class="nav__nav__nav__item">
                  <v-btn color="white" small tile height="40" text class="px-5" width="100%">{{ x.title }}</v-btn>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>  
    </div>
  </v-app-bar>  
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
    navs: [
      { title: 'home' },
      {
        title: 'About Us',
        children: [
          { title: 'who we are' }, 
          { title: 'why dd?' }, 
          { title: 'mission & vision' }, 
          { title: 'certifications & associations' }, 
          { title: 'quality policy' }, 
          { title: 'our team' }
        ]
      },
      { 
        title: 'services',
        children: [
          { title: 'laboratory services' },
          { title: 'imaging services' },
          { title: 'cardiac services' },
          { title: 'perpiratory serices' },
          { title: 'bone health services' },
          { title: 'women health services' },
          { title: 'dental services' },
          { title: 'neuro services' },
          { 
            title: 'health packages',
            children: [
              { title: 'general health packages' },
              { title: 'corporate health screening' },
              { title: 'semen snanlysis' },
              { title: 'tumor marker screening' }
            ]
          }
        ]
      },
      { title: 'media' },
      { title: 'locations' }
    ],
  })
}
</script>

<style>
.main__ul { display: flex; }
ul { padding: 0 !important; margin: 0 !important; }
ul li { position: relative; }
.nav__item:hover, .nav__nav__item:hover { background-color: rgb(255 255 255 / 20%); }
.main__ul__ul, .main__ul__ul__ul {
  display: none;
  position: absolute;
  z-index: 999;
}
.main__ul__ul__ul { left: 100% !important; }
.nav__item:hover .main__ul__ul, .nav__nav__item:hover .main__ul__ul__ul { display: block; }
</style>