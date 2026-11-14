/**
 * GreenLane Pet - Interactive Scripts
 * Handles modal popups, AI assistant chats, mobile navigation, and app simulation.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Navigation Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
      });
    });
  }

  // --- Modals Controller ---
  const videoModal = document.getElementById('videoModal');
  const bookingModal = document.getElementById('bookingModal');
  const aiModal = document.getElementById('aiModal');

  const closeVideoModal = document.getElementById('closeVideoModal');
  const closeBookingModal = document.getElementById('closeBookingModal');
  const closeAiModal = document.getElementById('closeAiModal');

  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Close when clicking outside modal dialog
  [videoModal, bookingModal, aiModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  if (closeVideoModal) closeVideoModal.addEventListener('click', () => closeModal(videoModal));
  if (closeBookingModal) closeBookingModal.addEventListener('click', () => closeModal(bookingModal));
  if (closeAiModal) closeAiModal.addEventListener('click', () => closeModal(aiModal));

  // Escape key closes open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(videoModal);
      closeModal(bookingModal);
      closeModal(aiModal);
    }
  });

  // --- Triggers ---
  const watchVideoBtn = document.getElementById('watchVideoBtn');
  if (watchVideoBtn) {
    watchVideoBtn.addEventListener('click', () => openModal(videoModal));
  }

  const getStartedNavBtn = document.getElementById('getStartedNavBtn');
  const heroGetStartedBtn = document.getElementById('heroGetStartedBtn');
  const mobileCtaBtn = document.getElementById('mobileCtaBtn');
  const loginBtn = document.getElementById('loginBtn');
  const mobileLoginBtn = document.getElementById('mobileLoginBtn');

  [getStartedNavBtn, heroGetStartedBtn, mobileCtaBtn, loginBtn, mobileLoginBtn].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => openModal(bookingModal));
    }
  });

  const exploreFeaturesBtn = document.getElementById('exploreFeaturesBtn');
  if (exploreFeaturesBtn) {
    exploreFeaturesBtn.addEventListener('click', () => {
      document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- Feature Cards Click Handlers ---
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-feature');
      if (type === 'appointments') {
        openModal(bookingModal);
      } else if (type === 'ai') {
        openModal(aiModal);
      } else if (type === 'records') {
        openModal(bookingModal);
        const title = bookingModal.querySelector('h3');
        if (title) title.textContent = "Access Health Records";
      } else if (type === 'services') {
        openModal(bookingModal);
        const serviceSelect = document.getElementById('serviceType');
        if (serviceSelect) serviceSelect.value = 'grooming';
      }
    });
  });

  // --- Booking Form Submit Simulation ---
  const appointmentForm = document.getElementById('appointmentForm');
  const bookingSuccessMessage = document.getElementById('bookingSuccessMessage');
  const confirmBookingBtn = document.getElementById('confirmBookingBtn');

  if (appointmentForm && confirmBookingBtn) {
    confirmBookingBtn.addEventListener('click', () => {
      const petName = document.getElementById('petName').value.trim() || 'Barkley';
      appointmentForm.style.display = 'none';
      if (bookingSuccessMessage) {
        bookingSuccessMessage.classList.add('show');
        const petMsg = bookingSuccessMessage.querySelector('p');
        if (petMsg) {
          petMsg.innerHTML = `Your appointment for <strong>${petName}</strong> is confirmed! A calendar invite has been sent.`;
        }
      }
      setTimeout(() => {
        closeModal(bookingModal);
        setTimeout(() => {
          appointmentForm.style.display = 'flex';
          if (bookingSuccessMessage) bookingSuccessMessage.classList.remove('show');
        }, 500);
      }, 3200);
    });
  }

  // --- AI Chat Assistant Interactive Demo ---
  const aiInput = document.getElementById('aiInput');
  const aiSendBtn = document.getElementById('aiSendBtn');
  const aiMessages = document.getElementById('aiMessages');

  const knowledgeBase = [
    {
      keywords: ['peanut', 'butter'],
      reply: "Most plain peanut butter without xylitol (birch bark sweetener) is completely safe and healthy in moderation! Avoid any brands with artificial sweeteners."
    },
    {
      keywords: ['grass', 'vomit', 'eating'],
      reply: "Dogs frequently eat grass to improve digestion, fulfill fiber needs, or relieve mild stomach upset. If Barkley isn't lethargic or vomiting repeatedly, it is usually harmless."
    },
    {
      keywords: ['appointment', 'vet', 'checkup', 'schedule'],
      reply: "You can book an appointment directly through GreenLane Pet! Annual wellness checks and vaccine boosters are recommended once every 12 months."
    },
    {
      keywords: ['chocolate', 'poison', 'toxic'],
      reply: "⚠️ Chocolate contains theobromine and caffeine which are toxic to dogs. If Barkley ingested chocolate, please consult an emergency vet immediately with the weight and chocolate type!"
    },
    {
      keywords: ['barkley', 'golden', 'retriever'],
      reply: "Barkley is up to date on his DHPP vaccines! He's due for his annual heartworm preventative check in 14 days."
    }
  ];

  function sendAiMessage() {
    if (!aiInput || !aiMessages) return;
    const text = aiInput.value.trim();
    if (!text) return;

    // Append user message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-bubble user-bubble';
    userMsg.textContent = text;
    aiMessages.appendChild(userMsg);
    aiInput.value = '';
    aiMessages.scrollTop = aiMessages.scrollHeight;

    // Formulate AI response
    setTimeout(() => {
      let matched = knowledgeBase.find(item => 
        item.keywords.some(k => text.toLowerCase().includes(k))
      );

      const replyText = matched 
        ? matched.reply 
        : `Thanks for asking about Barkley! For "${text}", our licensed veterinary advisory panel suggests monitoring his activity levels and hydration, or you can schedule a telemedicine visit.`;

      const aiReply = document.createElement('div');
      aiReply.className = 'chat-bubble ai-bubble';
      aiReply.textContent = replyText;
      aiMessages.appendChild(aiReply);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }, 600);
  }

  if (aiSendBtn) aiSendBtn.addEventListener('click', sendAiMessage);
  if (aiInput) {
    aiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendAiMessage();
    });
  }

  // --- Interactive Phone Tiles ---
  const phoneTiles = document.querySelectorAll('.app-tile');
  phoneTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const label = tile.querySelector('.app-tile-label').textContent;
      if (label.includes('Appointment')) {
        openModal(bookingModal);
      } else if (label.includes('AI')) {
        openModal(aiModal);
      } else {
        openModal(bookingModal);
      }
    });
  });

  // --- Video Play Button Animation ---
  const playToggleBtn = document.getElementById('playToggleBtn');
  if (playToggleBtn) {
    playToggleBtn.addEventListener('click', () => {
      playToggleBtn.style.transform = 'scale(0.9)';
      setTimeout(() => {
        playToggleBtn.style.transform = 'scale(1.1)';
        alert('GreenLane Pet video preview playing: "Transforming Modern Veterinary & Pet Care"');
      }, 150);
    });
  }

});

