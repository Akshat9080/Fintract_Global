import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fintract Global</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      
      {/* Home Section */}
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-1 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
      <section class="w-full h-full ">
        <img alt="gallery" class="w-full  object-cover h-full object-center block absolute inset-0 " src="/main.jpg"/> 
        </section>
        <div class="relative z-10 w-full">
          <h2 class="text-2x1 text-white font-medium title-font mb-2 text-8xl">Fintract</h2>
          <h2 class="text-2x1 text-white font-medium title-font mb-2 text-8xl">Global</h2>
          <p class="leading-relaxed  text-white text-xl">Fintract Global takes your privacy very seriously. We may process</p>
          <p class="leading-relaxed  text-white text-xl">your personal information for carefully considered and specific</p>
          <p class="leading-relaxed  text-white text-xl">purposes which are in our interests and enable us to enhance the</p>
          <p class="leading-relaxed  text-white text-xl">services we provide.</p>
          <br/>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 rounded-2xl text-base mt-4 md:mt-0 border-blue-600">Get Started
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-indigo-500 rounded-2xl text-base mt-4 md:mt-0 border-blue-600">Read More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
        </div>
      </div>
    </div>
  </div>
</section>

{/* About us section */}

    <div class="text-center mb-20">
      <h1 class="sm:text-5xl text-2xl font- text-center title-font text-blue-900 mb-4 mt-1">About us</h1>
      <p class="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 text-blue-900 mx-auto">Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purposes which ar in our interests and nable us to enhance the services we provide, but which we believe also benefit our customers.</p>
    </div>

{/* Services section */}
    {/* B2B */}
    <div class="flex flex-col text-center w-full mb-2 mt-1">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 pb-2 text-violet-900">Our services</h1></div>
    <section class="text-gray-600 body-font">
  <div class="container px-5 pb-0 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-violet-900 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
           <img src="/B2B.png" alt="" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-3 text-violet-900">B2B</h2>
            <p class="leading-relaxed text-base">Maecenas ac faucibus augue, ut posuere nisl. Nulla viverra velit porta ligula rutrum, vitae fermentum neque finibus.</p>
            <p class="leading-relaxed text-base">
              Sed magna mauris, ultricies at dapibus id,condimentum non mi.Nam aliquet vscelerisque ullamcorper.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">View Solution
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
{/* Banking */}
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-violet-900 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
          <img src="Baas.png" alt="" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-3 text-violet-900">Banking As a Service</h2>
            <p class="leading-relaxed text-base">Maecenas ac faucibus augue, ut posuere nisl. Nulla viverra velit porta ligula rutrum, vitae fermentum neque finibus.</p>
            <p class="leading-relaxed text-base">
              Sed magna mauris, ultricies at dapibus id,condimentum non mi.Nam aliquet vscelerisque ullamcorper.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">View Solution
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Open banking */}
  <div class="container px-5 pt-4 mx-auto flex flex-wrap">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-violet-900 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
           <img src="/Banking.png" alt="" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-3 text-violet-900">Open Banking</h2>
            <p class="leading-relaxed text-base">Maecenas ac faucibus augue, ut posuere nisl. Nulla viverra velit porta ligula rutrum, vitae fermentum neque finibus.</p>
            <p class="leading-relaxed text-base">
              Sed magna mauris, ultricies at dapibus id,condimentum non mi.Nam aliquet vscelerisque ullamcorper.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">View Solution
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
{/* Startup */}
      <div class="p-4 lg:w-1/2 md:w-full">
        <div class="flex border-2 rounded-lg border-violet-900 border-opacity-50 p-8 sm:flex-row flex-col">
          <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
          <img src="/StartUp.png" alt="" />
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-2xl title-font font-medium mb-3 text-violet-900">SME Lending</h2>
            <p class="leading-relaxed text-base">Maecenas ac faucibus augue, ut posuere nisl. Nulla viverra velit porta ligula rutrum, vitae fermentum neque finibus.</p>
            <p class="leading-relaxed text-base">
              Sed magna mauris, ultricies at dapibus id,condimentum non mi.Nam aliquet vscelerisque ullamcorper.
            </p>
            <a class="mt-3 text-indigo-500 inline-flex items-center">View Solution
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Profile Section */}

<div class="flex justify-center  pt-2 p-4"> 
  <div class="flex flex-col justify-center items-center "> 
         <div class="text-stone-600 my-4 md:font-medium text-center w-3/4 md:w-1/2">"Over the years, I have built lasting relationship with my clients and team, whose professional success I believe to be closely linked with our long-term progress"</div>
     <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
    <div class="overflow-hidden w-full m-4 flex justify-center rounded-lg md:w-[33%] px-8"> 
    <div class="flex flex-col items-center justify-center text-center">
       <img src="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/debasis-chakraborty-b4b4306f" alt="" class="rounded-full" /> 
       <div class="font-bold text-violet-900">Debasis Chakraborty</div>
        <div class="text-sm font-medium text-stone-500 hover:text-violet-900"><a href="#"/>CEO Fintract Global</div> </div> </div> </div> </div>  
     </div>

{/* Why our we are the best section */}
<div class="flex justify-center p-4"> 
  <div class="flex flex-col justify-center">
     <div class="flex flex-col text-center w-full mb-2">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-violet-900">Why our We are the best</h1></div>
     <br/>
       <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center "> 
          <div class="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[33%] px-8"> 
            <div class="flex flex-col md:flex-row items-center justify-center ">
               <div class=" items-center justify-center flex py-2">
                 <div class="flex flex-col items-center justify-center text-center border-2 rounded-2xl border-violet-700">
                   <img src="/img1.png" alt="" />
                   <br/>
                   <h2 class="text-2xl font-semibold">On time</h2>
                     <div class="text-stone-600 font-medium m-2"> Sed tristique rhoncus nisi,in sodales mi.Orci varius natoque penatibus et magnis</div>  
                    </div>
                  </div>
                </div> 
              </div>
           <div class="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[33%] px-8">
         <div class="flex flex-col md:flex-row items-center justify-center ">
           <div class=" items-center justify-center flex py-2"> 
            <div class="flex flex-col items-center justify-center text-center border-2 rounded-2xl border-violet-700">
               <img src="/img2.png" alt=""  />
               <br/>
               <h2 class="text-2xl font-semibold">Security</h2>
               <div class="text-stone-600 font-medium m-2"> Sed tristique rhoncus nisi,in sodales mi.Orci varius natoque penatibus et magnis</div>  
                     </div> 
                    </div> 
                  </div> 
                </div>
             <div class="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg md:w-[33%] px-8"> 
              <div class="flex flex-col md:flex-row items-center justify-center ">
                 <div class=" items-center justify-center flex py-2">
                   <div class="flex flex-col items-center justify-center text-center border-2 rounded-2xl border-violet-700">
                     <img src="/img3.png"  alt="" />
                     <br/>
                      <h2 class="text-2xl font-semibold ">Fast work turnarounnd</h2>
                      <div class="text-stone-600 font-medium m-2"> Sed tristique rhoncus nisi,in sodales mi.Orci varius natoque penatibus et magnis</div> 
                    </div>
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>
         </div>

{/* clients section */}

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  <div class="flex flex-col text-center w-full mb-20">
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-violet-900">Our Clients</h1></div>
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-6">
        <img src="/PayPal.png" alt="Paypal" />
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 ">
        <img src="/Amazon.png" alt="Amazon" /> 
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class="px-4 py-6 ">
        <img src="/img.png" alt="University" />
        </div>
      </div>
      <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div class=" px-4 py-6 ">
        <img src="/Google.png" class="w-96" alt="Google" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Sign Up Section */}

<div class="flex justify-center"> 
  <div class="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] m-2"> 
    <div class=" w-full md:w-3/4"> <div class="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4"> 
      <h1 class="font-semibold text-xl md:text-5xl text-violet-600 m-2">Sign Up</h1> 
      <h1 class="text-lg font-medium text-gray-600 m-2">for openInverst updates</h1>
         </div> 
        <div class="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8"> 
        <div class="">
           <input type="text" placeholder="User Name" class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"/> </div> 
      <div class=""> <input type="password" placeholder="Password" class=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"/> 
      </div> 
    </div>
  <div class="text-center mt-7">
     <button class=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-600 to-violet-600 font-medium m-2 mb-6 ">Sign In</button> 
      </div> 
        </div>
     <div class="h-[100%] w-full md:w-1/3 bg-gradient-to-l from-blue-600 to-violet-600 items-center flex justify-center">
       <div class="text-white text-base font-semibold text-center my-10 space-y-2 m-2"> 
        <h1 class="text-5xl">New Here?</h1> <h1 class="">Sign Up and discover new oppurtinities here</h1>
         <button class="bg-white rounded-2xl px-4 text-violet-600 py-1">Subscribe</button>
          </div> 
          </div>
           </div>
            </div>
       <script src="https://cdn.tailwindcss.com"></script> 
       <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script> 
       <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <br/>
        <br/>
        <hr/>

      <Footer/>
    </div>
  )
}
