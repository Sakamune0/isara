$(function(){	
// flowアコーディオンメニュー
  // タブレットサイズ以下でのみ反映させる 
  $(document).ready(function(){
    if($(window).width() < 768){
      
      $('.flow__ac').click(function () {
        // activeクラスを付与して三角アイコンを変化
        $(this).toggleClass('active');
      
        // クリックした次の要素のインナーをスライドで表示
        $(this).next('.flow__ac__inner').slideToggle();
      
        // クリックされてないflow__acの直下にあるインナーはスライドアップで非表示
        $('.flow__ac').not($(this)).next('.flow__ac__inner').slideUp();
        
        // クリックされてないflow__acからactiveクラスを外し三角アイコンを元に戻す
        $('.flow__ac').not($(this)).removeClass('active');
      
      });
    };
  });
})