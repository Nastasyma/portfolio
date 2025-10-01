# portfolio

## [Deploy](https://nastasyma-portfolio-rsschool.netlify.app/)

## Task Description

Portfolio is the RSSchool stage#1 task, during which you'll create a responsive landing page and add interactivity.  
### [Design in Figma](https://www.figma.com/design/iFsApEUsf6tPwXas56gOiT/Portfolio)  

## Key skills

- Valid semantic responsive web design;
- Easy-to-maintain readable code;
- Exporting styles and graphics from Figma;
- Using JavaScript to implement the functionality specified in the task.

## Task

1. Implementation of the **burger menu**:
   - At 768px and below, the navigation panel hides, and a burger icon appears
   - The burger icon is created using HTML and CSS without the use of images/svg
   - When clicking the burger icon, the burger menu slides out from the right, and the burger icon smoothly transforms into a cross
   - The burger menu occupies the entire available screen area below the `<header>` block
   - The placement and sizes of elements in the burger menu correspond to the layout (horizontal and vertical centering of menu items)
   - When clicking the cross, the burger menu smoothly hides, moving to the right of the screen, and the cross smoothly transforms into a burger icon
   - When clicking on any link in the menu, the burger menu smoothly hides to the right, and the cross smoothly transforms into a burger icon
   - Links scroll smoothly to their anchor points
   - The page behind the open menu does not scroll. After closing the menu, scrolling works again
   - Above 768px, both the burger icon and menu are hidden, and the standard navigation panel is shown
2. Implementation of the **Slider**:

- By default, the slider track must be horizontally centered on the page
- On desktop, slider scrolling is activated by hovering the cursor over the left or right area
- On desktop, the active area for scrolling the slider is ~30% of the screen width on each side
- On desktop, the remaining area in the center is inactive
- On mobile, the slider is scrolled by swiping with a finger
- The slider's end positions are aligned with the page content on either side. Scrolling is locked beyond these points

3. Implementation of the **accordions** in the `FAQ` section:

- By default, the first accordion is open
- You can open or close the accordion by clicking anywhere on its header
- Only one accordion can be open at a time (opening a new one closes the previous)
- Accordion state persists after page reload

4. Implementation of the **modals**:

- A modal opens when you click any "BOOK NOW" button in the cards within the `Packages & Pricing` section
- The part of the page outside the Modal is darkened
- When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again
- Clicking both outside the modal and on the close button closes it
- The Modal is centered on both axes, sizes of modal elements and their layout match the design

5. Implementation of the **scroll down** button:

- When the button is clicked, the page scrolls to `About` section
