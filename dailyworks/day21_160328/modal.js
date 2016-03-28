window.addEventListener('DOMContentLoaded', function() {

  var openTrigger = document.getElementById('openModal');
  var baseLayer = document.getElementById('modalBaseLayer');
  var closeTrigger = document.getElementById('closeModal');

  // モーダルを開く
  function showModal() {
    baseLayer.style.visibility = 'visible';
  }

  // モーダルを閉じる
  function hideModal() {
    baseLayer.style.visibility = 'hidden';
  }

  // openをクリックした時の処理
  function bindOpenModal() {
    openTrigger.addEventListener('click', function(event) {
      event.preventDefault();
      showModal();
    }, false);
  }

  // 閉じるをクリックした時の処理
  function bindCloseModal() {
    closeTrigger.addEventListener('click', function(event) {
      event.preventDefault();
      hideModal();
    }, false);
  }


  bindOpenModal();
  bindCloseModal();

}, false);
