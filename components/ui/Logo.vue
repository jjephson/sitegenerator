<template>
  <svg 
    :width="width" 
    :height="height" 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    :aria-label="ariaLabel"
    role="img"
  >
    <!-- Background Circle -->
    <circle cx="100" cy="100" r="95" fill="url(#gradient1)" />
    
    <!-- Brush/Palette Design -->
    <path 
      d="M100 50 L130 80 L120 100 L100 90 L80 100 L70 80 Z" 
      fill="white" 
      opacity="0.9"
    />
    
    <!-- Paint Strokes -->
    <path 
      d="M60 110 Q80 120 100 110 T140 110" 
      stroke="white" 
      stroke-width="8" 
      stroke-linecap="round"
      fill="none"
      opacity="0.8"
    />
    
    <path 
      d="M70 130 Q90 140 110 130 T150 130" 
      stroke="white" 
      stroke-width="6" 
      stroke-linecap="round"
      fill="none"
      opacity="0.7"
    />
    
    <!-- AI Sparkle -->
    <circle cx="150" cy="70" r="4" fill="white" opacity="0.9" />
    <circle cx="145" cy="62" r="2" fill="white" opacity="0.8" />
    <circle cx="155" cy="65" r="2.5" fill="white" opacity="0.85" />
    
    <!-- Gradient Definition -->
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4338ca;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: 40
  },
  height: {
    type: [String, Number],
    default: 40
  },
  ariaLabel: {
    type: String,
    default: 'OnePage AI Builder Logo'
  }
})
</script>

