const galleryElements = document.querySelectorAll('.gallery');

galleryElements.forEach((gallery) => {
  const current = gallery.querySelector('.gallery__current');
  const galleryImages = gallery.querySelectorAll('.gallery__image');

  galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
      // Clone the image picture and replace the current with the cloned node
      const slidePic = image.querySelector('picture');
      const updatedSlide = slidePic.cloneNode(true);

      const currentSlide = current.querySelector('picture');
      currentSlide.remove();
      current.appendChild(updatedSlide);
    });
  });
});
