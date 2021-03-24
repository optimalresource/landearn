<template>
  <div>
    <div class="wrapper">
      <UserHeader />
      <div class="content-page">
        <div class="container-fluid container">
          <div class="row">
            <div class="col-lg-12">
              <div class="card car-transparentm">
                <!-- <div class="card-body p-0"> -->
                <!-- <div class="profile-image "> -->
                <div class="osas position-relative text-center">
                  <h4 class="text-gray">
                    <span class="text-black">My Code:</span>
                    {{ details.my_code }}
                    <i
                      type="button"
                      v-clipboard:copy="details.my_code"
                      v-clipboard:success="onCopy"
                      v-clipboard:error="onError"
                      class="far fa-copy text-black"
                    >
                    </i>
                  </h4>
                </div>
                <!-- <img src="../assets/images/page-img/profile.png" class="img-fluid rounded w-100" alt=""> -->
                <!-- </div> -->
                <div class="profile-overly name">
                  <h3>{{ details.fullname }}</h3>
                  <span>{{ details.email }}</span>
                </div>
                <!-- </div> -->
              </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-block card-stretch card-height">
               <div class="card-body">
                  <h4 class="mb-3">Personal Profile</h4>
                  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque.</p>
               </div>
            </div>
         </div> -->
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div class="card-body text-center">
                  <h1 class="our_color">
                    <i class="fas fa-project-diagram"></i>
                  </h1>
                  <h2 class="mb-2 mt-3 our_color">
                    0
                  </h2>
                  <h4>My Projects</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div @click="direct" class="card-body text-center">
                  <a href="/referrals">
                    <h1 class="text-danger">
                      <i class="fas fa-users"></i>
                    </h1>
                    <h2 class="mb-2 mt-3 text-danger">
                      0
                    </h2>
                    <h4>Direct Referrals</h4>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div @click="indirect" class="card-body text-center">
                  <a href="/secondLevel">
                    <h1 class="text-success">
                      <i class="fas fa-dollar-sign"></i>
                    </h1>
                    <h2 class="mb-2 mt-3 text-success">
                      0
                    </h2>
                    <h4>Level 2 Referrals</h4>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="card card-block card-stretch card-height">
                <div class="card-body text-center">
                  <h1 class="text-warning">
                    <i class="fas fa-dollar-sign"></i>
                  </h1>
                  <h2 class="mb-2 mt-3 text-warning">0</h2>
                  <h4>Income Earned</h4>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="card card-block card-stretch card-height">
               <div class="card-body text-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M35.3676 11.2517C34.8398 11.2372 34.3256 11.3198 33.8438 11.4898V7.03125C33.8438 4.70503 31.9512 2.8125 29.625 2.8125C29.0759 2.8125 28.5517 2.91909 28.0701 3.11072C27.5821 1.32047 25.9428 0 24 0C22.0572 0 20.4179 1.32047 19.9299 3.11072C19.4483 2.91909 18.9241 2.8125 18.375 2.8125C16.0488 2.8125 14.1562 4.70503 14.1562 7.03125V11.4895C13.6747 11.3198 13.1607 11.2372 12.6324 11.2517C10.3711 11.3136 8.53125 13.2316 8.53125 15.5272V48H36.6562V41.2395L38.5637 36.4704C39.1643 34.9689 39.4688 33.3877 39.4688 31.7705V15.5272C39.4688 13.2316 37.6289 11.3136 35.3676 11.2517V11.2517ZM11.3438 45.1875V42.375H33.8438V45.1875H11.3438ZM36.6562 31.7705C36.6562 33.0283 36.4194 34.2581 35.9523 35.4261L34.2979 39.5625H11.3438V15.5272C11.3438 14.7405 11.9564 14.0837 12.7095 14.0631C13.0926 14.0504 13.4561 14.1937 13.7305 14.4607C14.0051 14.7278 14.1563 15.0858 14.1563 15.4687V21.9843H16.9688V7.03125C16.9688 6.25584 17.5997 5.625 18.3751 5.625C19.1505 5.625 19.7813 6.25584 19.7813 7.03125V21.9844H22.5938V4.21875C22.5938 3.44334 23.2247 2.8125 24.0001 2.8125C24.7755 2.8125 25.4063 3.44334 25.4063 4.21875V21.9844H28.2188V7.03125C28.2188 6.25584 28.8497 5.625 29.6251 5.625C30.4005 5.625 31.0313 6.25584 31.0313 7.03125V24.1714C24.712 24.8732 19.7812 30.2467 19.7812 36.75H22.5938C22.5938 31.3222 27.0097 26.9062 32.4375 26.9062H33.8438V15.4688C33.8438 15.0859 33.995 14.7278 34.2696 14.4608C34.544 14.1938 34.9067 14.0508 35.2906 14.0632C36.0436 14.0838 36.6562 14.7406 36.6562 15.5273V31.7705Z"
                        fill="#f4a965" />
                  </svg>
                  <h2 class="mb-2 mt-3 text-warning">424+</h2>
                  <h4>Participated</h4>
               </div>
            </div>
         </div> -->
            <!-- <div class="col-lg-5 col-md-6">
            <div class="card card-block card-stretch card-height">
               <div class="card-header">
                  <div class="header-title">
                     <h4 class="card-title">Education Traning</h4>
                  </div>
               </div>
               <div class="card-body">
                  <ul class="list-inline p-0 m-0">
                     <li class="d-flex align-items-center mb-3">
                        <div class="profile-icon iq-icon-box rounded-small bg-danger-light svg-danger text-center">
                           <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0)">
                                 <path
                                    d="M23.3379 5.745L12.8777 2.53125C12.3077 2.35612 11.6927 2.35612 11.1231 2.53125L0.662429 5.745C-0.220321 6.01612 -0.220321 7.18349 0.662429 7.45462L2.48605 8.01487C2.08593 8.50949 1.83993 9.11287 1.81555 9.77362C1.45443 9.98062 1.20018 10.3541 1.20018 10.8C1.20018 11.2042 1.41318 11.5444 1.71993 11.7619L0.762554 16.0699C0.679304 16.4445 0.964304 16.8 1.34793 16.8H3.45205C3.83605 16.8 4.12105 16.4445 4.0378 16.0699L3.08043 11.7619C3.38718 11.5444 3.60018 11.2042 3.60018 10.8C3.60018 10.3661 3.35755 10.0031 3.01293 9.79237C3.04143 9.22912 3.32943 8.73112 3.7888 8.41537L11.1227 10.6687C11.4624 10.773 12.1142 10.9031 12.8773 10.6687L23.3379 7.45499C24.2211 7.1835 24.2211 6.0165 23.3379 5.745V5.745ZM13.2298 11.8159C12.1599 12.1444 11.2483 11.9629 10.7702 11.8159L5.33193 10.1452L4.80018 14.4C4.80018 15.7256 8.02368 16.8 12.0002 16.8C15.9767 16.8 19.2002 15.7256 19.2002 14.4L18.6684 10.1449L13.2298 11.8159V11.8159Z"
                                    fill="#ea643f" />
                              </g>
                              <defs>
                                 <clipPath id="clip0">
                                    <rect width="24" height="19.2" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                        <div class="pl-3">
                           <h5>South Kellergrove Junior</h5>
                           <p class="mb-0">Junior High School | Class of 2008</p>
                        </div>
                     </li>
                     <li class="d-flex align-items-center mb-3">
                        <div class="profile-icon iq-icon-box rounded-small bg-primary-light svg-primary text-center">
                           <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M17.1107 17.1746L12 22.2853L6.88929 17.1746C3.05893 17.3406 0 20.4746 0 24.3424V24.8567C0 26.2764 1.15179 27.4281 2.57143 27.4281H21.4286C22.8482 27.4281 24 26.2764 24 24.8567V24.3424C24 20.4746 20.9411 17.3406 17.1107 17.1746ZM0.728571 4.27457L1.07143 4.35493V7.4835C0.696429 7.7085 0.428571 8.09957 0.428571 8.571C0.428571 9.021 0.675 9.396 1.02321 9.62636L0.1875 12.9639C0.0964286 13.3335 0.3 13.7139 0.594643 13.7139H2.83393C3.12857 13.7139 3.33214 13.3335 3.24107 12.9639L2.40536 9.62636C2.75357 9.396 3 9.021 3 8.571C3 8.09957 2.73214 7.7085 2.35714 7.4835V4.66564L5.89286 5.51743C5.43214 6.43886 5.14286 7.46743 5.14286 8.571C5.14286 12.3585 8.2125 15.4281 12 15.4281C15.7875 15.4281 18.8571 12.3585 18.8571 8.571C18.8571 7.46743 18.5732 6.43886 18.1071 5.51743L23.2661 4.27457C24.2411 4.03886 24.2411 2.82278 23.2661 2.58707L13.0661 0.122784C12.3696 -0.0432879 11.6357 -0.0432879 10.9393 0.122784L0.728571 2.58171C-0.241071 2.81743 -0.241071 4.03886 0.728571 4.27457Z"
                                 fill="#465af7" />
                           </svg>
                        </div>
                        <div class="pl-3">
                           <h5>Milchuer College</h5>
                           <p class="mb-0">Master of Science in Computer Science | 2015</p>
                        </div>
                     </li>
                     <li class="d-flex align-items-center mb-3">
                        <div class="profile-icon iq-icon-box rounded-small bg-warning-light svg-warning text-center">
                           <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M23.25 6.46152V7.26922C23.25 7.37632 23.2105 7.47904 23.1402 7.55478C23.0698 7.63051 22.9745 7.67306 22.875 7.67306H21.75V8.27883C21.75 8.61337 21.4981 8.8846 21.1875 8.8846H2.8125C2.50186 8.8846 2.25 8.61337 2.25 8.27883V7.67306H1.125C1.02554 7.67306 0.930161 7.63051 0.859835 7.55478C0.789509 7.47904 0.75 7.37632 0.75 7.26922V6.46152C0.750001 6.38163 0.772007 6.30353 0.813234 6.2371C0.854462 6.17068 0.913058 6.11892 0.981609 6.08837L11.8566 1.64606C11.9484 1.60512 12.0516 1.60512 12.1434 1.64606L23.0184 6.08837C23.0869 6.11892 23.1455 6.17068 23.1868 6.2371C23.228 6.30353 23.25 6.38163 23.25 6.46152V6.46152ZM22.125 21.8077H1.875C1.25367 21.8077 0.75 22.3501 0.75 23.0192V23.8269C0.75 23.934 0.789509 24.0367 0.859835 24.1125C0.930161 24.1882 1.02554 24.2308 1.125 24.2308H22.875C22.9745 24.2308 23.0698 24.1882 23.1402 24.1125C23.2105 24.0367 23.25 23.934 23.25 23.8269V23.0192C23.25 22.3501 22.7463 21.8077 22.125 21.8077ZM4.5 9.69229V19.3846H2.8125C2.50186 19.3846 2.25 19.6558 2.25 19.9904V21H21.75V19.9904C21.75 19.6558 21.4981 19.3846 21.1875 19.3846H19.5V9.69229H16.5V19.3846H13.5V9.69229H10.5V19.3846H7.5V9.69229H4.5Z"
                                 fill="#f4a965" />
                           </svg>
                        </div>
                        <div class="pl-3">
                           <h5>Beechtown University</h5>
                           <p class="mb-0">Bachelor of Science in Computer Science | 2013</p>
                        </div>
                     </li>
                     <li class="d-flex align-items-center mb-3">
                        <div class="profile-icon iq-icon-box rounded-small bg-success-light svg-success text-center">
                           <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0)">
                                 <path
                                    d="M0 8.39995V18.5999C0 18.9314 0.2685 19.1999 0.6 19.1999H3.6V7.19994H1.2C0.537375 7.19994 0 7.73732 0 8.39995ZM13.5 6.59994H12.6V5.09994C12.6 4.93419 12.4658 4.79994 12.3 4.79994H11.7C11.5343 4.79994 11.4 4.93419 11.4 5.09994V7.49994C11.4 7.66569 11.5343 7.79995 11.7 7.79995H13.5C13.6658 7.79995 13.8 7.66569 13.8 7.49994V6.89994C13.8 6.73419 13.6658 6.59994 13.5 6.59994ZM18.6656 4.20144L12.6656 0.201317C12.4685 0.0700041 12.2369 -6.10352e-05 12 -6.10352e-05C11.7631 -6.10352e-05 11.5315 0.0700041 11.3344 0.201317L5.33438 4.20144C5.17003 4.31101 5.03527 4.45945 4.94206 4.63358C4.84884 4.80772 4.80004 5.00218 4.8 5.19969V19.1999H9.6V13.7999C9.6 13.4684 9.8685 13.1999 10.2 13.1999H13.8C14.1315 13.1999 14.4 13.4684 14.4 13.7999V19.1999H19.2V5.20007C19.2 4.79882 18.9994 4.42382 18.6656 4.20144ZM12 9.59995C10.3433 9.59995 9 8.2567 9 6.59994C9 4.94319 10.3433 3.59994 12 3.59994C13.6568 3.59994 15 4.94319 15 6.59994C15 8.2567 13.6568 9.59995 12 9.59995ZM22.8 7.19994H20.4V19.1999H23.4C23.7315 19.1999 24 18.9314 24 18.5999V8.39995C24 7.73732 23.4626 7.19994 22.8 7.19994Z"
                                    fill="#5baa73" />
                              </g>
                              <defs>
                                 <clipPath id="clip1">
                                    <rect width="24" height="19.2" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                        <div class="pl-3">
                           <h5>South Kellergrove High</h5>
                           <p class="mb-0">Senior High School | 2010</p>
                        </div>
                     </li>
                     <li class="d-flex align-items-center">
                        <div class="profile-icon iq-icon-box rounded-small bg-info-light svg-info text-center">
                           <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0)">
                                 <path
                                    d="M0 8.39995V18.5999C0 18.9314 0.2685 19.1999 0.6 19.1999H3.6V7.19994H1.2C0.537375 7.19994 0 7.73732 0 8.39995ZM13.5 6.59994H12.6V5.09994C12.6 4.93419 12.4658 4.79994 12.3 4.79994H11.7C11.5343 4.79994 11.4 4.93419 11.4 5.09994V7.49994C11.4 7.66569 11.5343 7.79995 11.7 7.79995H13.5C13.6658 7.79995 13.8 7.66569 13.8 7.49994V6.89994C13.8 6.73419 13.6658 6.59994 13.5 6.59994ZM18.6656 4.20144L12.6656 0.201317C12.4685 0.0700041 12.2369 -6.10352e-05 12 -6.10352e-05C11.7631 -6.10352e-05 11.5315 0.0700041 11.3344 0.201317L5.33438 4.20144C5.17003 4.31101 5.03527 4.45945 4.94206 4.63358C4.84884 4.80772 4.80004 5.00218 4.8 5.19969V19.1999H9.6V13.7999C9.6 13.4684 9.8685 13.1999 10.2 13.1999H13.8C14.1315 13.1999 14.4 13.4684 14.4 13.7999V19.1999H19.2V5.20007C19.2 4.79882 18.9994 4.42382 18.6656 4.20144ZM12 9.59995C10.3433 9.59995 9 8.2567 9 6.59994C9 4.94319 10.3433 3.59994 12 3.59994C13.6568 3.59994 15 4.94319 15 6.59994C15 8.2567 13.6568 9.59995 12 9.59995ZM22.8 7.19994H20.4V19.1999H23.4C23.7315 19.1999 24 18.9314 24 18.5999V8.39995C24 7.73732 23.4626 7.19994 22.8 7.19994Z"
                                    fill="#7858d7" />
                              </g>
                              <defs>
                                 <clipPath id="clip2">
                                    <rect width="24" height="19.2" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                        <div class="pl-3">
                           <h5>South Kellergrove Junior</h5>
                           <p class="mb-0">Junior High School | Class of 2008</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div> -->
            <div class="col-md-12 col-lg-12">
              <div class="card card-block card-stretch card-height">
                <div class="card-header">
                  <div class="header-title">
                    <h4 class="card-title">Contact Information</h4>
                  </div>
                </div>
                <div class="card-body">
                  <ul class="list-inline p-0 m-0 iq-contact-rest">
                    <li class="mb-3 d-flex">
                      <span
                        ><i
                          class="fas fa-map-marker-alt text-success mr-3 font-size-20"
                        ></i
                      ></span>
                      <p class="mb-0 font-size-16 line-height">
                        {{ personalDetails.address }}
                      </p>
                    </li>
                    <li class="mb-3 d-flex">
                      <span
                        ><i
                          class="fas fa-phone-volume text-danger mr-3 font-size-20"
                        ></i
                      ></span>
                      <p class="mb-0 font-size-16 line-height">
                        {{ personalDetails.phone_number }}
                      </p>
                    </li>
                    <li class="mb-3 d-flex">
                      <span
                        ><i
                          class="fas fa-envelope-open text-warning mr-3 font-size-20"
                        ></i
                      ></span>
                      <p class="mb-0 font-size-16 line-height">
                        <a href="#">{{ personalDetails.email }}</a>
                      </p>
                    </li>
                    <li class="mb-3 d-flex">
                      <span
                        ><i
                          class="lab la-facebook-f text-primary font-size-20 mr-3"
                        ></i
                      ></span>
                      <p class="mb-0 font-size-16 line-height">
                        {{ personalDetails.facebook_username }}
                      </p>
                    </li>
                    <li class="mb-3 d-flex">
                      <span
                        ><i
                          class="lab la-twitter text-info font-size-20 mr-3"
                        ></i
                      ></span>
                      <p class="mb-0 font-size-16 line-height">
                        {{ personalDetails.twitter_username }}
                      </p>
                    </li>
                    <li class=" d-flex">
                      <span
                        ><i
                          class="lab la-instagram  text-danger font-size-20 mr-3"
                        ></i
                      ></span>
                      <p class="mb-0 font-size-16 line-height">
                        {{ personalDetails.instagram_username }}
                      </p>
                    </li>
                  </ul>
                  <br />
                </div>
                <div class="card-footer">
                  <div class="float-right">
                    <button
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                      class="btn btn-outline-primary"
                    >
                      <i class="far fa-edit"></i>Edit Personal Info
                    </button>
                  </div>
                  <div
                    class="modal fade bd-example-modal-lg"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="modal-body">
                            <h5 class="modal-title text-center">
                              Personal Info
                            </h5>
                            <p class="text-center text-danger small">
                              (Please copy your social handles links and paste
                              here)
                            </p>
                            <div>
                              <div>
                                <div
                                  class="col-md-12 col-sm-12 col-12 align-self-center"
                                >
                                  <div class="card-body text-center">
                                    <form>
                                      <div class="row">
                                        <div class="col-lg-12">
                                          <div
                                            class="floating-input form-group"
                                          >
                                            <textarea
                                              class="form-control"
                                              name="address"
                                              id="address"
                                              required
                                              v-model="personalDetails.address"
                                            ></textarea>
                                            <label
                                              class="form-label"
                                              for="address"
                                              >Address</label
                                            >
                                          </div>
                                        </div>
                                        <div class="col-lg-12">
                                          <div
                                            class="floating-input form-group"
                                          >
                                            <input
                                              class="form-control"
                                              type="text"
                                              name="phone"
                                              id="phone"
                                              required
                                              v-model="personalDetails.phone"
                                            />
                                            <label
                                              class="form-label"
                                              for="phone"
                                              >Phone</label
                                            >
                                          </div>
                                        </div>
                                        <div class="col-lg-12">
                                          <div
                                            class="floating-input form-group"
                                          >
                                            <input
                                              class="form-control"
                                              type="text"
                                              name="facebook"
                                              id="facebook"
                                              required
                                              v-model="personalDetails.facebook"
                                            />
                                            <label
                                              class="form-label"
                                              for="facebook"
                                              >Facebook</label
                                            >
                                          </div>
                                        </div>
                                        <div class="col-lg-12">
                                          <div
                                            class="floating-input form-group"
                                          >
                                            <input
                                              class="form-control"
                                              type="text"
                                              name="twitter"
                                              id="twitter"
                                              required
                                              v-model="personalDetails.twitter"
                                            />
                                            <label
                                              class="form-label"
                                              for="twitter"
                                              >Twitter</label
                                            >
                                          </div>
                                        </div>
                                        <div class="col-lg-12">
                                          <div
                                            class="floating-input form-group"
                                          >
                                            <input
                                              class="form-control"
                                              type="text"
                                              name="instagram"
                                              id="instagram"
                                              required
                                              v-model="
                                                personalDetails.instagram
                                              "
                                            />
                                            <label
                                              class="form-label"
                                              for="instagram"
                                              >Instagram</label
                                            >
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            @click="updateAccount"
                            type="button"
                            class="btn btn-primary"
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg- col-md-6">
              <div class="row">
                <!-- <div class="col-md-12 col-lg-6">
                  <div class="card card-block card-stretch card-height">
                     <div class="card-header">
                        <div class="header-title">
                           <h4 class="card-title">Languages</h4>
                        </div>
                     </div>
                     <div class="card-body">
                        <ul class="list-inline p-0 mb-0">
                           <li>
                              <div class="d-flex align-items-center justify-content-between mb-3 row">
                                 <div class="col-10">
                                    <div class="d-flex align-items-center">
                                       <p class="mb-0 font-size-16 mr-3">English</p>
                                       <div class="iq-progress-bar-linear d-inline-block iq-progress-height mt-1 w-80">
                                          <div class="iq-progress-bar iq-bg-danger">
                                             <span class="bg-danger" data-percent="75"></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-2">
                                    <div class="percentage float-right text-danger font-weight-bold">75%
                                    </div>
                                 </div>                                    
                              </div>
                           </li>
                           <li>
                              <div class="d-flex align-items-center justify-content-between mb-3 row">
                                 <div class="col-10">
                                    <div class="d-flex align-items-center">
                                       <p class="mb-0 font-size-16 mr-3">French</p>
                                       <div class="iq-progress-bar-linear d-inline-block iq-progress-height mt-1 w-80">
                                          <div class="iq-progress-bar iq-bg-primary">
                                             <span class="bg-primary" data-percent="50"></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>                                   
                                 <div class="col-2">
                                    <div class="percentage float-right text-primary font-weight-bold">50%
                                    </div>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="d-flex align-items-center justify-content-between row">
                                 <div class="col-10">
                                    <div class="d-flex align-items-center">
                                       <p class="mb-0 font-size-16 mr-3">Spanish</p>
                                       <div class="iq-progress-bar-linear d-inline-block iq-progress-height mt-1 w-80">
                                          <div class="iq-progress-bar iq-bg-success">
                                             <span class="bg-success" data-percent="65"></span>
                                          </div>
                                       </div>
                                    </div>
                                 </div>                                   
                                 <div class="col-2">
                                    <div class="percentage float-right text-success font-weight-bold">65%
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div> -->
                <!-- <div class="col-md-12 col-lg-6">
                  <div class="card card-block card-stretch card-height">
                     <div class="card-header">
                        <div class="header-title">
                           <h4 class="card-title">Social</h4>
                        </div>
                     </div>
                     <div class="card-body">
                        <ul class="list-inline p-0 m-0">
                           <li class="mb-3 d-flex">
                              <span><i class="lab la-facebook-f text-primary font-size-20 mr-3"></i></span>
                              <p class="mb-0 font-size-16 line-height">fb.me/nataliedawson</p>
                           </li>
                           <li class="mb-3 d-flex">
                              <span><i class="lab la-twitter text-info font-size-20 mr-3"></i></span>
                              <p class="mb-0 font-size-16 line-height">@nataliedawson</p>
                           </li>
                           <li class=" d-flex">
                              <span><i class="lab la-instagram  text-danger font-size-20 mr-3"></i></span>
                              <p class="mb-0 font-size-16 line-height">@natalietweets</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div> -->
                <!-- <div class="col-lg-12">
                  <div class="card card-block card-stretch card-height">
                     <div class="card-header">
                        <div class="header-title">
                           <h4 class="card-title">Experience</h4>
                        </div>
                     </div>
                     <div class="card-body">
                        <ul class="list-inline mb-0 p-0">
                           <li class="d-flex align-items-center mb-3">
                              <span class="bg-info-light rounded-small iq-card-icon-small mr-3">1</span>
                              <p class="mb-0 font-size-16">Software Engineer at Mathica Labs | 2018 - present</p>
                           </li>
                           <li class="d-flex align-items-center">
                              <span class="bg-warning-light rounded-small iq-card-icon-small mr-3">2</span>
                              <p class="mb-0 font-size-16">Junior Software Engineer at Zimcore Solutions | 2015 - 2018</p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div> -->
              </div>
            </div>
            <!-- <div class="col-lg-4 col-md-6">
            <div class="card card-block card-stretch card-height">
               <div class="card-header">
                  <div class="header-title">
                     <h4 class="card-title">Professional Skills</h4>
                  </div>
               </div>
               <div class="card-body">
                  <ul class="list-inline p-0 mb-0">
                     <li>
                        <div class="d-flex align-items-center justify-content-between mb-4 row">
                           <div class="col-lg-4">
                              <p class="mb-0 font-size-16">Photoshop</p>
                           </div>
                           <div class="col-lg-8">
                              <div class="iq-progress-bar bg-primary-light mt-2">
                                 <span class="bg-primary iq-progress progress-1" data-percent="85">
                                    <span class="progress-text-one bg-primary">85%</span>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="d-flex align-items-center justify-content-between mb-4 row">
                           <div class="col-lg-4">
                              <p class="mb-0 font-size-16">Illustrator</p>
                           </div>
                           <div class="col-lg-8">
                              <div class="iq-progress-bar bg-warning-light mt-2">
                                 <span class="bg-warning iq-progress progress-1" data-percent="65">
                                    <span class="progress-text-one bg-warning">65%</span>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="d-flex align-items-center justify-content-between mb-4 row">
                           <div class="col-lg-4">
                              <p class="mb-0 font-size-16">Adobe XD</p>
                           </div>
                           <div class="col-lg-8">
                              <div class="iq-progress-bar bg-success-light mt-2">
                                 <span class="bg-success iq-progress progress-1" data-percent="55">
                                    <span class="progress-text-one bg-success">55%</span>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="d-flex align-items-center justify-content-between row">
                           <div class="col-lg-4">
                              <p class="mb-0 font-size-16">Figma</p>
                           </div>
                           <div class="col-lg-8">
                              <div class="iq-progress-bar bg-info-light mt-2">
                                 <span class="bg-info iq-progress progress-1" data-percent="60">
                                    <span class="progress-text-one bg-info">60%</span>
                                 </span>
                              </div>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div> -->
            <!-- <div class="col-lg-4 col-md-6">
            <div class="card card-block card-stretch card-height">
               <div class="card-header">
                  <div class="header-title">
                     <h4 class="card-title">Personal Skills</h4>
                  </div>
               </div>
               <div class="card-body">
                  <ul class="list-inline p-0 m-0">
                     <li class="mb-3">
                        <div class="d-flex align-items-center">
                           <div class="badge badge-primary iq-number">1</div>
                           <div class="ml-4">
                              <p class="mb-0 font-size-16">Creative spirit</p>
                           </div>
                        </div>
                     </li>
                     <li class="mb-3">
                        <div class="d-flex align-items-center">
                           <div class="badge badge-primary iq-number">2</div>
                           <div class="ml-4">
                              <p class="mb-0 font-size-16">Reliable and professional</p>
                           </div>
                        </div>
                     </li>
                     <li class="mb-3">
                        <div class="d-flex align-items-center">
                           <div class="badge badge-primary iq-number">3</div>
                           <div class="ml-4">
                              <p class="mb-0 font-size-16">Time management</p>
                           </div>
                        </div>
                     </li>
                     <li class="">
                        <div class="d-flex align-items-center">
                           <div class="badge badge-primary iq-number">4</div>
                           <div class="ml-4">
                              <p class="mb-0 font-size-16">Organized</p>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div> -->
          </div>
        </div>
      </div>
    </div>
    <UserModal />
    <UserFooter />
  </div>
</template>

<script>
import UserFooter from "@/components/UserFooter.vue";
import UserHeader from "@/components/UserHeader.vue";
// import UserContent from "@/components/UserContent.vue";
import UserModal from "@/components/UserModal.vue";

export default {
  data() {
    return {
      details: JSON.parse(localStorage.getItem("user")),
      personalDetails: {
        address: "",
        phone: "",
        facebook: "",
        twitter: "",
        instagram: "",
      },
    };
  },
  methods: {
    onCopy: function() {
      this.$toasted.success("copied");
    },
    onError: function() {
      this.$toasted.error("an error occoured");
    },
    edit() {
      this.$router.push("/edit");
    },
  },
  components: {
    UserFooter,
    UserHeader,
    // UserContent,
    UserModal,
  },
  created() {},
  mounted() {
    console.log(this.details);
    console.log(this.details.fullname);
  },
};
</script>
<style scoped>
.osas {
  padding: 100px;
  width: 100%;
  background: #75b8f1;
}
.our_color {
  color: #48a8fc;
}
.name {
  /* border: 4px solid rgb(29, 29, 36);
  border-bottom:none;
  border-right: none; */
}
.text-black {
  color: #313131 !important;
}
.text-gray {
  color: #fff !important;
}
.small {
  position: relative;
  font-size: 10px;
}
</style>
