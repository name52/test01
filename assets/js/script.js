$(document).ready(function(){
  /**********
   * modal
   **********/ 
  /* 방법1 : 각각 다른 클래스일 경우(btn-pop1, btn-pop2) */
  /*
  $('.btn-pop1').on('click', function(){
    $('#modal1').addClass('open');
  });

  $('.btn-pop2').on('click', function(){
    $('#modal2').addClass('open');
  });

  $('.modal-close').on('click', function(){
    $(this).closest('.modal').removeClass('open');
  })
  */

  /* 방법2 : 같은 클래스를 공유하고 있는 경우(btn-more, btn-more) */
  var modal = "";
  $('.btn-more').on('click', function(){
    modal = $(this).data('modal'); // 클릭한 아이의 data-modal 값 저장
    $('#' + modal).addClass('open');
  });

  $('.modal-close').on('click', function(){
    // $('#' + modal).removeClass('open'); // case1: 변수(modal)를 활용하는 방법
    $(this).closest('.modal').removeClass('open'); // case2: 돔 구조 활용하는 방법
  })

  /**********
   * quick
   **********/ 
  $(".quick .btn-top").click(function(e){ 
    e.preventDefault(); // a태그의 기본 기능 막기
    var targetPos = $($(this).attr('href')).offset().top; // 요소의 위치 저장
    $('body, html').animate({'scrollTop':targetPos}); // 요소의 위치로 스크롤 이동
  });

});