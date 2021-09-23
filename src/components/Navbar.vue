<template>
  <v-app-bar color="primary" elevation="0" height="110" absolute>
    <div style="width: 100%">
      <div class="d-flex align-center justify-space-between" style="width: 100%">
        <div class="display-3 white--text">DDC</div>
        <v-app-bar-nav-icon class="d-block d-sm-none white--text" @click="nav = !nav" />
        <div class="d-none d-sm-block">
          <v-btn tile text icon v-for="(social, s) in socials" :key="s" color="white" target="_blank" :href="social.href">
            <v-icon v-text="social.icon"  />
          </v-btn>
        </div>
      </div>
      <div class="d-none d-sm-block">
        <ul class="main__ul">
          <li class="nav__item" v-for="(item, i) in navs" :key="i">
            <v-btn color="white" small height="40" tile text>
              <span>{{ item.title }}</span>
              <v-icon v-if="item.children" right v-text="'mdi-menu-down'" />
            </v-btn>
            <ul class="main__ul__ul primary" v-if="item.children">
              <li v-for="(child, c) in item.children" :key="c" class="d-flex nav__nav__item">
                <v-btn color="white" small tile height="40" text width="100%">
                  <span>{{ child.title }}</span> 
                  <v-icon v-if="child.children" right v-text="'mdi-menu-down'" />
                </v-btn>
                <ul class="main__ul__ul__ul primary" v-if="child.children">
                  <li v-for="(x, y) in child.children" :key="y" class="nav__nav__nav__item">
                    <v-btn color="white" small tile height="40" text width="100%">{{ x.title }}</v-btn>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>  
    </div>
    <div v-if="nav" class="small__nav primary d-sm-none" style="width: 100%;">
      <v-list nav dense expand class="primary" dark>
        <v-list-item v-for="(nav, n) in navs" :key="n" link>
          <v-list-item-title v-text="nav.title" style="Font-size: 16px; text-transform: uppercase !important;" class="px-3" />
        </v-list-item>
        <!-- <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.items"
            :key="child.title"
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group> -->
      </v-list>
      <div class="mx-3 mb-3 d-flex align-center" style="grid-gap: 12px;">
        <div style="width: 100%; height: 1px;" class="white" />
        <div class="d-flex">
          <v-btn tile text icon v-for="(social, s) in socials" :key="s" color="white" target="_blank" :href="social.href">
            <v-icon v-text="social.icon"  />
          </v-btn>
        </div>
        <div style="width: 100%; height: 1px;" class="white" />
      </div>
    </div>
  </v-app-bar>  
</template>

<script>
export default {
  data: () => ({
    nav: false,
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
.main__ul .v-btn__content { justify-content: left !important; }
.main__ul__ul, .main__ul__ul__ul {
  display: none;
  position: absolute;
}
.main__ul__ul__ul { left: 100% !important; }
.nav__item:hover .main__ul__ul, .nav__nav__item:hover .main__ul__ul__ul { display: block; }

/* Small Nav */
.small__nav {
  position: absolute;
  top: 110px;
  left: 0;
  transition: linear 250ms;
  box-shadow: 0 3px 10px 0 rgb(255 255 255 / 20%);
}
</style>