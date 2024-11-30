<template>
  <section class="fun-fact-section p-0">
    <div class="auto-container">
      <div class="outer-box">
        <div class="bg-image" style="background-image: url(./images/background/2-1.jpg)"></div>
        <div class="row">
          <!-- Content Column -->
          <div class="content-column col-lg-7">
            <div class="inner-column">
              <div class="sec-title light">
                <span class="sub-title">We Worked Intime</span>
                <h2>Get the Best AC & Maintenance Services</h2>
                <div class="text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
              </div>

              <div class="fact-counter">
                <div class="row">
                  <!--Column-->
                  <div class="counter-column col-lg-4 col-md-6">
                    <div class="inner">
                      <div class="count-box"><ElementsCounterUp :end="869"/>0</div>
                      <h4 class="counter-title">Projects <br />Completed</h4>
                      <i class="icon flaticon-ac1-air-conditioner-7"></i>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="counter-column col-lg-4 col-md-6">
                    <div class="inner">
                      <div class="count-box"><ElementsCounterUp :end="683"/>0</div>
                      <h4 class="counter-title">Satisfied <br />Customers</h4>
                      <i class="icon flaticon-ac1-repairman"></i>
                    </div>
                  </div>

                  <!--Column-->
                  <div class="counter-column col-lg-4 col-md-6">
                    <div class="inner">
                      <div class="count-box"><ElementsCounterUp :end="975"/>0</div>
                      <h4 class="counter-title">Worked<br /> In Time </h4>
                      <i class="icon flaticon-ac1-mechanic"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>