'use strict'

/**
 * This object contains information about one answer option in a poll.
 */

class PollOption {
   /**
    *
    * @param {string} text
    * @param {number} voterCount
   */
   constructor(text, voterCount) {
       this._text = text
       this._voterCount = voterCount
   }

   /**
    * Option text, 1-100 characters
    * @returns {string}
   */
   get text() {
       return this._text
   }

   /**
    * Number of users that voted for this option
    * @returns {number}
   */
   get voterCount() {
       return this._voterCount
   }

   /**
    *
    * @param {Object} raw
    * @returns {PollOption}
    */
   static deserialize(raw) {
      return new PollOption(raw['text'], raw['voter_count'])
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          text: this.text ? this.text : undefined, 
          voter_count: this.voterCount ? this.voterCount : undefined
      }
   }

   /**
    *
    * @returns {string}
    */
   toJSON() {
      return this.serialize()
   }
}

module.exports = PollOption