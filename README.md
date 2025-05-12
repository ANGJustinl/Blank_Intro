# Blank_Intro

A simple yet powerful Markdown resume renderer that converts Markdown resumes into beautiful HTML pages.

## Features

- 💼 Markdown rendering engine designed specifically for resumes
- 🎨 Fully customizable themes and styles
- 📱 Responsive design for all devices
- 🔧 Easy customization via config file
- ✨ Special formatting for skills, time periods, and awards
- 🖼️ SkillIcons integration for visual skill representation

## Getting Started

1. Edit `resume.md` with your resume content
2. Customize `js/config.js` as needed
3. View `index.html` through a web server

## File Structure

```
Blank_Intro/
├── css/
│   └── style.css            # Main stylesheet
├── js/
│   ├── config.js            # Configuration file
│   └── main.js              # Main script
├── index.html               # Main HTML file
├── resume.md                # Resume content (Markdown format)
└── README.md                # Project documentation
```
<details>
<summary>Markdown Guide</summary>

### Basic Format

The basic structure of the resume:

```markdown
# Title

Introduction...

## Professional Information

### Section 1 Title

#### Project Title
<!-- period -->Time Period<!-- /period -->
- Item 1
- Item 2
```

### Supported Special Markers

#### Time Period

```markdown
<!-- period -->2020 – 2024<!-- /period -->
```

#### Skill Tags 

Insert SkillIcons image links directly in Markdown:

```markdown
![Programming Languages & Skills](https://skillicons.dev/icons?perline=15&i=python,lua,github,vscode,html,c,go,git&theme=light)
```

#### Awards

```markdown
<!-- award -->
🏆 
#### Award Name
Award Description
<!-- date -->Award Date<!-- /date -->
<!-- /award -->
```

#### Section Type Marker

```markdown
<!-- section-type: skills -->
...
<!-- /section-type -->
```

## Configuration File

The `js/config.js` file contains rich configuration options:

### Basic Information

```javascript
site: {
  title: "Page Title",
  description: "Page Description",
  mainWebsite: "Main Website Link",
  websiteLinkText: "Top-right Website Link Text",
  markdownFile: "Path to Markdown File",
  favicon: "Path to Favicon"
}
```

### Theme Configuration

```javascript
theme: {
  colors: {
    primary: "#121314",         // Primary color
    accent: "rgba(255, 225, 11, 0.82)",  // Accent color
    accentLight: "rgba(255, 225, 11, 0.2)",  // Light accent color
    // More color configurations...
  },
  fonts: {
    main: "Font Name",
    googleFonts: "Google Fonts URL"
  }
}
```

### Special Section Configuration

```javascript
sections: {
  specialSections: {
    "Section Title": {
      type: "Section Type",
      // Other configurations...
    }
  },
  itemClassBySection: {
    "Section Title": "CSS Class Name"
  }
}
```

### Footer Configuration

```javascript
footer: {
  logo: "Footer Logo",
  links: [
    { text: "Link Text", url: "Link URL", target: "_blank" }
  ],
  copyright: {
    year: "Copyright Year",
    name: "Copyright Owner",
    url: "Owner Link",
    text: "Copyright Text"
  },
  tagline: "Footer Tagline"
}
```

</details>