'use strict';

const StatusCodes = require('./statusCodes.json');

/**
 * Returns an object with status codes mapping to status messages.
 * @return { Object }
 */
const getStatusCodesList = function() {
  return StatusCodes;
}

/**
 * Get status message from status code.
 * Returns undefined if no message exists for that code.
 * @param { Number } code The status code.
 * @return { String | undefined } The status message.
 */
const getStatusMsg = function(code) {
  if (typeof code !== 'number')
    throw new TypeError(`http-statcodes: getStatusMsg: expected 'Number', recieved '${typeof code}'`);
  return StatusCodes[code];
}

exports.StatusCodes = StatusCodes;
exports.getStatusCodesList = getStatusCodesList;
exports.getStatusMsg = getStatusMsg;
