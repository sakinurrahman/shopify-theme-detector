
<script>
  let getTitleUrl = window.location.href.split("/").slice(-1)[0].split("-")[0];
  
  document.querySelectorAll(".c-variant-link").forEach(function(link){
    varVal = link.dataset.varvalue.replaceAll(" ", "-").toLowerCase();
    let variantUrl = `https://journeybags-ch.myshopify.com/products/${getTitleUrl}-${varVal}`;
    link.setAttribute("href", variantUrl);
  })
  
  let prodUrl = window.location.href.split("-").slice(-1)[0];
  let prodUrl2 = window.location.href.split("-").slice(-2)[0] + "-" + prodUrl;
  console.log(prodUrl + " !")
  console.log(prodUrl2 + " !!")
  document.querySelectorAll(".swatch .swatch__color").forEach(function(swatch){
    let swatchText = swatch.nextElementSibling.innerText.replaceAll(" ", "-").toLowerCase();
    swatch.parentElement.previousElementSibling.removeAttribute("checked");
    if(prodUrl == swatchText) {
      console.log(swatchText)
      setTimeout(function(){swatch.parentElement.previousElementSibling.click();}, 500)
    } else if (prodUrl2 == swatchText) {
      console.log(swatchText)
      setTimeout(function(){swatch.parentElement.previousElementSibling.click();}, 500)
    }
  })
</script>
