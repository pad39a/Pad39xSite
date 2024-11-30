<template>
  <footer class="main-footer">
    <div class="bg-image" style="background-image: url(./images/background/5.jpg)"/>

    <!-- Contact info -->
    <div class="contacts-outer">
      <div class="auto-container">
        <div class="row">
          <!-- Contact Info Block -->
          <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
            <div class="inner-box">
              <div class="icon-box"><i class="icon far fa-location-dot"/></div>
              <h4 class="title">Address</h4>
              <div class="text">30 St Kilda Road, Jackson Store, Australia</div>
            </div>
          </div>

          <!-- Contact Info Block -->
          <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
            <div class="inner-box">
              <div class="icon-box"><i class="icon far fa-address-book"/></div>
              <h4 class="title">Contact</h4>
              <div class="text">
                <NuxtLink to="mailto:needhelp@company.com">needhelp@company.com</NuxtLink>
                <NuxtLink to="tel:321-473-4622">321-473-4622</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Contact Info Block -->
          <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
            <div class="inner-box">
              <div class="icon-box"><i class="icon far fa-clock"/></div>
              <h4 class="title">Timing</h4>
              <div class="text">Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact info -->

    <!--Widgets Section-->
    <div class="widgets-section">
      <div class="auto-container">
        <div class="row">
          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12">
            <div class="footer-widget about-widget">
              <div class="logo"><NuxtLink to="index"><img src="/images/logo-2.png" alt=""></NuxtLink></div>
              <div class="text">We work with a passion of taking challenges and creating new ones in advertising sector.</div>
              <NuxtLink to="page-about" class="theme-btn btn-style-one hvr-light small"><span class="btn-title">About Us</span></NuxtLink>
            </div>
          </div>

          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="footer-widget">
              <h3 class="widget-title">Service</h3>
              <ul class="user-links">
                <li><NuxtLink to="#">HVAC Installation</NuxtLink></li>
                <li><NuxtLink to="#">Duct Repairing</NuxtLink></li>
                <li><NuxtLink to="#">Indoor Air Quality</NuxtLink></li>
                <li><NuxtLink to="#">Thermal Systems</NuxtLink></li>
                <li><NuxtLink to="#">Geothermal systems</NuxtLink></li>
              </ul>
            </div>
          </div>


          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="footer-widget gallery-widget">
              <h3 class="widget-title">Projects</h3>
              <div class="widget-content">
                <div class="outer clearfix">
                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-1.jpg" alt=""></NuxtLink>
                  </figure>

                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-2.jpg" alt=""></NuxtLink>
                  </figure>

                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-3.jpg" alt=""></NuxtLink>
                  </figure>

                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-4.jpg" alt=""></NuxtLink>
                  </figure>

                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-5.jpg" alt=""></NuxtLink>
                  </figure>

                  <figure class="image">
                    <NuxtLink to="#"><img src="/images/resource/project-thumb-6.jpg" alt=""></NuxtLink>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <!--Footer Column-->
          <div class="footer-column col-xl-3 col-lg-5 col-md-6 col-sm-12">
            <div class="footer-widget">
              <h3 class="widget-title">Newsletter</h3>
              <div class="widget-content">
                <div class="subscribe-form">
                  <div class="text">Subscribe our newsletter to get our latest update & news</div>
                  <form method="post" action="#">
                    <div class="form-group">
                      <input type="email" name="email" class="email" value="" placeholder="Email Address" required="">
                      <button type="button" class="theme-btn btn-style-one"><span class="btn-title"><i class="fa fa-paper-plane"/></span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!--Footer Bottom-->
    <div class="footer-bottom">
      <div class="auto-container">
        <div class="inner-container">
          <div class="copyright-text">
            <p>&copy; Copyright reserved by <NuxtLink to="index">kodesolution.com</NuxtLink></p>
          </div>

          <ul class="social-icon-two">
            <li><NuxtLink to="#"><i class="fab fa-facebook"/></NuxtLink></li>
            <li><NuxtLink to="#"><i class="fab fa-twitter"/></NuxtLink></li>
            <li><NuxtLink to="#"><i class="fab fa-pinterest"/></NuxtLink></li>
            <li><NuxtLink to="#"><i class="fab fa-instagram"/></NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>