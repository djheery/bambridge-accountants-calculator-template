const Calculator_UI = (() => {
  const selectors = {
    tooltips: Array.from(document.querySelector('.bacc-tooltip-container'))
  }

  return {
    getSelectors: () => {
      return selectors
    },
    insertCommas: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }, 
    dropdownHeightAnimation: () => {
      
    },
    inputError: (x) => {
      x.parentElement.classList.add('input-error');
    },
    resetValues: () => {

    },
    // Tooltips
    displayToolTip: (e) => {
      if(!e.target.classList.contains('bacc-tooltip-icon')) return
      e.target.nextElementSibling.classList.add('bacc-tooltip-displayed')
      e.target.nextElementSibling.addEventListener('click', RothUI.closeToolTip)
    },
    closeToolTip: (e) => {
      if(!e.target.classList.contains('bacc-tooltip-close')) return;
      if(e.target.classList.contains('bacc-tooltip-close')) e.target.parentElement.classList.remove('bacc-tooltip-displayed')
    },
  }
})()