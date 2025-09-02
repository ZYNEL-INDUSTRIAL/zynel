(function(){
  'use strict';
  
  function initApp(){
    const views = document.querySelectorAll(".view");
    
    function showView(id){
      if(!id) return false;
      
      // Ocultar todas las vistas
      views.forEach(function(v){
        v.classList.remove("active");
      });
      
      // Mostrar la vista solicitada
      const target = document.getElementById(id);
      if(target){
        target.classList.add("active");
        // Scroll al inicio
        if(window.scrollTo){
          window.scrollTo({top:0, behavior:"instant"});
        }
        return true;
      }
      return false;
    }
    
    // Exponer función globalmente para depuración
    window.showView = showView;
    
    // Botones del menú principal
    const menuBtns = document.querySelectorAll(".menu-btn");
    for(let i = 0; i < menuBtns.length; i++){
      menuBtns[i].addEventListener("click", function(e){
        e.preventDefault();
        const viewId = this.getAttribute("data-view");
        showView(viewId);
      });
    }
    
    // Botones de volver
    const backBtns = document.querySelectorAll(".back-btn");
    for(let i = 0; i < backBtns.length; i++){
      backBtns[i].addEventListener("click", function(e){
        e.preventDefault();
        const viewId = this.getAttribute("data-view");
        showView(viewId);
      });
    }
    
    // Botones de marcas
    const brandBtns = document.querySelectorAll(".brand-btn");
    for(let i = 0; i < brandBtns.length; i++){
      brandBtns[i].addEventListener("click", function(e){
        e.preventDefault();
        const brandId = this.getAttribute("data-brand");
        showView(brandId);
      });
    }
    
    // Asegurar que Home esté activo al inicio
    showView("home");
  }
  
  // Inicializar cuando el DOM esté listo
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
