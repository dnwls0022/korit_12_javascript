let savedId = "";
let savedPw = "";
// 1. 아이디와 비밀번호를 저장할 객체생성 처음엔비워두기

function signUp() {
    const id = document.getElementById('signid').value;
    const pw = document.getElementById('signpw').value;
//2.  signUp()회원가입 이라는 함수생성 id,pw 를 get가져온다(getElementById) document는 전체화면 signupId').value;의값을

    // [체크리스트 1] 3.아이디 길이 검사
    if (id.length < 8) {
        alert("아이디는 8글자 이상이어야 합니다! (현재 " + id.length + "자)");
        return;
    }

    // [체크리스트 2] 4.비밀번호 길이 검사
    if (pw.length < 8) {
        alert("비밀번호는 8글자 이상이어야 합니다!");
        return;
    }

    savedId = id;
    savedPw = pw;
    alert("회원가입이 완료되었습니다!");
}
// 3. 아이디,비번 유효성검사통과하면 저장하기  그리고알림창 

function logIn() {
    const name = document.getElementById('loginName').value;
    const koreanPattern = /^[가-힣]+$/; // 한글 필터
//로그인 이름입력 이름-한글입력
    // [체크리스트 3] 이름 길이 검사
    if (name.length > 4) {
        alert("이름은 4자 이내로 적어주세요!");
        return;
    }

    // [체크리스트 4] 한글 여부 검사
    if (!koreanPattern.test(name)) {
        alert("이름은 한글로만 입력 가능합니다!");
        return;
    }

    // [체크리스트 5] 가입 여부 확인 (아이디가 비어있으면 가입 안 한 것)
    if (savedId === "") {
        alert("먼저 회원가입을 해주세요!");
        return;
    }

    alert(name + "님, 환영합니다! 로그인이 성공했습니다.");
}