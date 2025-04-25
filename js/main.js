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
  })
  