import { APIS } from '../../constants/$$qy$$'
import { doGet } from '../base'

/**
 * whoami
 * @param {*} args 
 */
export function whoami (args) {
  console.log('I am domain $$QY$$')
  return doGet(args, 'whoami', APIS)
}