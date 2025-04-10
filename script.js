// Ensure blog posts are visible on page load and animate them when they come into view
const blogPosts = document.querySelectorAll('.blog-post');

window.addEventListener('load', () => {
  // Ensure that the content is visible when the page loads
  blogPosts.forEach(post => {
    post.classList.add('in-view');
  });
});

// Optional: To animate content as it scrolls into view
const observerOptions = {
  root: null,
  threshold: 0.5
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

blogPosts.forEach(post => {
  observer.observe(post);
});
