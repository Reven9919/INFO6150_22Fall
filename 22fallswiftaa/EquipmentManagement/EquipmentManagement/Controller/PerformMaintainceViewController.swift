//
//  PerformMaintainceViewController.swift
//  EquipmentManagement
//
//  Created by Lin Liu on 10/29/22.
//

import UIKit
import FirebaseDatabase


class PerformMaintainceViewController: UIViewController {

    @IBOutlet weak var dataPicker: UIDatePicker!
    
    @IBOutlet weak var txtnatureOfProblem: UITextField!
    
    @IBOutlet weak var txtreatificationWork: UITextField!
    
    @IBOutlet weak var txtRemarks: UITextField!
    
    @IBOutlet weak var txtActivity: UITextField!
    
    var
    
    override func viewDidLoad() {
        super.viewDidLoad()
        ref = Database.database()
        
    }
    

    @IBAction func submitAction(_ sender: Any) {
        let date = datePicker.date
        let natureOfProblem = txtnatureOfProblem.text
        let rectificationWork = txtreatificationWork.text
        let remarks = txtRemarks.text
        let activity = txtActivity.text
        
        guard let key = ref.child("Equipment/\(serialNumber)/MaintainanceHistory").childByAutoId().key else { return }
        let maintainance = ["date": date,
                    "NatureOfProblem": natureOfProblem,
                    "RectificationWork": rectificationWork,
                    "Remarks": remarks,
                            "Activity":activity] as[String : Any]
        
        let childUpdates = ["Equipment/\(serialNumber)/MaintainanceHistory)/\": maintainance]
        ref.updateChildValues(childUpdates)
        
        
    }
    

}
