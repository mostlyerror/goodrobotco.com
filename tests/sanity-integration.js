const { makeRequest, formatResult, logError } = require('./utils')

async function testSanityIntegration() {
  console.log('Testing Sanity CMS integration...\n')

  const baseUrl = 'http://localhost:3000'
  let passed = 0
  let failed = 0

  // Test 1: Blog listing page loads
  console.log('Test 1: Blog listing page loads')
  try {
    const { status, responseTime } = await makeRequest(`${baseUrl}/blog`, 5000)
    if (status === 200) {
      console.log(formatResult(`${baseUrl}/blog`, status, responseTime))
      passed++
    } else {
      throw new Error(`Expected 200, got ${status}`)
    }
  } catch (error) {
    console.log(logError(`${baseUrl}/blog`, error))
    failed++
  }

  console.log(`\nSanity Integration Tests: ${passed} passed, ${failed} failed`)
  return failed === 0
}

// Run tests if called directly
if (require.main === module) {
  testSanityIntegration()
    .then((success) => {
      process.exit(success ? 0 : 1)
    })
    .catch((error) => {
      console.error('Test error:', error)
      process.exit(1)
    })
}

module.exports = { testSanityIntegration }
