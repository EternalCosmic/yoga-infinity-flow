// --- PROCEDURAL SVG POSE GENERATOR ---
const poseVectorMap = {
  "Padmasana": {
    head: { cx: 125, cy: 110 },
    torso: "M 125 120 L 125 170",
    arms: "M 125 135 L 90 160 L 75 180 M 125 135 L 160 160 L 175 180",
    legs: "M 125 170 L 80 190 L 140 190 M 125 170 L 170 190 L 110 190"
  },
  "Bakasana": {
    head: { cx: 85, cy: 155 },
    torso: "M 95 150 L 140 120",
    arms: "M 105 190 L 105 155 L 125 135",
    legs: "M 140 120 L 115 130 L 155 145"
  },
  "Sirsasana": {
    head: { cx: 125, cy: 180 },
    torso: "M 125 180 L 125 110",
    arms: "M 110 185 L 125 180 L 140 185",
    legs: "M 125 110 L 125 40"
  }
};

function drawProceduralPose(poseName) {
  const container = document.getElementById('cosmic-media-box');
  if (!container) return;

  const data = poseVectorMap[poseName] || poseVectorMap["Padmasana"];

  container.innerHTML = `
    <svg viewBox="0 0 250 250" width="100%" height="220" xmlns="http://www.w3.org/2000/svg">
      <circle cx="125" cy="125" r="95" fill="#08080a" stroke="#d4af37" stroke-width="1" stroke-dasharray="4,4" />
      <circle cx="125" cy="125" r="80" fill="none" stroke="#d4af37" stroke-width="0.5" opacity="0.3" />
      <circle cx="${data.head.cx}" cy="${data.head.cy}" r="11" fill="none" stroke="#d4af37" stroke-width="2.5" />
      <path d="${data.torso}" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" />
      <path d="${data.arms}" fill="none" stroke="#d4af37" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="${data.legs}" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="125" cy="140" r="3" fill="#e5a93c" />
    </svg>
  `;
}



// --- BASE POSTURE ARCHITECTURE SEEDS ---
const baseAsanas = [
    "Padmasana", "Bhujangasana", "Garudasana", "Tadasana", "Adho Mukha Svanasana", 
    "Trikonasana", "Sirsasana", "Natarajasana", "Paschimottanasana", "Bakasana", 
    "Dhanurasana", "Siddhasana", "Shivasana", "Virabhadrasana", "Vrikshasana",
    "Sukhasana", "Matsyasana", "Halasana", "Ustrasana", "Chakrasana", "Mayurasana"
];

const cosmicModifiers = [
    "Internal Meditative Focus Alignment", "Dynamic Heart-Opening Extension", 
    "Sovereign Horizon Vantage Elevation", "Celestial Zenith Axis Extension", 
    "Neural Pathway Recalibration Inversion", "Sacred Geometric Triad Orientation", 
    "Pure Awareness Core Stabilization", "Fluid Bliss Creation Sequence", 
    "Central Energy Axis Compression", "Pranic Life-Force Stream Stabilization",
    "Absolute Stillness Void Suspension", "Ignited Gastric Fire Core Fold"
];

const divineAttributes = [
    "of Lord Shiva's Eternal Vision", "of Unconditioned Cosmic Bliss", "of Radical Contentment Mastery",
    "of the Infinite Matrix Horizon", "of Sovereign Spiritual Awakening", "of Supreme Geometrical Balance"
];

// --- OPTIONS 5, 6, 7, 8 TEXT MATRIX POOLS ---
const sakshiPractices = [
    {
        name: "Witness Intercept — Sakshi Bhava 👁️",
        tier: "5. Witness Consciousness Meditative Grounding",
        description: "⚡ MENTAL VRITTI:\nYou encounter a memory of a difficult life moment or past conflict.\n\n🧘 THE SAKSHI PRACTICE:\nDo not suppress this wave. Do not engage, argue, or agree with it. Simply look at it as an objective object in space. Watch it arise, float across the theater of your mind, and naturally dissipate."
    }
];

const wisdomMatrix = [
    { name: "The Sat-Chit-Ananda Nexus ✨", tier: "6. Yoga Wisdom & Eternal Happiness", description: "True happiness is not earned or constructed; it is uncovered. Your essential nature is absolute existence, pure consciousness, and uncaused radiant joy (Ananda)." },
    { name: "Vairagya Wisdom Pathway 🕊️", tier: "6. Yoga Wisdom & Eternal Happiness", description: "The practice of non-attachment. Let the world flow freely without grabbing at strings, realizing you are the unchanging sky behind the passing clouds." },
    { name: "The Prana-Vayu Core Principle 🌀", tier: "6. Yoga Wisdom & Eternal Happiness", description: "When the breath wavers, the mind is unsteady. But when the breath is still, the mind achieves profound, unshakeable tranquility." }
];

const ashtangaLimbs = [
    { name: "1. Yama // Social Restraints", tier: "7. Patanjali's Eight Limbs Roadmap", description: "The foundation of harmony: Ahimsa (Non-violence), Satya (Truthfulness), Asteya (Non-stealing), Brahmacharya (Wise energy preservation), and Aparigraha (Non-possessiveness)." },
    { name: "2. Niyama // Personal Observances", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Inner purification pathways: Saucha (Purity), Santosha (Contentment), Tapas (Disciplined heat), Svadhyaya (Self-study), and Ishvara Pranidhana (Surrender to the higher order)." },
    { name: "3. Asana // Physical Posture Integration", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Establishing a steady, stable, and completely comfortable seat to refine body-mind awareness for high-level expansion." },
    { name: "4. Pranayama // Breath Regulation", tier: "7. Patanjali's Eight Limbs Roadmap", description: "The conscious control and expansion of vital life-force streams through specialized breath structuring." },
    { name: "5. Pratyahara // Sensory Withdrawal", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Drawing attention inward, disconnecting sensory receptors from external objects to center focus completely within." },
    { name: "6. Dharana // One-Pointed Concentration", tier: "7. Patanjali's Eight Limbs Roadmap", description: "Binding the attention of the mind to a single locus point or geometric anchor without allowing distraction." },
    { name: "7. Dhyana // Sustained Meditation", tier: "7. Patanjali's Eight Limbs Roadmap", description: "An unbroken, fluid stream of pure awareness pouring continuously toward the object of contemplation." },
    { name: "8. Samadhi // Absolute Liberation", tier: "7. Patanjali's Eight Limbs Roadmap", description: "The complete absorption of identity where the witness and the object of meditation merge into single unified consciousness." }
];

// Tier 8 Specialist Singularity Data Set
const samadhiSingularity = [
    {
        name: "Samadhi // Absolute Liberation 🌌",
        tier: "Tier 8: Ultimate Reality Node",
        description: "The complete absorption of identity where the witness (*Sakshi*) and the object of meditation merge into a single unified consciousness.\n\nThe cosmic matrix grid dissolves; there is no longer a programmer, a code, or a screen—only the infinite space of pure awareness (*Sat-Chit-Ananda*)."
    }
];

// --- UNIVERSAL INDEXING DATA HASH GENERATOR ---
function generateAsanaObject(tierKey, id) {
    const base = baseAsanas[id % baseAsanas.length];
    const modifier = cosmicModifiers[(id * 3) % cosmicModifiers.length];
    const attribute = divineAttributes[(id * 7) % divineAttributes.length];
    
    if (tierKey === "tier1") {
        return { name: `${base} // Foundational Mode #${id}`, tier: "Tier 1: 84 Foundational Asanas", description: `Core structural blueprint configuration #${id} out of 84. This layout features a ${modifier} anchoring physical symmetry.` };
    } else if (tierKey === "tier2") {
        return { name: `${base} Extensio // Master Chart v${id}`, tier: "908 Master Chart Edition", description: `Advanced chart system configuration position #${id} of 908. Realizing a specialized ${modifier} integrated directly with the essence ${attribute}.` };
    } else if (tierKey === "variations") {
        return { name: `${base} Variation // Matrix Key ${id}`, tier: "Style-Specific Variations Matrix", description: `Style variation alignment branch index #${id} out of 8,000. Cultivating a specialized sequence for ${modifier}.` };
    } else if (tierKey === "shiva") {
        return { name: `Divine Form #${id} // ${base} Manifestation`, tier: "8,400,000 Infinite Divine Asanas", description: `Cosmic expansion matrix coordinate sequence position ${id.toLocaleString()} out of 8,400,000. Lord Shiva's unique vibrational signature charting the profound light ${attribute}.` };
    }
}

// --- DOM REGISTRATION SELECTION BLOCKS ---
let tierSelect, manifestBtn, starBtn, exitBtn, tierBadge, poseTitle, poseDescription, displayPanel;
let cardTier1, cardTier2, cardVariations, tierGallery, galleryTitle, searchContainer, coordinateInput, searchLabel;
let cosmicMediaBox, cosmicImg;

window.onload = function() {
    tierSelect = document.getElementById("tier-select");
    manifestBtn = document.getElementById("manifest-btn");
    starBtn = document.getElementById("star-btn");
    exitBtn = document.getElementById("exit-btn");
    tierBadge = document.getElementById("tier-badge");
    poseTitle = document.getElementById("pose-title");
    poseDescription = document.getElementById("pose-description");
    displayPanel = document.getElementById("display-panel");
    
    tierGallery = document.getElementById("tier-gallery");
    galleryTitle = document.getElementById("gallery-title");
    searchContainer = document.getElementById("search-container");
    coordinateInput = document.getElementById("coordinate-input");
    searchLabel = document.getElementById("search-label");

    // Dynamic Elements mapping for media layout structures
    cosmicMediaBox = document.getElementById("cosmic-media-box");
    cosmicImg = document.getElementById("cosmic-img");

    cardTier1 = document.getElementById("card-tier1");
    cardTier2 = document.getElementById("card-tier2");
    cardVariations = document.getElementById("card-variations");

    tierSelect.value = "tier1";

    manifestBtn.addEventListener("click", manifestRandomPose);
    starBtn.addEventListener("click", navigateToStars);
    exitBtn.addEventListener("click", exitToOceanCam);
    coordinateInput.addEventListener("input", handleCoordinateSearch);

    cardTier1.addEventListener("click", () => triggerCardSelection("tier1"));
    cardTier2.addEventListener("click", () => triggerCardSelection("tier2"));
    cardVariations.addEventListener("click", () => triggerCardSelection("variations"));
};

function triggerCardSelection(selectedCategory) {
    tierSelect.value = selectedCategory;
    manifestRandomPose();
}

function getTierLimits(tierValue) {
    if (tierValue === "tier1") return { max: 84, key: "tier1", numerical: true };
    if (tierValue === "tier2") return { max: 908, key: "tier2", numerical: true };
    if (tierValue === "variations") return { max: 8000, key: "variations", numerical: true };
    if (tierValue === "shiva") return { max: 8400000, key: "shiva", numerical: true };
    return { max: 0, key: tierValue, numerical: false };
}

// --- ENGINE EXECUTION ENGINE ---
function manifestRandomPose() {
    const currentTier = tierSelect.value;
    const limits = getTierLimits(currentTier);
    

    // Baseline layout resets
    if (cosmicMediaBox) cosmicMediaBox.style.display = "none";
    if (displayPanel) displayPanel.classList.remove('cosmic-active');

    if (limits.numerical) {
        searchContainer.style.display = "block";
        galleryTitle.style.display = "block";
        const randomID = Math.floor(Math.random() * limits.max) + 1;
        coordinateInput.max = limits.max;
        coordinateInput.value = randomID;
        searchLabel.textContent = `Explore Range (1 - ${limits.max.toLocaleString()}):`;
        renderGalleryView(limits.key, randomID, limits.max);
    } else {
        searchContainer.style.display = "none";
        galleryTitle.style.display = "none";
        tierGallery.innerHTML = "";
        
        let pool = [];
        if (currentTier === "sakshi") pool = sakshiPractices;
        else if (currentTier === "wisdom") pool = wisdomMatrix;
        else if (currentTier === "limbs") pool = ashtangaLimbs;
        else if (currentTier === "samadhi") {
            pool = samadhiSingularity;
            // Activate cosmic styling extensions
            if (cosmicMediaBox && cosmicImg) {
                cosmicImg.src = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80";
                cosmicImg.alt = "Deep space star matrix nebula representing total energetic convergence";
                cosmicMediaBox.style.display = "block";
            }
            if (displayPanel) displayPanel.classList.add('cosmic-active');
        }

        if (pool.length > 0) {
            const randomIdx = Math.floor(Math.random() * pool.length);
            displayPose(pool[randomIdx]);
        }
    }
    // Render instant procedural SVG illustration
    drawProceduralPose(poseTitle.innerText);
}

function handleCoordinateSearch() {
    const limits = getTierLimits(tierSelect.value);
    if (!limits.numerical) return;

    let userVal = parseInt(coordinateInput.value);
    if (isNaN(userVal) || userVal < 1) userVal = 1;
    if (userVal > limits.max) userVal = limits.max;
    
    coordinateInput.value = userVal;
    renderGalleryView(limits.key, userVal, limits.max);
}

function renderGalleryView(tierKey, targetID, maxLimit) {
    const focalPose = generateAsanaObject(tierKey, targetID);
    displayPose(focalPose);

    tierGallery.innerHTML = "";
    let start = Math.max(1, targetID - 4);
    let end = Math.min(maxLimit, start + 8);
    if (end - start < 8) start = Math.max(1, end - 8);

    for (let i = start; i <= end; i++) {
        const neighboringPose = generateAsanaObject(tierKey, i);
        const card = document.createElement("div");
        card.className = "gallery-card";
        
        if (i === targetID) {
            card.style.borderColor = "#cc721b";
            card.style.backgroundColor = "#1c1918";
        }

        card.innerHTML = `
            <div class="gallery-pose-name">${neighboringPose.name}</div>
            <div class="gallery-pose-desc">${neighboringPose.description.substring(0, 95)}...</div>
        `;

        card.addEventListener("click", () => {
            coordinateInput.value = i;
            renderGalleryView(tierKey, i, maxLimit);
        });
        tierGallery.appendChild(card);
    }
}

function displayPose(pose) {
    tierBadge.textContent = pose.tier;
    poseTitle.textContent = pose.name;
    poseDescription.textContent = pose.description;
}

// --- CELESTIAL NAVIGATOR ROUTINE ---
function navigateToStars() {
    window.location.href = "https://stellarium-web.org/";
}

// --- COSMIC DISPLACEMENT CHANNEL TERMINAL ---
function exitToOceanCam() {
    window.location.href = "https://www.goodcleanfunusa.com/pages/surf-cam";
}
