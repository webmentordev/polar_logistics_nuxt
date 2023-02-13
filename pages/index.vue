<template>
    <header class="h-screen relative flex items-center 540px:py-[150px] 540px:h-full">
        <div class="absolute top-0 left-0 bg-black bg-opacity-60 backdrop-blur-sm h-full w-full"></div>
        <div class="relative z-10 max-w-6xl m-auto text-center">
            <div class=" text-white mb-6">
                <h1 class="text-9xl 600px:text-7xl h-animate fadingUp-1">Welcome to Polar Logistics</h1>
                <span class="text-2xl fadingUp-2">We Move Cargo, your Virtual Trucking Solution</span>
            </div>
            <ul class="w-fit m-auto flex items-center">
                <li class="mx-4 hover:scale-110 transition-all"><NuxtLink to="https://www.facebook.com/polarlogisticsinternational" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"/></svg></NuxtLink></li>
                
                <li class="mx-4 hover:scale-110 transition-all"><NuxtLink to="http://twitch.tv/arcticpolarwolf" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 268"><path fill="#5A3E85" d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0H17.458Zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.886H40.717V23.263Zm64.008 116.405H128V69.844h-23.275v69.824Zm63.997 0h23.27V69.844h-23.27v69.824Z"/></svg></NuxtLink></li>

                <li class="mx-4 hover:scale-110 transition-all"><NuxtLink to="https://www.youtube.com/@polarlogisticsinternational" target="_blank" rel="nofollow"><svg xmlns="http://www.w3.org/2000/svg" width="42.52" height="32" viewBox="0 0 256 180"><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"/><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg></NuxtLink></li>

                <li class="mx-4 hover:scale-110 transition-all"><NuxtLink to="https://e.truckyapp.com/vtc/polar-logistics" target="_blank" rel="nofollow"><img src="https://truckyapp.com/wp-content/uploads/2021/07/cropped-Trucky-192x192.png" width="40" alt="TruckyApp logo"></NuxtLink></li>
            </ul>
        </div>
    </header>

    <section class="max-w-6xl m-auto py-[150px] px-4 relative" id="about">
        <h1 class="mb-6 text-6xl font-bold">About Us</h1>
        <div class="border-l-4 420px:border-none 420px:pl-0 border-gray-700 pl-8 py-6">
            <p class="text-gray-900 leading-7 mb-3">Our company specializes in the transportation of goods via virtual trucking, allowing for efficient and cost-effective delivery of your cargo. With our state-of-the-art technology, we can track and monitor your shipment in <strong>real-time</strong>, ensuring <strong>on-time delivery</strong> every time. Our experienced team of logistics professionals are dedicated to providing superior service and ensuring the safe and timely delivery of your cargo. We understand the importance of your cargo and work tirelessly to ensure it arrives at its destination on time, every time.</p>
            <p class="text-gray-900 leading-7 mb-3">We offer a variety of services to meet all of your transportation needs, including: Virtual trucking for long haul and regional deliveries Real-time tracking and monitoring of shipments Customizable transportation solutions Competitive pricing Experienced logistics professionals available <strong>24/7</strong> At Polar Logistics, we are committed to providing our customers with the highest level of service and satisfaction. Contact us today to learn more about how we can help with your transportation needs.</p>
        </div>
    </section>

    <section class="px-4 py-[150px] contact relative">
        <div class="bg-black bg-opacity-80 absolute w-full h-full top-0 left-0"></div>
        <div class="mb-6 relative text-white text-center z-10">
            <img src="~/assets/images/logo.png" width="90" class="m-auto mb-6" alt="PolarLogistics Logo">
            <h1 class="text-2xl mb-6"><span class="text-6xl">Contact Us Today – To Join Us</span> <br> on the Virtual Trucking World</h1>
            <div class="flex items-center max-w-fit 420px:break-words m-auto bg-black py-4 px-6 bg-opacity-60 backdrop-blur-lg rounded-md 400px:py-1 400px:px-1">
                <p class="540px:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><g fill="#fbff00"><path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546l.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/><path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025c-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643c-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4c.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42c.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8c.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708c-.346 0-.573.245-.573.791Z"/></g></svg></p>
                <span class="ml-3 text-white text-lg font-semibold break-words 540px:text-sm">recruitment@polarlogisticsinternationalvtc.com</span>
            </div>
        </div>
    </section>
    
    <Logos />
</template>