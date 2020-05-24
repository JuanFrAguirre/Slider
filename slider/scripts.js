$(function () {
  "use strict";

  let btn1 = $(".botones button:nth-child(1)");
  let btn2 = $(".botones button:nth-child(2)");
  let btn3 = $(".botones button:nth-child(3)");
  let btn4 = $(".botones button:nth-child(4)");
  let btn5 = $(".botones button:nth-child(5)");

  let diap1 = $(".diap1");
  let diap2 = $(".diap2");
  let diap3 = $(".diap3");
  let diap4 = $(".diap4");
  let diap5 = $(".diap5");

  btn1.on("click", function () {
    $(".slider div").addClass("oculta");
    diap1.removeClass("oculta");
    $(this).parent().children().removeClass("seleccionado");
    $(this).addClass("seleccionado");
  });
  btn2.on("click", function () {
    $(".slider div").addClass("oculta");
    diap2.removeClass("oculta");
    $(this).parent().children().removeClass("seleccionado");
    $(this).addClass("seleccionado");
  });
  btn3.on("click", function () {
    $(".slider div").addClass("oculta");
    diap3.removeClass("oculta");
    $(this).parent().children().removeClass("seleccionado");
    $(this).addClass("seleccionado");
  });
  btn4.on("click", function () {
    $(".slider div").addClass("oculta");
    diap4.removeClass("oculta");
    $(this).parent().children().removeClass("seleccionado");
    $(this).addClass("seleccionado");
  });
  btn5.on("click", function () {
    $(".slider div").addClass("oculta");
    diap5.removeClass("oculta");
    $(this).parent().children().removeClass("seleccionado");
    $(this).addClass("seleccionado");
  });
});
