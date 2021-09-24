<template>
  <div class="home">
    <div class="home__banner">
      <div class="home__banner__content px-3 px-md-4">
        <div class="title">Welcome to Darbhanga Diagnostic Centre</div>
        <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 my-5" style="font-weight: 500 !important;">Most Trusted and <br> Reliable Diagnostic</div>
        <div style="font-size: 22px;" class="mb-3">Services Provider in Nepal</div>
        <v-btn max-width="200" color="error" large>contact us</v-btn>
      </div>
    </div>

    <!-- Tests -->
    <div class="secondary py-8 py-sm-10 py-md-12 py-lg-14 tests px-3 px-md-4">
      <div class="tests__div white--text" v-for="(test, t) in tests" :key="t">
        <v-icon v-text="test.icon" color="white" size="80" />
        <div class="title my-3">{{ test.title }}</div>
        <p>{{ test.sub }}</p>
        <v-hover v-slot="{ hover }">
          <v-btn :class="hover ? 'error white--text elevation-0' : 'white primary--text elevation-0'">{{ test.btn_title }}</v-btn>
        </v-hover>
      </div>
    </div>

    <!-- IDC AT A GLANCE -->
    <div class="white py-8 py-sm-10 py-md-12 py-lg-14 px-3 px-md-4">
      <div class="display-1 mb-4 mb-sm-6 mb-md-8 mb-lg-10 text-center">DD AT A GLANCE</div>
      <div class="glances">
        <v-hover v-slot="{ hover }" v-for="(glance, t) in glances" :key="t">
          <div :class="hover ? 'error' : ''" class="glance__div">
            <v-icon v-text="glance.icon" :color="hover ? 'white' : 'primary'" size="100" />
            <div class="display-1 mt-3" :class="hover ? 'white--text' : 'error--text'">{{ glance.value }}</div>
            <div class="title" :class="hover ? 'white--text' : 'black--text'">{{ glance.title }}</div>
          </div>
        </v-hover>
      </div>
    </div>

    <!-- Covid test -->
    <div class="covid">
      <div class="covid__info px-3 px-md-4">
        <div class="text-h4 text-sm-h3 text-md-h2 font-weight-bold">COVID-19</div>
        <div style="font-size: 20px; letter-spacing: .5px;" class="my-5">24/7 Covid- 19 Testing Available | UAN: 051 111 000 432 - 03 111 000 432</div>
        <v-btn max-width="200" color="error" elevation="0" large>covid-19 testing</v-btn>
      </div>
    </div>

     <!-- health screening -->
    <div class="white py-8 py-sm-10 py-md-12 py-lg-14 px-3 px-md-4 text-center">
      <v-icon v-text="'mdi-heart-pulse'" color="black" size="80" />
      <div class="text-h4 text-sm-h3 text-md-h2 mt-3 mb-10">CORPORATE HEALTH SCREENING</div>
      <div class="tests">
        <div class="tests__div primary--text" v-for="(test, t) in screning" :key="t">
          <v-icon v-text="test.icon" color="primary" size="80" />
          <div class="title my-3">{{ test.title }}</div>
        </div>
      </div>
      <div class="mt-6 mt-sm-7 mt-md-8 mt-lg-9">
        <v-hover v-slot="{ hover }">
          <v-btn :class="hover ? 'primary white--text elevation-0' : 'error white--text elevation-0'" width="200" large>read more</v-btn>
        </v-hover>
      </div>
    </div>

    <!-- Covid test -->
    <div class="covid sample">
      <div class="covid__info px-3 px-md-4">
        <div class="text-h4 text-sm-h3 text-md-h2 font-weight-bold mb-3">Home Sample <br> Collection At Your <br> Doorstep</div>
        <p>If you are looking for the best medical laboratory then IDC is always there. Get laboratory tests done easily with our Home Sample Collection.</p>
        <v-btn class="mt-3" max-width="250" large color="error" elevation="0">HOME SAMPLE COLLECTION</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tests: [
      { icon: 'mdi-home', title: 'Find a Test', sub: 'IDC Diagnostic Services', btn_title: 'Request Appointment' },
      { icon: 'mdi-printer', title: 'Online Reports', sub: 'Online Reporting System', btn_title: 'See Online Test Results' },
      { icon: 'mdi-map-marker', title: 'Find a Location', sub: 'IDC Branch Network', btn_title: 'View All Locations' }
    ],
    glances: [
      { icon: 'mdi-calendar', value: '+17', title: 'Years' },
      { icon: 'mdi-map-marker', value: '+80', title: 'Branches' },
      { icon: 'mdi-account-multiple', value: '+2 MN', title: 'Patients per annum' },
      { icon: 'mdi-chandelier', value: '+3 MN', title: 'Tests per annum' },
      { icon: 'mdi-account-group', value: '+1.5k', title: 'Employees' },
      { icon: 'mdi-certificate', value: '+250', title: 'Qualified Doctors' },
      { icon: 'mdi-hospital-building', value: '+25', title: 'Cities of India' },
      { icon: 'mdi-account', value: 'Largest', title: 'Corona Testing Facility' }
    ],
    screning: [
      { icon: 'mdi-medical-bag', title: 'Pre-Employment Health Screening' },
      { icon: 'mdi-square-edit-outline', title: 'Customized Health Screening Packages' },
      { icon: 'mdi-calendar', title: 'Annual Health Screening' }
    ]
  })
}
</script>

<style>
.home__banner {
  background-image: url('https://www.who.int/images/default-source/searo---images/countries/bangladesh/sadar-hospital-2019.tmb-1200v.png?sfvrsn=d032eb0a_1');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
}
.home__banner__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: #2c589957;
  color: #fff;
}

/* Tests */
.tests {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
  text-align: center;
}
/* Glances */
.glances {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 20px;
  text-align: center;
}
.glance__div {
  border-top: 4px solid #c73336 !important;
  border-radius: 6px;
  background-color: rgb(128 128 128 / 10%);
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* Covid */
.covid {
  background-image: url('https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/covid-test-1296x728-header.jpg?w=1155&h=1528');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
}
.covid__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: #0d274880;
  color: #fff;
}
.sample { background-image: url('https://news.cgtn.com/news/2020-06-03/What-have-the-sweeping-COVID-19-tests-in-Wuhan-told-us--R17NbfKzsc/img/66e32ee6d62e4f3ebf369b2fdd0d7615/66e32ee6d62e4f3ebf369b2fdd0d7615.jpeg') !important; }
@media (max-width: 960px) {
  .covid, .home__banner { height: 90vh; }
}
@media (max-width: 960px) {
  .glances { grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); grid-gap: 16px; }
  .covid, .home__banner { height: 80vh; }
}
@media (max-width: 760px) {
  .tests { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); grid-gap: 30px; }
  .covid, .home__banner { height: 70vh; }
}
@media (max-width: 660px) {
  .glances { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); grid-gap: 12px; }
  .covid, .home__banner { height: 60vh; }
}
</style>