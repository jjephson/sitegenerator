<template>
  <div class="block-renderer">
    <div class="block-header">
      <span class="block-icon">{{ getBlockIcon(block.type) }}</span>
      <span class="block-name">{{ block.name }}</span>
    </div>
    
    <div class="block-preview">
      <!-- Hero Block -->
      <div v-if="block.type === 'hero'" class="preview-hero">
        <h2>{{ block.content.title }}</h2>
        <p>{{ block.content.subtitle }}</p>
        <button class="preview-btn">{{ block.content.buttonText }}</button>
      </div>

      <!-- Features Block -->
      <div v-else-if="block.type === 'features'" class="preview-features">
        <h3>{{ block.content.title }}</h3>
        <div class="preview-features-grid">
          <div v-for="(feature, idx) in block.content.features" :key="idx" class="preview-feature">
            <div>{{ feature.icon }} {{ feature.title }}</div>
          </div>
        </div>
      </div>

      <!-- CTA Block -->
      <div v-else-if="block.type === 'cta'" class="preview-cta">
        <h3>{{ block.content.title }}</h3>
        <p>{{ block.content.description }}</p>
        <button class="preview-btn">{{ block.content.buttonText }}</button>
      </div>

      <!-- Contact Block -->
      <div v-else-if="block.type === 'contact'" class="preview-contact">
        <h3>{{ block.content.title }}</h3>
        <p>{{ block.content.description }}</p>
        <div style="font-size: 0.875rem; color: var(--text-gray);">[Contact Form]</div>
      </div>

      <!-- Pricing Block -->
      <div v-else-if="block.type === 'pricing'" class="preview-pricing">
        <h3>{{ block.content.title }}</h3>
        <div class="preview-pricing-grid">
          <div v-for="(plan, idx) in block.content.plans" :key="idx" class="preview-plan">
            {{ plan.name }}: {{ plan.price }}
          </div>
        </div>
      </div>

      <!-- Testimonials Block -->
      <div v-else-if="block.type === 'testimonials'" class="preview-testimonials">
        <h3>{{ block.content.title }}</h3>
        <div class="preview-testimonials-grid">
          <div v-for="(testimonial, idx) in block.content.testimonials" :key="idx">
            {{ testimonial.avatar }} {{ testimonial.name }}
          </div>
        </div>
      </div>

      <!-- Footer Block -->
      <div v-else-if="block.type === 'footer'" class="preview-footer">
        <strong>{{ block.content.companyName }}</strong>
        <p style="font-size: 0.75rem; margin-top: 0.5rem;">{{ block.content.copyright }}</p>
      </div>

      <!-- Default -->
      <div v-else>
        {{ block.type }} block
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    required: true
  }
})

const getBlockIcon = (type) => {
  const icons = {
    hero: '🎯',
    features: '✨',
    cta: '📢',
    contact: '📧',
    pricing: '💰',
    testimonials: '💬',
    footer: '📄'
  }
  return icons[type] || '📦'
}
</script>

<style scoped>
.block-renderer {
  padding: 0.5rem;
}

.block-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.block-icon {
  font-size: 1.25rem;
}

.block-preview {
  padding: 1rem;
  background-color: var(--bg-light);
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.preview-hero,
.preview-cta,
.preview-contact,
.preview-footer {
  text-align: center;
}

.preview-hero h2,
.preview-cta h3,
.preview-contact h3,
.preview-features h3,
.preview-pricing h3,
.preview-testimonials h3 {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.preview-btn {
  margin-top: 0.5rem;
  padding: 0.375rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.preview-features-grid,
.preview-pricing-grid,
.preview-testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.preview-feature,
.preview-plan {
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.preview-footer {
  background-color: var(--text-dark);
  color: white;
  padding: 1rem;
  border-radius: 0.375rem;
}
</style>

