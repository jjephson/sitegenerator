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
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <div class="form-group">
            <label class="form-label">Logo URL (optional)</label>
            <input v-model="formData.logo" type="url" class="form-input" placeholder="https://example.com/logo.png" />
          </div>
          
          <div class="form-group">
            <label class="form-label">Background Image URL (optional)</label>
            <input v-model="formData.bgImage" type="url" class="form-input" placeholder="https://example.com/bg.jpg" />
          </div>
          
          <ColorPicker
            v-model="formData.bgColor"
            label="Background Color"
          />
          
          <ColorPicker
            v-model="formData.textColor"
            label="Text Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.buttonBgColor"
            label="Button Background Color"
          />
          
          <ColorPicker
            v-model="formData.buttonTextColor"
            label="Button Text Color"
            :checkContrast="true"
            :contrastWith="formData.buttonBgColor"
          />
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
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker
            v-model="formData.bgColor"
            label="Background Color"
          />
          
          <ColorPicker
            v-model="formData.titleColor"
            label="Title Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.textColor"
            label="Text Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
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
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker
            v-model="formData.bgColor"
            label="Background Color"
          />
          
          <ColorPicker
            v-model="formData.textColor"
            label="Text Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.buttonBgColor"
            label="Button Background Color"
          />
          
          <ColorPicker
            v-model="formData.buttonTextColor"
            label="Button Text Color"
            :checkContrast="true"
            :contrastWith="formData.buttonBgColor"
          />
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
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker
            v-model="formData.bgColor"
            label="Background Color"
          />
          
          <ColorPicker
            v-model="formData.titleColor"
            label="Title Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.textColor"
            label="Text Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.buttonBgColor"
            label="Button Background Color"
          />
          
          <ColorPicker
            v-model="formData.buttonTextColor"
            label="Button Text Color"
            :checkContrast="true"
            :contrastWith="formData.buttonBgColor"
          />
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
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker
            v-model="formData.bgColor"
            label="Background Color"
          />
          
          <ColorPicker
            v-model="formData.titleColor"
            label="Title Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.textColor"
            label="Text Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.accentColor"
            label="Accent Color (price highlight)"
          />
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
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker
            v-model="formData.bgColor"
            label="Background Color"
          />
          
          <ColorPicker
            v-model="formData.titleColor"
            label="Title Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.textColor"
            label="Text Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
        </div>

        <!-- Logo Cloud Block -->
        <div v-else-if="block.type === 'logocloud'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Company Logos</label>
            <div v-for="(logo, idx) in formData.logos" :key="idx" class="flex gap-1 mb-1">
              <input v-model="logo.name" type="text" placeholder="Company Name" class="form-input" style="flex: 1;" />
              <input v-model="logo.url" type="url" placeholder="Logo URL" class="form-input" style="flex: 2;" />
              <button @click="removeLogo(idx)" class="btn btn-sm btn-danger">-</button>
            </div>
            <button @click="addLogo" class="btn btn-sm btn-secondary mt-1">+ Add Logo</button>
          </div>
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker v-model="formData.bgColor" label="Background Color" />
          <ColorPicker v-model="formData.titleColor" label="Title Color" :checkContrast="true" :contrastWith="formData.bgColor" />
          <ColorPicker v-model="formData.textColor" label="Text Color" :checkContrast="true" :contrastWith="formData.bgColor" />
        </div>

        <!-- Team Block -->
        <div v-else-if="block.type === 'team'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea v-model="formData.description" class="form-input"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Team Members</label>
            <div v-for="(member, idx) in formData.members" :key="idx" class="card mb-1">
              <input v-model="member.name" type="text" placeholder="Name" class="form-input mb-1" />
              <input v-model="member.role" type="text" placeholder="Role/Title" class="form-input mb-1" />
              <input v-model="member.image" type="url" placeholder="Photo URL" class="form-input mb-1" />
              <textarea v-model="member.bio" placeholder="Short Bio" class="form-input mb-1" rows="2"></textarea>
              <button @click="removeMember(idx)" class="btn btn-sm btn-danger">Remove Member</button>
            </div>
            <button @click="addMember" class="btn btn-sm btn-secondary">+ Add Team Member</button>
          </div>
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker v-model="formData.bgColor" label="Background Color" />
          <ColorPicker v-model="formData.titleColor" label="Title Color" :checkContrast="true" :contrastWith="formData.bgColor" />
          <ColorPicker v-model="formData.textColor" label="Text Color" :checkContrast="true" :contrastWith="formData.bgColor" />
        </div>

        <!-- Stats Block -->
        <div v-else-if="block.type === 'stats'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Statistics</label>
            <div v-for="(stat, idx) in formData.stats" :key="idx" class="flex gap-1 mb-1">
              <input v-model="stat.icon" type="text" placeholder="Icon" class="form-input" style="width: 60px;" />
              <input v-model="stat.number" type="text" placeholder="Number" class="form-input" style="flex: 1;" />
              <input v-model="stat.label" type="text" placeholder="Label" class="form-input" style="flex: 2;" />
              <button @click="removeStat(idx)" class="btn btn-sm btn-danger">-</button>
            </div>
            <button @click="addStat" class="btn btn-sm btn-secondary mt-1">+ Add Stat</button>
          </div>
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker v-model="formData.bgColor" label="Background Color" />
          <ColorPicker v-model="formData.textColor" label="Text Color" :checkContrast="true" :contrastWith="formData.bgColor" />
          <ColorPicker v-model="formData.numberColor" label="Number Color" :checkContrast="true" :contrastWith="formData.bgColor" />
        </div>

        <!-- FAQ Block -->
        <div v-else-if="block.type === 'faq'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea v-model="formData.description" class="form-input"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Questions & Answers</label>
            <div v-for="(faq, idx) in formData.faqs" :key="idx" class="card mb-1">
              <input v-model="faq.question" type="text" placeholder="Question" class="form-input mb-1" />
              <textarea v-model="faq.answer" placeholder="Answer" class="form-input mb-1" rows="3"></textarea>
              <button @click="removeFaq(idx)" class="btn btn-sm btn-danger">Remove FAQ</button>
            </div>
            <button @click="addFaq" class="btn btn-sm btn-secondary">+ Add FAQ</button>
          </div>
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker v-model="formData.bgColor" label="Background Color" />
          <ColorPicker v-model="formData.titleColor" label="Title Color" :checkContrast="true" :contrastWith="formData.bgColor" />
          <ColorPicker v-model="formData.textColor" label="Text Color" :checkContrast="true" :contrastWith="formData.bgColor" />
          <ColorPicker v-model="formData.questionColor" label="Question Color" :checkContrast="true" :contrastWith="formData.bgColor" />
        </div>

        <!-- Newsletter Block -->
        <div v-else-if="block.type === 'newsletter'">
          <div class="form-group">
            <label class="form-label">Title</label>
            <input v-model="formData.title" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea v-model="formData.description" class="form-input"></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Email Placeholder</label>
            <input v-model="formData.placeholder" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Button Text</label>
            <input v-model="formData.buttonText" type="text" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Success Message</label>
            <input v-model="formData.successMessage" type="text" class="form-input" />
          </div>
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker v-model="formData.bgColor" label="Background Color" />
          <ColorPicker v-model="formData.textColor" label="Text Color" :checkContrast="true" :contrastWith="formData.bgColor" />
          <ColorPicker v-model="formData.buttonBgColor" label="Button Background Color" />
          <ColorPicker v-model="formData.buttonTextColor" label="Button Text Color" :checkContrast="true" :contrastWith="formData.buttonBgColor" />
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
          
          <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid var(--border-color);">
          <h3 style="margin-bottom: 1rem; font-size: 1rem; font-weight: 600;">Styling Options</h3>
          
          <ColorPicker
            v-model="formData.bgColor"
            label="Background Color"
          />
          
          <ColorPicker
            v-model="formData.textColor"
            label="Text Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
          
          <ColorPicker
            v-model="formData.linkColor"
            label="Link Color"
            :checkContrast="true"
            :contrastWith="formData.bgColor"
          />
        </div>
      </div>
      
      <!-- Validation Error Message (Accessible) -->
      <div
        v-if="validationError"
        class="validation-error"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <strong>❌ Cannot Save: WCAG AA Requirements Not Met</strong>
        <ul>
          <li v-for="(error, idx) in validationErrors" :key="idx">{{ error }}</li>
        </ul>
        <p><em>Please adjust your colors to meet accessibility standards.</em></p>
      </div>

      <div class="modal-footer">
        <button @click="$emit('close')" class="btn btn-outline">Cancel</button>
        <button @click="save" class="btn btn-primary">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorPicker from '~/components/ui/ColorPicker.vue'
import { checkContrast } from '~/utils/contrast'

const props = defineProps({
  block: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

const formData = ref(JSON.parse(JSON.stringify(props.block.content)))
const planFeatures = ref([])
const validationError = ref(false)
const validationErrors = ref([])

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

// Logo methods
const addLogo = () => {
  if (!formData.value.logos) formData.value.logos = []
  formData.value.logos.push({ name: 'Company Name', url: 'https://via.placeholder.com/150x50?text=Logo' })
}

const removeLogo = (idx) => {
  formData.value.logos.splice(idx, 1)
}

// Team member methods
const addMember = () => {
  if (!formData.value.members) formData.value.members = []
  formData.value.members.push({ name: 'Name', role: 'Role', image: 'https://via.placeholder.com/200', bio: 'Bio' })
}

const removeMember = (idx) => {
  formData.value.members.splice(idx, 1)
}

// Stats methods
const addStat = () => {
  if (!formData.value.stats) formData.value.stats = []
  formData.value.stats.push({ icon: '⭐', number: '100+', label: 'Label' })
}

const removeStat = (idx) => {
  formData.value.stats.splice(idx, 1)
}

// FAQ methods
const addFaq = () => {
  if (!formData.value.faqs) formData.value.faqs = []
  formData.value.faqs.push({ question: 'Your question?', answer: 'Your answer.' })
}

const removeFaq = (idx) => {
  formData.value.faqs.splice(idx, 1)
}

// Link methods
const addLink = () => {
  if (!formData.value.links) formData.value.links = []
  formData.value.links.push({ text: 'Link', url: '#' })
}

const removeLink = (idx) => {
  formData.value.links.splice(idx, 1)
}

const validateContrast = () => {
  const errors = []
  
  // Validate based on block type
  if (props.block.type === 'hero') {
    const bgTextCheck = checkContrast(formData.value.textColor, formData.value.bgColor)
    if (!bgTextCheck.passes) {
      errors.push(`Hero text color (${formData.value.textColor}) on background (${formData.value.bgColor}): ${bgTextCheck.ratio}:1 - needs ${bgTextCheck.minRequired}:1`)
    }
    
    const btnCheck = checkContrast(formData.value.buttonTextColor, formData.value.buttonBgColor)
    if (!btnCheck.passes) {
      errors.push(`Button text color (${formData.value.buttonTextColor}) on button background (${formData.value.buttonBgColor}): ${btnCheck.ratio}:1 - needs ${btnCheck.minRequired}:1`)
    }
  }
  
  if (props.block.type === 'features') {
    const titleCheck = checkContrast(formData.value.titleColor, formData.value.bgColor)
    if (!titleCheck.passes) {
      errors.push(`Title color on background: ${titleCheck.ratio}:1 - needs ${titleCheck.minRequired}:1`)
    }
    
    const textCheck = checkContrast(formData.value.textColor, formData.value.bgColor)
    if (!textCheck.passes) {
      errors.push(`Text color on background: ${textCheck.ratio}:1 - needs ${textCheck.minRequired}:1`)
    }
  }
  
  if (props.block.type === 'cta') {
    const textCheck = checkContrast(formData.value.textColor, formData.value.bgColor)
    if (!textCheck.passes) {
      errors.push(`CTA text color on background: ${textCheck.ratio}:1 - needs ${textCheck.minRequired}:1`)
    }
    
    const btnCheck = checkContrast(formData.value.buttonTextColor, formData.value.buttonBgColor)
    if (!btnCheck.passes) {
      errors.push(`Button text on button background: ${btnCheck.ratio}:1 - needs ${btnCheck.minRequired}:1`)
    }
  }
  
  if (props.block.type === 'contact') {
    const titleCheck = checkContrast(formData.value.titleColor, formData.value.bgColor)
    if (!titleCheck.passes) {
      errors.push(`Title color on background: ${titleCheck.ratio}:1 - needs ${titleCheck.minRequired}:1`)
    }
    
    const textCheck = checkContrast(formData.value.textColor, formData.value.bgColor)
    if (!textCheck.passes) {
      errors.push(`Text color on background: ${textCheck.ratio}:1 - needs ${textCheck.minRequired}:1`)
    }
    
    const btnCheck = checkContrast(formData.value.buttonTextColor, formData.value.buttonBgColor)
    if (!btnCheck.passes) {
      errors.push(`Button text on button background: ${btnCheck.ratio}:1 - needs ${btnCheck.minRequired}:1`)
    }
  }
  
  if (props.block.type === 'pricing') {
    const titleCheck = checkContrast(formData.value.titleColor, formData.value.bgColor)
    if (!titleCheck.passes) {
      errors.push(`Title color on background: ${titleCheck.ratio}:1 - needs ${titleCheck.minRequired}:1`)
    }
    
    const textCheck = checkContrast(formData.value.textColor, formData.value.bgColor)
    if (!textCheck.passes) {
      errors.push(`Text color on background: ${textCheck.ratio}:1 - needs ${textCheck.minRequired}:1`)
    }
  }
  
  if (props.block.type === 'testimonials') {
    const titleCheck = checkContrast(formData.value.titleColor, formData.value.bgColor)
    if (!titleCheck.passes) {
      errors.push(`Title color on background: ${titleCheck.ratio}:1 - needs ${titleCheck.minRequired}:1`)
    }
    
    const textCheck = checkContrast(formData.value.textColor, formData.value.bgColor)
    if (!textCheck.passes) {
      errors.push(`Text color on background: ${textCheck.ratio}:1 - needs ${textCheck.minRequired}:1`)
    }
  }
  
  if (props.block.type === 'footer') {
    const textCheck = checkContrast(formData.value.textColor, formData.value.bgColor)
    if (!textCheck.passes) {
      errors.push(`Text color on background: ${textCheck.ratio}:1 - needs ${textCheck.minRequired}:1`)
    }
    
    const linkCheck = checkContrast(formData.value.linkColor, formData.value.bgColor)
    if (!linkCheck.passes) {
      errors.push(`Link color on background: ${linkCheck.ratio}:1 - needs ${linkCheck.minRequired}:1`)
    }
  }
  
  return errors
}

const save = () => {
  // Clear previous validation errors
  validationError.value = false
  validationErrors.value = []
  
  // Update plan features before saving
  if (props.block.type === 'pricing') {
    formData.value.plans.forEach((plan, idx) => {
      updatePlanFeatures(idx)
    })
  }
  
  // Validate WCAG AA contrast
  const contrastErrorList = validateContrast()
  
  if (contrastErrorList.length > 0) {
    validationError.value = true
    validationErrors.value = contrastErrorList
    
    // Scroll to error message
    setTimeout(() => {
      const errorEl = document.querySelector('.validation-error')
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }, 100)
    
    return
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

.validation-error {
  padding: 1rem;
  margin: 1rem 1.5rem;
  background-color: #fee2e2;
  border: 2px solid #ef4444;
  border-radius: 0.5rem;
  color: #991b1b;
  animation: shake 0.4s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.validation-error strong {
  display: block;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.validation-error ul {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
  list-style: disc;
}

.validation-error li {
  margin: 0.5rem 0;
  font-size: 0.875rem;
}

.validation-error p {
  margin-top: 0.75rem;
  margin-bottom: 0;
  font-size: 0.875rem;
}
</style>

