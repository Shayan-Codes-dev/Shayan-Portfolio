(function() {
  "use strict";

  // Services Data
  const servicesData = {
    'fullstack-development': {
      title: 'Full-Stack Development',
      shortTitle: 'Full-Stack Development',
      description: 'Building robust, secure, and scalable web applications using PHP, MySQL, and modern JavaScript frameworks for powerful back-end functionality.',
      longDescription: 'Full-stack development means I handle every layer of your web application. From designing responsive, intuitive user interfaces to architecting scalable backend systems, I deliver complete solutions that work seamlessly.',
      icon: 'bi-code-square',
      features: [
        'Frontend: HTML5, CSS3, JavaScript, Bootstrap, React',
        'Backend: PHP, Node.js with Express, RESTful APIs',
        'Database Design: MySQL, efficient query optimization',
        'Security: Best practices, authentication, data protection',
        'Performance: Fast load times, optimized code, caching strategies'
      ],
      techStack: [
        { label: 'Frontend', value: 'HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React' },
        { label: 'Backend', value: 'PHP, Node.js/Express, REST APIs' },
        { label: 'Databases', value: 'MySQL, efficient relational design' },
        { label: 'Tools', value: 'Git, GitHub, responsive design principles' }
      ],
      image: 'assets/img/portfolio/fullstack-1.png',
      relatedProjects: [
        { title: 'Student Management App', image: 'assets/img/portfolio/fullstack-1.png', link: 'https://crud-management-app.page.gd' }
      ]
    },
    'web-design': {
      title: 'Web Design',
      shortTitle: 'Web Design',
      description: 'Crafting visually stunning, responsive, and user-centric websites that effectively translate your brand\'s vision into an engaging digital experience.',
      longDescription: 'Web design is more than aesthetics—it\'s about creating intuitive, engaging experiences that convert visitors into customers. I combine beautiful design with solid UX principles.',
      icon: 'bi-activity',
      features: [
        'Responsive Design: Works perfectly on all devices',
        'User-Centric Approach: Focus on user experience',
        'Modern Aesthetics: Contemporary, professional designs',
        'Brand Integration: Your brand identity shines through',
        'Fast Load Times: Optimized images and code'
      ],
      techStack: [
        { label: 'Design Tools', value: 'Figma, Photoshop, Illustrator' },
        { label: 'Frontend', value: 'HTML5, CSS3, Bootstrap, Tailwind' },
        { label: 'Responsiveness', value: 'Mobile-first design approach' },
        { label: 'Performance', value: 'Optimized images and assets' }
      ],
      image: 'assets/img/portfolio/design-2.png',
      relatedProjects: [
        { title: 'NGO Landing Page Design', image: 'assets/img/portfolio/design-2.png', link: 'https://shayan-codes-dev.github.io/NGO-Landing-Page/' },
        { title: 'Dynamic Product Page', image: 'assets/img/portfolio/ecommerce-1.png', link: 'https://shayan-codes-dev.github.io/iphone-product-page/' }
      ]
    },
    'cms-ecommerce': {
      title: 'CMS & E-commerce',
      shortTitle: 'CMS & E-commerce',
      description: 'Specializing in full setup, custom theme development, and optimization for leading platforms like WordPress and Shopify to manage content and sales effectively.',
      longDescription: 'Whether you need a content management system or a complete e-commerce store, I provide end-to-end solutions that are secure, scalable, and easy to manage.',
      icon: 'bi-wordpress',
      features: [
        'WordPress Setup & Customization: Complete CMS solutions',
        'Shopify Store Development: E-commerce platforms',
        'Theme Development: Custom designs tailored to your brand',
        'Payment Integration: Secure payment gateways',
        'SEO Optimization: Improve search rankings'
      ],
      techStack: [
        { label: 'CMS Platforms', value: 'WordPress with custom themes' },
        { label: 'E-commerce', value: 'Shopify store development' },
        { label: 'Plugins', value: 'WooCommerce, custom extensions' },
        { label: 'Security', value: 'SSL, secure transactions, data protection' }
      ],
      image: 'assets/img/portfolio/design-3.png',
      relatedProjects: [
        { title: 'High-Performance Blog (WordPress)', image: 'assets/img/portfolio/branding-2.jpg', link: 'portfolio-details.html' },
        { title: 'Custom E-commerce Design', image: 'assets/img/portfolio/design-3.png', link: 'https://shayan-codes-dev.github.io/E-commerce-Design/' }
      ]
    },
    'graphic-design': {
      title: 'Graphic Design',
      shortTitle: 'Graphic Design',
      description: 'Transforming ideas into visually compelling designs, including branding, marketing materials, social media graphics, and creative visual assets that elevate your brand identity.',
      longDescription: 'Great design communicates your message clearly and creates lasting impressions. I create designs that are not just beautiful, but also effective at achieving your business goals.',
      icon: 'bi-brush',
      features: [
        'Branding & Logo Design: Create your brand identity',
        'Social Media Graphics: Eye-catching posts and stories',
        'Marketing Materials: Flyers, brochures, posters',
        'Visual Assets: Banners, icons, illustrations',
        'Brand Consistency: Cohesive visual language'
      ],
      techStack: [
        { label: 'Design Software', value: 'Adobe Photoshop, Illustrator, Figma' },
        { label: 'Specialties', value: 'Logo design, brand identity, print design' },
        { label: 'Digital Assets', value: 'Web graphics, social media, animations' },
        { label: 'Format Support', value: 'All formats: PNG, JPG, SVG, PDF, PSD' }
      ],
      image: 'assets/img/portfolio/design-1.png',
      relatedProjects: []
    },
    'database-management': {
      title: 'Database Management',
      shortTitle: 'Database Management',
      description: 'Designing, optimizing, and maintaining secure and efficient databases to ensure reliable storage, fast queries, and smooth performance for data-driven applications.',
      longDescription: 'A well-designed database is the backbone of any application. I create efficient, scalable database architectures that ensure your data is safe, accessible, and performs optimally.',
      icon: 'bi-database-check',
      features: [
        'Database Design: Efficient relational schemas',
        'Query Optimization: Fast data retrieval',
        'Data Security: Encryption and access control',
        'Backup & Recovery: Prevent data loss',
        'Performance Tuning: Optimal speed and efficiency'
      ],
      techStack: [
        { label: 'Databases', value: 'MySQL, SQL optimization' },
        { label: 'Architecture', value: 'Normalization, indexing, relationships' },
        { label: 'Security', value: 'Encryption, prepared statements, access control' },
        { label: 'Maintenance', value: 'Backups, monitoring, optimization' }
      ],
      image: 'assets/img/portfolio/fullstack-1.png',
      relatedProjects: [
        { title: 'Student Management App', image: 'assets/img/portfolio/fullstack-1.png', link: 'https://crud-management-app.page.gd' }
      ]
    }
  };

  // Function to get URL parameter
  function getServiceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('service');
  }

  // Function to load service details
  function loadServiceDetails() {
    const serviceId = getServiceFromURL();
    if (!serviceId || !servicesData[serviceId]) return;

    const service = servicesData[serviceId];
    const titleEl = document.querySelector('.page-title h1');
    const sidebarTitle = document.querySelector('[data-service-title]');
    const mainTitle = document.querySelector('[data-service-main-title]');
    const mainDescription = document.querySelector('[data-service-description]');
    const featuresList = document.querySelector('[data-service-features]');
    const techStackList = document.querySelector('[data-service-tech]');
    const serviceImage = document.querySelector('[data-service-image]');
    const relatedProjects = document.querySelector('[data-related-projects]');

    if (titleEl) titleEl.textContent = service.title;
    if (sidebarTitle) sidebarTitle.textContent = service.shortTitle;
    if (mainTitle) mainTitle.textContent = service.title;
    if (mainDescription) mainDescription.innerHTML = `<p>${service.longDescription}</p>`;
    if (serviceImage) serviceImage.src = service.image;

    // Update active state for service links
    const serviceLinks = document.querySelectorAll('.services-list a');
    serviceLinks.forEach(link => {
      link.classList.remove('active');
      if (link.href.includes(`service=${serviceId}`)) {
        link.classList.add('active');
      }
    });

    // Load features
    if (featuresList) {
      featuresList.innerHTML = service.features.map(feature => 
        `<li><i class="bi bi-check-circle"></i> <span>${feature}</span></li>`
      ).join('');
    }

    // Load tech stack
    if (techStackList) {
      techStackList.innerHTML = service.techStack.map(tech =>
        `<li><i class="bi bi-check-circle"></i> <span><strong>${tech.label}:</strong> ${tech.value}</span></li>`
      ).join('');
    }

    // Load related projects
    if (relatedProjects && service.relatedProjects.length > 0) {
      relatedProjects.innerHTML = `
        <h4>Related Projects</h4>
        <div class="row gy-4">
          ${service.relatedProjects.map(project => `
            <div class="col-lg-6">
              <div class="project-card">
                <img src="${project.image}" alt="${project.title}" class="img-fluid" style="border-radius: 8px; margin-bottom: 15px;">
                <h5>${project.title}</h5>
                <a href="${project.link}" target="_blank" class="btn btn-primary btn-sm">View Project</a>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
  }

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top'))) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    const header = document.querySelector('#header');
    if (!header) return;
    header.classList.toggle('header-show');
    if (headerToggleBtn) {
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }
  }

  if (headerToggleBtn) {
    headerToggleBtn.addEventListener('click', headerToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      if (this.parentNode.nextElementSibling) {
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      }
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped && typeof Typed !== 'undefined') {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    if (typed_strings) {
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  if (skillsAnimation && typeof Waypoint !== 'undefined') {
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function(direction) {
          let progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  }

  /**
   * Initiate Pure Counter
   */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    if (!isotopeItem) return;
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
        });
      });
    }

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        const activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
        if (activeFilter) activeFilter.classList.remove('filter-active');
        this.classList.add('filter-active');
        if (initIsotope) {
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
        }
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let configScript = swiperElement.querySelector(".swiper-config");
      if (!configScript) return;
      let config;
      try {
        config = JSON.parse(configScript.innerHTML.trim());
      } catch (e) {
        console.error("Swiper config JSON parse error:", e);
        return;
      }

      if (swiperElement.classList.contains("swiper-tab")) {
        if (typeof initSwiperWithCustomPagination === 'function') {
          initSwiperWithCustomPagination(swiperElement, config);
        }
      } else if (typeof Swiper !== 'undefined') {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  // Bootstrap Validation
  (() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', async (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
          return;
        }

        // Prevent actual form submit
        event.preventDefault();

        // Send to Formspree
        try {
          const response = await fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            // Show success message
            const successMessage = form.querySelector('.sent-message');
            if (successMessage) successMessage.classList.remove('d-none');

            // Reset form inputs
            form.reset();

            // ❗ Remove the validation class so fields don't turn red
            form.classList.remove('was-validated');
          }
        } catch (error) {
          console.error("Form submission error:", error);
        }
      });
    });
  })();

  // Load service details if on service-details page
  window.addEventListener('load', loadServiceDetails);

})();
