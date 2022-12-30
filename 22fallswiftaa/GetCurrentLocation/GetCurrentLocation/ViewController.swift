//
//  ViewController.swift
//  GetCurrentLocation
//
//  Created by Lin Liu on 9/24/22.
//




//1. Ads the privacy strings to info.plist
//2. Set location to whereever you want on the simulator
//3. Import corelocation
//4. Conform to CLLocationManagerDelegate
import UIKit
import CoreLocation

class ViewController: UIViewController, CLLocationManagerDelegate {
    let locationManager = CLLocationManager()

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        locationManager.delegate = self
        locationManager.requestWhenInUseAuthorization()
        locationManager.desiredAccuracy = kCLLocationAccuracyHundredMeters
        
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let location = locations.last else {return }
        let lat = location.coordinate.latitude
        let lng = location.coordinate.longitude

        print(lat)
        print(lng)
    }

    
//    func locationManager(_manager: CLLocationManager, didUpdateLocations locations:[CLLocation]){
//        guard let location = locations.last else{return
//
//            }
//        let lat = location.coordinate.latitude
//        let lng = location.coordinate.latitude
//
//        print(lat)
//        print(lng)
//
//    }

    @IBAction func getLocation(_ sender: Any) {
        locationManager.requestLocation()
    }
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print(error)
    }
    
    func getAddressFromLocation(location:CLLocation){
        
        let clGeoLocator = CLGeocoder()
        
        clGeoLocator.reverseGeocodeLocation(location){placeMarks, error in
            
            if error != nil{
                print(error?.localizedDescription)
                return
            }
            var address = ""
            guard let place = placeMarks?.first else{return}
            
            if place.name != nil{
                address = place.name! + ","
            }
            
            if place.locality != nil{
                address += place.locality! + ","
            }
            if place.subLocality != nil{
                address += place.subLocality! + ","
            }
            if place.postalCode != nil{
                address += place.postalCode!+","
            }
            if place.country != nil{
                address += place.country! 
            }
        }
    }
}

