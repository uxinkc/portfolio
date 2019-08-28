/////// FAKE API ///////

const apiData = [
  {
    uid: "home-id",
    label: "Home",
    path: "/",
    hasChild: "false",
    columnClass: ""
  },
  {
    uid: "projects-id",
    label: "Projects",
    path: "/projects",
    hasChild: "true",
    columnClass: "",
    hasHeaders: "false",
    children: [
      {
        uid: "design-system-id",
        label: "Design System",
        path: "/projects/design-system",
        hasChild: "false",
      },
      {
        uid: "cerner-redesign-id",
        label: "Cerner.com Redesign",
        path: "/projects/cerner-redesign",
        hasChild: "false",
      },
      {
        uid: "fee-calculator-id",
        label: "Fee Calculator",
        path: "/projects/fee-calculator",
        hasChild: "false",
      },
      {
        uid: "3d-online-shopping-id",
        label: "3D Online Shopping",
        path: "/projects/3d-online-shopping",
        hasChild: "false",
      },
      {
        uid: "sprint-wholesale-id",
        label: "Sprint Wholesale",
        path: "/projects/sprint-wholesale",
        hasChild: "false",
      },
      {
        uid: "k12-admin-portal-id",
        label: "K-12 Admin Portal",
        path: "/projects/k12-admin-portal",
        hasChild: "false",
      },
    ],
  },
  {
    uid: "insights-id",
    label: "Insights",
    path: "/insights",
    hasChild: "true",
    columnClass: "fsa-nav-global__list-item--multi-column",
    hasHeaders: "true",
    children: [
      {
        uid: "ux-strategy-id",
        header: "UX Strategy",
        group: [
          {
            uid: "uxs-smart-defaults-id",
            label: "Smart Defaults",
            path: "/insights/smart-defaults",
            hasChild: "false",
          },
          {
            uid: "uxs-design-systems-id",
            label: "Design Systems",
            path: "/insights/design-systems",
            hasChild: "false",
          },
        ]
      },
      {
        uid: "ux-industry-id",
        header: "UX Industry",
        group: [
          {
            uid: "uxi-hate-unicorns-id",
            label: "We Really Hate Unicorns",
            path: "/insights/we-really-hate-unicorns",
            hasChild: "false",
          },
          {
            uid: "uxi-hate-unicorns-id",
            label: "We Really Hate Unicorns",
            path: "/insights/we-really-hate-unicorns",
            hasChild: "false",
          },
          
        ]
      },
      {
        uid: "technology-id",
        header: "Technology",
        group: [
          {
            uid: "t-protokit-id",
            label: "The Marking of ProtoKit",
            path: "/insights/the-making-of-protokit",
            hasChild: "false",
          },
          {
            uid: "t-tech-article-id",
            label: "Technology Article",
            path: "/insights/technology-article",
            hasChild: "false",
          },
          
        ]
      },
      {
        uid: "personal-id",
        header: "Personality",
        group: [
          {
            uid: "p-flavor-id",
            label: "What Gives Us Flavor",
            path: "/insights/what-gives-us-flavor",
            hasChild: "false",
          },
          {
            uid: "p-wifi-testing-id",
            label: "Caught up in WiFi",
            path: "/insights/caught-up-in-wifi",
            hasChild: "false",
          },
        ]
      }
    ]
  },
  {
    uid: "contact-id",
    label: "Contact",
    path: "/contact",
    hasChild: "false",
    columnClass: ""
  },

];

export const navigationService = {

  getNavigation( callback ){
    setTimeout( () => callback( apiData ) ,50);
  }
  
};