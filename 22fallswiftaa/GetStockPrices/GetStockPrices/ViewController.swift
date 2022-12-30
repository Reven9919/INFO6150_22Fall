//
//  ViewController.swift
//  GetStockPrices
//
//  Created by Lin Liu on 12/10/22.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate,UITableViewDataSource {

    @IBOutlet weak var tblView: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section:Int ) -> Int {
        return 10;
    }

    func tableView(_ tableView: UITableView, cellForRowAT IndexPath) -> UITableViewCell{
        let call = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = "Tesla(TSLA)"
        return cell
    }
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print(indexPath.row)
        performSegue(withIdentifier: "segueDetails", sender: self)
    }

}

