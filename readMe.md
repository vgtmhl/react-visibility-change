# Detect visibility changes in React
## The IntersectionObserver API allows us to track the visibility of HTML elements

The IntersectionObserver API allows us to detect when an element we are watching is visible on the screen to the user. This may be an oversimplified (even incorrect) definition of how it works, which is technically done by watching when the target element intersects with an ancestor (or the viewport itself), but the reality is that it is easiest understood by thinking in terms of whether or not a specific HTML element is visible to the user.

This is particularly helpful in some cases (lazy loading content, infinite scrolling...). 
The reason why I am tackling this is because I have a component that does infinite polling every N seconds, and I don't want it to do it when it's not visible.

The Intersection Observer API lets code register a callback function that is executed whenever an element they wish to monitor enters or exits another element (or the viewport), or when the amount by which the two intersect changes by a requested amount. This way, sites no longer need to do anything on the main thread to watch for this kind of element intersection, and the browser is free to optimize the management of intersections as it sees fit.

## In short

The Intersection Observer API allows you to configure a callback that is called when a target element intersects the viewport.

In this example, I have a function running once every second and logging to console.
This is only done while the Example component is in sight.

### Reference:
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- https://www.telerik.com/blogs/observing-visibility-in-react
- https://www.youtube.com/watch?v=wkztoWlwTXU