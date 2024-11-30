<template>
  <section class="contact-details">
    <div class="container">
      <div class="row">
        <!-- Contact Information Column -->
        <div class="col-xl-5 col-lg-6">
          <div class="contact-details__right">
            <div class="sec-title">
              <span class="sub-title">Need any help?</span>
              <h2>Get in touch with us</h2>
              <div class="text">
                At {{CONTACT_INFO.name}}, we are dedicated to delivering cutting-edge aerospace solutions tailored to your unique needs. Whether you're looking to innovate, optimize, or expand your operations, we're here to support every step of your journey.
              </div>
            </div>
            <ul class="list-unstyled contact-details__info mb-8 lg:mb-0">
              <li>
                <div class="icon">
                  <span class="lnr-icon-phone-plus"/>
                </div>
                <div class="text">
                  <h6>Have any question?</h6>
                  <NuxtLink to="tel:321-473-4622"><span>Free</span> 321-473-4622</NuxtLink>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="lnr-icon-envelope1"/>
                </div>
                <div class="text">
                  <h6>Write email</h6>
                  <NuxtLink :to="`mailto:${CONTACT_INFO.email}`">{{ CONTACT_INFO.email }}</NuxtLink>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="lnr-icon-location"/>
                </div>
                <div class="text">
                  <h6>Our Location</h6>
                  <span>{{ CONTACT_INFO.city }}, {{ CONTACT_INFO.stateShort }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact Form Column -->
        <div class="col-xl-7 col-lg-6">
          <div class="sec-title">
            <span class="sub-title">Send us email</span>
            <h2 class="mb-6">Feel free to write</h2>
          </div>
          <!-- Contact Form -->
          <form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post">
            <div class="row">
              <!-- Full Name Field -->
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Your Name <small>*</small></label>
                  <input 
                    name="full_name" 
                    class="form-control" 
                    type="text" 
                    placeholder="Enter your full name" 
                    required 
                  >
                </div>
              </div>

              <!-- Email Field -->
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Email <small>*</small></label>
                  <input 
                    name="email" 
                    class="form-control required email" 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                  >
                </div>
              </div>
            </div>

            <div class="row">
              <!-- Phone Field -->
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Phone <small>*</small></label>
                  <input 
                    name="phone" 
                    class="form-control required phone" 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    required 
                  >
                </div>
              </div>
              <div class="col-sm-6">
        <div class="mb-3">
          <label>Subject</label>
          <input 
            name="form_subject" 
            class="form-control" 
            type="text" 
            placeholder="Enter Subject" 
          >
        </div>
      </div>

              <!-- Country Field -->
              <div class="col-12">
                <div class="mb-3">
                  <label>Country <small>*</small></label>
                  <select 
                    name="country" 
                    class="form-control required" 
                    required
                  >
                    <option disabled selected value="">Please select a country</option>
                    <option v-for="country in countries" :key="country" :value="country">
                      {{ country }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Optional Fields (Subject & Message) -->
            <div class="row">
        
              <div class="col-12">
                <div class="mb-3">
                  <label>Message</label>
                  <textarea 
                    name="form_message" 
                    class="form-control" 
                    rows="5" 
                    placeholder="Enter Message"
                  />
                </div>
              </div>
            </div>

            <div class="mb-3">
              <input name="form_botcheck" class="form-control" type="hidden" value="" >
              <button 
                type="submit" 
                class="theme-btn btn-style-one me-3 lg:w-auto w-full mb-2 lg:mb-0" 
                data-loading-text="Please wait..."
              >
                <span class="btn-title">Send message</span>
              </button>
              <button 
                type="reset" 
                class="theme-btn btn-style-one lg:w-auto w-full"
              >
                <span class="btn-title">Reset</span>
              </button>
            </div>
          </form>
          <!-- Contact Form Validation-->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CONTACT_INFO, countries } from "~/constants/index.js";

// If you're using Vue's reactivity for dynamic country list
// Ensure that 'countries' is available in the template scope
</script>

<style scoped>
/* Maintain existing styles */

/* Example: Adjust select to match the first form's styling */
select.form-control {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

label {
  font-weight: bold;
}

button.theme-btn {
  cursor: pointer;
}

/* Additional styles can remain unchanged */
</style>
