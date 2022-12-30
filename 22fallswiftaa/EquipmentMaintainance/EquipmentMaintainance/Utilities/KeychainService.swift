//
//  KeychainService.swift
//  EquipmentMaintainance
//
//  Created by Lin Liu on 10/22/22.
//

import Foundation
import KeychainSwift

class KeychainService{
    var _keychain = KeychainSwift()
    var kayChian : KeychainSwift{
        get{
            return _keychain
        }
        set{
            _keychain = newValue
        }
    }
}
