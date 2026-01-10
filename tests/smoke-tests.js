const config = require('./config');
const { makeRequest, formatResult, logError } = require('./utils');

/**
 * Run smoke tests against all configured routes
 */
async function runSmokeTests() {
  console.log(`Starting smoke tests against ${config.baseUrl}\n`);
  console.log('Testing routes...');

  let passed = 0;
  let failed = 0;
  const results = [];

  for (const route of config.routes) {
    const url = `${config.baseUrl}${route}`;

    try {
      const { status, responseTime } = await makeRequest(url, config.timeout);

      if (status === 200) {
        console.log(formatResult(url, status, responseTime));
        passed++;
        results.push({ route, status: 'PASS' });
      } else {
        console.log(logError(url, new Error(`Expected 200, got ${status}`), status));
        failed++;
        results.push({ route, status: 'FAIL', error: `Status ${status}` });
      }
    } catch (error) {
      console.log(logError(url, error));
      failed++;
      results.push({ route, status: 'FAIL', error: error.message });
    }

    console.log(''); // Empty line between tests
  }

  // Print summary
  console.log(`Results: ${passed} passed, ${failed} failed`);

  if (failed === 0) {
    console.log('Smoke tests completed successfully!\n');
    process.exit(0);
  } else {
    console.log('Smoke tests failed. See errors above.\n');
    process.exit(1);
  }
}

// Run tests
runSmokeTests().catch((error) => {
  console.error('Unexpected error running smoke tests:', error);
  process.exit(1);
});
