$(document).ready(function(){
    $("#tabBtn1").click(function(){
       $("button").css({"border":"none", "top":"0px"});

        $(this).css({"border":"1px solid #aaa",
                     "border-bottom":"none",
                     "top":"1px"

        });

        $("div#tabContents1").css({"display":"block"});
        $("div#tabContents2").css({"display":"none"});

    });

     $("#tabBtn2").click(function(){
       $("button").css({"border":"none", "top":"0px"});

        $(this).css({"border":"1px solid #aaa",
                     "border-bottom":"none",
                     "top":"1px"

        });

        $("div#tabContents2").css({"display":"block"});
        $("div#tabContents1").css({"display":"none"});

    });

}); /*  $(function(){} ); */






// 제이쿼리 사용법
//1. 요소를 선택하고 => $("선택자")
//2. 기능을 적용하세요 => .메서드( )
//3. 추가 기능이 필요하다면 메서드의 소괄호 내부에
//    function(){}을 기재한 후
//      => .메서드(function(){})
//4. 중괄호 내부에서 다시
//5. 요소를 선택하고
//  => function(){ $("선택자") }
//6. 기능을 적용하세요
//  => function()

// 중괄호, 소괄호의 짝맞춤에 주의한다.




