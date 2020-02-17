//
//  SafariExtensionViewController.swift
//  TrilliumPlusPlus Extension
//
//  Created by Steven Xu on 2020-02-17.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
