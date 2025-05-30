const titleEl = document.getElementById('animated-title');
const postContentEl = document.getElementById('post-content');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
let currentText = "";
let resolvedCount = 0;

function randomChar() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function updateTitleDisplay() {
  let output = '';
  for (let i = 0; i < currentText.length; i++) {
	if (i < resolvedCount) {
	  output += currentText.charAt(i);
	} else if (currentText.charAt(i) === ' ') {
	  output += ' ';
	} else {
	  output += randomChar();
	}
  }
  titleEl.textContent = output;
}

function resolveNextChar() {
  if (resolvedCount < currentText.length) {
	if (currentText.charAt(resolvedCount) === ' ') {
	  resolvedCount++;
	  resolveNextChar();
	} else {
	  resolvedCount++;
	}
  }
}

function animateTitle() {
  text = titleEl.textContent;
  currentText = text.toUpperCase();
  resolvedCount = 0;
  function loop() {
	updateTitleDisplay();
	if (resolvedCount < currentText.length) {
	  resolveNextChar();
	  setTimeout(loop, 45);
	} else {
	  titleEl.textContent = currentText;
	}
  }
  loop();
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

// Load with default title
animateTitle()
