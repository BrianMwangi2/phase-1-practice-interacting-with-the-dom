/*document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let count = 0;
    let timerInterval;
    const counterElement = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentList = document.getElementById('list');
    const commentForm = document.getElementById('comment-form');
  
    // Function to update the counter display
    function updateCounter() {
      counterElement.textContent = count;
    }
  
    // Increment counter
    function incrementCounter() {
      count++;
      updateCounter();
    }
  
    // Decrement counter
    function decrementCounter() {
      count--;
      updateCounter();
    }
  
    // Handle click on plus button
    plusButton.addEventListener('click', () => {
      incrementCounter();
    });
  
    // Handle click on minus button
    minusButton.addEventListener('click', () => {
      decrementCounter();
    });
  
    // Handle click on heart button (like)
    heartButton.addEventListener('click', () => {
      const existingLike = document.querySelector(`.likes li[data-count="${count}"]`);
      if (existingLike) {
        existingLike.dataset.likes++;
        existingLike.textContent = `${count} has been liked ${existingLike.dataset.likes} times`;
      } else {
        const newLike = document.createElement('li');
        newLike.dataset.count = count;
        newLike.dataset.likes = 1;
        newLike.textContent = `${count} has been liked 1 time`;
        likesList.appendChild(newLike);
      }
    });
  
    // Handle click on pause button
    pauseButton.addEventListener('click', () => {
      if (pauseButton.textContent === 'pause') {
        clearInterval(timerInterval);
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'resume';
      } else {
        timerInterval = setInterval(incrementCounter, 1000);
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = 'pause';
      }
    });
  
    // Handle comment submission
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        const commentItem = document.createElement('div');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  
    // Start the counter
    timerInterval = setInterval(incrementCounter, 1000);
  });
  */
  document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let timerInterval;
    const counterElement = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentList = document.getElementById('list');
    const commentForm = document.getElementById('comment-form');
  
    // Function to update the counter display
    function updateCounter() {
      counterElement.textContent = count;
    }
  
    // Increment counter
    function incrementCounter() {
      count++;
      updateCounter();
    }
  
    // Decrement counter
    function decrementCounter() {
      count--;
      updateCounter();
    }
  
    // Handle click on plus button
    plusButton.addEventListener('click', () => {
      if (!timerInterval) {
        timerInterval = setInterval(incrementCounter, 1000);
      }
      incrementCounter();
    });
  
    // Handle click on minus button
    minusButton.addEventListener('click', () => {
      if (!timerInterval) {
        timerInterval = setInterval(decrementCounter, 1000);
      }
      decrementCounter();
    });
  
    // Handle click on heart button (like)
    heartButton.addEventListener('click', () => {
      const existingLike = document.querySelector(`.likes li[data-count="${count}"]`);
      if (existingLike) {
        const likeCount = parseInt(existingLike.dataset.likes) + 1;
        existingLike.dataset.likes = likeCount;
        existingLike.textContent = `${count} has been liked ${likeCount} times`;
      } else {
        const newLike = document.createElement('li');
        newLike.dataset.count = count;
        newLike.dataset.likes = 1;
        newLike.textContent = `${count} has been liked 1 time`;
        likesList.appendChild(newLike);
      }
    });
  
    // Handle click on pause button
    pauseButton.addEventListener('click', () => {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        pauseButton.textContent = 'Resume';
      } else {
        if (count > 0) {
          timerInterval = setInterval(incrementCounter, 1000);
        } else {
          timerInterval = setInterval(decrementCounter, 1000);
        }
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        pauseButton.textContent = 'Pause';
      }
    });
  
    // Handle comment submission
    commentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const commentText = commentInput.value.trim();
      if (commentText !== '') {
        const commentItem = document.createElement('div');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  
    // Initialize the counter
    updateCounter();
  });
//   const likesList = document.getElementById('likes-list');
//   const likeButton = document.getElementById('like-button');

//   likeButton.addEventListener('click', () => {
//     const newLike = document.createElement('li');
//     newLike.textContent = 'You liked this.'; 