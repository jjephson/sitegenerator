<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="flex-between mb-2">
        <h2 style="font-size: 1.25rem; font-weight: 600;">Blocks</h2>
        <button @click="handleLogout" class="btn btn-sm btn-outline">Logout</button>
      </div>

      <div class="form-group">
        <input
          v-model="builderStore.projectName"
          type="text"
          class="form-input"
          placeholder="Project Name"
        />
      </div>

      <div v-if="hasUnsavedChanges" class="unsaved-indicator" role="status" aria-live="polite">
        <span style="font-size: 0.75rem; color: #f59e0b;">● Unsaved changes (auto-saving...)</span>
      </div>
      
      <div class="flex gap-1 mb-2">
        <button @click="saveProject" class="btn btn-sm btn-primary" style="flex: 1;" :disabled="saving">
          {{ saving ? '⏳' : '💾' }} {{ saving ? 'Saving...' : 'Save' }}
        </button>
        <button @click="loadProject" class="btn btn-sm btn-secondary" style="flex: 1;" :disabled="loading">
          {{ loading ? '⏳' : '📂' }} {{ loading ? 'Loading...' : 'Load' }}
        </button>
      </div>
      
      <!-- Status Message (Accessible) -->
      <div
        v-if="statusMessage"
        :class="['status-message', statusType]"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span class="status-text">{{ statusMessage }}</span>
        <button 
          @click="statusMessage = ''" 
          class="status-close"
          aria-label="Close notification"
          title="Close"
        >
          ✕
        </button>
      </div>

      <div class="block-list">
        <div
          v-for="block in builderStore.availableBlocksByAccess"
          :key="block.id"
          class="draggable-block"
          :class="{ 'locked': block.isLocked }"
          :draggable="!block.isLocked"
          @dragstart="!block.isLocked && handleDragStart(block)"
          @click="handleBlockClick(block)"
        >
          <div style="font-size: 1.5rem; margin-bottom: 0.25rem;">{{ block.icon }}</div>
          <div style="font-weight: 500; font-size: 0.875rem;">{{ block.name }}</div>
          <div v-if="block.accessLevel !== 'basic'" class="access-badge" :class="block.accessLevel">
            {{ block.accessLevel.toUpperCase() }}
          </div>
          <div v-if="block.isLocked" class="lock-icon">🔒</div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div class="dashboard-navbar mb-2">
        <NuxtLink to="/" class="navbar-brand-link">
          <Logo :width="36" :height="36" />
          <span class="navbar-brand-text">OnePage AI Builder</span>
        </NuxtLink>
        <div class="navbar-actions">
          <button @click="exportToZip" class="btn btn-sm btn-secondary">
            📦 Export ZIP
          </button>
          <button @click="deployToGitHub" class="btn btn-sm btn-primary">
            🚀 Deploy to GitHub Pages
          </button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: calc(100vh - 120px);">
        <!-- Canvas -->
        <div>
          <h3 class="mb-1" style="font-weight: 600;">Canvas</h3>
          <div
            class="canvas"
            @drop="handleDrop"
            @dragover.prevent
          >
            <!-- Empty State -->
            <div v-if="!builderStore.headerBlock && builderStore.contentBlocks.length === 0 && !builderStore.footerBlock" style="text-align: center; color: var(--text-gray); padding: 3rem;">
              <div style="font-size: 3rem; margin-bottom: 1rem;">📋</div>
              <p>Drag blocks here or click on them to start building</p>
            </div>

            <!-- Header Block (Fixed at Top) -->
            <div v-if="builderStore.headerBlock" class="canvas-section">
              <div class="section-label">Header (Always at Top)</div>
              <div
                class="canvas-block header-block"
                :class="{ 'selected': builderStore.selectedBlockId === builderStore.headerBlock.id }"
                @click="builderStore.selectBlock(builderStore.headerBlock.id)"
              >
                <div class="block-actions">
                  <button @click.stop="editBlock(builderStore.headerBlock)" class="btn btn-sm btn-secondary" title="Edit">
                    ✏️
                  </button>
                  <button @click.stop="builderStore.removeBlock(builderStore.headerBlock.id)" class="btn btn-sm btn-danger" title="Remove Header">
                    🗑️
                  </button>
                </div>
                <BlockRenderer :block="builderStore.headerBlock" />
              </div>
            </div>

            <!-- Content Blocks (Draggable) -->
            <div v-if="builderStore.contentBlocks.length > 0" class="canvas-section">
              <div class="section-label">Content Blocks</div>
              <div
                v-for="block in builderStore.contentBlocks"
              :key="block.id"
              class="canvas-block"
              :class="{ 'selected': builderStore.selectedBlockId === block.id }"
              @click="builderStore.selectBlock(block.id)"
            >
              <div class="block-actions">
                <button @click.stop="builderStore.moveBlockUp(block.id)" class="btn btn-sm btn-outline" title="Move Up">
                  ↑
                </button>
                <button @click.stop="builderStore.moveBlockDown(block.id)" class="btn btn-sm btn-outline" title="Move Down">
                  ↓
                </button>
                <button @click.stop="editBlock(block)" class="btn btn-sm btn-secondary" title="Edit">
                  ✏️
                </button>
                <button @click.stop="builderStore.removeBlock(block.id)" class="btn btn-sm btn-danger" title="Delete">
                  🗑️
                </button>
              </div>
              <BlockRenderer :block="block" />
              </div>
            </div>

            <!-- Footer Block (Fixed at Bottom) -->
            <div v-if="builderStore.footerBlock" class="canvas-section">
              <div class="section-label">Footer (Always at Bottom)</div>
              <div
                class="canvas-block footer-block"
                :class="{ 'selected': builderStore.selectedBlockId === builderStore.footerBlock.id }"
                @click="builderStore.selectBlock(builderStore.footerBlock.id)"
              >
                <div class="block-actions">
                  <button @click.stop="editBlock(builderStore.footerBlock)" class="btn btn-sm btn-secondary" title="Edit">
                    ✏️
                  </button>
                  <button @click.stop="builderStore.removeBlock(builderStore.footerBlock.id)" class="btn btn-sm btn-danger" title="Remove Footer">
                    🗑️
                  </button>
                </div>
                <BlockRenderer :block="builderStore.footerBlock" />
              </div>
            </div>
          </div>
        </div>

        <!-- Live Preview -->
        <div>
          <h3 class="mb-1" style="font-weight: 600;">Live Preview</h3>
          <div class="preview-container" style="height: 100%;">
            <iframe
              ref="previewFrame"
              class="preview-iframe"
              sandbox="allow-same-origin"
              :srcdoc="previewHtml"
              title="Live preview of your website"
              aria-label="Website preview window"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <EditModal
      v-if="showEditModal"
      :block="editingBlock"
      @close="showEditModal = false"
      @save="handleSaveBlock"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useBuilderStore } from '~/store/builder'
import { useSupabase } from '~/composables/useSupabase'
import BlockRenderer from '~/components/ui/BlockRenderer.vue'
import EditModal from '~/components/ui/EditModal.vue'
import Logo from '~/components/ui/Logo.vue'

definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Dashboard - OnePage AI Builder',
  meta: [
    { name: 'description', content: 'Build your website with our drag-and-drop editor, AI content generation, and real-time preview.' }
  ]
})

const builderStore = useBuilderStore()
const { signOut, user, supabase } = useSupabase()
const router = useRouter()

const showEditModal = ref(false)
const editingBlock = ref(null)
const draggedBlock = ref(null)
const saving = ref(false)
const loading = ref(false)
const statusMessage = ref('')
const statusType = ref('info')
const hasUnsavedChanges = ref(false)
const autoSaveTimer = ref(null)

const LOCALSTORAGE_KEY = 'onepage-builder-draft'
const AUTO_SAVE_INTERVAL = 30000 // 30 seconds

const previewHtml = computed(() => {
  return generatePreviewHtml(builderStore.allBlocks)
})

// Drag and drop handlers
const handleDragStart = (block) => {
  draggedBlock.value = block
}

const handleDrop = () => {
  if (draggedBlock.value) {
    addBlockToCanvas(draggedBlock.value.type)
    draggedBlock.value = null
  }
}

const addBlockToCanvas = (blockType) => {
  builderStore.addBlock(blockType)
}

const handleBlockClick = (block) => {
  if (block.isLocked) {
    showStatus(`🔒 ${block.name} requires ${block.accessLevel.toUpperCase()} plan. Upgrade to unlock!`, 'info')
    return
  }
  
  addBlockToCanvas(block.type)
}

const editBlock = (block) => {
  editingBlock.value = block
  showEditModal.value = true
}

const handleSaveBlock = (updatedContent) => {
  if (editingBlock.value) {
    builderStore.updateBlockContent(editingBlock.value.id, updatedContent)
    showEditModal.value = false
    editingBlock.value = null
  }
}

// Show status message
const showStatus = (message, type = 'info') => {
  statusMessage.value = message
  statusType.value = type
}

// Project management
const saveProject = async () => {
  if (!user.value) return

  saving.value = true
  statusMessage.value = ''

  const projectData = builderStore.exportProjectData()
  
  try {
    let data, error
    
    if (builderStore.projectId) {
      // Update existing project
      const result = await supabase
      .from('projects')
        .update({
        name: builderStore.projectName,
        data: projectData,
        updated_at: new Date().toISOString()
      })
        .eq('id', builderStore.projectId)
        .select()
      
      data = result.data
      error = result.error
    } else {
      // Insert new project
      const result = await supabase
        .from('projects')
        .insert({
          user_id: user.value.id,
          name: builderStore.projectName,
          data: projectData
      })
      .select()
      
      data = result.data
      error = result.error
    }

    if (error) throw error

    if (data && data[0]) {
      builderStore.setProjectId(data[0].id)
    }

    showStatus('✓ Project saved successfully!', 'success')
    clearLocalStorage()
    hasUnsavedChanges.value = false
  } catch (error) {
    console.error('Error saving project:', error)
    showStatus('✗ Failed to save project: ' + error.message, 'error')
  } finally {
    saving.value = false
  }
}

const loadProject = async () => {
  if (!user.value) return

  loading.value = true
  statusMessage.value = ''

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', user.value.id)
      .order('updated_at', { ascending: false })

    if (error) throw error

    if (data && data.length > 0) {
      // For simplicity, load the most recent project
      const project = data[0]
      builderStore.loadProject(project.data)
      showStatus('✓ Project loaded successfully!', 'success')
    } else {
      showStatus('ℹ No saved projects found', 'info')
    }
  } catch (error) {
    console.error('Error loading project:', error)
    showStatus('✗ Failed to load project: ' + error.message, 'error')
  } finally {
    loading.value = false
  }
}

// Export functionality
const exportToZip = async () => {
  try {
    showStatus('⏳ Generating export...', 'info')
    
    const projectData = builderStore.exportProjectData()
    
    const response = await $fetch('/api/export', {
      method: 'POST',
      body: projectData
    })

    // Create a download link
    const blob = new Blob([response], { type: 'application/zip' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${builderStore.projectName.replace(/\s+/g, '-').toLowerCase()}.zip`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
    
    showStatus('✓ Export downloaded successfully!', 'success')
  } catch (error) {
    console.error('Export error:', error)
    showStatus('✗ Failed to export project', 'error')
  }
}

const deployToGitHub = async () => {
  try {
    showStatus('⏳ Deploying to GitHub Pages...', 'info')
    
    const projectData = builderStore.exportProjectData()
    
    const response = await $fetch('/api/github-deploy', {
      method: 'POST',
      body: projectData
    })

    showStatus(`✓ Deployed successfully! Site: ${response.url}`, 'success')
  } catch (error) {
    console.error('Deploy error:', error)
    showStatus('✗ Failed to deploy to GitHub Pages: ' + error.message, 'error')
  }
}

const handleLogout = async () => {
  await signOut()
  router.push('/login')
}

// Generate preview HTML
const generatePreviewHtml = (blocks) => {
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${builderStore.projectName}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .hero { padding: 4rem 2rem; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
    .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
    .hero p { font-size: 1.25rem; margin-bottom: 2rem; opacity: 0.9; }
    .btn { display: inline-block; padding: 0.75rem 2rem; background: white; color: #667eea; border-radius: 0.5rem; text-decoration: none; font-weight: 600; }
    .features { padding: 4rem 2rem; background: #f9fafb; }
    .features h2 { text-align: center; font-size: 2.5rem; margin-bottom: 3rem; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
    .feature { text-align: center; padding: 2rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .feature-icon { font-size: 3rem; margin-bottom: 1rem; }
    .cta { padding: 4rem 2rem; text-align: center; background: #667eea; color: white; }
    .pricing { padding: 4rem 2rem; }
    .pricing h2 { text-align: center; font-size: 2.5rem; margin-bottom: 3rem; }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
    .plan { padding: 2rem; background: white; border: 2px solid #e5e7eb; border-radius: 0.5rem; text-align: center; }
    .plan-price { font-size: 3rem; font-weight: bold; margin: 1rem 0; }
    .testimonials { padding: 4rem 2rem; background: #f9fafb; }
    .testimonials h2 { text-align: center; font-size: 2.5rem; margin-bottom: 3rem; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
    .testimonial { padding: 2rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .contact { padding: 4rem 2rem; }
    .contact h2 { text-align: center; font-size: 2.5rem; margin-bottom: 2rem; }
    .contact form { max-width: 600px; margin: 0 auto; }
    .contact input, .contact textarea { width: 100%; padding: 0.75rem; margin-bottom: 1rem; border: 1px solid #e5e7eb; border-radius: 0.375rem; }
    .logocloud { padding: 4rem 2rem; text-align: center; }
    .logocloud h2 { font-size: 2rem; margin-bottom: 3rem; }
    .logos-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto; align-items: center; }
    .logo-item { padding: 1rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .team { padding: 4rem 2rem; }
    .team h2 { text-align: center; font-size: 2.5rem; margin-bottom: 1rem; }
    .team-desc { text-align: center; color: #6b7280; margin-bottom: 3rem; }
    .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
    .team-member { text-align: center; padding: 2rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .team-member img { width: 120px; height: 120px; border-radius: 50%; object-fit: cover; margin-bottom: 1rem; }
    .stats { padding: 4rem 2rem; text-align: center; }
    .stats h2 { font-size: 2rem; margin-bottom: 3rem; }
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
    .stat-item { padding: 2rem; }
    .stat-number { font-size: 3rem; font-weight: bold; margin-bottom: 0.5rem; }
    .stat-label { font-size: 1rem; opacity: 0.9; }
    .faq { padding: 4rem 2rem; max-width: 800px; margin: 0 auto; }
    .faq h2 { text-align: center; font-size: 2.5rem; margin-bottom: 1rem; }
    .faq-desc { text-align: center; color: #6b7280; margin-bottom: 3rem; }
    .faq-item { margin-bottom: 1.5rem; padding: 1.5rem; background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .faq-question { font-weight: 600; font-size: 1.125rem; margin-bottom: 0.5rem; }
    .faq-answer { color: #4b5563; line-height: 1.6; }
    .newsletter { padding: 4rem 2rem; text-align: center; }
    .newsletter h2 { font-size: 2rem; margin-bottom: 1rem; }
    .newsletter form { max-width: 500px; margin: 2rem auto 0; display: flex; gap: 0.5rem; }
    .newsletter input { flex: 1; padding: 0.75rem; border: 1px solid rgba(255,255,255,0.3); border-radius: 0.375rem; }
    .newsletter button { padding: 0.75rem 2rem; border: none; border-radius: 0.375rem; font-weight: 600; cursor: pointer; }
    .footer { padding: 2rem; text-align: center; background: #111827; color: white; }
  </style>
</head>
<body>
`

  blocks.forEach(block => {
    html += renderBlockHtml(block)
  })

  html += `
</body>
</html>`

  return html
}

const renderBlockHtml = (block) => {
  const content = block.content

  switch (block.type) {
    case 'hero':
      const heroStyle = content.bgImage 
        ? `background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${content.bgImage}') center/cover; color: ${content.textColor};`
        : `background-color: ${content.bgColor}; color: ${content.textColor};`
      
      return `
        <section class="hero" style="${heroStyle}">
          ${content.logo ? `<img src="${content.logo}" alt="Logo" style="max-height: 60px; margin-bottom: 1.5rem;">` : ''}
          <h1>${content.title}</h1>
          <p>${content.subtitle}</p>
          <a href="${content.buttonLink}" class="btn" style="background-color: ${content.buttonBgColor}; color: ${content.buttonTextColor};">${content.buttonText}</a>
        </section>
      `
    
    case 'features':
      return `
        <section class="features" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2 style="color: ${content.titleColor};">${content.title}</h2>
          <div class="features-grid">
            ${content.features.map(f => `
              <div class="feature">
                <div class="feature-icon">${f.icon}</div>
                <h3>${f.title}</h3>
                <p>${f.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `
    
    case 'cta':
      return `
        <section class="cta" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2>${content.title}</h2>
          <p>${content.description}</p>
          <a href="${content.buttonLink}" class="btn" style="margin-top: 1rem; background-color: ${content.buttonBgColor}; color: ${content.buttonTextColor};">${content.buttonText}</a>
        </section>
      `
    
    case 'pricing':
      return `
        <section class="pricing" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2 style="color: ${content.titleColor};">${content.title}</h2>
          <div class="pricing-grid">
            ${content.plans.map(plan => `
              <div class="plan">
                <h3 style="color: ${content.accentColor};">${plan.name}</h3>
                <div class="plan-price" style="color: ${content.accentColor};">${plan.price}</div>
                <ul style="list-style: none; padding: 0;">
                  ${plan.features.map(f => `<li style="margin: 0.5rem 0;">✓ ${f}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </section>
      `
    
    case 'testimonials':
      return `
        <section class="testimonials" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2 style="color: ${content.titleColor};">${content.title}</h2>
          <div class="testimonials-grid">
            ${content.testimonials.map(t => `
              <div class="testimonial">
                <div style="font-size: 2rem; margin-bottom: 1rem;">${t.avatar}</div>
                <p style="font-style: italic; margin-bottom: 1rem;">"${t.text}"</p>
                <p style="font-weight: 600;">${t.name}</p>
                <p style="color: #6b7280; font-size: 0.875rem;">${t.role}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `
    
    case 'contact':
      return `
        <section class="contact" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2 style="color: ${content.titleColor};">${content.title}</h2>
          <p style="text-align: center; margin-bottom: 2rem;">${content.description}</p>
          <form>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" class="btn" style="width: 100%; background-color: ${content.buttonBgColor}; color: ${content.buttonTextColor};">Send Message</button>
          </form>
        </section>
      `
    
    case 'logocloud':
      return `
        <section class="logocloud" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2 style="color: ${content.titleColor};">${content.title}</h2>
          <div class="logos-grid">
            ${content.logos.map(logo => `
              <div class="logo-item">
                <img src="${logo.url}" alt="${logo.name}" style="max-width: 100%; height: auto;" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div style="display: none; padding: 1rem; color: #6b7280;">${logo.name}</div>
              </div>
            `).join('')}
          </div>
        </section>
      `
    
    case 'team':
      return `
        <section class="team" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2 style="color: ${content.titleColor};">${content.title}</h2>
          <p class="team-desc">${content.description}</p>
          <div class="team-grid">
            ${content.members.map(member => `
              <div class="team-member">
                <img src="${member.image}" alt="${member.name}" onerror="this.src='https://via.placeholder.com/200'">
                <h3>${member.name}</h3>
                <p style="color: #6b7280; margin-bottom: 1rem;">${member.role}</p>
                <p style="font-size: 0.875rem; line-height: 1.6;">${member.bio}</p>
              </div>
            `).join('')}
          </div>
        </section>
      `
    
    case 'stats':
      return `
        <section class="stats" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2>${content.title}</h2>
          <div class="stats-grid">
            ${content.stats.map(stat => `
              <div class="stat-item">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">${stat.icon}</div>
                <div class="stat-number" style="color: ${content.numberColor};">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
              </div>
            `).join('')}
          </div>
        </section>
      `
    
    case 'faq':
      return `
        <section class="faq" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2 style="color: ${content.titleColor};">${content.title}</h2>
          <p class="faq-desc">${content.description}</p>
          <div>
            ${content.faqs.map(faq => `
              <div class="faq-item">
                <div class="faq-question" style="color: ${content.questionColor};">${faq.question}</div>
                <div class="faq-answer">${faq.answer}</div>
              </div>
            `).join('')}
          </div>
        </section>
      `
    
    case 'newsletter':
      return `
        <section class="newsletter" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <h2>${content.title}</h2>
          <p style="opacity: 0.9; margin-bottom: 1rem;">${content.description}</p>
          <form onsubmit="event.preventDefault(); alert('${content.successMessage}');">
            <input type="email" placeholder="${content.placeholder}" required style="background-color: rgba(255,255,255,0.9);">
            <button type="submit" style="background-color: ${content.buttonBgColor}; color: ${content.buttonTextColor};">${content.buttonText}</button>
          </form>
        </section>
      `
    
    case 'footer':
      return `
        <footer class="footer" style="background-color: ${content.bgColor}; color: ${content.textColor};">
          <p style="font-weight: 600; margin-bottom: 0.5rem;">${content.companyName}</p>
          <p style="margin-bottom: 1rem;">${content.copyright}</p>
          <div>
            ${content.links.map(link => `<a href="${link.url}" style="color: ${content.linkColor}; margin: 0 1rem; text-decoration: none;">${link.text}</a>`).join('')}
          </div>
        </footer>
      `
    
    default:
      return ''
  }
}

// LocalStorage Functions
const saveToLocalStorage = () => {
  if (!process.client) return
  
  try {
    const draftData = {
      projectName: builderStore.projectName,
      projectId: builderStore.projectId,
      headerBlock: builderStore.headerBlock,
      contentBlocks: builderStore.contentBlocks,
      footerBlock: builderStore.footerBlock,
      timestamp: Date.now()
    }
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(draftData))
  } catch (error) {
    console.error('Failed to save to localStorage:', error)
  }
}

const loadFromLocalStorage = () => {
  if (!process.client) return null
  
  try {
    const stored = localStorage.getItem(LOCALSTORAGE_KEY)
    if (stored) {
      const data = JSON.parse(stored)
      // Only use localStorage data if it's recent (within 24 hours)
      const age = Date.now() - data.timestamp
      if (age < 24 * 60 * 60 * 1000) {
        return data
      }
    }
  } catch (error) {
    console.error('Failed to load from localStorage:', error)
  }
  return null
}

const clearLocalStorage = () => {
  if (!process.client) return
  try {
    localStorage.removeItem(LOCALSTORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear localStorage:', error)
  }
}

// Auto-save function
const autoSaveToDatabase = async () => {
  if (!user.value || !hasUnsavedChanges.value) return
  
  try {
    await saveProject()
    hasUnsavedChanges.value = false
  } catch (error) {
    console.error('Auto-save failed:', error)
  }
}

// Watch for changes in blocks
watch(
  () => [builderStore.headerBlock, builderStore.contentBlocks, builderStore.footerBlock, builderStore.projectName],
  () => {
    hasUnsavedChanges.value = true
    saveToLocalStorage()
  },
  { deep: true }
)

// Initialize on mount
onMounted(() => {
  // Try to restore from localStorage
  const draft = loadFromLocalStorage()
  if (draft) {
    const shouldRestore = confirm(
      '📝 Found unsaved work from your last session. Would you like to restore it?'
    )
    
    if (shouldRestore) {
      builderStore.projectName = draft.projectName || 'My OnePage App'
      builderStore.projectId = draft.projectId || null
      builderStore.headerBlock = draft.headerBlock || null
      builderStore.contentBlocks = draft.contentBlocks || []
      builderStore.footerBlock = draft.footerBlock || null
      showStatus('✓ Draft restored from your last session', 'success')
    } else {
      clearLocalStorage()
    }
  }
  
  // Start auto-save timer
  autoSaveTimer.value = setInterval(autoSaveToDatabase, AUTO_SAVE_INTERVAL)
})

// Cleanup on unmount
onUnmounted(() => {
  if (autoSaveTimer.value) {
    clearInterval(autoSaveTimer.value)
  }
})

// Session is already handled by auth middleware
</script>

<style scoped>
.dashboard-navbar {
  background-color: var(--bg-white);
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.2s;
}

.navbar-brand-link:hover {
  opacity: 0.8;
}

.navbar-brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #4338ca 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-actions {
  display: flex;
  gap: 0.75rem;
}

.canvas-section {
  margin-bottom: 2rem;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background-color: #f3f4f6;
  border-radius: 0.375rem;
}

.canvas-block.selected {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.canvas-block.header-block {
  border-left: 4px solid #4338ca;
}

.canvas-block.footer-block {
  border-left: 4px solid #7c3aed;
}

/* Access Level Badges and Locked State */
.draggable-block {
  position: relative;
}

.draggable-block.locked {
  opacity: 0.6;
  cursor: not-allowed;
}

.draggable-block.locked:hover {
  border-color: var(--border-color);
  background-color: var(--bg-light);
}

.access-badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  letter-spacing: 0.05em;
}

.access-badge.pro {
  background-color: #dbeafe;
  color: #1e40af;
}

.access-badge.business {
  background-color: #fef3c7;
  color: #92400e;
}

.lock-icon {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  font-size: 1.25rem;
  opacity: 0.5;
}

.unsaved-indicator {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  background-color: #fef3c7;
  border-radius: 0.375rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.status-message {
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.status-text {
  flex: 1;
}

.status-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s, background-color 0.2s;
}

.status-close:hover {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.1);
}

.status-close:focus {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.status-message.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
}

.status-message.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
}

.status-message.info {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #3b82f6;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>

