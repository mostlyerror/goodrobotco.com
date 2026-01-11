const fs = require('fs')
const path = require('path')

function validateSanityBuild() {
  console.log('Validating Sanity integration in build output...\n')

  const outDir = path.join(process.cwd(), 'out')
  let passed = 0
  let failed = 0

  // Test 1: Blog directory exists
  console.log('Test 1: Blog directory exists')
  const blogDir = path.join(outDir, 'blog')
  if (fs.existsSync(blogDir)) {
    console.log('✓ Blog directory generated')
    passed++
  } else {
    console.log('✗ Blog directory missing')
    failed++
  }

  // Test 2: Blog index exists
  console.log('\nTest 2: Blog index page exists')
  const blogIndex = path.join(blogDir, 'index.html')
  if (fs.existsSync(blogIndex)) {
    console.log('✓ Blog index page generated')
    passed++
  } else {
    console.log('✗ Blog index page missing')
    failed++
  }

  // Test 3: If blog posts exist in Sanity, verify HTML files generated
  console.log('\nTest 3: Blog posts generated correctly')
  if (fs.existsSync(blogDir)) {
    const blogContents = fs.readdirSync(blogDir, { withFileTypes: true })
    const postDirs = blogContents.filter(dirent => dirent.isDirectory())

    if (postDirs.length > 0) {
      console.log(`✓ Found ${postDirs.length} blog post(s) generated`)
      passed++

      // Verify each post has an index.html
      let allPostsValid = true
      for (const dir of postDirs) {
        const postHtml = path.join(blogDir, dir.name, 'index.html')
        if (!fs.existsSync(postHtml)) {
          console.log(`✗ Missing HTML for blog post: ${dir.name}`)
          allPostsValid = false
          failed++
        }
      }
      if (allPostsValid) {
        console.log('✓ All blog posts have valid HTML')
        passed++
      }
    } else {
      console.log('ℹ No blog posts found (Sanity may be empty)')
    }
  }

  console.log(`\nBuild Validation: ${passed} passed, ${failed} failed`)
  return failed === 0
}

// Run validation if called directly
if (require.main === module) {
  const success = validateSanityBuild()
  process.exit(success ? 0 : 1)
}

module.exports = { validateSanityBuild }
