const http = require('http');

/**
 * Make an HTTP GET request with timeout handling
 * @param {string} url - Full URL to request
 * @param {number} timeout - Timeout in milliseconds
 * @returns {Promise<{status: number, responseTime: number}>}
 */
function makeRequest(url, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const req = http.get(url, (res) => {
      const responseTime = Date.now() - startTime;

      // Consume response data to free up memory
      res.resume();

      resolve({
        status: res.statusCode,
        responseTime
      });
    });

    // Set timeout
    req.setTimeout(timeout, () => {
      req.destroy();
      reject(new Error(`Request timed out after ${timeout}ms`));
    });

    // Handle connection errors
    req.on('error', (err) => {
      if (err.code === 'ECONNREFUSED') {
        reject(new Error('Server not running. Try running `npm run dev` first'));
      } else {
        reject(err);
      }
    });
  });
}

/**
 * Format a successful test result
 * @param {string} route - The route tested
 * @param {number} status - HTTP status code
 * @param {number} responseTime - Response time in ms
 * @returns {string}
 */
function formatResult(route, status, responseTime) {
  return `  Testing GET ${route}
    Response time: ${responseTime}ms
    Status: ${status} OK
    [PASS]`;
}

/**
 * Format an error message
 * @param {string} route - The route that failed
 * @param {Error} error - The error object
 * @param {number|null} status - HTTP status code if available
 * @returns {string}
 */
function logError(route, error, status = null) {
  let errorMsg = `  Testing GET ${route}\n`;

  if (status && status !== 200) {
    errorMsg += `    Error: Expected 200, got ${status}\n`;
  } else {
    errorMsg += `    Error: ${error.message}\n`;
  }

  errorMsg += `    [FAIL]`;
  return errorMsg;
}

module.exports = {
  makeRequest,
  formatResult,
  logError
};
