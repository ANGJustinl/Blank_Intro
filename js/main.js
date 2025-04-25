document.addEventListener("DOMContentLoaded", () => {
    // Fade in elements on page load
    const mainElement = document.querySelector("main")
    mainElement.style.opacity = 0
  
    setTimeout(() => {
      mainElement.style.transition = "opacity 0.8s ease"
      mainElement.style.opacity = 1
    }, 200)
  
    // 添加滚动动画
    const sections = document.querySelectorAll(".resume-section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
  
            // 如果有技能进度条，激活动画
            const progressBars = entry.target.querySelectorAll(".skill-progress-bar")
            progressBars.forEach((bar) => {
              setTimeout(() => {
                bar.style.width = bar.getAttribute("data-width") + "%"
              }, 300)
            })
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
  
    sections.forEach((section) => {
      observer.observe(section)
    })
  
    // 回到顶部按钮
    const backToTop = document.getElementById("backToTop")
    if (backToTop) {
      // 默认隐藏
      backToTop.style.opacity = "0"
  
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTop.style.opacity = "1"
        } else {
          backToTop.style.opacity = "0"
        }
      })
  
      backToTop.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
  
    // 为所有奖项添加随机延迟动画效果
    document.querySelectorAll(".award-item").forEach((item, index) => {
      item.style.animationDelay = index * 0.2 + "s"
    })
  
    // 添加卡片光效跟随鼠标移动
    const cards = document.querySelectorAll(
      ".education-item, .experience-item, .research-item, .skill-group, .award-item",
    )
  
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
  
        card.style.setProperty("--x", `${x}px`)
        card.style.setProperty("--y", `${y}px`)
      })
    })
  
    // 创建滚动进度条
    const scrollProgress = document.createElement("div")
    scrollProgress.className = "scroll-progress"
    document.body.appendChild(scrollProgress)
  
    window.addEventListener("scroll", () => {
      const windowScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (windowScroll / height) * 100
      scrollProgress.style.width = scrolled + "%"
    })
  
    // 创建视差背景点
    createParallaxBackground()
  })
  
  // 创建视差背景
  function createParallaxBackground() {
    const parallaxBg = document.createElement("div")
    parallaxBg.className = "parallax-bg"
    document.querySelector("main").appendChild(parallaxBg)
  
    // 创建30个随机点
    for (let i = 0; i < 30; i++) {
      const dot = document.createElement("div")
      dot.className = "parallax-dot"
  
      // 随机大小和位置
      const size = Math.random() * 20 + 5
      dot.style.width = `${size}px`
      dot.style.height = `${size}px`
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${Math.random() * 100}%`
  
      parallaxBg.appendChild(dot)
    }
  
    // 添加鼠标移动视差效果
    document.addEventListener("mousemove", (e) => {
      const dots = document.querySelectorAll(".parallax-dot")
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight
  
      dots.forEach((dot, index) => {
        const depth = (index + 1) / dots.length
        const moveX = mouseX * depth * 30
        const moveY = mouseY * depth * 30
  
        dot.style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    })
  }
  