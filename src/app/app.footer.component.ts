import { Component } from "@angular/core";

@Component({
  selector: "tt-footer",
  template: `
    <div class="layout-footer">
      <span
        class="footer-text-left"
        style="background-color: #146fd7; border-radius: 2px"
      >
        <img
          src="assets/images/regulatorsto-logo-medical-testing-services-toronto-svg.png"
        />
      </span>
      <span class="footer-text-right">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
      </span>
    </div>
  `,
})
export class AppFooterComponent {}
