/*	====================================================================
  DENSITY CALCULATOR
  ==================================================================== */
function density_calculator_function($atts) {
  $motorcycle_tag = shortcode_atts(array(
    'class' => '',
  ), $atts);

  return ' <
    form id = "density"
  action = "javascript:Calculate()"
  class = "text-center mx-5 mx-md-0" >
    <
    div class = "form-row" >
    <
    div class = "form-group col-md-3" >
    <
    label > Length < /label> <
    input id = "flength"
  type = "text"
  class = "form-control text-center"
  placeholder = "in." >
    <
    /div> <
    div class = "form-group col-md-3" >
    <
    label > Width < /label> <
    input id = "fwidth"
  type = "text"
  class = "form-control text-center"
  placeholder = "in." >
    <
    /div> <
    div class = "form-group col-md-3" >
    <
    label > Height < /label> <
    input id = "fheight"
  type = "text"
  class = "form-control text-center"
  placeholder = "in." >
    <
    /div> <
    div class = "form-group col-md-3" >
    <
    label > Weight < /label> <
    input id = "fweight"
  type = "text"
  class = "form-control text-center"
  placeholder = "lb."
  onblur = "" >
    <
    /div>                  <
    /div> <
    button type = "submit"
  class = "btn btn-primary shadow-xs text-uppercase" > Calculate < /button> <
    /form> <
    script >
    Calculate = function() {
      var length = document.getElementById(\'flength\').value;
          var width = document.getElementById(\'fwidth\').value;
              var height = document.getElementById(\'fheight\').value;
                  var weight = document.getElementById(\'fweight\').value;
                      var density = Math.round((parseInt(weight) / ((parseInt(length) * parseInt(width) * parseInt(height)) / 1728)) * 10) / 10;

                      if (density < 1) {
                        fclass = "400";
                      } else if (density >= 1 && density < 2) {
                        fclass = "300";
                      } else if (density >= 2 && density < 4) {
                        fclass = "250";
                      } else if (density >= 4 && density < 6) {
                        fclass = "175";
                      } else if (density >= 6 && density < 8) {
                        fclass = "125";
                      } else if (density >= 8 && density < 10) {
                        fclass = "100";
                      } else if (density >= 10 && density < 12) {
                        fclass = "92.5";
                      } else if (density >= 12 && density < 15) {
                        fclass = "85";
                      } else if (density >= 15 && density < 22.5) {
                        fclass = "70";
                      } else if (density >= 22.5 && density < 30) {
                        fclass = "65";
                      } else {
                        fclass = "60";
                      }
                      document.getElementById(\'fdensity\').innerHTML = density;
                        document.getElementById(\'fclass\').innerHTML = fclass;

                        } <
                        /script> <
                        div class = "text-center mt-4" >
                        <
                        h4 > Density: < /h4> <
                        h3 class = "text-secondary mb-3"
                        id = "fdensity" > ? < /h3> <
                        h4 > Recommended Freight Class : < /h4> <
                        h3 class = "text-secondary"
                        id = "fclass" > ? < /h3> <
                        /div>
                        ';
                      }
                      add_shortcode('density-calculator', 'density_calculator_function');
