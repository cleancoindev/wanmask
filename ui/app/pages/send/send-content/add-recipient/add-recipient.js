import {
  REQUIRED_ERROR,
  INVALID_RECIPIENT_ADDRESS_ERROR,
  KNOWN_RECIPIENT_ADDRESS_ERROR,
  INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR,
} from '../../send.constants'

import { isValidAddress, isEthNetwork, checkExistingAddresses } from '../../../../helpers/utils/util'
import ethUtil from 'wanchainjs-util'
import contractMap from '@wanchainmask/wan-contract-metadata'

export function getToErrorObject (to, hasHexData = false, network) {
  let toError = null
  if (!to) {
    if (!hasHexData) {
      toError = REQUIRED_ERROR
    }
  } else if (!isValidAddress(to.toLowerCase(), network) && !toError) {
    console.log(`getToErrorObject to Error ${toError}`)
    toError = isEthNetwork(network) ? INVALID_RECIPIENT_ADDRESS_ERROR : INVALID_RECIPIENT_ADDRESS_NOT_ETH_NETWORK_ERROR
  }

  return { to: toError }
}

export function getToWarningObject (to, tokens = [], sendToken = null) {
  let toWarning = null
  if (sendToken && (ethUtil.toChecksumAddress(to) in contractMap || checkExistingAddresses(to, tokens))) {
    toWarning = KNOWN_RECIPIENT_ADDRESS_ERROR
  }
  return { to: toWarning }
}
