// JavaScript Document

var succession = (function () {
  'use strict';

  var tabsViewTemplateEditTemplateTabContentBaseSettings = function () {
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


  var tabHrisElementRef = function () {
    $(".tabs-hris-element-ref").tabs({
      beforeActivate: function (event, ui) {
        if (ui.newPanel.attr('id') == 'tabs-hris-element-ref-tab-mapping') {
          $(".tabs-element-permission-hris-element-ref-tab-hris-mapping").tabs();
        }
      }
    });
  }

  var includeHTML = function () {
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

  var label = function () {
    var availablePickList = [
      "Label Asp",
      "Label BASIC",
      "Label C",
      "Label C++",
      "Label Clojure",
      "Label COBOL",
      "Label ColdFusion",
      "Label Erlang",
      "Label Fortran",
      "Label Groovy",
      "Label Haskell",
      "Label Java",
      "Label JavaScript",
      "Label Lisp",
      "Label Perl",
      "Label PHP",
      "Label Python",
      "Label Ruby",
      "Label Scala",
      "Label Scheme"
    ];
    $(".labels-autocomplete").autocomplete({
      source: availablePickList
    });
  }

  var pickList = function () {
    var availablePickList = [
      "Picklist ActionScript",
      "Picklist AppleScript",
      "Picklist Asp",
      "Picklist BASIC",
      "Picklist C",
      "Picklist C++",
      "Picklist Clojure",
      "Picklist COBOL",
      "Picklist ColdFusion",
      "Picklist Erlang",
      "Picklist Fortran",
      "Picklist Groovy",
      "Picklist Haskell",
      "Picklist Java",
      "Picklist JavaScript",
      "Picklist Lisp",
      "Picklist Perl",
      "Picklist PHP",
      "Picklist Python",
      "Picklist Ruby",
      "Picklist Scala",
      "Picklist Scheme"
    ];
    $(".picklists-autocomplete").autocomplete({
      source: availablePickList
    });
  }

  var numberFormatRef = function () {
    var availablePickList = [
      "NumberFormatRef Asp",
      "NumberFormatRef BASIC",
      "NumberFormatRef C",
      "NumberFormatRef C++",
      "NumberFormatRef Clojure",
      "NumberFormatRef COBOL",
      "NumberFormatRef ColdFusion",
      "NumberFormatRef Erlang",
      "NumberFormatRef Fortran",
      "NumberFormatRef Groovy",
      "NumberFormatRef Haskell",
      "NumberFormatRef Java",
      "NumberFormatRef JavaScript",
      "NumberFormatRef Lisp",
      "NumberFormatRef Perl",
      "NumberFormatRef PHP",
      "NumberFormatRef Python",
      "NumberFormatRef Ruby",
      "NumberFormatRef Scala",
      "NumberFormatRef Scheme"
    ];
    $(".numberFormatRefs-autocomplete").autocomplete({
      source: availablePickList
    });
  }

  var fieldDisplayFormatRef = function () {
    var availablePickList = [
      "FieldDisplayFormatRef Asp",
      "FieldDisplayFormatRef BASIC",
      "FieldDisplayFormatRef C",
      "FieldDisplayFormatRef C++",
      "FieldDisplayFormatRef Clojure",
      "FieldDisplayFormatRef COBOL",
      "FieldDisplayFormatRef ColdFusion",
      "FieldDisplayFormatRef Erlang",
      "FieldDisplayFormatRef Fortran",
      "FieldDisplayFormatRef Groovy",
      "FieldDisplayFormatRef Haskell",
      "FieldDisplayFormatRef Java",
      "FieldDisplayFormatRef JavaScript",
      "FieldDisplayFormatRef Lisp",
      "FieldDisplayFormatRef Perl",
      "FieldDisplayFormatRef PHP",
      "FieldDisplayFormatRef Python",
      "FieldDisplayFormatRef Ruby",
      "FieldDisplayFormatRef Scala",
      "FieldDisplayFormatRef Scheme"
    ];
    $(".fieldDisplayFormatRefs-autocomplete").autocomplete({
      source: availablePickList
    });
  }

  var roleAutocomplete = function () {
    var availablePickList = [
      "Role Asp",
      "Role BASIC",
      "Role C",
      "Role C++",
      "Role Clojure",
      "Role COBOL",
      "Role ColdFusion",
      "Role Erlang",
      "Role Fortran",
      "Role Groovy",
      "Role Haskell",
      "Role Java",
      "Role JavaScript",
      "Role Lisp",
      "Role Perl",
      "Role PHP",
      "Role Python",
      "Role Ruby",
      "Role Scala",
      "Role Scheme"
    ];
    $(".roles-autocomplete").autocomplete({
      source: availablePickList
    });
  }

  var description = function () {
    var availableDescription = [
      "Description ActionScript",
      "Description AppleScript",
      "Description Asp",
      "Description BASIC",
      "Description C",
      "Description C++",
      "Description Clojure",
      "Description COBOL",
      "Description ColdFusion",
      "Description Erlang",
      "Description Fortran",
      "Description Groovy",
      "Description Haskell",
      "Description Java",
      "Description JavaScript",
      "Description Lisp",
      "Description Perl",
      "Description PHP",
      "Description Python",
      "Description Ruby",
      "Description Scala",
      "Description Scheme"
    ];
    $(".descriptions-autocomplete").autocomplete({
      source: availableDescription
    });
  }


  var initTabs = function () {
    includeHTML();

    $("#tabs-index").on("tabsload", function (event, ui) {
      tabStandardElement();
    });

    $("#tabs-index").tabs({

      beforeActivate: function (event, ui) {

        if (ui.newPanel.attr('id') == 'tab-standard-element') {
          $("#tabs-tab-standard-element").tabs({

          });
        } else if (ui.newPanel.attr('id') == 'tab-custom-filters') {
          $("#tabs-custom-filters").tabs({
            beforeActivate: function (event, ui) {
              if (ui.newPanel.attr('id') == 'tab-data-field') {
                $("#tabs-data-field").tabs();
              } else if (ui.newPanel.attr('id') == 'tab-rating-field') {
                $("#tabs-rating-field").tabs();
              }
            }
          });
        } else if (ui.newPanel.attr('id') == 'tab-background-element') {
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
          tabHrisElementRef();
        } else if (ui.newPanel.attr('id') == 'tab-view-template') {
          $("#tabs-view-template").tabs({
            beforeActivate: function (event, ui) {
              if (ui.newPanel.attr('id') == 'tabs-view-template-tab-edit-template') {
                $("#tabs-edit-template-content-base-settings").tabs();
                $("#tabs-view-template-edit-template").tabs({
                  beforeActivate: function (event, ui) {
                    if (ui.newPanel.attr('id') == 'tabs-view-template-edit-template-tab-content-base-settings') {
                      tabsViewTemplateEditTemplateTabContentBaseSettings();
                    }
                  }
                });
              } else if (ui.newPanel.attr('id') == 'tabs-view-template-tab-hris-element') {
                tabHrisElementRef();
              }
              tabsViewTemplateEditTemplateTabContentBaseSettings();
            }
          });
        }

        pickList();

        description();

        label();

        roleAutocomplete();

        fieldDisplayFormatRef();

        numberFormatRef();


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




  };


  return {
    /**
     * Initialize the object in the namespace.
     * 
     * @function init
     * 
     * @returns {undefined}
     */
    init: function () {
      initTabs();

    }
  };

})();