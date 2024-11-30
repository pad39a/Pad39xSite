<template>
  <section class="why-choose-us pull-up pb-8">
    <div class="bg-image" style="background-image: url(./images/background/4.jpg)" />

    <div class="auto-container">
      <div class="row">
        <!-- Content Column -->
        <div class="content-column col-lg-6 col-md-12">
          <div class="inner-column">
            <div class="sec-title light">
              <span class="sub-title">Why Choose Us</span>
              <h2>Let's work together to propel your vision into orbit</h2>
            </div>

            <!-- Feature Block -->
            <div v-for="(feature, index) in features" :key="index" class="feature-block-two">
              <div class="inner-box">
                <i :class="feature.icon" />
                <h4 class="title">{{ feature.title }}</h4>
                <p class="text">{{ feature.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="form-column col-lg-6 col-md-12">
          <div class="inner-column">
            <!-- Contact Form -->
            <div class="contact-form wow fadeInLeft">
              <!-- Contact Form -->
              <form id="contact-form" method="get" @submit.prevent="handleSubmit">
                <div class="row">
                  <div class="col-lg-12 col-md-12 form-group">
                    <label>Your Name:</label>
                    <input v-model="form.fullName" type="text" name="full_name" placeholder="Enter your full name" required >
                  </div>

                  <div class="col-lg-6 col-md-6 form-group">
                    <label>Your Email:</label>
                    <input v-model="form.email" type="email" name="Email" placeholder="Enter your email" required >
                  </div>

                  <ClientOnly>
                    <div class="col-lg-6 col-md-6 form-group">
                      <label>Phone No:</label>
                      <input v-model="form.phone" type="tel" name="Phone" placeholder="Enter your phone number" required >
                    </div>
                  </ClientOnly>

                  <ClientOnly>
                    <div class="col-lg-12 col-md-12 form-group">
                      <label>Country:</label>
                      <select v-model="form.country" name="Country" required>
                        <option disabled value="">Please select a country</option>
                        <option v-for="country in countries" :key="country" :value="country">
                          {{ country }}
                        </option>
                      </select>
                    </div>
                  </ClientOnly>

                  <!-- Additional Form Fields (Uncomment if needed)
                  <div class="col-lg-12 col-md-12 form-group">
                    <label>Number of installations</label>
                    <div class="range-slider-one">
                      <input type="text" class="range-amount bg-transparent" :value="sliderValue" readonly />
                      <input type="range" min="0" max="100" v-model="sliderValue" class="slider range-amount" />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 form-group">
                    <label>Service type:</label>
                    <select v-model="form.serviceType" class="custom-select">
                      <option disabled value="">Select</option>
                      <option>AC Installation</option>
                      <option>Servicing</option>
                      <option>Duct Repair</option>
                      <option>HVAC</option>
                      <option>Air Quality Check</option>
                      <option>Cooling Heating Service</option>
                    </select>
                  </div>

                  <div class="col-lg-6 col-md-6 form-group">
                    <label>Load:</label>
                    <select v-model="form.load" class="custom-select">
                      <option disabled value="">Select</option>
                      <option>Home</option>
                      <option>Office</option>
                      <option>Shopping Mall</option>
                      <option>Other</option>
                    </select>
                  </div>
                  -->

                  <div class="col-lg-12 col-md-12 form-group">
                    <button class="theme-btn btn-style-two hvr-light hover:text-blue-400 relative z-20" type="submit" name="submit-form">
                      <span class="btn-title">Submit Request</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- End Contact Form -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { countries } from '~/constants'
// Form data structure
const form = ref({
  fullName: '',
  email: '',
  phone: '',
  country: '',
  // Additional fields
  // serviceType: '',
  // load: '',
});


// Features data for dynamic rendering
const features = ref([
  {
    icon: 'icon flaticon-ac1-repair',
    title: 'Cutting-Edge Technologies',
    text: 'We leverage the latest advancements in aerospace and defense technologies to deliver innovative solutions tailored to your unique challenges.',
  },
  {
    icon: 'icon flaticon-ac1-trophy',
    title: 'Proven Expertise',
    text: 'Our team of veteran engineers and consultants bring decades of experience, ensuring reliability and excellence in every project we undertake.',
  },
]);

// Handle form submission
const handleSubmit = () => {
  // Here you can handle form submission, e.g., send data to your backend
  console.log('Form Submitted:', form.value);
  // Reset the form if needed
  // form.value = { fullName: '', email: '', phone: '', country: '' };
};

</script>

<style scoped>
/* Add any component-specific styles here */

select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  font-weight: bold;
}

button {
  width: 100%;
}
</style>
