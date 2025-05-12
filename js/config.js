/**
 * 简历渲染器配置文件
 * 修改此文件来自定义简历的外观和行为
 */

const resumeConfig = {
  // 基本信息
  site: {
    title: "ANGJustinl | Resume",              // 页面标题
    description: "ANGJustinl's Resume",        // 页面描述
    mainWebsite: "https://angforever.top",     // 主站链接
    websiteLinkText: "Visit My Website",       // 右上角网站链接文字
    markdownFile: "resume.md",                 // Markdown简历文件路径
    favicon: "",                               // 网站图标 (留空将使用默认值)
  },
  
  // 主题和样式
  theme: {
    colors: {
      primary: "#121314",                      // 主色调
      accent: "rgba(255, 225, 11, 0.82)",      // 强调色
      accentLight: "rgba(255, 225, 11, 0.2)",  // 强调色（淡色版）
      background: "#ffffff",                   // 背景色
      text: "#121314",                         // 文本色
      secondaryText: "#555",                   // 次要文本色
      borderColor: "#eaeaea",                  // 边框色
      shadowColor: "rgba(0, 0, 0, 0.05)"       // 阴影色
    },
    fonts: {
      main: `"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
      googleFonts: "https://fonts.googleapis.com/css?family=Rubik:300,400,500,700"
    }
  },
  
  // 特殊部分配置
  sections: {
    // 配置特定标题的部分如何渲染
    specialSections: {
      "Professional Skills": {
        type: "skills",                        // 特殊渲染类型
        skillTagsTitle: "Programming Languages/Tech Stack", // 哪个标题下显示技能标签
        container: "skills-container",         // 容器CSS类名
        itemClass: "skill-group",              // 单项CSS类名
        useSkillIcons: true,                   // 使用skillicons.dev图标
        skillIconsConfig: {
          theme: "light",                      // 图标主题: light 或 dark
          perline: 15,                         // 每行显示的图标数量
          // 技能ID与图标ID的映射，可以将您的技能名称映射到skillicons支持的图标ID
          skillMap: {
            "Python": "python",
            "C/C++": "c", 
            "Lua": "lua",
            "Golang": "go",
            "HTML5": "html",
            "Git": "git",
            "Linux": "linux",
            "GitHub": "github",
            "VSCode": "vscode"
          }
        }
      },
      "Awards & Honors": {
        type: "awards",                        // 特殊渲染类型
        container: "awards-container",         // 容器CSS类名
        itemClass: "award-item"                // 单项CSS类名
      }
    },
    // 基于部分标题配置项目类名
    itemClassBySection: {
      "Education": "education-item",
      "Research Achievements": "research-item",
      "default": "experience-item" // 默认类名
    }
  },
  
  // 标记解析配置
  markdownParsing: {
    // 自定义Markdown标记
    markers: {
      period: {
        start: "<!-- period -->",
        end: "<!-- /period -->",
        outputClass: "period"
      },
      skillTags: {
        start: "<!-- format: tags -->",
        end: "<!-- /format -->",
        outputClass: "skill-tags"
      },
      sectionType: {
        start: "<!-- section-type: ",
        end: " -->",
        closeTag: "<!-- /section-type -->"
      },
      award: {
        start: "<!-- award -->",
        end: "<!-- /award -->",
        dateStart: "<!-- date -->",
        dateEnd: "<!-- /date -->"
      }
    }
  },
  
  // 页脚配置
  footer: {
    logo: "ANG",
    links: [
      { text: "GitHub", url: "https://github.com/angjustinl", target: "_blank" },
      { text: "Email", url: "mailto:angjustinl@gmail.com" }
    ],
    copyright: {
      year: "2025",
      name: "ANGForever",
      url: "https://angforever.top/",
      text: "All rights reserved"
    },
    tagline: "Made with ♥ and HTML5",
    icp: {
      text: "陕ICP备2023000688号-1",
      url: "https://beian.miit.gov.cn/"
    }
  },
  
  // 功能配置
  features: {
    backToTop: true,                           // 显示"回到顶部"按钮
    animations: true,                          // 启用动画效果
    backgroundDecoration: true                 // 显示背景装饰元素
  },
  
  // 分析工具配置
  analytics: {
    googleTagId: "G-Z4Q5QG7EMP",              // Google Analytics ID
    umamiWebsiteId: "fb535f37-ebb5-44bf-bde2-022b0ec5c82c" // Umami Analytics ID
  }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = resumeConfig;  // Node.js环境
} else {
  // 浏览器环境 - 挂载到全局
  window.resumeConfig = resumeConfig;
}
