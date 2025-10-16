import { defineStore } from 'pinia'

export const useBuilderStore = defineStore('builder', {
  state: () => ({
    projectName: 'My OnePage App',
    projectId: null,
    blocks: [],
    selectedBlockId: null,
    availableBlocks: [
      {
        id: 'hero',
        type: 'hero',
        name: 'Hero Section',
        icon: '🎯',
        defaultContent: {
          title: 'Welcome to Our App',
          subtitle: 'Build amazing things with ease',
          buttonText: 'Get Started',
          buttonLink: '#',
          logo: '',
          bgImage: '',
          bgColor: '#667eea',
          textColor: '#ffffff',
          buttonBgColor: '#ffffff',
          buttonTextColor: '#667eea'
        }
      },
      {
        id: 'features',
        type: 'features',
        name: 'Features Grid',
        icon: '✨',
        defaultContent: {
          title: 'Amazing Features',
          features: [
            { title: 'Fast', description: 'Lightning fast performance', icon: '⚡' },
            { title: 'Secure', description: 'Bank-level security', icon: '🔒' },
            { title: 'Scalable', description: 'Grows with your needs', icon: '📈' }
          ],
          bgColor: '#f7fafc',
          textColor: '#2d3748',
          titleColor: '#1a202c'
        }
      },
      {
        id: 'cta',
        type: 'cta',
        name: 'Call to Action',
        icon: '📢',
        defaultContent: {
          title: 'Ready to get started?',
          description: 'Join thousands of satisfied users',
          buttonText: 'Sign Up Now',
          buttonLink: '#',
          bgColor: '#667eea',
          textColor: '#ffffff',
          buttonBgColor: '#ffffff',
          buttonTextColor: '#667eea'
        }
      },
      {
        id: 'contact',
        type: 'contact',
        name: 'Contact Form',
        icon: '📧',
        defaultContent: {
          title: 'Get in Touch',
          description: 'We\'d love to hear from you',
          bgColor: '#ffffff',
          textColor: '#2d3748',
          titleColor: '#1a202c',
          buttonBgColor: '#667eea',
          buttonTextColor: '#ffffff'
        }
      },
      {
        id: 'pricing',
        type: 'pricing',
        name: 'Pricing Table',
        icon: '💰',
        defaultContent: {
          title: 'Simple Pricing',
          plans: [
            { name: 'Basic', price: '$9', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
            { name: 'Pro', price: '$29', features: ['All Basic', 'Feature 4', 'Feature 5'] },
            { name: 'Enterprise', price: '$99', features: ['All Pro', 'Feature 6', 'Priority Support'] }
          ],
          bgColor: '#ffffff',
          textColor: '#2d3748',
          titleColor: '#1a202c',
          accentColor: '#667eea'
        }
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        name: 'Testimonials',
        icon: '💬',
        defaultContent: {
          title: 'What Our Users Say',
          testimonials: [
            { name: 'John Doe', role: 'CEO', text: 'Amazing product!', avatar: '👨' },
            { name: 'Jane Smith', role: 'Designer', text: 'Love the simplicity', avatar: '👩' }
          ],
          bgColor: '#f7fafc',
          textColor: '#2d3748',
          titleColor: '#1a202c'
        }
      },
      {
        id: 'footer',
        type: 'footer',
        name: 'Footer',
        icon: '📄',
        defaultContent: {
          companyName: 'Your Company',
          copyright: '© 2025 All rights reserved',
          links: [
            { text: 'Privacy', url: '#' },
            { text: 'Terms', url: '#' },
            { text: 'Contact', url: '#' }
          ],
          bgColor: '#2d3748',
          textColor: '#ffffff',
          linkColor: '#a0aec0'
        }
      }
    ]
  }),

  getters: {
    selectedBlock: (state) => {
      return state.blocks.find(block => block.id === state.selectedBlockId)
    },
    
    getBlockById: (state) => (id) => {
      return state.blocks.find(block => block.id === id)
    }
  },

  actions: {
    addBlock(blockType) {
      const template = this.availableBlocks.find(b => b.type === blockType)
      if (!template) return

      const newBlock = {
        id: `${blockType}-${Date.now()}`,
        type: blockType,
        name: template.name,
        content: JSON.parse(JSON.stringify(template.defaultContent))
      }

      this.blocks.push(newBlock)
      this.selectedBlockId = newBlock.id
    },

    removeBlock(blockId) {
      const index = this.blocks.findIndex(b => b.id === blockId)
      if (index > -1) {
        this.blocks.splice(index, 1)
        if (this.selectedBlockId === blockId) {
          this.selectedBlockId = null
        }
      }
    },

    updateBlockContent(blockId, content) {
      const block = this.blocks.find(b => b.id === blockId)
      if (block) {
        block.content = { ...block.content, ...content }
      }
    },

    moveBlockUp(blockId) {
      const index = this.blocks.findIndex(b => b.id === blockId)
      if (index > 0) {
        const temp = this.blocks[index]
        this.blocks[index] = this.blocks[index - 1]
        this.blocks[index - 1] = temp
      }
    },

    moveBlockDown(blockId) {
      const index = this.blocks.findIndex(b => b.id === blockId)
      if (index < this.blocks.length - 1 && index > -1) {
        const temp = this.blocks[index]
        this.blocks[index] = this.blocks[index + 1]
        this.blocks[index + 1] = temp
      }
    },

    selectBlock(blockId) {
      this.selectedBlockId = blockId
    },

    clearSelection() {
      this.selectedBlockId = null
    },

    setProjectName(name) {
      this.projectName = name
    },

    setProjectId(id) {
      this.projectId = id
    },

    loadProject(projectData) {
      this.projectName = projectData.name || 'My OnePage App'
      this.projectId = projectData.id || null
      this.blocks = projectData.blocks || []
      this.selectedBlockId = null
    },

    resetProject() {
      this.projectName = 'My OnePage App'
      this.projectId = null
      this.blocks = []
      this.selectedBlockId = null
    },

    exportProjectData() {
      return {
        id: this.projectId,
        name: this.projectName,
        blocks: this.blocks,
        exportedAt: new Date().toISOString()
      }
    }
  }
})

