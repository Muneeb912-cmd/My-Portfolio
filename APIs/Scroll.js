// Sliding the menu open and close
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.toggle-btn');
    const sideMenu = document.querySelector('.side-menu');
    const sideMenuOverlay = document.querySelector('.side-menu-overlay');

    toggleBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    sideMenuOverlay.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggleBtn = document.querySelector(".toggle-btn");
    const menuCloseBtn = document.querySelector(".close-btn");
    const sideMenu = document.querySelector(".side-menu");
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    const content = document.querySelector(".content");

    menuToggleBtn.addEventListener("click", function () {
        sideMenu.classList.add("open");
        menuToggleBtn.style.display = "none";
       
    });

    menuCloseBtn.addEventListener("click", function () {
        sideMenu.classList.remove("open");
        menuToggleBtn.style.display = "block";
       
    });
    
    // Scroll to specific section on menu item click
    const menuItems = document.querySelectorAll(".menu-items li a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSectionId = item.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);
            const targetOffset = targetSection.getBoundingClientRect().top;
            const currentOffset = window.pageYOffset;
            const scrollOffset = targetOffset + currentOffset;

            sideMenu.classList.remove("open");
            menuToggleBtn.style.display = "block";

            window.scroll({
                top: scrollOffset,
                behavior: "smooth"
            });
        });
    });

    // Show scroll-up button when scrolling down
    window.addEventListener("scroll", function () {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;

        if (scrollY > windowHeight) {
            scrollUpBtn.style.display = "block";
        } else {
            scrollUpBtn.style.display = "none";
        }
    });

    // Scroll back to the top on scroll-up button click
    scrollUpBtn.addEventListener("click", function () {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    });   
});

const optionData = [
    {
      title: "FreeLancing",
      content: "FreeLancing",
      elements: [
        {
          imageUrl: "https://dummyimage.com/600x360",
          subtitle: "Element 1 Subtitle",
          name: "Element 1 Name",
          description: "Element 1 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 2 Subtitle",
          name: "Element 2 Name",
          description: "Element 2 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 3 Subtitle",
          name: "Element 3 Name",
          description: "Element 3 Description",
        },
        // Add more elements as needed...
      ],
    },
    {
      title: "Mobile Application Development",
      content: "This is the content of Option 2.",
      elements: [
        {
          imageUrl: "https://dummyimage.com/600x360",
          subtitle: "Element 1 Subtitle",
          name: "Element 1 Name",
          description: "Element 1 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 2 Subtitle",
          name: "Element 2 Name",
          description: "Element 2 Description",
        },
         {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 3 Subtitle",
          name: "Element 3 Name",
          description: "Element 3 Description",
        },
        // Add more elements as needed...
      ],
    },
    {
      title: "Web Application Development",
      content: "This is the content of Option 3.",
      elements: [
        {
          imageUrl: "https://dummyimage.com/600x360",
          subtitle: "Element 1 Subtitle",
          name: "Element 1 Name",
          description: "Element 1 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 2 Subtitle",
          name: "Element 2 Name",
          description: "Element 2 Description",
        },
         {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 3 Subtitle",
          name: "Element 3 Name",
          description: "Element 3 Description",
        },
        // Add more elements as needed...
      ],
    },{
      title: "Desktop Application Development",
      content: "This is the content of Option 4.",
      elements: [
        {
          imageUrl: "https://dummyimage.com/600x360",
          subtitle: "Element 1 Subtitle",
          name: "Element 1 Name",
          description: "Element 1 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 2 Subtitle",
          name: "Element 2 Name",
          description: "Element 2 Description",
        },
         {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 3 Subtitle",
          name: "Element 3 Name",
          description: "Element 3 Description",
        },
        // Add more elements as needed...
      ],
    },{
      title: "Photography & Editing",
      content: "This is the content of Option 5.",
      elements: [
        {
          imageUrl: "https://dummyimage.com/600x360",
          subtitle: "Element 1 Subtitle",
          name: "Element 1 Name",
          description: "Element 1 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 2 Subtitle",
          name: "Element 2 Name",
          description: "Element 2 Description",
        },
         {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 3 Subtitle",
          name: "Element 3 Name",
          description: "Element 3 Description",
        },
        // Add more elements as needed...
      ],
    },{
      title: "Others",
      content: "This is the content of Option 6.",
      elements: [
        {
          imageUrl: "https://dummyimage.com/600x360",
          subtitle: "Element 1 Subtitle",
          name: "Element 1 Name",
          description: "Element 1 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 2 Subtitle",
          name: "Element 2 Name",
          description: "Element 2 Description",
        },
        {
          imageUrl: "https://dummyimage.com/601x361",
          subtitle: "Element 3 Subtitle",
          name: "Element 3 Name",
          description: "Element 3 Description",
        },
        // Add more elements as needed...
      ],
    },
  ];
  
  
      // Function to get the query parameter from the URL
      function getQueryParam(param) {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          return urlParams.get(param);
      }
  
      // Get the option parameter from the URL
      const optionParam = getQueryParam("option");
  
      // Call the displayOptionDetails function with the optionParam
      displayOptionDetails(optionParam);
  
      function displayOptionDetails(optionNumber) {
          const optionContentContainer = document.getElementById("optionContent");
  
          if (optionNumber) {
              const selectedOptionData = optionData[parseInt(optionNumber) - 1];
  
              if (selectedOptionData) {
                  optionContentContainer.innerHTML = `
                      <section class="text-gray-600 body-font">
                          <div class="container px-5 py-24 mx-auto">
                              <div class="flex flex-col text-center w-full mb-20">
                                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Coming Soon!</h1>
                                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Here are some of the prominent projects that I have developed in ${selectedOptionData.content}.</p>
                                  <p><a class="text-indigo-600 hover:text-indigo-300" href="/index.html#contact">Contact Me</a> For the Source Code</p>
                              </div>
                              <div class="flex flex-wrap -m-4">
                                  ${selectedOptionData.elements.map((element, index) => `
                                      <div class="lg:w-1/3 sm:w-1/2 p-4" key="${index}">
                                          <div class="flex relative">
                                              <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${element.imageUrl}">
                                              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-black opacity-0 hover:opacity-100">
                                                  <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">${element.subtitle}</h2>
                                                  <h1 class="title-font text-lg font-medium text-white mb-3">${element.name}</h1>
                                                  <p class="leading-relaxed text-white">${element.description}</p>
                                              </div>
                                          </div>
                                      </div>
                                  `).join('')}
                              </div>
                          </div>
                      </section>
                  `;
              } else {
                  optionContentContainer.innerHTML = "<p>No content available for this option.</p>";
              }
          } else {
              optionContentContainer.innerHTML = "<p>No option selected.</p>";
          }
      }
