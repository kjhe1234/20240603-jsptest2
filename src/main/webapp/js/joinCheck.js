/**
 * 
 */

 function joinCheck(){
	
	var form = document.joinForm;
	/* 아이디가 공란으로 입력되었는지 유효성 검사 */
	if(form.memberId.value.length == 0) {
		alert("아이디는 필수 입력사항입니다. \n다시 확인해 주세요.");
		form.memberId.focus();
		return false;
	}
	
	/* 아이디는 4자 이상 10자 이하만 가능하도록 유효성 검사*/
	if(form.memberId.value.length < 4 || document.joinForm.memberId.value.length > 15) {
		alert("아이디는 4자 이상 15자 이하로만 만드실수 있습니다. \n다시 확인해 주세요.");
		form.memberId.focus();
		return false;
	}
	
	
	if(form.memberPw.value.length == 0) {
		alert("비밀번호는 필수 입력사항입니다. \n다시 확인해 주세요.");
		form.memberPw.focus();
		return false;
	}
	/* 비밀번호는 5자 이상만 가능하도록 유효성 검사*/
	if(form.memberPw.value.length < 5 ) {
		alert("비밀번호는 5자 이상만 입력 가능합니다. \n다시 확인해 주세요.");
		form.memberPw.focus();
		return false;
	}

	if(form.memberName.value.length == 0) {
		alert("이름은 필수 입력사항입니다. \n다시 확인해 주세요.");
		form.memberName.focus();
		return false;
	}
	
	/* 이름은 한글만 입력 가능하도록 유효성 검사*/
	var hangul = /^[ㄱㅏ-힣]*$/;
	/* var english = /^[a-z|A-Z]*$/; */
	
	if(!hangul.test(form.memberName.value)) {
		alert("이름은 한글만 가능 합니다. \n다시 확인해 주세요.");
		form.memberName.focus();
		return false;				
	}
	
	if(form.phoneNumber.value.length == 0) {
		alert("전화번호는 필수 입력사항입니다. \n다시 확인해 주세요.");
		form.phoneNumber.focus();
		return false;
	}
	
	/* 전화번호는 숫자만만 입력 가능하도록 유효성 검사*/
	var number = /^[0-9]*$/;
	if(!number.test(form.phoneNumber.value)) {
		alert("전화번호는 숫자만 가능 합니다. \n다시 확인해 주세요.");
		form.phoneNumber.focus();
		return false;				
	}
	
	
	return true;
 }