<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Edit {{ block.name }}</h2>
        <button @click="$emit('close')" class="btn btn-sm btn-outline">✕</button>
      </div>

      <div class="modal-body">
        <!-- Hero Block -->
        <div v-if="block.type === 'hero'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <div class="input-with-ai">
              <input v-model="formData.title" type="text" class="form-input" />
              <button @click="generateWithAI('title', 'hero title')" class="ai-btn btn-sm">✨ AI</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Subtitle</label>
            <div class="input-with-ai">
              <input v-model="formData.subtitle" type="text" class="form-input" />
              <button @click="generateWithAI('subtitle', 'hero subtitle')" class="ai-btn btn-sm">✨ AI</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Button Text</label>
            <input v-model="formData.buttonText" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Button Link</label>
            <input v-model="formData.buttonLink" type="text" class="form-input" />
          </div>
        </div>

        <!-- Features Block -->
        <div v-else-if="block.type === 'features'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <div class="input-with-ai">
              <input v-model="formData.title" type="text" class="form-input" />
              <button @click="generateWithAI('title', 'features section title')" class="ai-btn btn-sm">✨ AI</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Features</label>
            <div v-for="(feature, idx) in formData.features" :key="idx" class="feature-item">
              <input v-model="feature.icon" type="text" placeholder="Icon (emoji)" class="form-input" style="width: 80px;" />
              <input v-model="feature.title" type="text" placeholder="Title" class="form-input" style="flex: 1;" />
              <input v-model="feature.description" type="text" placeholder="Description" class="form-input" style="flex: 2;" />
              <button @click="removeFeature(idx)" class="btn btn-sm btn-danger">-</button>
            </div>
            <button @click="addFeature" class="btn btn-sm btn-secondary mt-1">+ Add Feature</button>
          </div>
        </div>

        <!-- CTA Block -->
        <div v-else-if="block.type === 'cta'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <div class="input-with-ai">
              <input v-model="formData.title" type="text" class="form-input" />
              <button @click="generateWithAI('title', 'call to action title')" class="ai-btn btn-sm">✨ AI</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <div class="input-with-ai">
              <textarea v-model="formData.description" class="form-input"></textarea>
              <button @click="generateWithAI('description', 'call to action description')" class="ai-btn btn-sm">✨ AI</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Button Text</label>
            <input v-model="formData.buttonText" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Button Link</label>
            <input v-model="formData.buttonLink" type="text" class="form-input" />
          </div>
        </div>

        <!-- Contact Block -->
        <div v-else-if="block.type === 'contact'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea v-model="formData.description" class="form-input"></textarea>
          </div>
        </div>

        <!-- Pricing Block -->
        <div v-else-if="block.type === 'pricing'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Plans</label>
            <div v-for="(plan, idx) in formData.plans" :key="idx" class="plan-item card mb-1">
              <input v-model="plan.name" type="text" placeholder="Plan Name" class="form-input mb-1" />
              <input v-model="plan.price" type="text" placeholder="Price" class="form-input mb-1" />
              <textarea v-model="planFeatures[idx]" @blur="updatePlanFeatures(idx)" placeholder="Features (one per line)" class="form-input mb-1"></textarea>
              <button @click="removePlan(idx)" class="btn btn-sm btn-danger">Remove Plan</button>
            </div>
            <button @click="addPlan" class="btn btn-sm btn-secondary">+ Add Plan</button>
          </div>
        </div>

        <!-- Testimonials Block -->
        <div v-else-if="block.type === 'testimonials'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Testimonials</label>
            <div v-for="(testimonial, idx) in formData.testimonials" :key="idx" class="card mb-1">
              <input v-model="testimonial.avatar" type="text" placeholder="Avatar (emoji)" class="form-input mb-1" />
              <input v-model="testimonial.name" type="text" placeholder="Name" class="form-input mb-1" />
              <input v-model="testimonial.role" type="text" placeholder="Role" class="form-input mb-1" />
              <textarea v-model="testimonial.text" placeholder="Testimonial" class="form-input mb-1"></textarea>
              <button @click="removeTestimonial(idx)" class="btn btn-sm btn-danger">Remove</button>
            </div>
            <button @click="addTestimonial" class="btn btn-sm btn-secondary">+ Add Testimonial</button>
          </div>
        </div>

        <!-- Footer Block -->
        <div v-else-if="block.type === 'footer'">
          <div class="form-group">
            <label class="form-label">Company Name</label>
            <input v-model="formData.companyName" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Copyright Text</label>
            <input v-model="formData.copyright" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Links</label>
            <div v-for="(link, idx) in formData.links" :key="idx" class="flex gap-1 mb-1">
              <input v-model="link.text" type="text" placeholder="Link Text" class="form-input" />
              <input v-model="link.url" type="text" placeholder="URL" class="form-input" />
              <button @click="removeLink(idx)" class="btn btn-sm btn-danger">-</button>
            </div>
            <button @click="addLink" class="btn btn-sm btn-secondary">+ Add Link</button>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button @click="$emit('close')" class="btn btn-outline">Cancel</button>
        <button @click="save" class="btn btn-primary">Save Changes</button>
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

const emit = defineEmits(['close', 'save'])

const formData = ref(JSON.parse(JSON.stringify(props.block.content)))
const planFeatures = ref([])

// Initialize plan features for pricing block
if (props.block.type === 'pricing') {
  planFeatures.value = formData.value.plans.map(plan => plan.features.join('\n'))
}

const generateWithAI = async (field, prompt) => {
  try {
    const response = await $fetch('/api/ai', {
      method: 'POST',
      body: { prompt: `Generate a ${prompt} for a landing page` }
    })
    
    if (response.text) {
      formData.value[field] = response.text
    }
  } catch (error) {
    console.error('AI generation error:', error)
    alert('Failed to generate with AI')
  }
}

// Features methods
const addFeature = () => {
  if (!formData.value.features) formData.value.features = []
  formData.value.features.push({ icon: '⭐', title: 'New Feature', description: 'Description' })
}

const removeFeature = (idx) => {
  formData.value.features.splice(idx, 1)
}

// Plan methods
const addPlan = () => {
  if (!formData.value.plans) formData.value.plans = []
  formData.value.plans.push({ name: 'New Plan', price: '$0', features: [] })
  planFeatures.value.push('')
}

const removePlan = (idx) => {
  formData.value.plans.splice(idx, 1)
  planFeatures.value.splice(idx, 1)
}

const updatePlanFeatures = (idx) => {
  const features = planFeatures.value[idx].split('\n').filter(f => f.trim())
  formData.value.plans[idx].features = features
}

// Testimonial methods
const addTestimonial = () => {
  if (!formData.value.testimonials) formData.value.testimonials = []
  formData.value.testimonials.push({ avatar: '👤', name: 'Name', role: 'Role', text: 'Testimonial text' })
}

const removeTestimonial = (idx) => {
  formData.value.testimonials.splice(idx, 1)
}

// Link methods
const addLink = () => {
  if (!formData.value.links) formData.value.links = []
  formData.value.links.push({ text: 'Link', url: '#' })
}

const removeLink = (idx) => {
  formData.value.links.splice(idx, 1)
}

const save = () => {
  // Update plan features before saving
  if (props.block.type === 'pricing') {
    formData.value.plans.forEach((plan, idx) => {
      updatePlanFeatures(idx)
    })
  }
  
  emit('save', formData.value)
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 0.5rem;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.modal-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.input-with-ai {
  display: flex;
  gap: 0.5rem;
}

.input-with-ai .form-input {
  flex: 1;
}

.feature-item,
.plan-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>

