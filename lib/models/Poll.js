'use strict'

const PollOption = require('./PollOption')

/**
 * This object contains information about a poll.
 */

class Poll {
   /**
    *
    * @param {string} id
    * @param {string} question
    * @param {PollOption[]} options
    * @param {boolean} isClosed
   */
   constructor(id, question, options, isClosed) {
       this._id = id
       this._question = question
       this._options = options
       this._isClosed = isClosed
   }

   /**
    * Unique poll identifier
    * @returns {string}
   */
   get id() {
       return this._id
   }

   /**
    * Poll question, 1-255 characters
    * @returns {string}
   */
   get question() {
       return this._question
   }

   /**
    * List of poll options
    * @returns {PollOption[]}
   */
   get options() {
       return this._options
   }

   /**
    * True, if the poll is closed
    * @returns {boolean}
   */
   get isClosed() {
       return this._isClosed
   }

   /**
    *
    * @param {Object} raw
    * @returns {Poll}
    */
   static deserialize(raw) {
      return new Poll(raw['id'], raw['question'], raw['options'] ? raw['options'].map(item => PollOption.deserialize(item)) : null, raw['is_closed'])
   }

   /**
    *
    * @returns {Object}
    */
   serialize() {
      return { 
          id: this.id ? this.id : undefined, 
          question: this.question ? this.question : undefined, 
          options: this.options ? this.options.map(item => item.serialize()) : undefined, 
          is_closed: this.isClosed ? this.isClosed : undefined
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

module.exports = Poll