/**
 * Resume Renderer Configuration File - Test Version
 * Modify this file to customize the appearance and behavior of your resume.
 */

const resumeConfig = {
  // Basic Information
  site: {
    title: "Test User's Awesome Resume",        // Page Title
    description: "A test configuration for the resume.", // Page Description
    mainWebsite: "https://example.com",          // Main Website Link
    websiteLinkText: "Visit Example.com",        // Top-right Website Link Text
    markdownFile: "resume.md",              // Markdown resume file path (TEST VALUE)
    favicon: "favicon-test.ico",                 // Website icon (TEST VALUE)
  },
  
  // Theme and Styles
  theme: {
    colors: {
      primary: "#3498db",                      // Primary color (Test: Blue)
      accent: "rgba(231, 76, 60, 0.82)",       // Accent color (Test: Red)
      accentLight: "rgba(231, 76, 60, 0.2)",   // Accent color (light version)
      background: "#f0f0f0",                   // Background color (Test: Light Gray)
      text: "#333333",                         // Text color (Test: Dark Gray)
      secondaryText: "#7f8c8d",                // Secondary text color
      borderColor: "#bdc3c7",                  // Border color
      shadowColor: "rgba(0, 0, 0, 0.1)"        // Shadow color
    },
    fonts: {
      main: `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
      googleFonts: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" // Test: Open Sans
    }
  },
  
  // Special Section Configuration
  sections: {
    specialSections: {
      "Key Skills": { // Renamed from "Professional Skills" for testing
        type: "skills",
        skillTagsTitle: "Core Competencies", // Renamed for testing
        container: "skills-container-test",
        itemClass: "skill-group-test",
        useSkillIcons: true,
        skillIconsConfig: {
          theme: "dark", // Test: Dark theme for icons
          perline: 10,
          skillMap: {
            "JavaScript": "js",
            "React": "react",
            "Node.js": "nodejs",
            "Docker": "docker"
          }
        }
      },
      "Achievements": { // Renamed from "Awards & Honors" for testing
        type: "awards",
        container: "awards-container-test",
        itemClass: "award-item-test"
      }
    },
    itemClassBySection: {
      "Education History": "education-item-test", // Renamed for testing
      "Research Work": "research-item-test",   // Renamed for testing
      "default": "experience-item-test"
    }
  },
  
  // Markdown Parsing Configuration
  markdownParsing: {
    markers: {
      period: {
        start: "<!-- date-range -->", // Test: Changed marker
        end: "<!-- /date-range -->",
        outputClass: "date-period"     // Test: Changed class
      },
      skillTags: {
        start: "<!-- tech-stack -->", // Test: Changed marker
        end: "<!-- /tech-stack -->",
        outputClass: "tech-tags"
      },
      sectionType: {
        start: "<!-- section: ",
        end: " -->",
        closeTag: "<!-- /section -->"
      },
      award: {
        start: "<!-- honor -->", // Test: Changed marker
        end: "<!-- /honor -->",
        dateStart: "<!-- awarded-on -->", // Test: Changed marker
        dateEnd: "<!-- /awarded-on -->"
      }
    }
  },
  
  // Footer Configuration
  footer: {
    logo: "TEST", // Test: Changed logo text
    links: [
      { text: "TestLink1", url: "#test1", target: "_self" },
      { text: "TestLink2", url: "#test2" }
    ],
    copyright: {
      year: "2077",                         // Test: Changed year
      name: "Test Company Inc.",             // Test: Changed name
      url: "https://example.org/",
      text: "All tests reserved"
    },
    tagline: "Testing in Progress...", // Test: Changed tagline
    icp: {
      text: "TestICP备00000000号-0",
      url: "https://beian.miit.gov.cn/"
    }
  },
  
  // Feature Configuration
  features: {
    backToTop: false,                          // Test: Disabled
    animations: false,                         // Test: Disabled
    backgroundDecoration: false                // Test: Disabled
  },
  
  // Analytics Configuration
  analytics: {
    googleTagId: "G-TESTTEST",
    umamiWebsiteId: "test-umami-id"
  }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
  module.exports = resumeConfig;  // Node.js environment
} else {
  // Browser environment - attach to window
  window.resumeConfig = resumeConfig;
}
