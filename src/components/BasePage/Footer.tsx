import * as React from "react";

export const Footer = () => {
  return (
    <footer className="hidden-xs hidden-sm">
      <div className="container-fluid" id="footer">
        <div className="footer-width">
          <div className="floatblcok floatblcok1">
            <h4 data-bind="text: footerDisplayName1">Let Us Help You</h4>
            <ul data-bind="foreach: footerSection1()">
              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url }, click: function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName1(),$data); return true;}"
                  href="https://www.Omni.com/track-your-order"
                >
                  <span data-bind="text: $data.title">Order Tracking</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url }, click: function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName1(),$data); return true;}"
                  href="https://www.Omni.com/bulk-orders"
                >
                  <span data-bind="text: $data.title">Bulk Orders</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url }, click: function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName1(),$data); return true;}"
                  href="https://www.Omni.com/store-locator"
                >
                  <span data-bind="text: $data.title">Store Locator</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url }, click: function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName1(),$data); return true;}"
                  href="https://www.Omni.com/franchise"
                >
                  <span data-bind="text: $data.title">Franchise Form</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url }, click: function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName1(),$data); return true;}"
                  href="https://www.Omni.com/furniturewarranty"
                >
                  <span data-bind="text: $data.title">
                    Furniture Warranty Policy
                  </span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-width">
          <div className="floatblcok">
            <h4 data-bind="text: footerDisplayName2">Support</h4>
            <ul data-bind="foreach: footerSection2()">
              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName2(),$data); return true;}"
                  href="https://www.Omni.com/customer-service"
                >
                  <span data-bind="text: $data.title">Customer Service</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName2(),$data); return true;}"
                  href="https://www.Omni.com/how-to-order"
                >
                  <span data-bind="text: $data.title">How To Order</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName2(),$data); return true;}"
                  href="https://www.Omni.com/billing-and-payments"
                >
                  <span data-bind="text: $data.title">
                    Billing and Payments
                  </span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName2(),$data); return true;}"
                  href="https://www.Omni.com/shipping-and-delivery"
                >
                  <span data-bind="text: $data.title">
                    Shipping and Delivery
                  </span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName2(),$data); return true;}"
                  href="https://www.Omni.com/return-and-exchanges"
                >
                  <span data-bind="text: $data.title">
                    Returns and Exchanges
                  </span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName2(),$data); return true;}"
                  href="https://www.Omni.com/faqs"
                >
                  <span data-bind="text: $data.title">FAQs</span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-width">
          <div className="floatblcok">
            <h4 data-bind="text: footerDisplayName3">Company</h4>
            <ul data-bind="foreach: footerSection3()">
              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName3(),$data); return true;}"
                  href="https://www.Omni.com/about-us"
                >
                  <span data-bind="text: $data.title">About Us</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName3(),$data); return true;}"
                  href="https://www.Omni.com/catalogue"
                >
                  <span data-bind="text: $data.title">Style Guides</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName3(),$data); return true;}"
                  href="https://www.Omni.com/contact-us"
                >
                  <span data-bind="text: $data.title">Contact Us</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName3(),$data); return true;}"
                  href="https://www.Omni.com/careers"
                >
                  <span data-bind="text: $data.title">Careers</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName3(),$data); return true;}"
                  href="https://www.Omni.com/privacy-policy"
                >
                  <span data-bind="text: $data.title">Privacy Policy</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName3(),$data); return true;}"
                  href="https://www.Omni.com/terms-of-use"
                >
                  <span data-bind="text: $data.title">Terms of Use</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName3(),$data); return true;}"
                  href="https://www.Omni.com/business-enquiries"
                >
                  <span data-bind="text: $data.title">Business Enquiries</span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-width">
          <div className="floatblcok">
            <h4 data-bind="text: footerDisplayName4">About Omni</h4>
            <ul data-bind="foreach: footerSection4()">
              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName4(),$data); return true;}"
                  href="https://www.Omni.com/50-years-of-Omni"
                >
                  <span data-bind="text: $data.title">
                    50 years of Omni
                  </span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName4(),$data); return true;}"
                  href="https://www.Omni.com/philosophy"
                >
                  <span data-bind="text: $data.title">Philosophy</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName4(),$data); return true;}"
                  href="https://www.Omni.com/about-Omni-products"
                >
                  <span data-bind="text: $data.title">
                    About Omni Products
                  </span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName4(),$data); return true;}"
                  href="https://www.Omni.com/organic-certification"
                >
                  <span data-bind="text: $data.title">
                    Organic Certification
                  </span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName4(),$data); return true;}"
                  href="https://www.Omni.com/fabric-care"
                >
                  <span data-bind="text: $data.title">Fabric Care</span>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName4(),$data); return true;}"
                  href="https://www.Omni.com/fabcafe"
                >
                  <span data-bind="text: $data.title">FabCafe</span>
                </a>{" "}
              </li>
              <li>
                <a
                  data-bind="attr:{href: $data.url}"
                  href="http://fabfamily.Omni.com/FabFamily/"
                ></a>
              </li>

              <li>
                {" "}
                <a
                  data-bind="attr : { href : $parent.windowLocationOrigin() + '/' +$data.url },click : function(){$widgetViewModel.catMenuClickEventForGTM($parent.footerDisplayName4(),$data); return true;}"
                  href="https://www.Omni.com/ids"
                >
                  <span data-bind="text: $data.title">
                    Interior Design Solutions
                  </span>
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-width">
          <div className="floatblcok">
            <h4 data-bind="text: footerDisplayName5">Stay in Touch</h4>
            <ul>
              <li className="last-one">
                <div className="social_top">
                  <a
                    className="social_nicon fa"
                    data-bind="attr: {href: footerFacebook, rel:'nofollow'}, click : function(){$widgetViewModel.catMenuClickEventForGTM(footerDisplayName5(),'Facebook');return true;}"
                    href="https://www.facebook.com/Omni"
                    rel="nofollow"
                  >
                    
                  </a>{" "}
                  <a
                    className="social_nicon fa"
                    data-bind="attr: {href: footerTwitter, rel:'nofollow'}, click : function(){$widgetViewModel.catMenuClickEventForGTM(footerDisplayName5(),'Twitter');return true;}"
                    href="https://twitter.com/Omninews?lang=en"
                    rel="nofollow"
                  >
                    
                  </a>{" "}
                  <a
                    className="social_nicon fa fa-instagram"
                    aria-hidden="true"
                    data-bind="attr: {href: footerInstagram, rel:'nofollow'}, click : function(){$widgetViewModel.catMenuClickEventForGTM(footerDisplayName5(),'Instagram');return true;}"
                    href="https://www.instagram.com/Omniofficial/"
                    rel="nofollow"
                  ></a>
                </div>
                <div className="social_bottom">
                  <a
                    className="social_nicon fa"
                    data-bind="attr: {href: footerLinkedin, rel:'nofollow'}, click : function(){$widgetViewModel.catMenuClickEventForGTM(footerDisplayName5(),'Linkedin');return true;}"
                    href="https://www.linkedin.com/company/Omni-overseas-pvt-ltd"
                    rel="nofollow"
                  >
                    
                  </a>{" "}
                  <a
                    className="social_nicon fa"
                    data-bind="attr: {href: footerGplus, rel:'nofollow'}, click : function(){$widgetViewModel.catMenuClickEventForGTM(footerDisplayName5(),'Gplus');return true;}"
                    href="https://plus.google.com/u/0/100784677204579355445"
                    rel="nofollow"
                  >
                    
                  </a>{" "}
                  <a
                    className="social_nicon fa"
                    data-bind="attr: {href: footerPinterest, rel:'nofollow'}, click : function(){$widgetViewModel.catMenuClickEventForGTM(footerDisplayName5(),'Pinterest');return true;}"
                    href="https://in.pinterest.com/Omnipin"
                    rel="nofollow"
                  >
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </div>
              </li>
            </ul>
            <div className="app-links">
              <a
                className="link"
                target="_blank"
                href="https://apps.apple.com/in/app/Omni-online-shopping/id1479713062?utm_source=organic_medium=web&amp;utm_campaign=footer"
              >
                <img
                  className="app-links-img"
                  src="https://fabindia-occ-prod.s3.amazonaws.com/import/Newsletter/2019/December/06/app-store.png"
                />
              </a>
              <a
                className="link"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.Omni.shopping&amp;utm_source= organic_medium=web&amp;utm_campaign=footer"
              >
                <img
                  className="app-links-img"
                  src="https://fabindia-occ-prod.s3.amazonaws.com/import/Newsletter/2019/December/06/google-play.png"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="clear"></div>

        <div className="f_bootom_section">
          <div className="col-sm-8">
            <p className="copyright">
              © Copyright 2018 Omni.com. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
