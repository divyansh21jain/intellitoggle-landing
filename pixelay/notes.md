# Pixelay Comparison Notes

## Desktop Overlay Misalignment — Figma Extra Right-Side Space

### Issue

When comparing the developed page against the Figma design in Pixelay's desktop overlay mode, there is a visible horizontal misalignment. The Figma design frame appears shifted to the left, with extra whitespace on the right side (see `pixelay-desktop-figma-screen.png`).

This causes all elements in the overlay to appear slightly offset — text, buttons, cards, and sections don't align perfectly even though their sizes and spacing are correct.

### Root Cause

The Figma design frame is set to a **fixed width of 1440px**, which is the standard desktop artboard size. However, Pixelay renders the Figma frame as-is without scaling it to match the browser viewport width. When the browser viewport is wider or narrower than exactly 1440px, the Figma overlay does not stretch or shrink to match, resulting in:

- **Extra whitespace on the right** of the Figma overlay when the viewport is close to but not exactly 1440px
- **Horizontal offset** between the Figma elements and the developed page elements

The developed page uses fluid full-width layout (`w-full`) with responsive padding (`px-5` / `px-10` / `px-[100px]`), so it fills the entire viewport. The Figma frame does not adapt — it remains a static 1440px-wide image.

### Why This Is Not a Code Issue

- The developed page's layout, spacing, typography, and element sizing all match the Figma spec values (verified at 1440px viewport width)
- The misalignment is purely a **Pixelay rendering artifact** caused by the fixed-width Figma frame vs. the fluid-width browser viewport
- At exactly 1440px browser width, the overlay alignment is much closer

### Recommendation

- Minor 2–4px variances are expected even at 1440px due to sub-pixel rendering differences between Figma and the browser

## Mobile Overlay

The mobile overlay (`pixelay-mobile.png`) shows a clean comparison with layout reflowing predictably to a single-column responsive design.
