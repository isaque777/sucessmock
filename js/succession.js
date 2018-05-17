// JavaScript Document

function tabsViewTemplateEditTemplateTabContentBaseSettings() {
  $(".edit-dropdown").each(function (index, value) {
    $(value).on('click', function () {
      $("#tabs-edit-template-content-base-settings-table").css('width', '0px');
      $("#tabs-edit-template-content-base-settings-table").css('height', '0px');
      $("#tabs-edit-template-content-base-settings-table").css('visibility', 'hidden');

      $("#tabs-edit-template-content-base-settings-tab-content").removeAttr('style');
      $("#tabs-edit-template-content-base-settings-tab-content").css('visibility', 'visible');


    });
  });

  $("#add-dropdown").click(function () {
    $("#tabs-edit-template-content-base-settings-table").removeAttr('style');
    $("#tabs-edit-template-content-base-settings-table").css('visibility', 'visible');

    $("#tabs-edit-template-content-base-settings-tab-content").css('width', '0px');
    $("#tabs-edit-template-content-base-settings-tab-content").css('height', '0px');
    $("#tabs-edit-template-content-base-settings-tab-content").css('visibility', 'hidden');
  });
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}


$(document).ready(function () {
  includeHTML();

  $("#tabs-index").tabs({
    beforeActivate: function (event, ui) {
      if (ui.newPanel.attr('id') == 'tab-background-element') {
        $("#tabs-background-element").tabs({
          beforeActivate: function (event, ui) {
            if (ui.newPanel.attr('id') == 'tab-data-field') {
              $("#tabs-data-field").tabs();
            } else if (ui.newPanel.attr('id') == 'tab-rating-field') {
              $("#tabs-rating-field").tabs();
            }
          }
        });
      } else if (ui.newPanel.attr('id') == 'tab-userinfo-element') {
        $("#tabs-userinfo-element").tabs({
          beforeActivate: function (event, ui) {
            if (ui.newPanel.attr('id') == 'tab-data-field') {
              $("#tabs-data-field").tabs();
            } else if (ui.newPanel.attr('id') == 'tab-rating-field') {
              $("#tabs-rating-field").tabs();
            }
          }
        });
      } else if (ui.newPanel.attr('id') == 'tab-tab') {
        $("#tabs-tab-element").tabs({
          beforeActivate: function (event, ui) {
            if (ui.newPanel.attr('id') == 'tab-data-field') {
              $("#tabs-data-field").tabs();
            } else if (ui.newPanel.attr('id') == 'tab-rating-field') {
              $("#tabs-rating-field").tabs();
            }
          }
        });
      } else if (ui.newPanel.attr('id') == 'tab-element-permission') {
        $("#tabs-element-permission").tabs({
          beforeActivate: function (event, ui) {
            if (ui.newPanel.attr('id') == 'tab-data-field') {
              $("#tabs-data-field").tabs();
            } else if (ui.newPanel.attr('id') == 'tab-rating-field') {
              $("#tabs-rating-field").tabs();
            }
          }
        });
        $("#tabs-hris-element-ref").tabs({
          beforeActivate: function (event, ui) {
            if (ui.newPanel.attr('id') == 'tabs-hris-element-ref-tab-mapping') {
              $("#tabs-element-permission-hris-element-ref-tab-hris-mapping").tabs();
            }
          }
        });
      } else if (ui.newPanel.attr('id') == 'tab-view-template') {
        $("#tabs-view-template").tabs({
          beforeActivate: function (event, ui) {
            if (ui.newPanel.attr('id') == 'tabs-view-template-tab-edit-template') {
              $("#tabs-edit-template-content-base-settings").tabs();
              tabsViewTemplateEditTemplateTabContentBaseSettings();
              $("#tabs-view-template-edit-template").tabs({
                beforeActivate: function (event, ui) {
                  if (ui.newPanel.attr('id') == 'tabs-view-template-edit-template-tab-content-base-settings') {
                    tabsViewTemplateEditTemplateTabContentBaseSettings();
                  }
                }
              });
            }
          }
        });
      }

      $(".dropdown-menu a").click(function () {
        $("#" + $("#" + this.id.replace('dropdown-', '')).parents().attr('id')).find("div").each(function (index, value) {
          if (value.id != null && value.id != "") {

            $("#add-dropdown").css('width', '0px');
            $("#add-dropdown").css('height', '0px');
            $("#add-dropdown").css('visibility', 'hidden');

            $("#" + value.id).css('width', '0px');
            $("#" + value.id).css('height', '0px');
            $("#" + value.id).css('visibility', 'hidden');
          }
        });
        $("#add-dropdown").removeAttr('style');
        $("#add-dropdown").css('visibility', 'visible');
        $("#" + this.id.replace('dropdown-', '')).removeAttr('style');
        $("#" + this.id.replace('dropdown-', '')).css('visibility', 'visible');
      });

    }
  });
});