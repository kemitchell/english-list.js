/* Copyright 2017 Kyle E. Mitchell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function (conjunction, array, serialComma) {
  if (!Array.isArray(array) || !conjunction.toString) {
    throw new TypeError()
  }
  conjunction = conjunction.toString()
  serialComma = serialComma === undefined ? true : !!serialComma
  var length = array.length
  if (length === 0) {
    throw new Error('Cannot create an English list of an empty array')
  } else if (length === 1) {
    return array[0].toString()
  } else if (length === 2) {
    return (
      array[0].toString() +
      ' ' +
      conjunction +
      ' ' +
      array[1].toString()
    )
  } else {
    var strings = array.map(function (element) {
      return element.toString()
    })
    var front = strings.slice(0, length - 1)
    var last = strings[length - 1]
    return (
      front.join(', ') +
      (serialComma ? ', ' : ' ') +
      conjunction +
      ' ' +
      last
    )
  }
}
