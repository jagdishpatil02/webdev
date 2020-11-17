import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as $ from "jquery";
import { NgLocalization } from "@angular/common";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, AfterViewInit {
  videoEl: any;
  showMenuFlag = false;
  firstBlock = true;
  constructor() {}

  ngOnInit() {
    $(".second-block").hide();
  }

  showAndHide() {
    $("#nav-icon1").toggleClass("open");
    if ($("#nav-icon1").hasClass("open")) {
      $(".second-block")
        .css({ opacity: "0", display: "block" })
        .show()
        .animate({ opacity: 1 });
      this.firstBlock = false;
    } else {
      this.firstBlock = true;
      $(".second-block")
        .css({ opacity: "1", display: "block" })
        .hide()
        .animate({ opacity: 0 });
      this.showMenuFlag = false;
      this.muteAudio();
    }
  }

  gotoHome() {
    $("#nav-icon1").removeClass("open");
    this.firstBlock = true;
    $(".second-block")
      .css({ opacity: "1", display: "block" })
      .hide()
      .animate({ opacity: 0 });
    this.showMenuFlag = false;
    this.muteAudio();
  }

  menuNavigation(event) {
    this.showAndHide();
    const target = event.target || event.srcElement;
    switch (event.target.innerHTML) {
      case "About Us": {
        break;
      }
      case "Contact Us": {
        setTimeout(() => {
          const el: HTMLElement = document.getElementById(
            "contactus-container"
          );
          el.scrollIntoView();
        });
        break;
      }
      case "Artists": {
        setTimeout(() => {
          const el: HTMLElement = document.getElementById("aboutus-container");
          el.scrollIntoView();
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  ngAfterViewInit() {
    this.muteAudio();
  }

  muteAudio() {
    setTimeout(() => {
      this.videoEl = document.querySelector("video");
      if (this.videoEl) {
        this.videoEl.muted = false;
      }
    });
  }
}
