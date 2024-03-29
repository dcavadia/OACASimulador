const porcen_perdida_phytophthora = 0.8;
const porcen_perdida_ralstonia = 0.8;
const porcen_perdida_xanthomonas = 0.7;
const porcen_perdida_alternaria = 0.3;
const densidad1= 2;
const densidad2= 2.5;


function CantidadPlantas(densidad, metros_cuadrados, porcen_germinacion) {
    return (densidad * metros_cuadrados * porcen_germinacion);
}

function CantidadProductos(cant_plantas, rendimiento) {
    return (cant_plantas * rendimiento);
}

function CantidadPerdidas(porcen_perdida, cant_producto) {
    return ((porcen_perdida * cant_producto).toFixed(1) )
}

function CantidadProductosPatogeno(cant_producto, cant_perdida) {
    return ((cant_producto - cant_perdida).toFixed(1))
}


function myFunction() {
  var x = document.getElementById("CuadRes");
  x.hidden = false;
  var a = document.getElementById("Area").value;
  var por = document.getElementById("Porcentaje").value;
  var pat = document.getElementById("Patógeno").value;
  
  var res1_a= CantidadPlantas(densidad1, a, por);
  var res2_a= CantidadProductos(res1_a, 3); // 1-3
  var porcen_perdida= 0.8;

  if(pat=="Xanthomonas Vesicatoria"){porcen_perdida= 0.7;}
  if(pat=="Alternaria solani"){porcen_perdida= 0.3;}
  var res3_a= CantidadPerdidas(porcen_perdida, res2_a);
  var res4_a= CantidadProductosPatogeno(res2_a, res3_a);
  

  var old= document.getElementById("myRes1").innerHTML;
  document.getElementById("myRes1").innerHTML= res1_a ;
  var old= document.getElementById("myRes2").innerHTML;
  document.getElementById("myRes2").innerHTML=  res2_a + " Kg";
  var old= document.getElementById("myRes3").innerHTML;
  document.getElementById("myRes3").innerHTML= res3_a + " Kg";
  var old= document.getElementById("myRes4").innerHTML;
  document.getElementById("myRes4").innerHTML=  res4_a + " Kg";

  //document.getElementById("p1").innerHTML = "New text!";
}
