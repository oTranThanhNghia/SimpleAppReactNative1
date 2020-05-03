//
//  AppDelegate.swift
//  SimpleAppReactNative1
//
//  Created by Nghia Tran on 5/2/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import UIKit
import Firebase
import FlipperKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {
  
  var window: UIWindow?
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    FirebaseApp.configure()
    
    #if DEBUG
    self.initializeFlipper(application: application)
    #endif
    
    let bridge = RCTBridge.init(delegate: self, launchOptions: launchOptions)
    let rootView = RCTRootView.init(bridge: bridge!, moduleName: "SimpleAppReactNative1", initialProperties: nil)
    
    rootView.backgroundColor = UIColor.init(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)
    
    self.window = UIWindow(frame: UIScreen.main.bounds)
    let rootViewController = UIViewController()
    rootViewController.view = rootView
    self.window?.rootViewController = rootViewController
    self.window?.makeKeyAndVisible()
    RNSplashScreen.show()
    return true
  }
  
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    #if DEBUG
      return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
    #else
      return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    #endif
  }
  
  #if DEBUG
  func initializeFlipper(application: UIApplication){
    let client = FlipperClient.shared()
    let layoutDescriptorMapper = SKDescriptorMapper()
    client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper))
    client?.add(FKUserDefaultsPlugin(suiteName: nil))
    client?.add(FlipperKitReactPlugin())
    client?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))
    client?.start()
  }
  #endif
}

