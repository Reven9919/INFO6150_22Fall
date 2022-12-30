//
//  KeychianService.swift
//  EquipmentManagement
//
//  Created by Lin Liu on 10/29/22.
//

import Foundation
import KeychainSwift

class KeyChainService{
    var _keyChain = KeychainSwift()
    var keyChain: KeychainSwift{
        get{
            return _keyChain
        }
        set{
            _keyChain = newValue
        }
    }
    
    
}
