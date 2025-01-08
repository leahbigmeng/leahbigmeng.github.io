// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-i-graduated-my-msc-design-informatics-with-class-prize-sparkles-smile",
          title: 'I graduated my Msc Design Informatics with Class Prize! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-my-dissertation-is-accepted-to-hcii-2025",
          title: 'My Dissertation is accepted to HCII 2025',
          description: "",
          section: "News",},{id: "projects-exhibition-web-design",
          title: 'Exhibition Web Design',
          description: "The 7th Design Annual Exhibition of Tianjin University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-hidden-burden",
          title: 'Hidden Burden',
          description: "Exposing the Absurdity - An Interactive Installation on Overpackaging",
          section: "Projects",handler: () => {
              window.location.href = "/projects/int_project_1/";
            },},{id: "projects-youself",
          title: 'YouSelf',
          description: "Audio-Visual Interactive Installlation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/int_project_2/";
            },},{id: "projects-cancer-caregiver-quality-of-survival-research",
          title: 'Cancer Caregiver Quality of Survival Research',
          description: "Research Topic of my Bachelor Degree",
          section: "Projects",handler: () => {
              window.location.href = "/projects/res_project_2/";
            },},{id: "projects-interactive-data-narrative-web-design",
          title: 'Interactive Data Narrative Web Design',
          description: "A website to raise awareness about health inequality and deprivation through data exploration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uiux_project_1/";
            },},{id: "projects-exhibition-web-design",
          title: 'Exhibition Web Design',
          description: "The 7th Design Annual Exhibition of Tianjin University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uiux_project_2/";
            },},{id: "projects-e-piggy-app-design",
          title: 'E-Piggy APP Design',
          description: "A banking APP to help parents teaching children about money and finance",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uiux_project_3/";
            },},{id: "projects-hello-kitty-service-design",
          title: 'HELLO! Kitty Service Design',
          description: "Sustainable service design to promote &quot;adoption instead of purchase&quot; for pet cats",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uiux_project_4/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4C%65%61%68.%7A%32%33@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/leahzhangkakakaka", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shuomeng-zhang-6417281b9", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
