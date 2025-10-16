import { defineStore } from 'pinia'

export const useBuilderStore = defineStore('builder', {
  state: () => ({
    projectName: 'My OnePage App',
    projectId: null,
    headerBlock: null,
    contentBlocks: [],
    footerBlock: null,
    selectedBlockId: null,
    availableBlocks: [
      {
        id: 'hero',
        type: 'hero',
        name: 'Hero Section',
        icon: '🎯',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Welcome to Our App',
          subtitle: 'Build amazing things with ease',
          buttonText: 'Get Started',
          buttonLink: '#',
          logo: '',
          bgImage: '',
          bgColor: '#4338ca',
          textColor: '#ffffff',
          buttonBgColor: '#ffffff',
          buttonTextColor: '#1e40af'
        }
      },
      {
        id: 'features',
        type: 'features',
        name: 'Features Grid',
        icon: '✨',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Amazing Features',
          features: [
            { title: 'Fast', description: 'Lightning fast performance', icon: '⚡' },
            { title: 'Secure', description: 'Bank-level security', icon: '🔒' },
            { title: 'Scalable', description: 'Grows with your needs', icon: '📈' }
          ],
          bgColor: '#f3f4f6',
          textColor: '#1f2937',
          titleColor: '#111827'
        }
      },
      {
        id: 'cta',
        type: 'cta',
        name: 'Call to Action',
        icon: '📢',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Ready to get started?',
          description: 'Join thousands of satisfied users',
          buttonText: 'Sign Up Now',
          buttonLink: '#',
          bgColor: '#4338ca',
          textColor: '#ffffff',
          buttonBgColor: '#ffffff',
          buttonTextColor: '#1e40af'
        }
      },
      {
        id: 'contact',
        type: 'contact',
        name: 'Contact Form',
        icon: '📧',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Get in Touch',
          description: 'We\'d love to hear from you',
          bgColor: '#ffffff',
          textColor: '#1f2937',
          titleColor: '#111827',
          buttonBgColor: '#1e40af',
          buttonTextColor: '#ffffff'
        }
      },
      {
        id: 'pricing',
        type: 'pricing',
        name: 'Pricing Table',
        icon: '💰',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Simple Pricing',
          plans: [
            { name: 'Basic', price: '$9', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
            { name: 'Pro', price: '$29', features: ['All Basic', 'Feature 4', 'Feature 5'] },
            { name: 'Enterprise', price: '$99', features: ['All Pro', 'Feature 6', 'Priority Support'] }
          ],
          bgColor: '#ffffff',
          textColor: '#1f2937',
          titleColor: '#111827',
          accentColor: '#1e40af'
        }
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        name: 'Testimonials',
        icon: '💬',
        accessLevel: 'basic',
        defaultContent: {
          title: 'What Our Users Say',
          testimonials: [
            { name: 'John Doe', role: 'CEO', text: 'Amazing product!', avatar: '👨' },
            { name: 'Jane Smith', role: 'Designer', text: 'Love the simplicity', avatar: '👩' }
          ],
          bgColor: '#f3f4f6',
          textColor: '#1f2937',
          titleColor: '#111827'
        }
      },
      {
        id: 'logocloud',
        type: 'logocloud',
        name: 'Logo Cloud',
        icon: '🏢',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Trusted by Leading Companies',
          logos: [
            { name: 'Company A', url: 'https://via.placeholder.com/150x50?text=Company+A' },
            { name: 'Company B', url: 'https://via.placeholder.com/150x50?text=Company+B' },
            { name: 'Company C', url: 'https://via.placeholder.com/150x50?text=Company+C' },
            { name: 'Company D', url: 'https://via.placeholder.com/150x50?text=Company+D' },
            { name: 'Company E', url: 'https://via.placeholder.com/150x50?text=Company+E' },
            { name: 'Company F', url: 'https://via.placeholder.com/150x50?text=Company+F' }
          ],
          bgColor: '#ffffff',
          textColor: '#1f2937',
          titleColor: '#111827'
        }
      },
      {
        id: 'team',
        type: 'team',
        name: 'Team Section',
        icon: '👥',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Meet Our Team',
          description: 'The talented people behind our success',
          members: [
            { name: 'John Doe', role: 'CEO & Founder', image: 'https://via.placeholder.com/200', bio: 'Visionary leader with 10+ years experience' },
            { name: 'Jane Smith', role: 'CTO', image: 'https://via.placeholder.com/200', bio: 'Tech expert and innovation driver' },
            { name: 'Mike Johnson', role: 'Head of Design', image: 'https://via.placeholder.com/200', bio: 'Creative mind behind our products' }
          ],
          bgColor: '#f3f4f6',
          textColor: '#1f2937',
          titleColor: '#111827'
        }
      },
      {
        id: 'stats',
        type: 'stats',
        name: 'Statistics',
        icon: '📊',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Our Impact in Numbers',
          stats: [
            { number: '10K+', label: 'Happy Customers', icon: '😊' },
            { number: '99%', label: 'Satisfaction Rate', icon: '⭐' },
            { number: '24/7', label: 'Support Available', icon: '💬' },
            { number: '50+', label: 'Countries Served', icon: '🌍' }
          ],
          bgColor: '#4338ca',
          textColor: '#ffffff',
          numberColor: '#ffffff'
        }
      },
      {
        id: 'faq',
        type: 'faq',
        name: 'FAQ Section',
        icon: '❓',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Frequently Asked Questions',
          description: 'Find answers to common questions',
          faqs: [
            { question: 'How does it work?', answer: 'Our platform makes it easy to build websites with drag-and-drop tools and AI assistance.' },
            { question: 'Is it free to start?', answer: 'Yes! Start with our free plan and upgrade when you need more features.' },
            { question: 'Can I export my site?', answer: 'Absolutely! Export as ZIP or deploy directly to GitHub Pages.' },
            { question: 'Do you offer support?', answer: 'Yes, we provide support via email and our help center.' }
          ],
          bgColor: '#ffffff',
          textColor: '#1f2937',
          titleColor: '#111827',
          questionColor: '#1e40af'
        }
      },
      {
        id: 'newsletter',
        type: 'newsletter',
        name: 'Newsletter Signup',
        icon: '📮',
        accessLevel: 'basic',
        defaultContent: {
          title: 'Stay Updated',
          description: 'Subscribe to our newsletter for the latest updates and tips',
          buttonText: 'Subscribe',
          placeholder: 'Enter your email',
          successMessage: 'Thanks for subscribing!',
          bgColor: '#4338ca',
          textColor: '#ffffff',
          buttonBgColor: '#ffffff',
          buttonTextColor: '#1e40af'
        }
      },
      {
        id: 'footer',
        type: 'footer',
        name: 'Footer',
        icon: '📄',
        accessLevel: 'basic',
        defaultContent: {
          companyName: 'Your Company',
          copyright: '© 2025 All rights reserved',
          links: [
            { text: 'Privacy', url: '#' },
            { text: 'Terms', url: '#' },
            { text: 'Contact', url: '#' }
          ],
          bgColor: '#1f2937',
          textColor: '#ffffff',
          linkColor: '#93c5fd'
        }
      }
    ],
    
    userAccessLevel: 'basic' // basic, pro, business
  }),

  getters: {
    allBlocks: (state) => {
      const blocks = []
      if (state.headerBlock) blocks.push(state.headerBlock)
      blocks.push(...state.contentBlocks)
      if (state.footerBlock) blocks.push(state.footerBlock)
      return blocks
    },
    
    selectedBlock: (state) => {
      if (state.headerBlock?.id === state.selectedBlockId) return state.headerBlock
      if (state.footerBlock?.id === state.selectedBlockId) return state.footerBlock
      return state.contentBlocks.find(block => block.id === state.selectedBlockId)
    },
    
    getBlockById: (state) => (id) => {
      if (state.headerBlock?.id === id) return state.headerBlock
      if (state.footerBlock?.id === id) return state.footerBlock
      return state.contentBlocks.find(block => block.id === id)
    },
    
    hasHeader: (state) => !!state.headerBlock,
    hasFooter: (state) => !!state.footerBlock,
    
    availableBlocksByAccess: (state) => {
      const levels = { basic: 1, pro: 2, business: 3 }
      const userLevel = levels[state.userAccessLevel] || 1
      
      return state.availableBlocks.map(block => ({
        ...block,
        isLocked: levels[block.accessLevel] > userLevel,
        upgradeRequired: block.accessLevel !== 'basic' && levels[block.accessLevel] > userLevel
      }))
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

      // Hero blocks go to header (only one allowed)
      if (blockType === 'hero') {
        this.headerBlock = newBlock
      }
      // Footer blocks go to footer (only one allowed)
      else if (blockType === 'footer') {
        this.footerBlock = newBlock
      }
      // All other blocks go to content
      else {
        this.contentBlocks.push(newBlock)
      }
      
      this.selectedBlockId = newBlock.id
    },

    removeBlock(blockId) {
      // Check if it's the header
      if (this.headerBlock?.id === blockId) {
        this.headerBlock = null
      }
      // Check if it's the footer
      else if (this.footerBlock?.id === blockId) {
        this.footerBlock = null
      }
      // Otherwise, remove from content blocks
      else {
        const index = this.contentBlocks.findIndex(b => b.id === blockId)
        if (index > -1) {
          this.contentBlocks.splice(index, 1)
        }
      }
      
      if (this.selectedBlockId === blockId) {
        this.selectedBlockId = null
      }
    },

    updateBlockContent(blockId, content) {
      if (this.headerBlock?.id === blockId) {
        this.headerBlock.content = { ...this.headerBlock.content, ...content }
      } else if (this.footerBlock?.id === blockId) {
        this.footerBlock.content = { ...this.footerBlock.content, ...content }
      } else {
        const block = this.contentBlocks.find(b => b.id === blockId)
        if (block) {
          block.content = { ...block.content, ...content }
        }
      }
    },

    moveBlockUp(blockId) {
      // Only move content blocks (header/footer are fixed)
      const index = this.contentBlocks.findIndex(b => b.id === blockId)
      if (index > 0) {
        const temp = this.contentBlocks[index]
        this.contentBlocks[index] = this.contentBlocks[index - 1]
        this.contentBlocks[index - 1] = temp
      }
    },

    moveBlockDown(blockId) {
      // Only move content blocks (header/footer are fixed)
      const index = this.contentBlocks.findIndex(b => b.id === blockId)
      if (index < this.contentBlocks.length - 1 && index > -1) {
        const temp = this.contentBlocks[index]
        this.contentBlocks[index] = this.contentBlocks[index + 1]
        this.contentBlocks[index + 1] = temp
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
    
    setUserAccessLevel(level) {
      this.userAccessLevel = level
    },
    
    canAccessBlock(blockType) {
      const levels = { basic: 1, pro: 2, business: 3 }
      const block = this.availableBlocks.find(b => b.type === blockType)
      if (!block) return false
      
      const userLevel = levels[this.userAccessLevel] || 1
      const blockLevel = levels[block.accessLevel] || 1
      
      return blockLevel <= userLevel
    },

    loadProject(projectData) {
      this.projectName = projectData.name || 'My OnePage App'
      this.projectId = projectData.id || null
      
      // Handle legacy format (old saves with single blocks array)
      if (projectData.blocks && !projectData.headerBlock) {
        const blocks = projectData.blocks || []
        this.headerBlock = blocks.find(b => b.type === 'hero') || null
        this.footerBlock = blocks.find(b => b.type === 'footer') || null
        this.contentBlocks = blocks.filter(b => b.type !== 'hero' && b.type !== 'footer')
      } else {
        // New format
        this.headerBlock = projectData.headerBlock || null
        this.contentBlocks = projectData.contentBlocks || []
        this.footerBlock = projectData.footerBlock || null
      }
      
      this.selectedBlockId = null
    },

    resetProject() {
      this.projectName = 'My OnePage App'
      this.projectId = null
      this.headerBlock = null
      this.contentBlocks = []
      this.footerBlock = null
      this.selectedBlockId = null
    },

    exportProjectData() {
      return {
        id: this.projectId,
        name: this.projectName,
        headerBlock: this.headerBlock,
        contentBlocks: this.contentBlocks,
        footerBlock: this.footerBlock,
        exportedAt: new Date().toISOString()
      }
    }
  }
})

