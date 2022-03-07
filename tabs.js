const tablist = document.querySelector("[role='tablist']")
const tabs = document.querySelectorAll("[role='tab']")


function changeTabPanel(e){
    let targetTab = e.target
    let tabPanel = targetTab.getAttribute('aria-controls')
    let tabimage = targetTab.getAttribute('data-image')
    tabContainer = targetTab.parentNode;
    mainContainer = tabContainer.parentNode;
    console.log(tabContainer);
    tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected',false);
    targetTab.setAttribute('aria-selected',true)


    mainContainer.querySelectorAll('picture').forEach((item)=>{
        item.setAttribute("hidden", true)
    })
    mainContainer.querySelector(`#${tabimage}`).removeAttribute('hidden')


    mainContainer.querySelectorAll('[role="tabpanel"]').forEach((item)=>{
        item.setAttribute("hidden", true)
    })
    mainContainer.querySelector(`#${tabPanel}`).removeAttribute('hidden')
}



let foucstab=0;
function changeFoucs(e){
    let keyCodeLeft =37;
    let keyCodeRight =39;
    if(e.keyCode === keyCodeLeft || e.keyCode ===keyCodeRight){
        tabs[foucstab].setAttribute("tabindex", -1);
    }
    if(e.keyCode ===keyCodeRight){
        foucstab++;
        if(foucstab >= tabs.length){
            foucstab=0;
        }
    }
    if(e.keyCode ===keyCodeLeft){
        foucstab--;
        if(foucstab < 0){
            foucstab=tabs.length-1;
        }
    }
    tabs[foucstab].setAttribute("tabindex", 0);
    tabs[foucstab].focus()
}

tablist.addEventListener('keydown',changeFoucs)
tabs.forEach((tab)=>{
    tab.addEventListener('click',changeTabPanel)
})