/**
 * ============================================================================
 * VEIL & VOGUE — JAVASCRIPT INTERACTIONS
 * Modest Fashion Styling & Interactive Moodboard Studio
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. DATA REPOSITORIES: Outfits & Styling Formulas
  // ==========================================================================
  
  const OUTFIT_FORMULAS = {
    college: {
      title: "The Tailored Campus Minimalist",
      category: "College Wear",
      image: "assets/college-wear.jpg",
      description: "A masterclass in effortless academic layering: an oversized cream structured blazer creates polish without feeling stiff, paired with breathable high-waist khakis and comfortable white leather sneakers for bustling lecture halls.",
      outerwear: "Structured Oversized Cream Tailored Blazer",
      base: "Relaxed Fit High-Waist Khaki Chinos & Soft Cotton Tee",
      veil: "Dusty Rose Breathable Chiffon Drape with Hidden Pinning",
      accessories: "Organic Canvas Tote Bag, Vintage Watch, Clean White Trainers",
      palette: ["Cream (#FAF7F2)", "Dusty Pink (#DCA7A6)", "Khaki (#C2AF94)", "Chocolate (#4A2E26)"],
      stylistTip: "Opt for a lightweight chiffon or cotton hijab so you stay cool while walking across campus. Keep the blazer unbuttoned to allow ease of movement."
    },
    casual: {
      title: "The Parisian Terrace Linen Duster",
      category: "Casual Chic",
      image: "assets/casual-chic.jpg",
      description: "The epitome of relaxed quiet luxury. A full-length fluid ivory linen duster coat lends movement to a soft dusty rose knit and wide-leg trousers, finished with mocha brown leather loafers for weekend brunch.",
      outerwear: "Full-Length Fluid Ivory Linen Trench Duster",
      base: "Dusty Rose Fine-Gauge Knit & Ivory Wide-Leg Flowy Trousers",
      veil: "Soft Mocha Brown Modal Wrap with Cascading Shoulder Drape",
      accessories: "Cognac Leather Loafers, Woven Box Bag, Gold Layered Coin Locket",
      palette: ["Pure Ivory (#FFFDF9)", "Dusty Pink (#DCA7A6)", "Mocha Brown (#6E493F)"],
      stylistTip: "A wide-leg pant paired with an open long duster creates a flattering vertical line while offering 100% modest coverage without added bulk."
    },
    "old-money": {
      title: "The Heritage Cashmere Drape",
      category: "Old Money",
      image: "assets/old-money.jpg",
      description: "Timeless aristocrat aesthetics tailored for modern modest taste. Double-pleated cream trousers paired with an ivory silk button-down and a rich chocolate brown cashmere sweater draped effortlessly over the shoulders.",
      outerwear: "Chocolate Brown Pure Cashmere Knit (Shoulder Drape)",
      base: "Ivory Heavy Mulberry Silk Button-Down & High-Rise Pleated Trousers",
      veil: "Champagne Ivory Silk-Satin Hijab with Classic Tailored Wrap",
      accessories: "Classic Cognac Horsebit Loafers, Pearl Studs, Vintage Leather Briefcase",
      palette: ["Cream (#FAF7F2)", "Rich Chocolate (#321D17)", "Pearl Ivory (#FFFDF9)"],
      stylistTip: "The shoulder-draped sweater is the cornerstone of Old Money styling. It provides an instant layer of warmth if needed while framing the upper silhouette with sophistication."
    },
    ethnic: {
      title: "The Contemporary Organza Fusion",
      category: "Ethnic Fusion",
      image: "assets/ethnic-fusion.jpg",
      description: "Harmonizing rich Eastern embroidery with contemporary Western tailoring. A straight-cut dusty rose long kurta tunic adorned with champagne threadwork over crisp ivory palazzo pants and a sheer golden-bordered organza dupatta.",
      outerwear: "Sheer Ethereal Organza Dupatta / Cape Drape with Gold Scallop Hem",
      base: "Dusty Rose Zari-Embroidered Straight Kurta & Wide Ivory Palazzo Pants",
      veil: "Coordinated Soft Dusty Rose Chiffon Wrap with Subtle Shimmer",
      accessories: "Champagne Metallic Juttis, Hammered Gold Bangles, Pearl Drop Earrings",
      palette: ["Dusty Rose (#DCA7A6)", "Champagne Gold (#C9A96E)", "Crisp Ivory (#FFFDF9)"],
      stylistTip: "Organza brings lightweight luxury without heaviness. Fasten the dupatta at one shoulder with an antique brooch so it stays secure while you move with grace."
    }
  };

  // Dynamic styling generator combinations
  const STYLE_GENERATOR_DATABASE = [
    {
      vibe: "casual-chic",
      occasion: "daily",
      palette: "dusty-rose",
      title: "The Effortless Parisian Duster",
      outerwear: "Fluid Ivory Linen Trench Coat",
      base: "Dusty Rose Fine Knit & Pleated Trousers",
      veil: "Soft Mocha Brown Modal Wrap",
      acc: "Chocolate Loafers & Gold Coin Locket",
      desc: "An ivory fluid linen trench styled gracefully over dusty rose knitwear and high-waist relaxed trousers. Finished with a soft cocoa scarf and loafers.",
      tip: "Keep the silhouette fluid by tucking in your inner layer lightly to define proportions while maintaining full modesty."
    },
    {
      vibe: "old-money",
      occasion: "soiree",
      palette: "chocolate-cream",
      title: "The Royal Cocoa Silk & Cashmere Gala",
      outerwear: "Chocolate Wool Trench with Lapel Collar",
      base: "Ivory Crepe-de-Chine Maxi Gown with High Collar",
      veil: "Tonal Chocolate Brown Mulberry Silk Wrap",
      acc: "Double Pearl Strand, Vintage Gold Minaudière, Velvet Flats",
      desc: "Rich chocolate brown outerwear over an ivory silk column silhouette. Luxurious textures speak louder than bright patterns.",
      tip: "Monochrome tones in contrasting fabrics (silk + wool) create an expensive, curated high-fashion look."
    },
    {
      vibe: "college-wear",
      occasion: "campus",
      palette: "chocolate-cream",
      title: "The Academic Library Layer",
      outerwear: "Cocoa Wool Blend Oversized Blazer",
      base: "Cream Ribbed Knit Turtleneck & Wide-Leg Corduroy",
      veil: "Sand Ivory Breathable Modal Scarf",
      acc: "Structured Brown Leather Backpack & Oxford Brogues",
      desc: "Warm earth tones engineered for comfort during long study hours, maintaining sharp tailoring with cozy warmth.",
      tip: "Corduroy trousers add rich texture and warmth without compromising on a modest wide-leg silhouette."
    },
    {
      vibe: "ethnic-fusion",
      occasion: "brunch",
      palette: "champagne-gold",
      title: "The Champagne Organza Tunic",
      outerwear: "Floor-sweeping Ivory Organza Shrug",
      base: "Dusty Rose Embroidered Angrakha Style Kurti & Silk Cigarette Pants",
      veil: "Draped Rose-Gold Viscose Hijab",
      acc: "Kundan Studs, Embroidered Mules, Rose Quartz Ring",
      desc: "A breezy fusion ensemble blending soft champagne pastels with regal organza draping, ideal for elegant weekend gatherings.",
      tip: "Let the organza shrug float naturally; pair with minimal gold jewelry to let the textile shine."
    },
    {
      vibe: "old-money",
      occasion: "brunch",
      palette: "earthy-taupe",
      title: "The Riviera Equestrian Chic",
      outerwear: "Camel Drape Cape Coat",
      base: "Ivory Pima Cotton Shirt & Tailored Taupe Trousers",
      veil: "Champagne Crepe Scarf with Clean Crown Wrap",
      acc: "Leather Riding Boots, Silk Pocket Square, Tortoiseshell Sunglasses",
      desc: "Quiet luxury tailoring inspired by heritage country clubs. Understated, structured, and supremely elegant.",
      tip: "Tuck a tailored shirt into structured high-waist trousers to create an elongated silhouette effortlessly."
    },
    {
      vibe: "casual-chic",
      occasion: "soiree",
      palette: "chocolate-cream",
      title: "The Midnight Espresso Velvet Set",
      outerwear: "Deep Chocolate Kimono-Style Abaya Coat",
      base: "Ivory Satin Bias-Cut Maxi Skirt & Cashmere Crewneck",
      veil: "Shimmer Cocoa Chiffon Drape",
      acc: "Pointed Suede Kitten Heels & Sculptural Gold Earrings",
      desc: "A showstopping modest evening look utilizing deep chocolate velvet and flowing ivory satin.",
      tip: "A bias-cut maxi skirt creates natural drape and movement without clinging."
    }
  ];

  // ==========================================================================
  // 2. SAVED ITEMS (LocalStorage Moodboard)
  // ==========================================================================
  
  let savedItems = JSON.parse(localStorage.getItem('veil_and_vogue_saved') || '[]');

  const savedBadge = document.getElementById('saved-badge');
  const openSavedBtn = document.getElementById('open-saved-btn');
  const savedDrawer = document.getElementById('saved-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const savedItemsContainer = document.getElementById('saved-items-container');

  function updateSavedBadge() {
    if (savedBadge) {
      savedBadge.textContent = savedItems.length;
      savedBadge.style.display = savedItems.length > 0 ? 'flex' : 'none';
    }
  }

  function renderSavedDrawer() {
    if (!savedItemsContainer) return;
    
    if (savedItems.length === 0) {
      savedItemsContainer.innerHTML = `
        <div class="empty-saved">
          <span class="empty-icon">🤍</span>
          <p>No outfits saved yet.</p>
          <p class="empty-sub">Click the heart icon on any outfit card or save looks from the Style Me studio!</p>
        </div>
      `;
      return;
    }

    savedItemsContainer.innerHTML = savedItems.map((item, index) => `
      <div class="saved-item-card" data-index="${index}">
        <img src="${item.image || 'assets/hero-fashion.jpg'}" alt="${item.title}" class="saved-item-thumb">
        <div class="saved-item-info">
          <h4 class="saved-item-title">${item.title}</h4>
          <span class="saved-item-category">${item.category || 'Curated Formula'}</span>
        </div>
        <button class="saved-remove-btn" data-index="${index}" title="Remove from moodboard">&times;</button>
      </div>
    `).join('');

    // Attach remove handlers
    savedItemsContainer.querySelectorAll('.saved-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
        const removedTitle = savedItems[index]?.title;
        savedItems.splice(index, 1);
        localStorage.setItem('veil_and_vogue_saved', JSON.stringify(savedItems));
        updateSavedBadge();
        renderSavedDrawer();
        updateCardLikeButtons();
        showToast(`Removed "${removedTitle}" from your moodboard.`);
      });
    });
  }

  function toggleSavedDrawer(open) {
    if (open) {
      renderSavedDrawer();
      savedDrawer?.classList.add('active');
      drawerBackdrop?.classList.add('active');
      savedDrawer?.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    } else {
      savedDrawer?.classList.remove('active');
      drawerBackdrop?.classList.remove('active');
      savedDrawer?.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  openSavedBtn?.addEventListener('click', () => toggleSavedDrawer(true));
  drawerCloseBtn?.addEventListener('click', () => toggleSavedDrawer(false));
  drawerBackdrop?.addEventListener('click', () => toggleSavedDrawer(false));

  function updateCardLikeButtons() {
    document.querySelectorAll('.card-like-btn').forEach(btn => {
      const id = btn.getAttribute('data-id');
      const isSaved = savedItems.some(item => item.id === id);
      if (isSaved) {
        btn.classList.add('liked');
      } else {
        btn.classList.remove('liked');
      }
    });
  }

  // ==========================================================================
  // 3. TOAST NOTIFICATIONS
  // ==========================================================================

  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ==========================================================================
  // 4. HEADER NAVIGATION & MOBILE MENU
  // ==========================================================================

  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active Section Highlight on scroll
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile navigation hamburger toggle
  mobileToggle?.addEventListener('click', () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', !isExpanded);
    mobileToggle.classList.toggle('active');
    navMenu?.classList.toggle('active');
  });

  // Close mobile navigation when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle?.classList.remove('active');
      mobileToggle?.setAttribute('aria-expanded', 'false');
      navMenu?.classList.remove('active');
    });
  });

  // Find My Style hero button scroll
  const heroFindStyleBtn = document.getElementById('hero-find-style-btn');
  heroFindStyleBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const styleMeSection = document.getElementById('style-me');
    if (styleMeSection) {
      styleMeSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // ==========================================================================
  // 5. INTERACTIVE "STYLE ME" STUDIO
  // ==========================================================================

  const optionPills = document.querySelectorAll('.option-pill');
  const generateStyleBtn = document.getElementById('generate-style-btn');
  const surpriseMeBtn = document.getElementById('surprise-me-btn');
  const saveResultBtn = document.getElementById('save-result-btn');

  // Result Card Elements
  const resultTitle = document.getElementById('result-title');
  const resultDesc = document.getElementById('result-desc');
  const resultOuterwear = document.getElementById('result-outerwear');
  const resultBase = document.getElementById('result-base');
  const resultVeil = document.getElementById('result-veil');
  const resultAcc = document.getElementById('result-acc');
  const resultTip = document.getElementById('result-tip');

  let currentSelectedLook = STYLE_GENERATOR_DATABASE[0];

  // Option pill selection
  optionPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const group = pill.getAttribute('data-group');
      document.querySelectorAll(`.option-pill[data-group="${group}"]`).forEach(btn => {
        btn.classList.remove('active');
      });
      pill.classList.add('active');
    });
  });

  function getSelectedOptions() {
    const vibe = document.querySelector('.option-pill[data-group="vibe"].active')?.getAttribute('data-value') || 'casual-chic';
    const occasion = document.querySelector('.option-pill[data-group="occasion"].active')?.getAttribute('data-value') || 'daily';
    const palette = document.querySelector('.option-pill[data-group="palette"].active')?.getAttribute('data-value') || 'dusty-rose';
    return { vibe, occasion, palette };
  }

  function generateLook() {
    const selected = getSelectedOptions();

    // Find best match in database or fallback
    const match = STYLE_GENERATOR_DATABASE.find(item => 
      item.vibe === selected.vibe || item.palette === selected.palette
    ) || STYLE_GENERATOR_DATABASE[Math.floor(Math.random() * STYLE_GENERATOR_DATABASE.length)];

    currentSelectedLook = match;

    // Apply smooth content update
    if (resultTitle) resultTitle.textContent = match.title;
    if (resultDesc) resultDesc.textContent = match.desc;
    if (resultOuterwear) resultOuterwear.textContent = match.outerwear;
    if (resultBase) resultBase.textContent = match.base;
    if (resultVeil) resultVeil.textContent = match.veil;
    if (resultAcc) resultAcc.textContent = match.acc;
    if (resultTip) {
      resultTip.innerHTML = `<strong>Stylist Note:</strong> ${match.tip}`;
    }

    // Micro-animation flash
    const resultCard = document.querySelector('.result-card');
    if (resultCard) {
      resultCard.style.animation = 'none';
      resultCard.offsetHeight; // trigger reflow
      resultCard.style.animation = 'toastSlideIn 0.4s ease';
    }

    showToast(`Styling formula refreshed: ${match.title}`);
  }

  generateStyleBtn?.addEventListener('click', generateLook);

  // Surprise me randomizer
  surpriseMeBtn?.addEventListener('click', () => {
    ['vibe', 'occasion', 'palette'].forEach(group => {
      const pills = Array.from(document.querySelectorAll(`.option-pill[data-group="${group}"]`));
      const randomPill = pills[Math.floor(Math.random() * pills.length)];
      pills.forEach(p => p.classList.remove('active'));
      randomPill?.classList.add('active');
    });
    generateLook();
  });

  // Save Look to Moodboard from Style Me Studio
  saveResultBtn?.addEventListener('click', () => {
    const newSaved = {
      id: `style-gen-${Date.now()}`,
      title: currentSelectedLook.title,
      category: "Personalized Studio Formula",
      image: "assets/hero-fashion.jpg"
    };

    if (!savedItems.some(i => i.title === newSaved.title)) {
      savedItems.push(newSaved);
      localStorage.setItem('veil_and_vogue_saved', JSON.stringify(savedItems));
      updateSavedBadge();
      showToast(`Saved "${newSaved.title}" to your Moodboard! 🤎`);
    } else {
      showToast(`"${newSaved.title}" is already in your moodboard!`);
    }
  });

  // ==========================================================================
  // 6. OUTFIT INSPIRATION: Filters & Card Actions
  // ==========================================================================

  const filterBtns = document.querySelectorAll('.filter-btn');
  const outfitCards = document.querySelectorAll('.outfit-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      outfitCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'toastSlideIn 0.35s ease';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Card Like / Heart Buttons
  document.querySelectorAll('.card-like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const card = btn.closest('.outfit-card');
      const title = card?.querySelector('.card-title')?.textContent.trim() || 'Outfit';
      const category = card?.querySelector('.card-category-tag')?.textContent.trim() || 'Modest';
      const image = card?.querySelector('.card-img')?.getAttribute('src') || 'assets/hero-fashion.jpg';

      const existingIndex = savedItems.findIndex(item => item.id === id);

      if (existingIndex > -1) {
        savedItems.splice(existingIndex, 1);
        btn.classList.remove('liked');
        showToast(`Removed "${title}" from moodboard.`);
      } else {
        savedItems.push({ id, title, category, image });
        btn.classList.add('liked');
        showToast(`Saved "${title}" to your Pinterest moodboard! ✨`);
      }

      localStorage.setItem('veil_and_vogue_saved', JSON.stringify(savedItems));
      updateSavedBadge();
    });
  });

  // ==========================================================================
  // 7. OUTFIT FORMULA DETAIL MODAL
  // ==========================================================================

  const modal = document.getElementById('outfit-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBodyContent = document.getElementById('modal-body-content');

  function openOutfitModal(key) {
    const data = OUTFIT_FORMULAS[key];
    if (!data || !modalBodyContent) return;

    modalBodyContent.innerHTML = `
      <span class="modal-header-tag">${data.category} • Style Formula</span>
      <h3 class="modal-outfit-title">${data.title}</h3>
      <p class="modal-formula-desc">${data.description}</p>

      <div class="modal-specs-list">
        <div class="spec-item">
          <span class="spec-key">Outerwear Layer</span>
          <span class="spec-val">${data.outerwear}</span>
        </div>
        <div class="spec-item">
          <span class="spec-key">Base Foundation</span>
          <span class="spec-val">${data.base}</span>
        </div>
        <div class="spec-item">
          <span class="spec-key">Hijab / Scarf Drape</span>
          <span class="spec-val">${data.veil}</span>
        </div>
        <div class="spec-item">
          <span class="spec-key">Accessories & Footwear</span>
          <span class="spec-val">${data.accessories}</span>
        </div>
      </div>

      <div class="modal-swatches-box">
        <h4 class="modal-swatches-title">Color Palette Formula</h4>
        <div class="modal-swatches-row">
          ${data.palette.map(color => `
            <div class="modal-swatch-badge">
              <span>✦</span>
              <span>${color}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="stylist-tip" style="margin-bottom: 24px;">
        <span class="tip-icon">💡</span>
        <span class="tip-text">
          <strong>Stylist Advice:</strong> ${data.stylistTip}
        </span>
      </div>

      <button class="btn btn-primary" id="modal-save-btn" style="width: 100%;">
        <span>Save Formula to Moodboard</span>
      </button>
    `;

    modal?.classList.add('active');
    modal?.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Hook modal save button
    document.getElementById('modal-save-btn')?.addEventListener('click', () => {
      if (!savedItems.some(i => i.id === key)) {
        savedItems.push({
          id: key,
          title: data.title,
          category: data.category,
          image: data.image
        });
        localStorage.setItem('veil_and_vogue_saved', JSON.stringify(savedItems));
        updateSavedBadge();
        updateCardLikeButtons();
        showToast(`Saved "${data.title}" to your moodboard! ✨`);
      } else {
        showToast(`"${data.title}" is already in your moodboard!`);
      }
      closeOutfitModal();
    });
  }

  function closeOutfitModal() {
    modal?.classList.remove('active');
    modal?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      openOutfitModal(modalKey);
    });
  });

  modalCloseBtn?.addEventListener('click', closeOutfitModal);
  
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeOutfitModal();
    }
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeOutfitModal();
      toggleSavedDrawer(false);
    }
  });

  // ==========================================================================
  // 8. NEWSLETTER FORM
  // ==========================================================================

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterMsg = document.getElementById('newsletter-msg');

  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterEmail?.value.trim();
    if (email && newsletterMsg) {
      newsletterMsg.textContent = `Welcome to The Vogue Circle! ✨ A curated welcome guide has been sent to ${email}.`;
      newsletterEmail.value = '';
      showToast('Thank you for subscribing to The Vogue Circle!');
    }
  });

  // ==========================================================================
  // 9. DYNAMIC FOOTER YEAR & INITIALIZATION
  // ==========================================================================

  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Initialize badges and buttons
  updateSavedBadge();
  updateCardLikeButtons();

  console.log('Veil & Vogue Modest Fashion Studio initialized gracefully.');
});
