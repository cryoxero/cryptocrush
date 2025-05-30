const codebreakerEl = document.getElementById('codebreaker');
const text = "EXPLORE THE DEPTHS OF ENCRYPTION";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
let resolvedCount = 0;

function randomChar() {
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

function updateDisplay() {
  let output = '';
  for(let i = 0; i < text.length; i++) {
    if(i < resolvedCount) {
      output += text.charAt(i);
    } else if(text.charAt(i) === ' ') {
      output += ' ';
    } else {
      output += randomChar();
    }
  }
  codebreakerEl.textContent = output;
}

function resolveNextChar() {
  if(resolvedCount < text.length) {
    if(text.charAt(resolvedCount) === ' ') {
      resolvedCount++;
      resolveNextChar();
    } else {
      resolvedCount++;
    }
  }
}

function animationLoop() {
  updateDisplay();
  if(resolvedCount < text.length) {
    resolveNextChar();
    setTimeout(animationLoop, 45);
  } else {
    codebreakerEl.textContent = text;
  }
}

animationLoop();

// Simple dynamic content loading
const posts = [
  {
    title: "History of Cryptography",
    content: "From Caesar’s cipher to the Enigma machine, the story of cryptography is one of secrets, war, and evolution. Dive deep into how humanity has strived to conceal and reveal information through time."
  },
  {
    title: "Caesar Cipher Explained",
    content: "One of the simplest and most well-known encryption techniques, the Caesar cipher involves shifting letters of the alphabet by a set number. Try decoding a message by reversing this technique!"
  },
  {
    title: "Modern Encryption",
    content: "Explore how today's world secures digital communication using asymmetric encryption, keys, and mathematical transformations that keep our data safe."
  },
  {
    title: "Puzzle Challenge #1",
    content: "Ready for a challenge? Solve the scrambled message using clues from our previous posts. Bonus: it unlocks a hidden page!"
  }
];

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const index = parseInt(link.getAttribute("data-post"));
    const post = posts[index];
    const article = document.getElementById("post-content");
    article.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
  });
});

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}
