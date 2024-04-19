<!-- 버튼 값 불러오기 -->
function showValue(value) {
    var resultElement = document.getElementById("mainResult");  //계산화면의 값을 result에 저장
    var text = resultElement.textContent;                       // result 의 내용을 text 변수에 저장



    <!-- 숫자 버튼 눌렀을 때 결과값에 누르는것만큼 나열하기 -->
    if (text === "0") {
        resultElement.textContent = value;         // 계산 화면의 값이 0이면 누르는 숫자 버튼의 숫자 값을 가져오기
    } else {
        resultElement.textContent += value;        // 입력된 숫자 버튼이 있다면 그 값 뒤에 누른 숫자 버튼 나열 (십의 자리 이상)
    }
}

<!-- 클리어 버튼 -->
function resetValue() {
    var resultElement = document.getElementById("mainResult");  // 클리어 버튼 클릭시
                                                                // 계산화면 값을 불러와 result 에 저장 후 내용 0으로 초기화
    resultElement.textContent = "0";
}

