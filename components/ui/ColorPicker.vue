<template>
  <div class="color-picker">
    <label v-if="label" class="color-label">{{ label }}</label>
    <div class="color-input-wrapper">
      <input
        :value="modelValue"
        @input="handleInput"
        type="color"
        class="color-input-visual"
      />
      <input
        :value="modelValue"
        @input="handleInput"
        type="text"
        class="color-input-text"
        placeholder="#000000"
        maxlength="7"
      />
    </div>
    
    <!-- Contrast Check -->
    <div v-if="checkContrast && contrastWith" class="contrast-check">
      <div class="contrast-info" :class="contrastClass">
        <span class="contrast-badge">{{ contrastResult.level }}</span>
        <span class="contrast-ratio">{{ contrastResult.ratio }}:1</span>
        <span v-if="contrastResult.passes" class="contrast-status">✓ WCAG AA Pass</span>
        <span v-else class="contrast-status warn">✗ Fails WCAG AA</span>
      </div>
      
      <div v-if="!contrastResult.passes" class="contrast-warning">
        <p>⚠️ Low contrast ratio. Minimum required: {{  contrastResult.minRequired }}:1</p>
        <p>Consider using {{ suggestion.suggestedText }} for better readability.</p>
      </div>
      
      <!-- Preview -->
      <div class="contrast-preview" :style="previewStyle">
        <span>Sample Text</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { checkContrast as checkContrastUtil, suggestColors } from '~/utils/contrast'

const props = defineProps({
  modelValue: {
    type: String,
    default: '#000000'
  },
  label: {
    type: String,
    default: ''
  },
  checkContrast: {
    type: Boolean,
    default: false
  },
  contrastWith: {
    type: String,
    default: ''
  },
  textSize: {
    type: String,
    default: 'normal' // 'normal' or 'large'
  }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (e) => {
  emit('update:modelValue', e.target.value)
}

const contrastResult = computed(() => {
  if (!props.checkContrast || !props.contrastWith) {
    return { passes: true, ratio: '0', level: 'N/A', minRequired: 0 }
  }
  return checkContrastUtil(props.modelValue, props.contrastWith, props.textSize)
})

const suggestion = computed(() => {
  if (!props.checkContrast || !props.contrastWith || contrastResult.value.passes) {
    return null
  }
  return suggestColors(props.modelValue, props.contrastWith)
})

const contrastClass = computed(() => {
  if (!props.checkContrast) return ''
  return contrastResult.value.passes ? 'pass' : 'fail'
})

const previewStyle = computed(() => {
  if (props.checkContrast && props.contrastWith) {
    return {
      backgroundColor: props.contrastWith,
      color: props.modelValue
    }
  }
  return {}
})
</script>

<style scoped>
.color-picker {
  margin-bottom: 1rem;
}

.color-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-dark);
  font-size: 0.875rem;
}

.color-input-wrapper {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.color-input-visual {
  width: 60px;
  height: 40px;
  border: 2px solid var(--border-color);
  border-radius: 0.375rem;
  cursor: pointer;
  padding: 0;
}

.color-input-visual::-webkit-color-swatch-wrapper {
  padding: 0;
}

.color-input-visual::-webkit-color-swatch {
  border: none;
  border-radius: 0.25rem;
}

.color-input-text {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.375rem;
  font-family: monospace;
  font-size: 0.875rem;
}

.color-input-text:focus {
  outline: none;
  border-color: var(--primary-color);
}

.contrast-check {
  margin-top: 0.75rem;
  padding: 0.75rem;
  background-color: var(--bg-light);
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.contrast-info {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.contrast-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 700;
  font-size: 0.75rem;
}

.contrast-info.pass .contrast-badge {
  background-color: #10b981;
  color: white;
}

.contrast-info.fail .contrast-badge {
  background-color: #ef4444;
  color: white;
}

.contrast-ratio {
  font-weight: 600;
  font-family: monospace;
}

.contrast-status {
  color: #10b981;
  font-weight: 500;
}

.contrast-status.warn {
  color: #ef4444;
}

.contrast-warning {
  margin-top: 0.75rem;
  padding: 0.75rem;
  background-color: #fef3c7;
  border-left: 3px solid #f59e0b;
  border-radius: 0.25rem;
  font-size: 0.8125rem;
}

.contrast-warning p {
  margin: 0;
  margin-bottom: 0.25rem;
}

.contrast-warning p:last-child {
  margin-bottom: 0;
}

.contrast-preview {
  margin-top: 0.75rem;
  padding: 1rem;
  border-radius: 0.375rem;
  text-align: center;
  font-weight: 500;
  border: 1px solid var(--border-color);
}
</style>

