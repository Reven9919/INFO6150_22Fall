//
//  DashboardViewController.swift
//  EquipmentManagement
//
//  Created by Lin Liu on 10/29/22.
//

import UIKit
import FirebaseAuth
import FirebaseDatabase

class DashboardViewController: UIViewController {

    @IBOutlet weak var txtSerialNumber: UITextField!
    
    
    @IBOutlet weak var lblEquipmentName: UILabel!
    
    @IBOutlet weak var lblMakeName: UILabel!
    
    @IBOutlet weak var lblModelName: UILabel!
    
    @IBOutlet weak var lblRatingName: UILabel!
    
    var ref: DatabaseReference
    
    override func viewDidLoad() {
        super.viewDidLoad()
        ref = Database.database().reference()
        

    }
    

    @IBAction func logoutAction(_ sender: Any) {
        let keychain = KeyChainService().keyChain
        keychain.clear()
        
        do{
           try Auth.auth().signOut()
            
        }
        catch{
            print("Unable to logout")
            
        }
        self.navigationController?.popViewController(animated: true)
    }
    
    
    @IBAction func scanQRCodeAction(_ sender: Any) {
    }
    
    @IBAction func submitAction(_ sender: Any) {
        guard let serialNumber = txtSerialNumber.text else{return}
        if serialNumber == ""{
            return
        }
        ref.child("Equipment/\(serialNumber)").getData(completion:  { error, snapshot in
            guard error == nil else {
                print(error!.localizedDescription)
                return;
            }
            guard let snapshot = snapshot else{return}
          
            
            
            guard let value = snapshot.value as? NSDictionary else{return}
            
            let equipment = EquipmentMode()
            
            equipment.equipment = value?["Equipment"] as? String ?? ""
            equipment.make = value?["Make"] as? String ?? ""
            equipment.model = value?["Model"] as? String ?? ""
            equipment.rating = value?["Rating"] as? String ?? ""
          
     
            
            self.lblEquipmentName.text = equipment
            self.lblMakeName.text = make
            self.lblModelName.text = model
            self.lblRatingName.text = rating
            
          //let userName = snapshot.value as? String ?? "Unknown";
        });
    }
    
    @IBAction func viewHistoryAction(_ sender: Any) {
    }
  
    
    @IBAction func performMaintainanceAction(_ sender: Any) {
    }
    
    
}
