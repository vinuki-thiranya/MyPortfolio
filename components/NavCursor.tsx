// components/NavCursor.tsx
"use client"

import { useEffect } from "react"
import "./nav-cursor.css"

export default function NavCursor() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement | null
    if (!cursor) return

    // helper maps so we can cleanup properly
    const hoverHandlers = new Map<Element, { onEnter: EventListener; onLeave: EventListener }>()
    const motionHandlers = new Map<HTMLElement, { onMove: EventListener; onLeave: EventListener }>()

    // Move cursor with mouse
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    // Add hover listeners (enlarge cursor) to any element
    function addHover(el: Element) {
      if (hoverHandlers.has(el)) return
      const onEnter = () => {
        cursor.classList.add("cursor-hover")
        console.log("Cursor hover added to:", el.tagName, el.className)
      }
      const onLeave = () => {
        cursor.classList.remove("cursor-hover")
        console.log("Cursor hover removed from:", el.tagName, el.className)
      }
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
      hoverHandlers.set(el, { onEnter, onLeave })
    }

    function removeHover(el: Element) {
      const h = hoverHandlers.get(el)
      if (!h) return
      el.removeEventListener("mouseenter", h.onEnter)
      el.removeEventListener("mouseleave", h.onLeave)
      hoverHandlers.delete(el)
    }

    // Add motion behavior for elements that should "tilt" / move with the cursor
    function addMotionHeading(el: HTMLElement) {
      if (motionHandlers.has(el)) return

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const width = rect.width || 1
        const height = rect.height || 1
        const move = 25
        const xMove = (x / width) * (move * 2) - move
        const yMove = (y / height) * (move * 2) - move
        el.style.transform = `translate(${xMove}px, ${yMove}px)`
      }

      const onLeave = () => {
        el.style.transform = ""
      }

      el.addEventListener("mousemove", onMove)
      el.addEventListener("mouseleave", onLeave)
      motionHandlers.set(el, { onMove, onLeave })

      // Also ensure the element enlarges the cursor when hovered
      addHover(el)
    }

    function removeMotionHeading(el: HTMLElement) {
      const m = motionHandlers.get(el)
      if (!m) return
      el.removeEventListener("mousemove", m.onMove)
      el.removeEventListener("mouseleave", m.onLeave)
      motionHandlers.delete(el)
    }

    // Initial attach for elements already in DOM with retry mechanism
    const attachInitial = () => {
      // Use valid CSS selectors only
      const basicSelectors = [
        "a",
        "button",
        "h1",
        ".motion-heading",
        ".cursor-target",
        ".hero-heading",
        ".hero-button",
        "[data-cursor-target]",
        "[data-motion-h1]",
      ]

      // Apply each selector separately to avoid invalid selector errors
      basicSelectors.forEach((selector) => {
        try {
          const elements = document.querySelectorAll(selector)
          console.log(`Found ${elements.length} elements for selector "${selector}":`, elements)
          elements.forEach(addHover)
        } catch (error) {
          console.warn(`Invalid selector: ${selector}`, error)
        }
      })

      // Motion movement for elements with .motion-heading class
      try {
        const motionElements = document.querySelectorAll(".motion-heading")
        console.log("Found motion elements:", motionElements.length, motionElements)
        motionElements.forEach((el) => addMotionHeading(el as HTMLElement))
      } catch (error) {
        console.warn("Error finding motion elements:", error)
      }

      // Find elements by text content (manual search since :contains() is not valid CSS)
      const allH1s = document.querySelectorAll("h1")
      allH1s.forEach((h1) => {
        const text = h1.textContent?.toLowerCase() || ""
        if (text.includes("my name is") || text.includes("vinuki") || text.includes("thiranya")) {
          console.log("Found hero heading by text:", h1, text)
          addHover(h1)
          if (h1.classList.contains("motion-heading")) {
            addMotionHeading(h1 as HTMLElement)
          }
        }
      })

      // Find buttons by text content
      const allLinks = document.querySelectorAll("a")
      allLinks.forEach((link) => {
        const text = link.textContent?.toLowerCase() || ""
        if (text.includes("download cv") || text.includes("view github")) {
          console.log("Found hero button by text:", link, text)
          addHover(link)
        }
      })

      // Also check for Framer Motion elements with transform styles
      const allDivs = document.querySelectorAll("div")
      allDivs.forEach((div) => {
        const style = div.getAttribute("style") || ""
        const hasTransform = style.includes("transform")
        const hasMotionClass = div.classList.contains("motion-heading") || div.classList.contains("cursor-target")

        if (hasTransform && hasMotionClass) {
          console.log("Found Framer Motion element with transform:", div)
          addHover(div)
        }
      })
    }

    // Retry attachment with delays to handle async rendering
    const retryAttachment = () => {
      attachInitial()
      setTimeout(attachInitial, 100)
      setTimeout(attachInitial, 500)
      setTimeout(attachInitial, 1000)
      setTimeout(attachInitial, 2000)
    }

    retryAttachment()

    // Observe DOM mutations
    const observer = new MutationObserver((mutations) => {
      let shouldReattach = false

      for (const m of mutations) {
        // handle added nodes
        for (const node of Array.from(m.addedNodes)) {
          if (node.nodeType !== 1) continue
          const el = node as Element

          // Check if this is a hero element by text content
          const text = el.textContent?.toLowerCase() || ""
          if (
            text.includes("my name is") ||
            text.includes("vinuki") ||
            text.includes("download cv") ||
            text.includes("view github")
          ) {
            shouldReattach = true
            console.log("Hero element added to DOM:", el)
          }

          // Check for specific classes and attributes
          const selectors = [
            "a",
            "button",
            "h1",
            ".motion-heading",
            ".cursor-target",
            ".hero-heading",
            ".hero-button",
            "[data-cursor-target]",
          ]

          for (const selector of selectors) {
            try {
              if (el.matches && el.matches(selector)) {
                addHover(el)
                console.log("Added hover to new element:", el, selector)

                if (el.matches(".motion-heading")) {
                  addMotionHeading(el as HTMLElement)
                }
              }

              // also query inside subtree
              const nestedElements = el.querySelectorAll(selector)
              nestedElements.forEach((nested) => {
                addHover(nested)
                console.log("Added hover to nested element:", nested, selector)

                if (nested.matches(".motion-heading")) {
                  addMotionHeading(nested as HTMLElement)
                }
              })
            } catch (error) {
              console.warn(`Error with selector ${selector}:`, error)
            }
          }
        }

        // handle removed nodes
        for (const node of Array.from(m.removedNodes)) {
          if (node.nodeType !== 1) continue
          const el = node as Element
          if (hoverHandlers.has(el)) removeHover(el)
          if (motionHandlers.has(el as HTMLElement)) removeMotionHeading(el as HTMLElement)

          // Clean up nested elements
          const selectors = ["a", "button", "h1", ".motion-heading", ".cursor-target", ".hero-heading", ".hero-button"]
          selectors.forEach((selector) => {
            try {
              el.querySelectorAll(selector).forEach((n) => {
                removeHover(n)
                if (motionHandlers.has(n as HTMLElement)) {
                  removeMotionHeading(n as HTMLElement)
                }
              })
            } catch (error) {
              console.warn(`Error cleaning up selector ${selector}:`, error)
            }
          })
        }
      }

      if (shouldReattach) {
        setTimeout(attachInitial, 100)
      }
    })

    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener("mousemove", moveCursor)

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      observer.disconnect()

      hoverHandlers.forEach((h, el) => {
        el.removeEventListener("mouseenter", h.onEnter)
        el.removeEventListener("mouseleave", h.onLeave)
      })
      motionHandlers.forEach((m, el) => {
        el.removeEventListener("mousemove", m.onMove)
        el.removeEventListener("mouseleave", m.onLeave)
      })
      hoverHandlers.clear()
      motionHandlers.clear()
    }
  }, [])

  return <div className="cursor" />
}
