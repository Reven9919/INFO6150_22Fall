//
//  StringExtensions.swift
//  EquipmentMaintainance
//
//  Created by Lin Liu on 10/22/22.
//

import Foundation


extension String{

    
    func isValidEmail(email : String) -> Bool{
        let emailRegEx = "[A-Z0-9a-z.-_]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
        let emailPred = NSPredicate(format:"SELF MATCHES %@", emailRegEx)
        print(self)
        
        return emailPred.evaluate(with: self)
    }
    
    var isPasswordStrong : Bool{
        return self.count >= 6
    }
}
