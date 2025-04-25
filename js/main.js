document.addEventListener("DOMContentLoaded", () => {
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
  })
  