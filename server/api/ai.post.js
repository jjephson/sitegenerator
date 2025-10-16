export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  
  const { prompt } = body
  
  if (!prompt) {
    throw createError({
      statusCode: 400,
      message: 'Prompt is required'
    })
  }

  try {
    // Call ai.yo.help API
    const response = await $fetch(config.public.aiApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.aiApiKey}`
      },
      body: {
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7
      }
    })

    return {
      text: response.text || response.choices?.[0]?.text || 'Generated content',
      success: true
    }
  } catch (error) {
    console.error('AI API Error:', error)
    
    // Fallback mock response for development
    return {
      text: `Generated: ${prompt}`,
      success: true,
      mock: true
    }
  }
})

